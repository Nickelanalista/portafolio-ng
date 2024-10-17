import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    es: {
      rights: "Todos los derechos reservados.",
      developed: "Desarrollado por @CordilleraLabs"
    },
    en: {
      rights: "All rights reserved.",
      developed: "Developed by @CordilleraLabs"
    }
  };

  const currentContent = content[language];

  return (
    <footer className="py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 opacity-80 z-10"></div>
      <div className="container mx-auto px-4 relative z-20 text-center">
        <p className="text-white">&copy; 2024 Nicolás Guerra. {currentContent.rights}</p>
        <p className="mt-2 text-white">{currentContent.developed}</p>
      </div>
    </footer>
  );
};

export default Footer;
