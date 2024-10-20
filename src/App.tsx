import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home, Calculator, BarChart2, BookOpen, Menu, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import AnimatedSection from './components/AnimatedSection';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import ChatbotButton from './components/ChatbotButton';
import Events from './components/Events';

function AppContent() {
  const { theme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${
        theme === 'light'
          ? 'bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900'
          : 'bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900'
      } transition-colors duration-300`}>
        <Header />
        <main className="m-0 p-0">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AnimatedSection><About /></AnimatedSection>
                <AnimatedSection><Education /></AnimatedSection>
                <AnimatedSection><Experience /></AnimatedSection>
                <AnimatedSection><Skills /></AnimatedSection>
                <AnimatedSection><Projects /></AnimatedSection>
                <AnimatedSection><Testimonials /></AnimatedSection>
                <AnimatedSection><Events /></AnimatedSection>
                <AnimatedSection><Contact /></AnimatedSection>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotButton isDarkMode={theme === 'dark'} />
      </div>
    </Router>
  );
}

function App() {
  useEffect(() => {
    emailjs.init('ilWnr_DiS6_IqzgpZ');
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
