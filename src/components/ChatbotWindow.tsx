import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { generateChatResponse } from '../utils/openai';
import { useLanguage } from '../contexts/LanguageContext';

interface ChatbotWindowProps {
  isDarkMode: boolean;
  onClose: () => void;
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatbotWindow: React.FC<ChatbotWindowProps> = ({ isDarkMode, onClose }) => {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Chat con Nicolás Guerra",
      greeting: "¡Hola! Soy Nicolás Guerra, experto en Data Science y Machine Learning. ¿En qué puedo ayudarte hoy?",
      placeholder: "Escribe tu pregunta...",
      sendButton: "Enviar"
    },
    en: {
      title: "Chat with Nicolás Guerra",
      greeting: "Hello! I'm Nicolás Guerra, expert in Data Science and Machine Learning. How can I help you today?",
      placeholder: "Type your question...",
      sendButton: "Send"
    }
  };

  const currentContent = content[language];

  const [messages, setMessages] = useState<Message[]>([
    { text: currentContent.greeting, sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      const userMessage = { text: input, sender: 'user' as const };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');
      setIsLoading(true);

      const chatHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      }));

      const response = await generateChatResponse([...chatHistory, { role: 'user', content: input }]);
      
      setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]);
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-20 right-4 w-80 h-[32rem] rounded-lg shadow-xl overflow-hidden flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'} z-50`}>
      <div className={`p-4 ${isDarkMode ? 'bg-blue-700' : 'bg-yellow-500'} text-white flex justify-between items-center`}>
        <h3 className="font-bold">{currentContent.title}</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.sender === 'bot' && (
              <img src="https://media.licdn.com/dms/image/v2/D4D03AQE_NB8zXFZwCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718911010071?e=1733961600&v=beta&t=o4dgPYVL4JuDcKK0NVNnuRjC_n_-qnT6TpVvUhciXU4" alt="Nicolás Guerra" className="w-8 h-8 rounded-full mr-2" />
            )}
            <div className={`max-w-3/4 p-2 rounded-lg ${
              message.sender === 'user' 
                ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-yellow-500 text-white') 
                : (isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800')
            }`}>
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start items-center">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQE_NB8zXFZwCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718911010071?e=1733961600&v=beta&t=o4dgPYVL4JuDcKK0NVNnuRjC_n_-qnT6TpVvUhciXU4" alt="Nicolás Guerra" className="w-8 h-8 rounded-full mr-2" />
            <div className={`max-w-3/4 p-2 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 ${isDarkMode ? 'bg-blue-500' : 'bg-yellow-500'} rounded-full animate-pulse`}></div>
                <div className={`w-2 h-2 ${isDarkMode ? 'bg-blue-500' : 'bg-yellow-500'} rounded-full animate-pulse`} style={{ animationDelay: '0.2s' }}></div>
                <div className={`w-2 h-2 ${isDarkMode ? 'bg-blue-500' : 'bg-yellow-500'} rounded-full animate-pulse`} style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={currentContent.placeholder}
            className={`flex-1 p-2 rounded-l-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'} border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-r-lg ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-yellow-500 hover:bg-yellow-600'} text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {currentContent.sendButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatbotWindow;
