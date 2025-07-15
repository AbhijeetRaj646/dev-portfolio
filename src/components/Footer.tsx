import React from 'react';
import { Heart, Coffee, Linkedin, Github, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    'DevOps Consulting',
    'Cloud Infrastructure',
    'CI/CD Implementation',
    'Kubernetes Management',
    'Monitoring Setup',
    'Security Automation'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-blue-400">Abhijeet</span> Raj
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              DevOps Engineer with 2+ years of experience in cloud infrastructure automation, 
              Kubernetes management, and CI/CD pipeline optimization. Passionate about building 
              scalable and reliable systems that drive business success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Baner, Pune, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:abhijeetraj646@gmail.com" className="hover:text-blue-400 transition-colors">
                  abhijeetraj646@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+916299070026" className="hover:text-blue-400 transition-colors">
                  +91 6299070026
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/abhijeetraj646" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/AbhijeetRaj646" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors transform hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:abhijeetraj646@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg transition-colors transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center text-white">Core Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Python', 'Grafana', 'Prometheus', 'React'].map((tech) => (
              <span key={tech} className="bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm transition-all duration-300 cursor-default transform hover:scale-105">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-gray-400">and</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
            <span className="text-gray-400">by Abhijeet Raj</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-500 text-sm">
              © 2025 Abhijeet Raj. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}