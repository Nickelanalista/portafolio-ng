import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const { language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(language === 'es' ? 'Enviando...' : 'Sending...');

    const details = { name, email, message };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });

      const result = await response.json();
      
      if (response.ok) {
        setStatus(language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus(language === 'es' ? `Error: ${result.message}` : `Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus(language === 'es' ? 'Error al enviar el mensaje' : 'Error sending message');
    }
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-white mb-2">{currentContent.name}</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-400"
          placeholder={currentContent.placeholder.name}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white mb-2">{currentContent.email}</label>
        <input
          type="email"
          id="email"
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
