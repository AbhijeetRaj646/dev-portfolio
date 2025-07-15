import React, { useState } from 'react';
import { ExternalLink, Github, Play, GitBranch, Shield, Monitor, Clock, Users, Target, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Automated Full Stack CI/CD with Infrastructure as Code",
    description: "Comprehensive end-to-end CI/CD pipeline implementation with infrastructure automation, security scanning, and continuous deployment using modern DevOps practices.",
    longDescription: "Built a complete DevOps solution that automates the entire software delivery lifecycle from code commit to production deployment. Implemented infrastructure as code using Terraform, integrated security scanning with SonarQube and Trivy, and established GitOps practices with Argo CD.",
    technologies: ["Jenkins", "Terraform", "SonarQube", "Trivy", "Docker", "AWS ECR", "Argo CD", "Kubernetes"],
    features: [
      "Multi-stage Jenkins pipelines for frontend and backend applications",
      "Terraform integration for automated infrastructure provisioning",
      "SonarQube static code analysis and quality gates",
      "Trivy security scanning for vulnerability detection",
      "Automated Docker image creation and ECR push",
      "GitOps continuous deployment with Argo CD",
      "End-to-end automation and comprehensive monitoring"
    ],
    metrics: {
      "Deployment Automation": "100%",
      "Security Coverage": "Complete",
      "Time Saved": "80%",
      "Infrastructure": "As Code"
    },
    impact: {
      "Deployment Time": "Reduced from 4 hours to 15 minutes",
      "Security Issues": "95% reduction in production vulnerabilities", 
      "Developer Productivity": "3x faster feature delivery"
    },
    icon: GitBranch,
    color: "from-blue-500 to-cyan-500",
    category: "DevOps Automation"
  },
  {
    title: "Infrastructure Monitoring with Grafana and Slack Integration",
    description: "Comprehensive monitoring solution with custom dashboards, real-time alerting, and team collaboration through Slack integration for enhanced incident response.",
    longDescription: "Designed and implemented a complete observability stack that provides real-time insights into infrastructure health and application performance. Created custom Grafana dashboards and integrated intelligent alerting with Slack for rapid incident response.",
    technologies: ["Grafana", "Prometheus", "Slack API", "Custom Dashboards", "Alert Manager", "Promtail", "Loki"],
    features: [
      "Custom Grafana dashboards for infrastructure and application metrics",
      "Real-time monitoring of CPU, memory, disk I/O, and network performance",
      "Prometheus data source integration with custom exporters",
      "Intelligent alerting rules with escalation policies",
      "Slack integration for instant team notifications",
      "Log aggregation and analysis with Grafana Loki",
      "Enhanced incident response workflows and runbooks"
    ],
    metrics: {
      "Response Time": "Real-time",
      "Alert Accuracy": "95%+",
      "MTTR": "50% faster",
      "Team Collaboration": "Enhanced"
    },
    impact: {
      "Incident Detection": "90% faster issue identification",
      "Downtime": "Reduced by 70%",
      "Team Response": "Automated notification system"
    },
    icon: Monitor,
    color: "from-green-500 to-emerald-500",
    category: "Monitoring & Observability"
  },
  {
    title: "Enterprise Kubernetes Security & Backup Automation",
    description: "Production-ready Kubernetes security implementation with automated backup solutions, disaster recovery processes, and comprehensive RBAC configuration.",
    longDescription: "Implemented enterprise-grade security measures for Kubernetes clusters including RBAC, network policies, and automated backup strategies. Created disaster recovery procedures and compliance frameworks for production workloads.",
    technologies: ["Kubernetes", "RBAC", "CronJobs", "AWS S3", "PostgreSQL", "Jenkins", "Velero", "Network Policies"],
    features: [
      "Role-Based Access Control (RBAC) implementation with least privilege",
      "Automated Jenkins and PostgreSQL database backups",
      "Kubernetes CronJobs for scheduled maintenance operations",
      "AWS S3 integration for secure, encrypted backup storage",
      "Disaster recovery process automation and testing",
      "High availability configuration across multiple AZs",
      "Security best practices and compliance frameworks"
    ],
    metrics: {
      "Security": "RBAC Enabled",
      "Backup Automation": "100%",
      "Recovery Time": "Minimized",
      "Compliance": "SOC2 Ready"
    },
    impact: {
      "Security Posture": "Zero security incidents post-implementation",
      "Backup Reliability": "99.9% success rate",
      "Recovery Time": "RTO reduced to 30 minutes"
    },
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    category: "Security & Compliance"
  }
];

const categories = ["All", "DevOps Automation", "Monitoring & Observability", "Security & Compliance"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations showcasing DevOps expertise and innovative solutions 
            in cloud infrastructure, automation, and operational excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${project.color} p-4 rounded-2xl shadow-lg`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {expandedProject === index ? project.longDescription : project.description}
                      </p>
                      
                      <button
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mt-3 transition-colors"
                      >
                        <span>{expandedProject === index ? 'Show Less' : 'Read More'}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${expandedProject === index ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>
                  
                  {expandedProject === index && (
                    <div className="animate-fadeInUp">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-600" />
                        Implementation Details
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="text-blue-600 mr-3 mt-1 text-lg">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Impact Metrics */}
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-purple-600" />
                          Business Impact
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {Object.entries(project.impact).map(([key, value], impactIndex) => (
                            <div key={impactIndex} className="text-center">
                              <div className="text-sm text-gray-600 mb-1">{key}</div>
                              <div className="font-semibold text-purple-700">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition-shadow cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                      Key Achievements
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(project.metrics).map(([metric, value], metricIndex) => (
                        <div key={metricIndex} className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm font-medium">{metric}</span>
                          <span className="font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 text-white`}>
                    <h4 className="font-semibold mb-4 text-white/90">Project Stats</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm">Complexity</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-white' : 'bg-white/30'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm">Duration</span>
                        <span className="text-white font-medium">2-3 months</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-sm">Team Size</span>
                        <span className="text-white font-medium">3-5 members</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <Play className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Interested in Similar Solutions?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              These projects represent just a fraction of what's possible. Let's discuss how we can 
              implement similar solutions for your infrastructure needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Discuss Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}