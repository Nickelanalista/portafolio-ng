import React from 'react';
import { Brain, TrendingUp, BarChart2, Database, Code, PieChart, MessageSquare, Image, FileText, Users, DollarSign, Map, ShieldCheck, ShoppingBag, Target, Zap, Bot, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const projectCategories = {
    es: [
      {
        category: "Inteligencia Artificial",
        icon: Brain,
        description: "Implementación de soluciones avanzadas de IA para optimizar procesos y mejorar la toma de decisiones.",
        projects: [
          { title: "Chatbot con Langchain", description: "Creación de chatbots interactivos entrenados con información empresarial.", icon: MessageSquare },
          { title: "Análisis de Sentimientos", description: "Implementación de NLP para analizar feedback de clientes.", icon: Users },
          { title: "Asistente Virtual", description: "Desarrollo de un asistente virtual para atención al cliente.", icon: Bot },
          { title: "Reconocimiento de Imágenes", description: "Sistema de clasificación de productos basado en imágenes.", icon: Image },
          { title: "Generación de Texto", description: "Creación de contenido automático para marketing.", icon: FileText },
          { title: "Traducción Automática", description: "Sistema de traducción en tiempo real para documentos internos.", icon: Globe }
        ]
      },
      {
        category: "Machine Learning",
        icon: TrendingUp,
        description: "Desarrollo e implementación de modelos predictivos y algoritmos de aprendizaje automático para resolver problemas de negocio complejos.",
        projects: [
          { title: "Predicción de Fuga de Clientes", description: "Modelo de Regresión Logística para predecir la fuga de clientes.", icon: Users },
          { title: "Segmentación de Clientes", description: "Clustering de clientes para estrategias de marketing personalizadas.", icon: PieChart },
          { title: "Pronóstico de Ventas", description: "Modelo de series temporales para predecir ventas futuras.", icon: TrendingUp },
          { title: "Detección de Fraude", description: "Sistema de detección de transacciones fraudulentas.", icon: ShieldCheck },
          { title: "Recomendación de Productos", description: "Motor de recomendación basado en el comportamiento del usuario.", icon: ShoppingBag },
          { title: "Optimización de Precios", description: "Modelo dinámico para optimizar precios en tiempo real.", icon: DollarSign }
        ]
      },
      {
        category: "Business Intelligence",
        icon: BarChart2,
        description: "Creación de soluciones de BI para transformar datos en insights accionables y apoyar la toma de decisiones estratégicas.",
        projects: [
          { title: "Dashboards en Power BI", description: "Creación de dashboards interactivos para stakeholders.", icon: BarChart2 },
          { title: "ETL con Python", description: "Automatización de procesos ETL para integración de datos.", icon: Database },
          { title: "Análisis de Participación de Mercado", description: "Estudio de la posición competitiva de la empresa.", icon: PieChart },
          { title: "KPIs de Rendimiento", description: "Implementación de métricas clave para seguimiento de objetivos.", icon: Target },
          { title: "Reportes Automatizados", description: "Generación automática de informes periódicos.", icon: FileText },
          { title: "Visualización de Datos Geoespaciales", description: "Mapeo de datos de ventas y clientes por región.", icon: Map }
        ]
      }
    ],
    en: [
      {
        category: "Artificial Intelligence",
        icon: Brain,
        description: "Implementation of advanced AI solutions to optimize processes and improve decision-making.",
        projects: [
          { title: "Chatbot with Langchain", description: "Creation of interactive chatbots trained with business information.", icon: MessageSquare },
          { title: "Sentiment Analysis", description: "Implementation of NLP to analyze customer feedback.", icon: Users },
          { title: "Virtual Assistant", description: "Development of a virtual assistant for customer service.", icon: Bot },
          { title: "Image Recognition", description: "Product classification system based on images.", icon: Image },
          { title: "Text Generation", description: "Automatic content creation for marketing.", icon: FileText },
          { title: "Automatic Translation", description: "Real-time translation system for internal documents.", icon: Globe }
        ]
      },
      {
        category: "Machine Learning",
        icon: TrendingUp,
        description: "Development and implementation of predictive models and machine learning algorithms to solve complex business problems.",
        projects: [
          { title: "Customer Churn Prediction", description: "Logistic Regression model to predict customer churn.", icon: Users },
          { title: "Customer Segmentation", description: "Customer clustering for personalized marketing strategies.", icon: PieChart },
          { title: "Sales Forecast", description: "Time series model to predict future sales.", icon: TrendingUp },
          { title: "Fraud Detection", description: "System for detecting fraudulent transactions.", icon: ShieldCheck },
          { title: "Product Recommendation", description: "Recommendation engine based on user behavior.", icon: ShoppingBag },
          { title: "Price Optimization", description: "Dynamic model for real-time price optimization.", icon: DollarSign }
        ]
      },
      {
        category: "Business Intelligence",
        icon: BarChart2,
        description: "Creation of BI solutions to transform data into actionable insights and support strategic decision-making.",
        projects: [
          { title: "Power BI Dashboards", description: "Creation of interactive dashboards for stakeholders.", icon: BarChart2 },
          { title: "ETL with Python", description: "Automation of ETL processes for data integration.", icon: Database },
          { title: "Market Share Analysis", description: "Study of the company's competitive position.", icon: PieChart },
          { title: "Performance KPIs", description: "Implementation of key metrics for tracking objectives.", icon: Target },
          { title: "Automated Reports", description: "Automatic generation of periodic reports.", icon: FileText },
          { title: "Geospatial Data Visualization", description: "Mapping of sales and customer data by region.", icon: Map }
        ]
      }
    ]
  };

  const currentProjectCategories = projectCategories[language];

  return (
    <section id="proyectos" className={`py-20 relative ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900' 
          : 'bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900'
      } opacity-80 z-10`}></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 z-30 py-4">
          {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjectCategories.map((category, categoryIndex) => (
            <ProjectCategory key={categoryIndex} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCategory: React.FC<{ category: any }> = ({ category }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4 text-center text-white flex items-center justify-center">
        <category.icon className="mr-2 text-yellow-400 dark:text-cyan-400" size={32} />
        {category.category}
      </h3>
      <p className="text-center text-white mb-6">{category.description}</p>
      <div className="space-y-4">
        {category.projects.map((project, projectIndex) => (
          <ProjectItem key={projectIndex} project={project} delay={projectIndex * 100} />
        ))}
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ project: any; delay: number }> = ({ project, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white bg-opacity-5 rounded-lg p-4 transform transition duration-500 hover:scale-105 hover:bg-opacity-10 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-2">
        <project.icon className="text-yellow-400 dark:text-cyan-400 mr-2" size={20} />
        <h4 className="text-lg font-medium text-yellow-300 dark:text-cyan-300">{project.title}</h4>
      </div>
      <p className="text-white text-sm leading-relaxed">{project.description}</p>
    </div>
  );
};

export default Projects;
