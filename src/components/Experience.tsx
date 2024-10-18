import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from 'react-intersection-observer';

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const { theme } = useTheme();

  const experiences = {
    es: [
      {
        title: "Analista de Datos Senior",
        company: "BHP Mina Escondida (A&I)",
        period: "Marzo 2024 - Presente",
        description: "Desarrollo de analítica avanzada utilizando modelos de Machine Learning, automatización de informes con Python y creación de dashboards en Power BI.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/BHP_2017_logo.svg/320px-BHP_2017_logo.svg.png"
      },
      {
        title: "Data Science",
        company: "Carozzi",
        period: "Junio 2022 - Marzo 2024",
        description: "Desarrollo de herramientas y soluciones de ML, implementación de iniciativas de IA y creación de dashboards en Tableau y Power BI.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Carozzi_Corp_2016.png"
      },
      {
        title: "Analista de Business Intelligence",
        company: "Trendy Alimentos",
        period: "Octubre 2021 - Junio 2022",
        description: "Generación y automatización de informes comerciales utilizando Python y Power BI, aplicación de algoritmos de ML para diversos casos comerciales.",
        logo: "https://mistalentos.cl/wp-content/uploads/2019/09/logo-trendy.png"
      },
      {
        title: "Planificador de Materias Primas",
        company: "Agrosuper",
        period: "Agosto 2020 - Octubre 2021",
        description: "Gestión del suministro de materias primas no cárnicas, preparación de informes gerenciales y desarrollo de dashboards en Power BI.",
        logo: "https://www.icare.cl/assets/uploads/2018/01/logo-agrosuper-transparente.png"
      }
    ],
    en: [
      {
        title: "Senior Data Analyst",
        company: "BHP Escondida Mine (A&I)",
        period: "March 2024 - Present",
        description: "Development of advanced analytics using Machine Learning models, automation of reports with Python, and creation of dashboards in Power BI.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/BHP_2017_logo.svg/320px-BHP_2017_logo.svg.png"
      },
      {
        title: "Data Science",
        company: "Carozzi",
        period: "June 2022 - March 2024",
        description: "Development of ML tools and solutions, implementation of AI initiatives, and creation of dashboards in Tableau and Power BI.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Carozzi_Corp_2016.png"
      },
      {
        title: "Business Intelligence Analyst",
        company: "Trendy Alimentos",
        period: "October 2021 - June 2022",
        description: "Generation and automation of commercial reports using Python and Power BI, application of ML algorithms for various business cases.",
        logo: "https://mistalentos.cl/wp-content/uploads/2019/09/logo-trendy.png"
      },
      {
        title: "Raw Materials Planner",
        company: "Agrosuper",
        period: "August 2020 - October 2021",
        description: "Management of non-meat raw materials supply, preparation of management reports, and development of dashboards in Power BI.",
        logo: "https://www.icare.cl/assets/uploads/2018/01/logo-agrosuper-transparente.png"
      }
    ]
  };

  const currentExperiences = experiences[language];

  return (
    <section id="experiencia" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 opacity-80 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg z-30 py-4">
          {language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400 dark:bg-cyan-400"></div>
          {currentExperiences.map((exp, index) => (
            <ExperienceItem 
              key={index} 
              exp={exp} 
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

const ExperienceItem: React.FC<{
  exp: {
    title: string;
    company: string;
    period: string;
    description: string;
    logo: string;
  };
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  language: string;
}> = ({ exp, index, activeIndex, setActiveIndex, language }) => {
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
          <h3 className="text-xl font-semibold text-yellow-400 dark:text-cyan-400">{exp.title}</h3>
          <p className="text-white">{exp.company}</p>
          <p className="text-yellow-300 dark:text-cyan-300 mb-2">{exp.period}</p>
          <div className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="text-white">{exp.description}</p>
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
        <div className="w-6 h-6 bg-yellow-400 dark:bg-cyan-400 rounded-full border-4 border-purple-900 dark:border-gray-900 z-20"></div>
      </div>
      <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg mx-auto border-4 border-yellow-400 dark:border-cyan-400">
          <img className="h-16 w-auto object-contain" src={exp.logo} alt={exp.company} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
