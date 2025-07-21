import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowDownIcon, 
  EnvelopeIcon,
  DocumentTextIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { ParallaxSection } from './ui/ParallaxSection';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'DevOps Engineer',
    'Cloud Architect', 
    'Infrastructure Specialist',
    'CI/CD Expert'
  ];

  useEffect(() => {
    const currentRole = roles[currentTextIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typingText !== currentRole) {
        setTypingText(currentRole.slice(0, typingText.length + 1));
      } else if (isDeleting && typingText !== '') {
        setTypingText(currentRole.slice(0, typingText.length - 1));
      } else if (!isDeleting && typingText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typingText, currentTextIndex, isDeleting, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/abhijeet-raj-resume.pdf';
    link.download = 'Abhijeet-Raj-Resume.pdf';
    link.click();
  };

  const sendEmail = () => {
    window.open('mailto:abhijeetraj646@gmail.com', '_blank');
  };

  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -100, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <ParallaxSection id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
            transition={{
              delay: Math.random() * 2,
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="text-lg text-gray-600 dark:text-gray-300">👋 Hello, I'm</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Abhijeet</span>
              <br />
              <span style={{ color: 'rgb(var(--foreground))' }}>Raj</span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl md:text-3xl font-semibold mb-6 h-16 flex items-center justify-center lg:justify-start"
            >
              <span style={{ color: 'rgb(var(--primary))' }}>
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              Passionate DevOps Engineer with 3+ years of experience in building robust CI/CD pipelines, 
              managing cloud infrastructure, and implementing DevSecOps practices. I specialize in AWS, 
              Kubernetes, and automated deployment solutions.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start mb-8 text-gray-600 dark:text-gray-300"
            >
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>Bangalore, India</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
                style={{ backgroundColor: 'rgb(var(--primary))' }}
              >
                <EnvelopeIcon className="w-5 h-5" />
                Get In Touch
              </motion.button>

              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 glass-morphism"
                style={{ 
                  borderColor: 'rgb(var(--primary))',
                  color: 'rgb(var(--primary))'
                }}
              >
                <DocumentTextIcon className="w-5 h-5" />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left"
            >
              <div>
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse-glow" />
              
              {/* Profile Image Container */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl glass-morphism"
              >
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white">AR</span>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                AWS
              </motion.div>

              <motion.div
                animate={{ 
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                K8s
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('skills')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDownIcon className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default Hero;