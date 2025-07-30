import React from 'react';
import { 
  User, 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  Download,
  Building,
  TrendingUp,
  Shield,
  Settings
} from 'lucide-react';

export default function CorporateTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Abhijeet Raj</h1>
                <p className="text-blue-600 font-medium">DevOps Engineer</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#profile" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Profile</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Experience</a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Expertise</a>
              <a href="#achievements" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Achievements</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="profile" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Senior DevOps Engineer & Cloud Infrastructure Specialist
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Results-driven DevOps professional with 2+ years of experience in designing, 
                  implementing, and managing scalable cloud infrastructures. Proven track record 
                  of optimizing CI/CD pipelines, reducing deployment times, and enhancing system 
                  reliability across enterprise environments.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <span className="text-2xl font-bold text-gray-900">50%</span>
                  </div>
                  <p className="text-gray-600 font-medium">Improved Debug Time</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    <span className="text-2xl font-bold text-gray-900">99.9%</span>
                  </div>
                  <p className="text-gray-600 font-medium">System Uptime</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                  <div className="flex items-center space-x-3 mb-2">
                    <Settings className="w-6 h-6 text-purple-600" />
                    <span className="text-2xl font-bold text-gray-900">10+</span>
                  </div>
                  <p className="text-gray-600 font-medium">Projects Delivered</p>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Competencies</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Cloud Architecture (AWS, Azure)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Container Orchestration (Kubernetes)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Infrastructure as Code (Terraform)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">CI/CD Pipeline Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Monitoring & Observability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-700">Security Implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact & Professional Info */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Current Position</p>
                      <p className="text-gray-600 text-sm">Software Engineer at Realthingks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Experience</p>
                      <p className="text-gray-600 text-sm">2+ Years (July 2023 - Present)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600 text-sm">Baner, Pune, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:abhijeetraj646@gmail.com" className="text-blue-600 text-sm hover:underline">
                        abhijeetraj646@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:+916299070026" className="text-blue-600 text-sm hover:underline">
                        +91 6299070026
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Availability Status</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-green-700 font-medium">Open to Opportunities</span>
                </div>
                <p className="text-green-700 text-sm">
                  Currently exploring new opportunities in DevOps and Cloud Engineering roles. 
                  Available for immediate hiring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Experience</h2>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">Software Engineer</h3>
                    <p className="text-xl text-blue-600 font-medium">Realthingks</p>
                    <p className="text-gray-600">Remote/Hybrid</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-900 font-medium">July 2023 - Present</p>
                    <p className="text-gray-600 text-sm">1 year 6 months</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Lead DevOps initiatives focusing on cloud infrastructure automation, Kubernetes management, 
                    and CI/CD pipeline optimization. Responsible for implementing security best practices and 
                    ensuring high availability of production systems.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span className="text-gray-700">Designed and implemented RBAC for Kubernetes clusters</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span className="text-gray-700">Developed automated backup solutions for Jenkins and PostgreSQL</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span className="text-gray-700">Established comprehensive monitoring with Prometheus and Grafana</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span className="text-gray-700">Implemented centralized log monitoring with Grafana Loki</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-green-600 mt-1" />
                        <span className="text-gray-700">Reduced debugging time by 50%</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-green-600 mt-1" />
                        <span className="text-gray-700">Delivered 10+ successful sprints</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-green-600 mt-1" />
                        <span className="text-gray-700">Improved system reliability to 99.9% uptime</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-green-600 mt-1" />
                        <span className="text-gray-700">Eliminated manual backup processes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section id="expertise" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Cloud & Infrastructure",
                color: "blue",
                skills: [
                  { name: "Amazon Web Services (AWS)", level: "Advanced", years: "2+ years" },
                  { name: "Kubernetes", level: "Advanced", years: "2+ years" },
                  { name: "Docker", level: "Expert", years: "2+ years" },
                  { name: "Terraform", level: "Intermediate", years: "1+ years" }
                ]
              },
              {
                category: "CI/CD & Automation",
                color: "green",
                skills: [
                  { name: "Jenkins", level: "Expert", years: "2+ years" },
                  { name: "Argo CD", level: "Intermediate", years: "1 year" },
                  { name: "GitHub Actions", level: "Intermediate", years: "1+ years" },
                  { name: "Python Scripting", level: "Advanced", years: "2+ years" }
                ]
              },
              {
                category: "Monitoring & Security",
                color: "purple",
                skills: [
                  { name: "Prometheus", level: "Advanced", years: "2+ years" },
                  { name: "Grafana", level: "Expert", years: "2+ years" },
                  { name: "SonarQube", level: "Intermediate", years: "1+ years" },
                  { name: "Trivy Security", level: "Intermediate", years: "1+ years" }
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className={`text-xl font-semibold mb-6 text-${section.color}-600`}>{section.category}</h3>
                <div className="space-y-4">
                  {section.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-gray-900 text-sm">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded bg-${section.color}-100 text-${section.color}-700`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs">{skill.years}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Achievements */}
      <section id="achievements" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Projects & Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CI/CD Pipeline Automation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive CI/CD pipeline implementation with infrastructure automation, 
                security scanning, and continuous deployment using modern DevOps practices.
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Business Impact:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 100% deployment automation</li>
                  <li>• Integrated security scanning</li>
                  <li>• Infrastructure as Code implementation</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Jenkins', 'Terraform', 'SonarQube', 'Trivy', 'Docker', 'AWS ECR'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kubernetes Security & Backup</h3>
              <p className="text-gray-600 mb-4">
                Production-ready Kubernetes security implementation with automated backup 
                solutions and disaster recovery processes.
              </p>
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Business Impact:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• RBAC security implementation</li>
                  <li>• 100% backup automation</li>
                  <li>• Minimized recovery time</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Kubernetes', 'RBAC', 'CronJobs', 'AWS S3', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how I can help optimize your infrastructure and streamline 
            your deployment processes with proven DevOps expertise.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Abhijeet Raj</h3>
              <p className="text-gray-400">
                DevOps Engineer specializing in cloud infrastructure, automation, 
                and scalable system design.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#profile" className="hover:text-white transition-colors">Professional Profile</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Work Experience</a></li>
                <li><a href="#expertise" className="hover:text-white transition-colors">Technical Skills</a></li>
                <li><a href="#achievements" className="hover:text-white transition-colors">Key Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>abhijeetraj646@gmail.com</p>
                <p>+91 6299070026</p>
                <p>Baner, Pune, India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Abhijeet Raj. All rights reserved. | Professional Portfolio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}