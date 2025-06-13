'use client';

import { useRef, useState } from 'react';
import { Switch, Field, Label } from '@headlessui/react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      company: companyRef.current?.value || '',
      email: emailRef.current?.value || '',
      phone: phoneRef.current?.value || '',
      message: messageRef.current?.value || '',
    };

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSent(true);
        firstNameRef.current!.value = '';
        lastNameRef.current!.value = '';
        companyRef.current!.value = '';
        emailRef.current!.value = '';
        phoneRef.current!.value = '';
        messageRef.current!.value = '';
        setAgreed(false);
      }
    } catch (err) {
      console.error('Error al enviar:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Fondo patrón */}
<div className="absolute inset-0 bg-[url('/images/fondoPatron.webp')] bg-no-repeat bg-cover bg-center opacity-95 z-0" />

      <div className="relative z-10 mt-16 px-6 py-24 sm:py-32 lg:px-8">
        {/* Título */}
        <motion.div
          className="bg-[var(--primary)] text-white py-6 px-4 rounded-xl shadow-md mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold sm:text-5xl">Contactanos</h2>
            <p className="mt-2 text-lg text-opacity-90">
              Contanos lo que necesitás y organizamos juntos un evento inolvidable.
            </p>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white bg-opacity-90 p-8 rounded-xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">Nombre</label>
              <input ref={firstNameRef} id="first-name" required type="text" className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Apellido</label>
              <input ref={lastNameRef} id="last-name" required type="text" className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold text-gray-900">Empresa</label>
              <input ref={companyRef} id="company" type="text" className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
              <input ref={emailRef} id="email" required type="email" className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">Teléfono</label>
              <input ref={phoneRef} id="phone" type="text" className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900">¿Cómo podemos ayudarte?</label>
              <textarea ref={messageRef} id="message" rows={4} required className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm" />
            </div>

            <Field className="flex gap-x-4 sm:col-span-2 mt-4">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px transition-colors data-checked:bg-[var(--primary)]"
                >
                  <span className="sr-only">Aceptar las políticas</span>
                  <span className="size-4 transform rounded-full bg-white transition group-data-checked:translate-x-3.5" />
                </Switch>
              </div>
              <Label className="text-sm text-gray-600">
                Acepto las{' '}
                <a href="" className="font-semibold text-[var(--primary)] underline">políticas de privacidad</a>.
              </Label>
            </Field>

            <div className="sm:col-span-2 mt-6 text-center">
              {sent && <p className="text-green-700 font-semibold mb-4">¡Mensaje enviado correctamente!</p>}
              <motion.button
                type="submit"
                disabled={!agreed || loading}
                whileHover={{ scale: 1.05 }}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--primary-dark)] disabled:opacity-50"
              >
                {loading && (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                )}
                {loading ? 'Enviando...' : 'Enviar'}
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
