import React from 'react';
import { Cloud, Code, Shield, Zap, MapPin, Mail, Phone } from 'lucide-react';
import { trackEvent } from './Analytics';

export default function Hero() {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    trackEvent('hero_cta_click', {
      button: 'view_projects',
      target_section: 'projects'
    });
  };

  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    trackEvent('hero_cta_click', {
      button: 'contact_me',
      target_section: 'contact'
    });
  };

  const handleEmailClick = () => {
    trackEvent('contact_info_click', {
      type: 'email',
      source: 'hero_section'
    });
  };

  const handlePhoneClick = () => {
    trackEvent('contact_info_click', {
      type: 'phone',
      source: 'hero_section'
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Abhijeet Raj
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300">
                DevOps Engineer & Cloud Infrastructure Specialist
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <Zap className="w-5 h-5" aria-hidden="true" />
                <span className="text-lg">2+ Years Experience</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              DevOps Engineer with 2+ years of hands-on experience in managing and automating 
              cloud infrastructure using AWS. Skilled in Kubernetes, Docker, Jenkins, Grafana, 
              and Prometheus to improve system performance and reliability.
            </p>
            
            <address className="space-y-3 not-italic">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>Baner, Pune (Open to relocate)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <a href="mailto:abhijeetraj646@gmail.com" className="hover:text-blue-400 transition-colors" onClick={handleEmailClick}>
                  abhijeetraj646@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <a href="tel:+916299070026" className="hover:text-blue-400 transition-colors" onClick={handlePhoneClick}>
                  +91 6299070026
                </a>
              </div>
            </address>
            
            <div className="flex flex-wrap gap-4" role="list" aria-label="Core expertise">
              <div className="flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full" role="listitem">
                <Cloud className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span className="text-sm">AWS Expert</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-600/20 px-4 py-2 rounded-full" role="listitem">
                <Code className="w-4 h-4 text-green-400" aria-hidden="true" />
                <span className="text-sm">Kubernetes</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full" role="listitem">
                <Shield className="w-4 h-4 text-purple-400" aria-hidden="true" />
                <span className="text-sm">DevSecOps</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={handleViewProjects}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
                aria-label="View my projects section"
              >
                View Projects
              </button>
              <button 
                onClick={handleContactMe}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                aria-label="Go to contact section"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl" role="img" aria-label="DevOps dashboard showing system performance metrics">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">System Status</span>
                  <span className="text-green-400 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2" aria-hidden="true"></span>
                    All Systems Operational
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-sm text-gray-300">Sprints</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">50%</div>
                    <div className="text-sm text-gray-300">Debug Time ↓</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-gray-300">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}