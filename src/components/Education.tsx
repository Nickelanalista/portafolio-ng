import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from 'react-intersection-observer';

const Education: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const { theme } = useTheme();

  const educations = {
    es: [
      {
        title: "Diplomado Data Science",
        institution: "Pontificia Universidad Católica",
        period: "Marzo - Diciembre 2021",
        description: "Programa intensivo enfocado en técnicas avanzadas de análisis de datos, machine learning y big data.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg/800px-Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg.png"
      },
      {
        title: "Ingeniería Comercial",
        institution: "Universidad Andrés Bello",
        period: "2014 - 2019",
        description: "Formación integral en administración de empresas, economía y finanzas con énfasis en análisis cuantitativo y toma de decisiones estratégicas.",
        logo: "https://vinculacion.unab.cl/wp-content/uploads/2018/06/fondo-transparente-logo-color-con-texto-azul-300x252.png"
      }
    ],
    en: [
      {
        title: "Data Science Diploma",
        institution: "Pontifical Catholic University",
        period: "March - December 2021",
        description: "Intensive program focused on advanced data analysis techniques, machine learning, and big data.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg/800px-Escudo_de_la_Pontificia_Universidad_Cat%C3%B3lica_de_Chile.svg.png"
      },
      {
        title: "Commercial Engineering",
        institution: "Andrés Bello University",
        period: "2014 - 2019",
        description: "Comprehensive training in business administration, economics, and finance with emphasis on quantitative analysis and strategic decision-making.",
        logo: "https://vinculacion.unab.cl/wp-content/uploads/2018/06/fondo-transparente-logo-color-con-texto-azul-300x252.png"
      }
    ]
  };

  const currentEducations = educations[language];

  return (
    <section id="educacion" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 opacity-80 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg z-30 py-4">
          {language === 'es' ? 'Formación Académica' : 'Academic Education'}
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 dark:bg-cyan-400"></div>
          {currentEducations.map((edu, index) => (
            <EducationItem 
              key={index} 
              edu={edu} 
              index={index} 
              activeIndex={activeIndex} 
              setActiveIndex={setActiveIndex} 
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationItem: React.FC<{
  edu: {
    title: string;
    institution: string;
    period: string;
    description: string;
    logo: string;
  };
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  language: string;
}> = ({ edu, index, activeIndex, setActiveIndex, language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''} transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6">
          <h3 className="text-xl font-semibold text-yellow-400 dark:text-cyan-400">{edu.title}</h3>
          <p className="text-white">{edu.institution}</p>
          <p className="text-yellow-300 dark:text-cyan-300 mb-2">{edu.period}</p>
          <div className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-white">{edu.description}</p>
          </div>
          <button
            className="mt-2 text-yellow-400 hover:text-yellow-300 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            {activeIndex === index ? (language === 'es' ? 'Leer menos' : 'Read less') : (language === 'es' ? 'Leer más' : 'Read more')}
          </button>
        </div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-8 h-8 bg-yellow-400 dark:bg-cyan-400 rounded-full border-4 border-purple-900 dark:border-gray-900 z-20"></div>
      </div>
      <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg mx-auto border-4 border-yellow-400 dark:border-cyan-400">
          <img className="h-16 w-auto object-contain" src={edu.logo} alt={edu.institution} />
        </div>
      </div>
    </div>
  );
};

export default Education;
