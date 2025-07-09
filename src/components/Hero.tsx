import React from 'react';
import { Cloud, Code, Shield, Zap, MapPin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Abhijeet Raj
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300">
                DevOps Engineer & Cloud Infrastructure Specialist
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <Zap className="w-5 h-5" />
                <span className="text-lg">2+ Years Experience</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              DevOps Engineer with 2 years of hands-on experience in managing and automating 
              cloud infrastructure using AWS. Skilled in Kubernetes, Docker, Jenkins, Grafana, 
              and Prometheus to improve system performance and reliability.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Baner, Pune (Open to relocate)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>abhijeetraj646@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 6299070026</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-blue-600/20 px-4 py-2 rounded-full">
                <Cloud className="w-4 h-4 text-blue-400" />
                <span className="text-sm">AWS Expert</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-600/20 px-4 py-2 rounded-full">
                <Code className="w-4 h-4 text-green-400" />
                <span className="text-sm">Kubernetes</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="text-sm">DevSecOps</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">System Status</span>
                  <span className="text-green-400 text-sm">● All Systems Operational</span>
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