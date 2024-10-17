import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import ChatbotWindow from './ChatbotWindow';
import { useTheme } from '../contexts/ThemeContext';

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const { theme } = useTheme();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setHasNotification(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChatbot}
        className={`p-4 rounded-full shadow-lg ${
          theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-yellow-500 hover:bg-yellow-600'
        } text-white transition-all duration-300 ease-in-out transform hover:scale-110`}
      >
        <MessageCircle size={24} />
        {hasNotification && (
          <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-white"></span>
        )}
      </button>
      {isOpen && <ChatbotWindow isDarkMode={theme === 'dark'} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ChatbotButton;
