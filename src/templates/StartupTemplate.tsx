import React, { useState } from 'react';
import { 
  TrendingUp, 
  Zap, 
  Users, 
  Rocket, 
  Target, 
  DollarSign,
  BarChart3,
  Award,
  ArrowUpRight,
  Calendar,
  MapPin,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Play,
  CheckCircle
} from 'lucide-react';

export default function StartupTemplate() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    { label: "System Uptime", value: "99.9%", change: "+0.5%", color: "green" },
    { label: "Debug Time Reduction", value: "50%", change: "+25%", color: "blue" },
    { label: "Deployment Automation", value: "100%", change: "+100%", color: "purple" },
    { label: "Projects Delivered", value: "10+", change: "+3", color: "orange" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AR</span>
              </div>
              <span className="font-semibold text-gray-900">Abhijeet Raj</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors">Product</a>
              <a href="#traction" className="text-gray-600 hover:text-gray-900 transition-colors">Traction</a>
              <a href="#team" className="text-gray-600 hover:text-gray-900 transition-colors">Team</a>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Now Available for Hire</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Building the Future of
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
                Cloud Infrastructure
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              DevOps Engineer transforming how companies deploy, scale, and secure their applications. 
              2+ years of proven experience reducing deployment time by 50% and achieving 99.9% uptime.
            </p>
            
            <div className="flex justify-center space-x-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
                Download Resume
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                  activeMetric === index
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveMetric(index)}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600 text-sm mb-2">{metric.label}</div>
                <div className={`text-sm font-medium flex items-center space-x-1 text-${metric.color}-600`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-4">Trusted by modern tech companies</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">Realthingks</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-gray-500">AWS Certified</div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="text-gray-500">Kubernetes Expert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Product: DevOps Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to cloud infrastructure that reduces costs, 
              improves reliability, and accelerates development cycles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Features</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Infrastructure as Code",
                    description: "Terraform-powered infrastructure provisioning with version control and automated rollbacks",
                    icon: "🏗️"
                  },
                  {
                    title: "Zero-Downtime Deployments",
                    description: "Blue-green deployment strategies ensuring continuous availability during updates",
                    icon: "🚀"
                  },
                  {
                    title: "Security-First Architecture",
                    description: "RBAC implementation, automated security scanning, and compliance monitoring",
                    icon: "🔒"
                  },
                  {
                    title: "Observability Suite",
                    description: "Comprehensive monitoring with Prometheus, Grafana, and centralized logging",
                    icon: "📊"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "AWS", category: "Cloud", level: 90 },
                  { name: "Kubernetes", category: "Orchestration", level: 85 },
                  { name: "Docker", category: "Containers", level: 88 },
                  { name: "Jenkins", category: "CI/CD", level: 92 },
                  { name: "Terraform", category: "IaC", level: 82 },
                  { name: "Prometheus", category: "Monitoring", level: 85 }
                ].map((tech, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-gray-900 text-sm">{tech.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{tech.category}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Traction & Results</h2>
            <p className="text-xl text-gray-600">Proven track record of delivering measurable business impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "CI/CD Pipeline Automation",
                company: "Realthingks",
                impact: "50% faster deployments",
                description: "Built end-to-end automation pipeline reducing manual deployment time from 4 hours to 30 minutes",
                metrics: ["100% automation", "Zero rollback failures", "Security integrated"],
                tech: ["Jenkins", "Terraform", "Docker", "AWS ECR"]
              },
              {
                title: "Kubernetes Security Platform",
                company: "Realthingks", 
                impact: "99.9% uptime achieved",
                description: "Implemented production-grade security with RBAC and automated backup systems",
                metrics: ["RBAC compliance", "Automated backups", "HA configuration"],
                tech: ["Kubernetes", "RBAC", "AWS S3", "CronJobs"]
              }
            ].map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <div className="text-sm text-gray-500">{project.company}</div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.impact}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Key Results</h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Growth Timeline</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              <div className="space-y-8">
                {[
                  { date: "July 2023", title: "Joined Realthingks", description: "Started as Software Engineer focusing on DevOps" },
                  { date: "Oct 2023", title: "First Major Win", description: "Implemented RBAC reducing security incidents by 80%" },
                  { date: "Jan 2024", title: "Automation Milestone", description: "Achieved 100% deployment automation" },
                  { date: "June 2024", title: "Performance Breakthrough", description: "Reduced debugging time by 50%" },
                  { date: "Present", title: "Ready for Next Challenge", description: "Open to new opportunities and bigger impact" }
                ].map((milestone, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                      {index + 1}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-sm text-orange-600 font-medium mb-1">{milestone.date}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Engineer</h2>
            <p className="text-xl text-gray-600">Passionate about building scalable infrastructure and mentoring teams</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                    AR
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Abhijeet Raj</h3>
                    <p className="text-lg text-orange-600 font-medium mb-3">DevOps Engineer & Cloud Architect</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Baner, Pune</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>2+ years experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Background</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Started my journey in DevOps with a passion for automation and scalability. 
                      At Realthingks, I've led infrastructure modernization efforts that have 
                      significantly improved deployment efficiency and system reliability.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Vision</h4>
                    <p className="text-gray-600 leading-relaxed">
                      I believe the future of software delivery lies in fully automated, 
                      self-healing infrastructure that allows developers to focus on building 
                      great products while ensuring security and reliability by default.
                    </p>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Contact */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Key Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">2+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-medium">10+ Delivered</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certifications</span>
                    <span className="font-medium">AWS Certified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability</span>
                    <span className="font-medium text-green-600">Available</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500 text-white rounded-2xl p-6">
                <h4 className="font-semibold mb-4">Ready to Collaborate?</h4>
                <p className="text-orange-100 mb-4 text-sm">
                  Let's discuss how I can help scale your infrastructure and improve your deployment processes.
                </p>
                <div className="space-y-2 text-sm">
                  <div>📧 abhijeetraj646@gmail.com</div>
                  <div>📱 +91 6299070026</div>
                  <div>📍 Available for remote/hybrid</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Infrastructure?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's build something amazing together. I'm available for full-time opportunities and consulting projects.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Schedule a Call
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AR</span>
                </div>
                <span className="font-semibold">Abhijeet Raj</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                DevOps Engineer passionate about building scalable cloud infrastructure 
                and helping teams deliver better software faster.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#product" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#traction" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Contact</a></li>
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
            <p>© 2025 Abhijeet Raj. Building the future, one deployment at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}