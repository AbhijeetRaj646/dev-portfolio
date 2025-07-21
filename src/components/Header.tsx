import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { 
  SunIcon, 
  MoonIcon, 
  Bars3Icon, 
  XMarkIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];
  
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const downloadResume = () => {
    // You can replace this with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume/abhijeet-raj-resume.pdf';
    link.download = 'Abhijeet-Raj-Resume.pdf';
    link.click();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-morphism shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
              >
                AR
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 relative group ${
                      activeSection === item.id
                        ? 'text-blue-500'
                        : 'hover:text-blue-500'
                    }`}
                    style={{ color: activeSection === item.id ? 'rgb(var(--primary))' : 'rgb(var(--foreground))' }}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-200 ${
                        activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ backgroundColor: 'rgb(var(--primary))' }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={downloadResume}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors duration-200"
                style={{ 
                  borderColor: 'rgb(var(--border))',
                  color: 'rgb(var(--foreground))',
                  backgroundColor: 'transparent'
                }}
              >
                <DocumentTextIcon className="w-4 h-4" />
                Resume
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200 hover:scale-110"
                style={{ 
                  backgroundColor: 'rgb(var(--muted))',
                  color: 'rgb(var(--foreground))'
                }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <MoonIcon className="w-5 h-5" />
                ) : (
                  <SunIcon className="w-5 h-5" />
                )}
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgb(var(--muted))',
                  color: 'rgb(var(--foreground))'
                }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <MoonIcon className="w-5 h-5" />
                ) : (
                  <SunIcon className="w-5 h-5" />
                )}
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg transition-all duration-200"
                style={{ 
                  backgroundColor: 'rgb(var(--muted))',
                  color: 'rgb(var(--foreground))'
                }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
          >
            <div 
              className="mx-4 mt-2 rounded-xl p-6 shadow-xl glass-morphism"
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'bg-blue-500/10 text-blue-500'
                        : 'hover:bg-gray-100/10'
                    }`}
                    style={{ 
                      color: activeSection === item.id ? 'rgb(var(--primary))' : 'rgb(var(--foreground))'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={downloadResume}
                  className="flex items-center gap-2 w-full px-4 py-3 text-base font-medium rounded-lg border transition-colors duration-200"
                  style={{ 
                    borderColor: 'rgb(var(--border))',
                    color: 'rgb(var(--foreground))'
                  }}
                >
                  <DocumentTextIcon className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
