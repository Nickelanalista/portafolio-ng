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

    emailjs.sendForm(
      'default_service', 
      'template_872c15b', 
      form.current!, 
      'ilWnr_DiS6_IqzgpZ'
    )
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
          id="from_name"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300"
          placeholder={currentContent.placeholder.name}
        />
      </div>
      <div>
        <label htmlFor="from_email" className="block text-white mb-2">{currentContent.email}</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300"
          placeholder={currentContent.placeholder.email}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2">{currentContent.message}</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-2 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 h-32"
          placeholder={currentContent.placeholder.message}
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-yellow-400 dark:bg-cyan-400 text-purple-900 dark:text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 dark:hover:bg-cyan-300 transition-colors">
        {currentContent.send}
      </button>
      {status && <p className="text-white mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;
