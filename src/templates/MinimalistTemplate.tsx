import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink } from 'lucide-react';

export default function MinimalistTemplate() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-light">Abhijeet Raj</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                DevOps Engineer &<br />
                Cloud Infrastructure Specialist
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With 2+ years of experience in cloud infrastructure automation, Kubernetes management, 
                and CI/CD pipeline optimization. Passionate about building scalable and reliable systems.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                  Download Resume
                </button>
                <button className="border border-gray-300 px-6 py-3 hover:border-gray-400 transition-colors">
                  View Projects
                </button>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-medium mb-4">Contact</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>abhijeetraj646@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 6299070026</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Baner, Pune</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-2 border-gray-200 pl-4">
                <h3 className="font-medium mb-4">Links</h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Experience</h2>
          
          <div className="space-y-12">
            {/* Job 1 */}
            <div className="border-l-2 border-gray-300 pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
              <div className="mb-2">
                <h3 className="text-xl font-medium">Software Engineer</h3>
                <p className="text-gray-600">Realthingks • July 2023 - Present</p>
              </div>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Implemented Role-Based Access Control (RBAC) in Kubernetes</li>
                <li>• Developed automated Jenkins and PostgreSQL backup solutions</li>
                <li>• Set up comprehensive monitoring with Prometheus and Grafana</li>
                <li>• Reduced debugging time by 50% with centralized log monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Selected Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="border border-gray-200 p-6 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-medium mb-3">CI/CD Pipeline Automation</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Comprehensive CI/CD pipeline with infrastructure automation, security scanning, 
                and continuous deployment using modern DevOps practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1">Jenkins</span>
                <span className="text-xs bg-gray-100 px-2 py-1">Terraform</span>
                <span className="text-xs bg-gray-100 px-2 py-1">Docker</span>
                <span className="text-xs bg-gray-100 px-2 py-1">AWS</span>
              </div>
              <a href="#" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="border border-gray-200 p-6 hover:border-gray-300 transition-colors">
              <h3 className="text-xl font-medium mb-3">Kubernetes Security & Backup</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Production-ready Kubernetes security implementation with automated backup 
                solutions and disaster recovery processes.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-100 px-2 py-1">Kubernetes</span>
                <span className="text-xs bg-gray-100 px-2 py-1">RBAC</span>
                <span className="text-xs bg-gray-100 px-2 py-1">AWS S3</span>
                <span className="text-xs bg-gray-100 px-2 py-1">PostgreSQL</span>
              </div>
              <a href="#" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Cloud & Infrastructure</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>AWS (EC2, EKS, S3, VPC)</li>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>Terraform</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">CI/CD & Automation</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Jenkins</li>
                <li>Argo CD</li>
                <li>GitHub Actions</li>
                <li>Shell Scripting</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Monitoring & Security</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>SonarQube</li>
                <li>Trivy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to collaborate on your next DevOps project? Let's discuss how I can help 
                optimize your infrastructure and streamline your deployment processes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span>abhijeetraj646@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>+91 6299070026</span>
                </div>
              </div>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 focus:border-gray-500 outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 focus:border-gray-500 outline-none transition-colors"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 focus:border-gray-500 outline-none transition-colors resize-none"
              />
              <button className="w-full bg-gray-900 text-white py-3 hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>© 2025 Abhijeet Raj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}