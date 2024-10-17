import React, { useCallback } from 'react';
import { Brain, Cpu, Code, Database, BarChart2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { useLocation } from 'react-router-dom';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) return null;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const content = {
    es: {
      title: "Nicolás Guerra",
      subtitle: "Transformo datos en acciones para el éxito empresarial",
      contact: "Contáctame"
    },
    en: {
      title: "Nicolás Guerra",
      subtitle: "Transforming data into actions for business success",
      contact: "Contact Me"
    }
  };

  const currentContent = content[language];

  const techIcons = [
    { name: 'IA Generativa', icon: Brain },
    { name: 'Machine Learning', icon: Cpu },
    { name: 'Business Intelligence', icon: BarChart2 }
  ];

  const techBadges = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', color: '#F7DF1E' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', color: '#276DC3' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
    { name: 'Power BI', icon: 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg', color: '#F2C811' },
    { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg', color: '#E97627' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' }
  ];

  // URLs de los logos
  const logoLight = "https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/logo_ng_dorado.png?alt=media&token=23c38fea-33d7-4343-9415-c2361343c15c";
  const logoDark = "https://firebasestorage.googleapis.com/v0/b/analytics-53019.appspot.com/o/logo_ng_blue.png?alt=media&token=ec522553-0dec-45cb-abe7-962658833e92";

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {isHomePage && (
        <>
          <div className="absolute inset-0 z-0">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: theme === 'light' ? "#4a0e8f" : "#1a1a2e",
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "grab",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    grab: {
                      distance: 140,
                      links: {
                        opacity: 0.5
                      }
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 opacity-80 z-10"></div>
        </>
      )}
      <div className="relative z-20 text-center text-white px-4">
        {/* Reemplazar el título de texto por la imagen del logo */}
        <h1 className="mb-4">
          <img
            src={theme === 'light' ? logoLight : logoDark}
            alt="Nicolás Guerra"
            className="mx-auto w-64 md:w-92"
          />
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-blue-100">{currentContent.subtitle}</p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {techIcons.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full p-3 ${theme === 'light' ? 'text-yellow-400' : 'text-blue-400'}`}>
                <tech.icon size={36} />
              </div>
              <span className="mt-2 text-white">{tech.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {techBadges.map((badge, index) => (
            <span key={index} className="px-3 py-1 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-full text-sm flex items-center">
              <img src={badge.icon} alt={badge.name} className="w-5 h-5 mr-2" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="text-white">{badge.name}</span>
            </span>
          ))}
        </div>
        <a
          href="#contacto"
          className={`${
            theme === 'light'
              ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900'
              : 'bg-gradient-to-r from-blue-400 to-cyan-500 text-white'
          } font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg`}
        >
          {currentContent.contact}
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-purple-900 to-transparent dark:from-gray-900 opacity-50 z-20"></div>
    </section>
  );
};


export default Hero;
