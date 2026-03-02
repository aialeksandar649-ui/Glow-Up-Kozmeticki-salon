import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import SmartBooking from './components/SmartBooking';
import InteractiveGallery from './components/InteractiveGallery';
import TestimonialSlider from './components/TestimonialSlider';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'politika-privatnosti') {
        setCurrentPage('privacy');
      } else if (hash === 'uslovi-koristenja') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {currentPage === 'privacy' ? (
          <PrivacyPolicy />
        ) : currentPage === 'terms' ? (
          <TermsOfService />
        ) : (
          <>
            <Navigation />
            <Hero />
            <Services />
            <Pricing />
            <SmartBooking />
            <InteractiveGallery />
            <TestimonialSlider />
            <About />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
