import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Events: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const content = {
    es: {
      title: "Eventos",
      description: "Me apasiona participar en eventos de IA, hackathones, conferencias, charlas y más. Estas experiencias me permiten compartir conocimientos, aprender de otros expertos y mantenerme al día con las últimas tendencias en tecnología e innovación."
    },
    en: {
      title: "Events",
      description: "I'm passionate about participating in AI events, hackathons, conferences, talks, and more. These experiences allow me to share knowledge, learn from other experts, and stay up-to-date with the latest trends in technology and innovation."
    }
  };

  const currentContent = content[language];

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/evento1.JPG?alt=media&token=414d77ed-6d16-4401-800f-eb43f33698e3",
    "https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/evento2.png?alt=media&token=58e82c10-e470-4221-89c2-7e03e7af5ac5",
    "https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/evento3.png?alt=media&token=f4df471d-e722-47f4-8d7a-7458878d2569"
  ];

  return (
    <section id="eventos" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 opacity-80 z-10"></div>
      <div className="container mx-auto px-6 relative z-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400 dark:text-cyan-400 sticky top-0 bg-opacity-80 backdrop-filter backdrop-blur-lg z-30 py-5">
          {currentContent.title}
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center">
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 md:w-1/2">
            <p className="text-lg mb-6 text-white leading-relaxed">
              {currentContent.description}
            </p>
          </div>
          <div className="md:w-1/2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={25}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              className="rounded-3xl shadow-xl overflow-hidden h-80"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Event ${index + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
