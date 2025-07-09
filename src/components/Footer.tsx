import React from 'react';
import { Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Abhijeet</span> Raj
            </h3>
            <p className="text-gray-400 leading-relaxed">
              DevOps Engineer with 2+ years of experience in cloud infrastructure automation, 
              Kubernetes management, and CI/CD pipeline optimization. Passionate about building 
              scalable and reliable systems.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Python', 'Grafana', 'Prometheus'].map((tech) => (
                <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-brown-500" />
            <span>by Abhijeet Raj</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Abhijeet Raj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}