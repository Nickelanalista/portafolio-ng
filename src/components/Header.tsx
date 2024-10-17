import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    es: ['Sobre mí', 'Experiencia', 'Educación', 'Proyectos', 'Contacto'],
    en: ['About', 'Experience', 'Education', 'Projects', 'Contact']
  };

  // URLs de los logos
  const logoLight = "https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/logo_ng_dorado.png?alt=media&token=23c38fea-33d7-4343-9415-c2361343c15c";
  const logoDark = "https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/logo_ng_blue.png?alt=media&token=ec522553-0dec-45cb-abe7-962658833e92";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-purple-900 to-blue-900 dark:from-gray-900 dark:to-indigo-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {(isScrolled || location.pathname !== '/') && (
          <h1 className="text-2xl font-bold">
            <img
              src={theme === 'light' ? logoLight : logoDark}
              alt="Nicolás Guerra"
              className="h-12 w-auto"
            />
          </h1>
        )}
        <div className={`flex items-center ${!isScrolled && location.pathname === '/' ? 'ml-auto' : ''}`}>
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems[language].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-yellow-400 hover:text-yellow-300 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center ml-6">
            <button onClick={toggleTheme} className="p-2 rounded-full bg-yellow-400 dark:bg-cyan-400 text-purple-900 dark:text-gray-900 mr-2">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={toggleLanguage} className="p-2 rounded-full bg-yellow-400 dark:bg-cyan-400 text-purple-900 dark:text-gray-900">
              {language === 'es' ? '🇪🇸' : '🇺🇸'}
            </button>
          </div>
          <div className="md:hidden ml-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className="text-yellow-400 dark:text-cyan-400" /> : <Menu size={24} className="text-yellow-400 dark:text-cyan-400" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gradient-to-r from-purple-900 to-blue-900 dark:from-gray-900 dark:to-indigo-900 shadow-md">
          <ul className="flex flex-col items-center py-4">
            {menuItems[language].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="block py-2 text-yellow-400 hover:text-yellow-300 dark:text-cyan-400 dark:hover:text-cyan-300" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
