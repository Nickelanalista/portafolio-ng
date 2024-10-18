import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';
import { useInView } from 'react-intersection-observer';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    es: {
      title: "Conectemos",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar Mensaje",
      placeholder: {
        name: "Tu nombre",
        email: "tu@email.com",
        message: "Tu mensaje"
      }
    },
    en: {
      title: "Let's Connect",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      placeholder: {
        name: "Your name",
        email: "your@email.com",
        message: "Your message"
      }
    }
  };

  const currentContent = content[language];

  return (
    <section id="contacto" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 opacity-80 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 z-30 py-4">{currentContent.title}</h2>
        <div 
          ref={ref}
          className={`flex flex-col md:flex-row gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="md:w-1/2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <div className="flex flex-col items-center">
              <img 
                src="https://lh3.googleusercontent.com/a/ACg8ocKE2zK4ROCO62djGRNiLsNOtxt7z-GVsgRsWc__YACtdBEMvmLZ=s288-c-no" 
                alt="Nicolás Guerra" 
                className="w-48 h-48 rounded-full border-4 border-yellow-400 dark:border-cyan-400 shadow-lg mb-8"
              />
              <div className="space-y-6 w-full">
                <div className="flex items-center">
                  <Mail className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
                  <a href="mailto:n.guerravillalobos@gmail.com" className="text-lg text-white hover:text-yellow-400 dark:hover:text-cyan-300 transition-colors">n.guerravillalobos@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
                  <p className="text-lg text-white">Santiago, Chile</p>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
                  <a href="https://www.linkedin.com/in/nicolás-guerra-7b1937141/" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-yellow-400 dark:hover:text-cyan-300 transition-colors">LinkedIn</a>
                </div>
                <div className="flex items-center">
                  <Github className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
                  <a href="https://github.com/nicoig" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-yellow-400 dark:hover:text-cyan-300 transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 dark:text-cyan-400">{currentContent.message}</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
