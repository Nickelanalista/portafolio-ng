import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useInView } from 'react-intersection-observer';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const testimonials = {
    es: [
      {
        name: 'Francisco García',
        position: 'Superintendente A&I',
        content: 'Nicolás demostró una capacidad excepcional para analizar grandes conjuntos de datos y proporcionar insights valiosos que impulsaron nuestras decisiones estratégicas.',
        company: 'BHP',
        image: 'https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/francisco.png?alt=media&token=ec1c551b-9823-4c8e-b33f-2b735b141dcb'
      },
      {
        name: 'Felipe Contreras',
        position: 'Líder Inteligencia Comercial',
        content: 'Su experiencia en machine learning y su habilidad para comunicar conceptos complejos de manera clara fueron fundamentales para el éxito de nuestros proyectos de IA.',
        company: 'Carozzi',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQHM8DVtS0jj6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1525398758167?e=2147483647&v=beta&t=9HSvVUgvGemmDlVLwVl0efqJ32l4tZfvSprJYmmnBgo'
      },
      {
        name: 'Sergio Vallejos',
        position: 'Jefe Business Intelligence',
        content: 'Nicolás no solo mejoró significativamente nuestros procesos de BI, sino que también capacitó a nuestro equipo, dejando un impacto duradero en nuestra organización.',
        company: 'Trendy Alimentos',
        image: 'https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/sergio.png?alt=media&token=7142361b-5323-458f-986f-92f225d04546'
      },
      {
        name: 'Fabián Figueroa',
        position: 'Jefe de Administración',
        content: 'La capacidad de Nicolás para optimizar nuestros procesos de planificación y su enfoque analítico fueron clave para mejorar nuestra eficiencia operativa.',
        company: 'Agrosuper',
        image: 'https://media.licdn.com/dms/image/D4E03AQG8LmcNzLqAkQ/profile-displayphoto-shrink_200_200/0/1692979929894?e=2147483647&v=beta&t=xXwfG_v67d4Fu46Y55OdyzdYE3QJxctRNChra-zZEVs'
      },
    ],
    en: [
      {
        name: 'Francisco García',
        position: 'A&I Superintendent',
        content: 'Nicolás demonstrated an exceptional ability to analyze large datasets and provide valuable insights that drove our strategic decisions.',
        company: 'BHP',
        image: 'https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/francisco.png?alt=media&token=ec1c551b-9823-4c8e-b33f-2b735b141dcb'
      },
      {
        name: 'Felipe Contreras',
        position: 'Commercial Intelligence Leader',
        content: 'His expertise in machine learning and his ability to clearly communicate complex concepts were fundamental to the success of our AI projects.',
        company: 'Carozzi',
        image: 'https://media.licdn.com/dms/image/v2/C4D03AQHM8DVtS0jj6Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1525398758167?e=2147483647&v=beta&t=9HSvVUgvGemmDlVLwVl0efqJ32l4tZfvSprJYmmnBgo'
      },
      {
        name: 'Sergio Vallejos',
        position: 'Commercial Manager',
        content: 'Nicolás not only significantly improved our BI processes but also trained our team, leaving a lasting impact on our organization.',
        company: 'Trendy Alimentos',
        image: 'https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/sergio.png?alt=media&token=7142361b-5323-458f-986f-92f225d04546'
      },
      {
        name: 'Fabián Figueroa',
        position: 'Administration Manager',
        content: 'Nicolás\'s ability to optimize our planning processes and his analytical approach were key to improving our operational efficiency.',
        company: 'Agrosuper',
        image: 'https://media.licdn.com/dms/image/D4E03AQG8LmcNzLqAkQ/profile-displayphoto-shrink_200_200/0/1692979929894?e=2147483647&v=beta&t=xXwfG_v67d4Fu46Y55OdyzdYE3QJxctRNChra-zZEVs'
      },
    ]
  };

  const currentTestimonials = testimonials[language];

  return (
    <section id="testimonios" className={`py-20 relative ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900' 
          : 'bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900'
      } opacity-80 z-10`}></div>
      <div className="container mx-auto px-4 relative z-20">
        <h2 className={`text-4xl font-bold mb-12 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg z-30 py-4`}>
          {language === 'es' ? 'Referencias Laborales' : 'Professional References'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialItem: React.FC<{ testimonial: any; delay: number }> = ({ testimonial, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-6 transform transition duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-white mb-4">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-yellow-400 dark:text-cyan-400">{testimonial.name}</p>
          <p className="text-sm text-white">{testimonial.position}</p>
          <p className="text-sm text-yellow-300 dark:text-cyan-300">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
