import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { language } = useLanguage();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const statusMessage = language === 'es' ? 'Enviando...' : 'Sending...';
    setStatus(statusMessage);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(result.message || 'Error desconocido');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus(language === 'es' 
        ? `Hubo un error al enviar el mensaje: ${error.message}` 
        : `There was an error sending the message: ${error.message}`);
    }
  };

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
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center md:justify-start">
            <img 
              src="https://lh3.googleusercontent.com/a/ACg8ocKE2zK4ROCO62djGRNiLsNOtxt7z-GVsgRsWc__YACtdBEMvmLZ=s288-c-no" 
              alt="Nicolás Guerra" 
              className="w-48 h-48 rounded-full border-4 border-yellow-400 dark:border-cyan-400 shadow-lg"
            />
          </div>
          <div className="md:w-2/3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <Mail className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
              <a href="mailto:n.guerravillalobos@gmail.com" className="text-lg text-white hover:text-yellow-400 dark:hover:text-cyan-300 transition-colors">n.guerravillalobos@gmail.com</a>
            </div>
            <div className="flex items-center mb-6">
              <MapPin className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
              <p className="text-lg text-white">Santiago, Chile</p>
            </div>
            <div className="flex items-center mb-6">
              <Linkedin className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
              <a href="https://www.linkedin.com/in/nicolás-guerra-7b1937141/" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-yellow-400 dark:hover:text-cyan-300 transition-colors">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <Github className="text-yellow-400 dark:text-cyan-400 mr-3" size={24} />
              <a href="https://github.com/nicoig" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-yellow-400 dark:hover:text-cyan-300 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400 dark:text-cyan-400">{currentContent.message}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
