import React, { useState } from 'react';
import { Cloud, Code, Shield, Mail, Phone, MapPin, Github, Linkedin, Download, Sparkles, Zap } from 'lucide-react';

export default function GlassmorphismTemplate() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Abhijeet Raj
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  DevOps Engineer &{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Cloud Architect
                  </span>
                </h1>
                <p className="text-xl text-white/80 mb-6 leading-relaxed">
                  Crafting scalable cloud infrastructures with 2+ years of expertise in 
                  Kubernetes, AWS, and modern DevOps practices. Passionate about automation 
                  and building resilient systems.
                </p>
                
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex items-center space-x-2 backdrop-blur-sm bg-gradient-to-r from-green-400/20 to-blue-400/20 px-4 py-2 rounded-full border border-green-400/30">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">2+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 backdrop-blur-sm bg-gradient-to-r from-purple-400/20 to-pink-400/20 px-4 py-2 rounded-full border border-purple-400/30">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-white text-sm">10+ Projects</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl">
                    Download Resume
                  </button>
                  <button className="backdrop-blur-sm bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all">
                    View Projects
                  </button>
                </div>
              </div>

              {/* Contact Info Glass Card */}
              <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/80">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">abhijeetraj646@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span className="text-sm">+91 6299070026</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">Baner, Pune (Open to relocate)</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-4">
                  <a href="#" className="backdrop-blur-sm bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="backdrop-blur-sm bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Skills */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="backdrop-blur-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-400/30 hover:scale-105 transition-transform">
                  <Cloud className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Cloud Expert</h3>
                  <p className="text-white/70 text-sm">AWS, Azure, GCP</p>
                </div>
                
                <div className="backdrop-blur-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl p-6 border border-green-400/30 hover:scale-105 transition-transform">
                  <Code className="w-8 h-8 text-green-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Kubernetes</h3>
                  <p className="text-white/70 text-sm">Orchestration</p>
                </div>
                
                <div className="backdrop-blur-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-400/30 hover:scale-105 transition-transform">
                  <Shield className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">DevSecOps</h3>
                  <p className="text-white/70 text-sm">Security First</p>
                </div>
                
                <div className="backdrop-blur-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-400/30 hover:scale-105 transition-transform">
                  <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Automation</h3>
                  <p className="text-white/70 text-sm">CI/CD Pipelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-2">Software Engineer</h3>
                <p className="text-purple-300 font-medium mb-4">Realthingks • July 2023 - Present</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Key Achievements</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Implemented RBAC in Kubernetes clusters</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Automated backup processes for critical services</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>Reduced debugging time by 50%</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Jenkins'].map((tech) => (
                        <span
                          key={tech}
                          className="backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full text-xs text-white border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CI/CD Pipeline Automation",
                description: "End-to-end automation with security scanning and infrastructure as code",
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-400/30",
                tags: ["Jenkins", "Terraform", "Docker", "AWS"]
              },
              {
                title: "Kubernetes Security Platform",
                description: "Production-ready security implementation with automated backups",
                gradient: "from-purple-500/20 to-pink-500/20", 
                border: "border-purple-400/30",
                tags: ["Kubernetes", "RBAC", "AWS S3", "CronJobs"]
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`backdrop-blur-lg bg-gradient-to-br ${project.gradient} rounded-3xl p-8 border ${project.border} hover:scale-105 transition-all duration-300 cursor-pointer`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full text-xs text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className={`text-white font-medium transition-all ${
                  hoveredProject === index ? 'translate-x-2' : ''
                }`}>
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Cloud & Infrastructure",
                skills: [
                  { name: "AWS", level: 90 },
                  { name: "Kubernetes", level: 85 },
                  { name: "Docker", level: 88 },
                  { name: "Terraform", level: 82 }
                ],
                gradient: "from-blue-500/20 to-cyan-500/20",
                border: "border-blue-400/30"
              },
              {
                category: "CI/CD & Automation",
                skills: [
                  { name: "Jenkins", level: 92 },
                  { name: "Argo CD", level: 70 },
                  { name: "GitHub Actions", level: 75 },
                  { name: "Python", level: 80 }
                ],
                gradient: "from-green-500/20 to-emerald-500/20",
                border: "border-green-400/30"
              },
              {
                category: "Monitoring & Security",
                skills: [
                  { name: "Prometheus", level: 85 },
                  { name: "Grafana", level: 90 },
                  { name: "SonarQube", level: 78 },
                  { name: "Trivy", level: 80 }
                ],
                gradient: "from-purple-500/20 to-pink-500/20",
                border: "border-purple-400/30"
              }
            ].map((category, index) => (
              <div
                key={index}
                className={`backdrop-blur-lg bg-gradient-to-br ${category.gradient} rounded-3xl p-8 border ${category.border}`}
              >
                <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-white/90 text-sm">{skill.name}</span>
                        <span className="text-white/70 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to collaborate?</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Let's discuss how I can help optimize your infrastructure and streamline 
                your deployment processes with modern DevOps practices.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">abhijeetraj646@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+91 6299070026</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 border border-white/20">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                />
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Abhijeet Raj. Crafted with passion and modern technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}