'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Field, Label, Switch } from '@headlessui/react';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="contact-form-container mt-16 px-6 py-24 sm:py-32 lg:px-8">

      {/* Contenedor para la parte de Contactanos */}
      <div className="bg-[var(--primary)] text-white py-6 px-3 rounded-xl shadow-md mb-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Contactanos</h2>
          <p className="mt-2 text-lg text-opacity-80">
            Dejanos la informacion que creas necesaria para poder organizar el evento a tu medida!
          </p>
        </div>
      </div>

      {/* Formulario de contacto */}
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 bg-white bg-opacity-90 p-8 rounded-xl shadow-md">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              Nombre
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-base text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              Apellido
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-base text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
              Nombre de la Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-base text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-base text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
              Teléfono
            </label>
            <div className="mt-2.5 flex rounded-md border border-gray-300 shadow-sm">
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-l-md border-0 bg-transparent py-2 pl-3 pr-8 text-base text-gray-500 focus:outline-none focus:ring-0"
                >
                  <option>UY</option>
                </select>
                <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="block w-full flex-1 rounded-r-md border-0 py-2 pl-2 text-base text-gray-900 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 text-base text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              defaultValue={''}
            />
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px transition-colors duration-200 ease-in-out data-checked:bg-indigo-600"
              >
                <span className="sr-only">Aceptar las políticas</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-gray-600">
              Seleccionando esto, tú aceptas nuestras{' '}
              <a href="#" className="font-semibold text-indigo-600">
                políticas&nbsp;de privacidad
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
