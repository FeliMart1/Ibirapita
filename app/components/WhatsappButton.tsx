// WhatsappButton.tsx
import Image from "next/image";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/549XXXXXXXXXX" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110 p-2"
    >
      <Image
        src="/images/WhatsApp.svg.webp" // Asegúrate de tener esta imagen en la carpeta public/
        alt="WhatsApp"
        width={50}
        height={50}
      />
    </a>
  );
};

export default WhatsappButton;
