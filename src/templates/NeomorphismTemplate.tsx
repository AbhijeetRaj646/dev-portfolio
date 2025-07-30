import React from 'react';
import { Cloud, Code, Shield, Zap, Mail, Phone, MapPin, Github, Linkedin, Download, Star, TrendingUp } from 'lucide-react';

export default function NeomorphismTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <header className="relative">
        <div className="bg-gray-100 shadow-[inset_8px_8px_16px_#d1d1d1,inset_-8px_-8px_16px_#ffffff] rounded-3xl m-6 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gray-100 rounded-full shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] flex items-center justify-center">
                <span className="text-xl font-bold text-gray-700">AR</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Abhijeet Raj</h1>
                <p className="text-blue-600 font-medium">DevOps Engineer</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            <button className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff]">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Cloud Infrastructure
                  <span className="block text-blue-600">Specialist</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Transforming complex infrastructure challenges into scalable, automated solutions. 
                  Specializing in Kubernetes orchestration, CI/CD optimization, and cloud-native architectures.
                </p>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-xl shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">2+ Years</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-xl shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]">
                    <Star className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Expert Level</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] transition-all">
                    View Projects
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-2xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] transition-all">
                    Contact Me
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-100 rounded-3xl p-6 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff]">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                      <Mail className="w-4 h-4 text-blue-500" />
                    </div>
                    <span className="text-gray-600">abhijeetraj646@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                      <Phone className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-gray-600">+91 6299070026</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-purple-500" />
                    </div>
                    <span className="text-gray-600">Baner, Pune</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Cloud, title: "Cloud Expert", desc: "AWS, Azure", color: "blue" },
                { icon: Code, title: "Kubernetes", desc: "Orchestration", color: "green" },
                { icon: Shield, title: "DevSecOps", desc: "Security First", color: "purple" },
                { icon: TrendingUp, title: "Automation", desc: "CI/CD", color: "orange" }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-3xl p-6 shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] transition-all duration-300 text-center"
                >
                  <div className={`w-12 h-12 bg-gray-100 rounded-2xl shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center mx-auto mb-4`}>
                    <skill.icon className={`w-6 h-6 text-${skill.color}-500`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Cloud & Infrastructure",
                skills: [
                  { name: "AWS", level: 90 },
                  { name: "Kubernetes", level: 85 },
                  { name: "Docker", level: 88 },
                  { name: "Terraform", level: 82 }
                ]
              },
              {
                category: "CI/CD & Automation",
                skills: [
                  { name: "Jenkins", level: 92 },
                  { name: "Argo CD", level: 70 },
                  { name: "GitHub Actions", level: 75 },
                  { name: "Python", level: 80 }
                ]
              },
              {
                category: "Monitoring & Security",
                skills: [
                  { name: "Prometheus", level: 85 },
                  { name: "Grafana", level: 90 },
                  { name: "SonarQube", level: 78 },
                  { name: "Trivy", level: 80 }
                ]
              }
            ].map((section, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff]"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6">{section.category}</h3>
                <div className="space-y-4">
                  {section.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full shadow-[inset_2px_2px_4px_#d1d1d1,inset_-2px_-2px_4px_#ffffff]">
                        <div
                          className="h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-[2px_2px_4px_#d1d1d1,-2px_-2px_4px_#ffffff] transition-all duration-1000"
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

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CI/CD Pipeline Automation",
                description: "Comprehensive automation with security scanning and infrastructure as code",
                tags: ["Jenkins", "Terraform", "Docker", "AWS"],
                metrics: ["100% Automation", "Security Integrated", "Zero Downtime"]
              },
              {
                title: "Kubernetes Security Platform",
                description: "Production-ready security implementation with automated backups",
                tags: ["Kubernetes", "RBAC", "AWS S3", "CronJobs"],
                metrics: ["RBAC Enabled", "Automated Backups", "HA Configuration"]
              }
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff] hover:shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-xl text-sm shadow-[inset_2px_2px_4px_#d1d1d1,inset_-2px_-2px_4px_#ffffff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-blue-500 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff]">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Ready to collaborate?</h3>
              <p className="text-gray-600 mb-8">
                Let's discuss how I can help optimize your infrastructure and streamline 
                your deployment processes.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <Github className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <p className="text-gray-600">github.com/AbhijeetRaj646</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <p className="text-gray-600">linkedin.com/in/abhijeetraj646</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-3xl p-8 shadow-[12px_12px_24px_#d1d1d1,-12px_-12px_24px_#ffffff]">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gray-100 rounded-2xl shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-500 focus:outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gray-100 rounded-2xl shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-500 focus:outline-none transition-all"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 bg-gray-100 rounded-2xl shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff] text-gray-700 placeholder-gray-500 focus:outline-none resize-none transition-all"
                />
                <button className="w-full px-6 py-4 bg-blue-500 text-white rounded-2xl shadow-[4px_4px_8px_#d1d1d1,-4px_-4px_8px_#ffffff] hover:bg-blue-600 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-gray-100 rounded-3xl p-6 shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]">
            <p className="text-gray-600">© 2025 Abhijeet Raj. Crafted with neomorphic design principles.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}