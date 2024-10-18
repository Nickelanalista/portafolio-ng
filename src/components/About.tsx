import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Cpu, BarChart2, Code, PieChart } from 'react-feather';

const About: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    es: {
      title: "Sobre Mí",
      description: "Soy Nicolás Guerra, Ingeniero Comercial de la Universidad Andrés Bello, apasionado por el mundo de los datos. Cuento con amplia experiencia en Análisis de Datos, Ciencia de Datos y Machine Learning. Mi enfoque se centra en comprender problemas empresariales y crear soluciones basadas en datos que generan un impacto real en los negocios.",
      skills: [
        "AI Apps Developer",
        "Analista de Datos Senior en BHP Mina Escondida",
        "Experto en Python para manipulación de datos",
        "Habilidades avanzadas en Power BI"
      ]
    },
    en: {
      title: "About Me",
      description: "I'm Nicolás Guerra, a Commercial Engineer from Andrés Bello University, passionate about the world of data. I have extensive experience in Data Analysis, Data Science, and Machine Learning. My approach focuses on understanding business problems and creating data-driven solutions that generate real impact on businesses.",
      skills: [
        "AI Apps Developer",
        "Senior Data Analyst at BHP Escondida Mine",
        "Expert in Python for data manipulation",
        "Advanced skills in Power BI"
      ]
    }
  };

  const currentContent = content[language];

  const techCategories = [
    {
      name: language === 'es' ? 'Lenguajes de Programación' : 'Programming Languages',
      items: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      name: language === 'es' ? 'Librerías de Data Science' : 'Data Science Libraries',
      items: [
        { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'SciPy', icon: 'https://scipy.org/images/logo.svg' }
      ]
    },
    {
      name: language === 'es' ? 'Herramientas de Visualización' : 'Visualization Tools',
      items: [
        { name: 'Matplotlib', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        { name: 'Seaborn', icon: 'https://seaborn.pydata.org/_images/logo-mark-lightbg.svg' },
        { name: 'Power BI', icon: 'https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg' },
        { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' }
      ]
    },
    {
      name: language === 'es' ? 'Frameworks' : 'Frameworks',
      items: [
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
        { name: 'FastAPI', icon: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
      ]
    },
    {
      name: language === 'es' ? 'Otras Herramientas' : 'Other Tools',
      items: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg' },
        { name: 'Spark', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg' }
      ]
    }
  ];

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case 'AI Apps Developer':
        return <Cpu className="text-yellow-400 dark:text-cyan-400" size={20} />;
      case 'Analista de Datos Senior en BHP Mina Escondida':
      case 'Senior Data Analyst at BHP Escondida Mine':
        return <BarChart2 className="text-yellow-400 dark:text-cyan-400" size={20} />;
      case 'Experto en Python para Data Science':
      case 'Expert in Python for ':
        return <Code className="text-yellow-400 dark:text-cyan-400" size={20} />;
      case 'Habilidades avanzadas en Power BI':
      case 'Advanced skills in Power BI':
        return <PieChart className="text-yellow-400 dark:text-cyan-400" size={20} />;
      default:
        return <CheckCircle className="text-yellow-400 dark:text-cyan-400" size={20} />;
    }
  };

  return (
    <section id="sobre-mí" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 opacity-80 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg z-30 py-4">
          {currentContent.title}
        </h2>
        <div 
          ref={ref}
          className={`flex flex-col lg:flex-row gap-8 justify-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 lg:w-1/3">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D03AQE_NB8zXFZwCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718911010071?e=1733961600&v=beta&t=o4dgPYVL4JuDcKK0NVNnuRjC_n_-qnT6TpVvUhciXU4" 
              alt="Nicolás Guerra" 
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-yellow-400 dark:border-cyan-400 object-cover"
            />
            <p className="text-white text-lg mb-6">{currentContent.description}</p>
            <ul className="space-y-2">
              {currentContent.skills.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  {getSkillIcon(skill)}
                  <span className="ml-2">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-2/3 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-yellow-400 dark:text-cyan-400">
              {language === 'es' ? 'Competencias' : 'Competencies'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-xl font-semibold mb-4 text-white">{category.name}</h4>
                  <div className="flex flex-wrap gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center bg-black bg-opacity-50 rounded-full px-3 py-1">
                        <img 
                          src={item.icon}
                          alt={item.name} 
                          className="w-6 h-6 mr-2"
                          style={{ filter: 'none' }}
                        />
                        <span className="text-sm text-white">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
