import React from 'react';
import { Brain, TrendingUp, BarChart2, Database, Code, Cpu, Globe, Cloud } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const skills = {
    es: [
      { 
        name: 'Inteligencia Artificial', 
        icon: Brain, 
        description: 'Desarrollo de soluciones de IA, incluyendo procesamiento de lenguaje natural, visión por computadora y sistemas de recomendación.'
      },
      { 
        name: 'Machine Learning', 
        icon: Cpu, 
        description: 'Implementación de algoritmos de aprendizaje supervisado y no supervisado, deep learning, y optimización de modelos.'
      },
      { 
        name: 'Python', 
        icon: Code, 
        description: 'Desarrollo de scripts para automatización, análisis de datos, implementación de modelos de ML y creación de aplicaciones web.'
      },
      { 
        name: 'Data Analysis', 
        icon: TrendingUp, 
        description: 'Análisis exploratorio de datos, estadística descriptiva e inferencial, y visualización de datos con bibliotecas como Pandas, NumPy y Matplotlib.'
      },
      { 
        name: 'SQL', 
        icon: Database, 
        description: 'Diseño y optimización de consultas complejas, creación y mantenimiento de bases de datos, y análisis de grandes volúmenes de datos.'
      },
      { 
        name: 'Power BI', 
        icon: BarChart2, 
        description: 'Creación de dashboards interactivos, modelado de datos, uso de DAX para cálculos avanzados y diseño de informes personalizados.'
      },
      { 
        name: 'Big Data', 
        icon: Cloud, 
        description: 'Trabajo con tecnologías como Hadoop y Spark para procesamiento y análisis de grandes volúmenes de datos.'
      },
      { 
        name: 'Business Intelligence', 
        icon: Globe, 
        description: 'Diseño e implementación de soluciones de BI, ETL, creación de KPIs y métricas de negocio, y elaboración de informes ejecutivos.'
      },
    ],
    en: [
      { 
        name: 'Artificial Intelligence', 
        icon: Brain, 
        description: 'Development of AI solutions, including natural language processing, computer vision, and recommendation systems.'
      },
      { 
        name: 'Machine Learning', 
        icon: Cpu, 
        description: 'Implementation of supervised and unsupervised learning algorithms, deep learning, and model optimization.'
      },
      { 
        name: 'Python', 
        icon: Code, 
        description: 'Development of scripts for automation, data analysis, ML model implementation, and web application creation.'
      },
      { 
        name: 'Data Analysis', 
        icon: TrendingUp, 
        description: 'Exploratory data analysis, descriptive and inferential statistics, and data visualization using libraries like Pandas, NumPy, and Matplotlib.'
      },
      { 
        name: 'SQL', 
        icon: Database, 
        description: 'Design and optimization of complex queries, database creation and maintenance, and analysis of large data volumes.'
      },
      { 
        name: 'Power BI', 
        icon: BarChart2, 
        description: 'Creation of interactive dashboards, data modeling, use of DAX for advanced calculations, and custom report design.'
      },
      { 
        name: 'Big Data', 
        icon: Cloud, 
        description: 'Work with technologies such as Hadoop and Spark for processing and analyzing large volumes of data.'
      },
      { 
        name: 'Business Intelligence', 
        icon: Globe, 
        description: 'Design and implementation of BI solutions, ETL, creation of KPIs and business metrics, and development of executive reports.'
      },
    ]
  };

  const currentSkills = skills[language];

  return (
    <section id="habilidades" className={`py-20 relative ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900' 
          : 'bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900'
      } opacity-80 z-10`}></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg z-30 py-4">
          {language === 'es' ? 'Habilidades' : 'Skills'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6 transform transition duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 dark:from-cyan-400 dark:to-blue-500 rounded-full p-2 mr-3">
                  <skill.icon className="text-purple-900 dark:text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-yellow-600 dark:bg-cyan-600 rounded-full h-2.5"></div>
              <p className="mt-4 text-sm text-white">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
