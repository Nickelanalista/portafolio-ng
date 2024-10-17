import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const { language } = useLanguage();
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(language === 'es' ? 'Enviando...' : 'Sending...');

    emailjs.sendForm('default_service', 'template_872c15b', form.current!, process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '')
      .then((result) => {
        console.log(result.text);
        setStatus(language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        console.log(error.text);
        setStatus(language === 'es' ? 'Error al enviar el mensaje' : 'Error sending message');
      });
  };

  const content = {
    es: {
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
    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="from_name" className="block text-white mb-2">{currentContent.name}</label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-400"
          placeholder={currentContent.placeholder.name}
          required
        />
      </div>
      <div>
        <label htmlFor="reply_to" className="block text-white mb-2">{currentContent.email}</label>
        <input
          type="email"
          name="reply_to"
          id="reply_to"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-400"
          placeholder={currentContent.placeholder.email}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2">{currentContent.message}</label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-400"
          rows={4}
          placeholder={currentContent.placeholder.message}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="tech-gradient text-gray-900 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg flex items-center justify-center"
      >
        {currentContent.send}
      </button>
      {status && <p className="mt-4 text-center text-yellow-400 dark:text-cyan-400">{status}</p>}
    </form>
  );
};

export default ContactForm;
