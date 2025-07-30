import React from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, Quote, Award, TrendingUp, Mail, Github, Linkedin } from 'lucide-react';

export default function MagazineTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Masthead */}
      <header className="border-b-4 border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black uppercase tracking-tight text-black mb-2">
              DevOps
              <span className="block text-red-600">ENGINEER</span>
            </h1>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 uppercase tracking-wider">Cloud Infrastructure Specialist</p>
          </div>
          
          <nav className="flex justify-center space-x-8 text-sm uppercase tracking-wide font-medium">
            <a href="#feature" className="text-black hover:text-red-600 transition-colors">Feature Story</a>
            <a href="#projects" className="text-black hover:text-red-600 transition-colors">Case Studies</a>
            <a href="#expertise" className="text-black hover:text-red-600 transition-colors">Tech Stack</a>
            <a href="#interview" className="text-black hover:text-red-600 transition-colors">Interview</a>
          </nav>
        </div>
      </header>

      {/* Feature Story */}
      <section id="feature" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Article */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 text-xs uppercase tracking-wide font-bold">
                    Feature Story
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>January 2025</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                </div>
                
                <h2 className="text-4xl font-black leading-tight text-black mb-6">
                  The DevOps Engineer Who Transformed
                  <span className="text-red-600"> Cloud Infrastructure</span>
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-serif">
                  In an era where cloud infrastructure complexity continues to challenge organizations, 
                  one engineer stands out for his systematic approach to automation and scalability. 
                  Meet Abhijeet Raj, whose innovative solutions have revolutionized deployment processes 
                  and reduced system downtime by an unprecedented 50%.
                </p>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 border-l-4 border-red-600 p-6 mb-8">
                  <Quote className="w-8 h-8 text-red-600 mb-4" />
                  <p className="text-lg font-serif italic text-gray-800">
                    "The key to successful DevOps isn't just automation—it's understanding the entire 
                    ecosystem and building solutions that scale with your organization's growth."
                  </p>
                  <footer className="mt-4 text-sm text-gray-600">— Abhijeet Raj, DevOps Engineer</footer>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">The Infrastructure Revolution</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Based in Baner, Pune, Abhijeet has spent the last two years at Realthingks 
                  architecting cloud solutions that have fundamentally changed how the organization 
                  approaches infrastructure management. His work spans across Kubernetes orchestration, 
                  CI/CD pipeline optimization, and security implementation.
                </p>

                <div className="bg-black text-white p-8 mb-8">
                  <h4 className="text-xl font-bold mb-4 text-red-400">Key Achievements by the Numbers</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">50%</div>
                      <div className="text-sm">Reduction in Debug Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                      <div className="text-sm">System Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">10+</div>
                      <div className="text-sm">Successful Sprints</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4">Innovation in Action</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Raj's approach to DevOps combines traditional engineering principles with cutting-edge 
                  cloud technologies. His implementation of Role-Based Access Control (RBAC) in Kubernetes 
                  clusters has become a model for security-first infrastructure design.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Author Bio */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-wide">About the Engineer</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="font-bold text-black">Abhijeet Raj</p>
                      <p className="text-gray-600 text-sm">Software Engineer at Realthingks</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>2+ years of experience in cloud infrastructure automation and DevOps practices.</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Contact</p>
                    <div className="space-y-1 text-sm">
                      <p className="text-gray-600">abhijeetraj646@gmail.com</p>
                      <p className="text-gray-600">+91 6299070026</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-red-600 text-white p-6">
                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span className="font-bold">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Specialization</span>
                    <span className="font-bold">Cloud & DevOps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="font-bold">Pune, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status</span>
                    <span className="font-bold">Available</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-wide">Connect</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
                    <Github className="w-5 h-5" />
                    <span>GitHub Portfolio</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
                    <Linkedin className="w-5 h-5" />
                    <span>Professional Network</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>Email Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tight">Case Studies</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Infrastructure",
                title: "Automated CI/CD Pipeline Revolution",
                summary: "How one engineer transformed deployment processes with comprehensive automation",
                readTime: "8 min read",
                tags: ["Jenkins", "Terraform", "Docker", "AWS"],
                impact: "100% Deployment Automation"
              },
              {
                category: "Security",
                title: "Kubernetes Security Architecture",
                summary: "Building production-ready security with RBAC and automated backup solutions",
                readTime: "6 min read",
                tags: ["Kubernetes", "RBAC", "AWS S3", "Security"],
                impact: "Enhanced Security Posture"
              }
            ].map((article, index) => (
              <article key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-black text-white px-2 py-1 text-xs uppercase tracking-wide">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-red-600" />
                      <span className="text-sm font-medium text-gray-800">{article.impact}</span>
                    </div>
                    <button className="flex items-center text-red-600 hover:text-red-700 text-sm font-medium">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="expertise" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tight">Technical Arsenal</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Cloud Infrastructure",
                technologies: [
                  { name: "Amazon Web Services", proficiency: "Expert", years: "2+" },
                  { name: "Kubernetes", proficiency: "Advanced", years: "2+" },
                  { name: "Docker", proficiency: "Expert", years: "2+" },
                  { name: "Terraform", proficiency: "Intermediate", years: "1+" }
                ]
              },
              {
                category: "CI/CD & Automation",
                technologies: [
                  { name: "Jenkins", proficiency: "Expert", years: "2+" },
                  { name: "Argo CD", proficiency: "Intermediate", years: "1" },
                  { name: "GitHub Actions", proficiency: "Advanced", years: "1+" },
                  { name: "Python", proficiency: "Advanced", years: "2+" }
                ]
              },
              {
                category: "Monitoring & Security",
                technologies: [
                  { name: "Prometheus", proficiency: "Advanced", years: "2+" },
                  { name: "Grafana", proficiency: "Expert", years: "2+" },
                  { name: "SonarQube", proficiency: "Intermediate", years: "1+" },
                  { name: "Trivy", proficiency: "Intermediate", years: "1+" }
                ]
              }
            ].map((section, index) => (
              <div key={index} className="border border-gray-200">
                <div className="bg-black text-white p-4">
                  <h3 className="font-bold uppercase tracking-wide">{section.category}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {section.technologies.map((tech) => (
                      <div key={tech.name} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-black">{tech.name}</span>
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-1 uppercase">
                            {tech.proficiency}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{tech.years} years experience</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Section */}
      <section id="interview" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tight">Executive Interview</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-4">A conversation about the future of cloud infrastructure</p>
          </div>
          
          <div className="bg-white border border-gray-200 p-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">
                  On Current DevOps Challenges
                </h3>
                <p className="text-gray-700 leading-relaxed font-serif text-lg">
                  "The biggest challenge in DevOps today isn't technical—it's cultural. Organizations 
                  need to embrace automation not as a replacement for human insight, but as an amplifier 
                  of it. When you reduce debugging time by 50%, you're not just saving hours; you're 
                  freeing your team to innovate."
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">
                  On Infrastructure Philosophy
                </h3>
                <p className="text-gray-700 leading-relaxed font-serif text-lg">
                  "I believe in infrastructure that's invisible to developers but invincible in production. 
                  Every automation script, every monitoring dashboard, every security policy should work 
                  seamlessly in the background while providing the foundation for scalable growth."
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-black mb-3 uppercase tracking-wide text-sm">
                  On Future Goals
                </h3>
                <p className="text-gray-700 leading-relaxed font-serif text-lg">
                  "I'm passionate about mentoring the next generation of DevOps engineers and contributing 
                  to open-source projects that democratize cloud infrastructure. The future belongs to 
                  those who can bridge the gap between cutting-edge technology and practical business solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                DevOps <span className="text-red-600">Engineer</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Professional portfolio showcasing cloud infrastructure expertise, 
                automation solutions, and innovative DevOps practices.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wide mb-4 text-red-400">Sections</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#feature" className="hover:text-white transition-colors">Feature Story</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#expertise" className="hover:text-white transition-colors">Tech Stack</a></li>
                <li><a href="#interview" className="hover:text-white transition-colors">Interview</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wide mb-4 text-red-400">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>abhijeetraj646@gmail.com</p>
                <p>+91 6299070026</p>
                <p>Baner, Pune, India</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Abhijeet Raj. Professional Engineering Portfolio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}