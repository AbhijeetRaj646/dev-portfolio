import React, { useState, useEffect } from 'react';
import { Cloud, Code, Shield, Zap, MapPin, Mail, Phone, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'DevOps Engineer & Cloud Infrastructure Specialist';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/Abhijeet_Devops.pdf');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abhijeet_Raj_DevOps_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-blue-400 text-lg font-medium tracking-wide uppercase">Welcome to my portfolio</p>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Abhijeet Raj
                  </span>
                </h1>
              </div>
              
              <div className="h-16 flex items-center">
                <p className="text-xl lg:text-2xl text-gray-300 min-h-[2rem]">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-blue-400">
                  <Zap className="w-5 h-5" />
                  <span className="text-lg font-semibold">2+ Years Experience</span>
                </div>
                <div className="h-6 w-px bg-gray-600"></div>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for opportunities</span>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Passionate DevOps Engineer with 2+ years of hands-on experience in designing, implementing, 
              and managing scalable cloud infrastructure. Specialized in <span className="text-blue-400 font-semibold">Kubernetes orchestration</span>, 
              <span className="text-cyan-400 font-semibold"> AWS cloud services</span>, and 
              <span className="text-purple-400 font-semibold"> CI/CD automation</span> to drive operational excellence and system reliability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-sm text-gray-400">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50%</div>
                <div className="text-sm text-gray-400">Faster Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Baner, Pune, India (Open to relocate globally)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:abhijeetraj646@gmail.com" className="hover:text-blue-400 transition-colors">
                  abhijeetraj646@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+916299070026" className="hover:text-blue-400 transition-colors">
                  +91 6299070026
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/30">
                <Cloud className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">AWS Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/30">
                <Code className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">Kubernetes Expert</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium">DevSecOps</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Explore My Projects</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleResumeDownload}
                className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Let's Connect</span>
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative animate-fadeInRight">
            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-300">Infrastructure Dashboard</span>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-green-400 text-sm font-medium">All Systems Operational</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="text-3xl font-bold text-blue-400">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime SLA</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-blue-400 h-1 rounded-full w-[99%]"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="text-3xl font-bold text-cyan-400">15+</div>
                    <div className="text-sm text-gray-300">Active Projects</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-cyan-400 h-1 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="text-3xl font-bold text-purple-400">24/7</div>
                    <div className="text-sm text-gray-300">Monitoring</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-purple-400 h-1 rounded-full w-[100%]"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="text-3xl font-bold text-green-400">50%</div>
                    <div className="text-sm text-gray-300">Faster Deploys</div>
                    <div className="w-full bg-gray-700 rounded-full h-1 mt-2">
                      <div className="bg-green-400 h-1 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Recent Activity</span>
                    <span className="text-xs text-gray-400">Live</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Kubernetes cluster: Healthy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">CI/CD pipeline: Running</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Monitoring: Active</span>
                    </div>
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