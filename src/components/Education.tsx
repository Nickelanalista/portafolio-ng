import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Education: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  // ... (resto del código sin cambios)

  return (
    <section id="educación" className={`py-20 ${theme === 'light' ? 'section-gradient-light' : 'section-gradient-dark'}`}>
      {/* ... (resto del contenido sin cambios) */}
    </section>
  );
};

export default Education;
