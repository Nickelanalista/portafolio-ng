import React from 'react';
import { Cpu, Briefcase, Database, Code } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    es: {
      title: "Sobre Mí",
      description: "Soy Nicolás Guerra, Ingeniero Comercial de la Universidad Andrés Bello, apasionado por el mundo de los datos. Cuento con amplia experiencia en Análisis de Datos, Ciencia de Datos y Machine Learning. Mi enfoque se centra en comprender problemas empresariales y crear soluciones basadas en datos que generan un impacto real en los negocios.",
      skills: [
        { icon: Cpu, text: "AI Apps Developer" },
        { icon: Briefcase, text: "Analista de Datos Senior en BHP Mina Escondida" },
        { icon: Database, text: "Experto en Python para manipulación de datos" },
        { icon: Code, text: "Habilidades avanzadas en Power BI" }
      ]
    },
    en: {
      title: "About Me",
      description: "I'm Nicolás Guerra, a Commercial Engineer from Andrés Bello University, passionate about the world of data. I have extensive experience in Data Analysis, Data Science, and Machine Learning. My focus is on understanding business problems and creating data-driven solutions that generate real impact in businesses.",
      skills: [
        { icon: Cpu, text: "AI Apps Developer" },
        { icon: Briefcase, text: "Senior Data Analyst at BHP Escondida Mine" },
        { icon: Database, text: "Expert in Python for data manipulation" },
        { icon: Code, text: "Advanced skills in Power BI" }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="sobre-mí" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 opacity-80 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg z-30 py-4">
          {currentContent.title}
        </h2>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQE_NB8zXFZwCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718911010071?e=1733961600&v=beta&t=o4dgPYVL4JuDcKK0NVNnuRjC_n_-qnT6TpVvUhciXU4"
              alt="Nicolás Guerra"
              className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-12 object-cover shadow-lg border-4 border-yellow-400 dark:border-cyan-400"
            />
            <div>
              <p className="text-lg mb-6 text-white leading-relaxed">{currentContent.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentContent.skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <skill.icon className="mr-3 text-yellow-400 dark:text-cyan-400" size={24} />
                    <span className="text-white">{skill.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
