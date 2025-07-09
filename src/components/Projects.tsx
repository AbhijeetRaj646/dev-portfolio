import React from 'react';
import { ExternalLink, Github, Play, GitBranch, Shield, Monitor } from 'lucide-react';

const projects = [
  {
    title: "Automated Full Stack CI/CD with Infrastructure as Code",
    description: "Comprehensive CI/CD pipeline implementation with infrastructure automation, security scanning, and continuous deployment using modern DevOps practices.",
    technologies: ["Jenkins", "Terraform", "SonarQube", "Trivy", "Docker", "AWS ECR", "Argo CD"],
    features: [
      "Jenkins pipelines for frontend and backend applications",
      "Terraform integration for infrastructure provisioning",
      "SonarQube static code analysis integration",
      "Trivy security scanning for vulnerabilities",
      "Automated Docker image creation and ECR push",
      "Continuous deployment with Argo CD",
      "End-to-end automation and monitoring"
    ],
    metrics: {
      "Deployment Automation": "100%",
      "Security Scanning": "Integrated",
      "Infrastructure": "As Code"
    },
    icon: GitBranch
  },
  {
    title: "Infrastructure Monitoring with Grafana and Slack Integration",
    description: "Comprehensive monitoring solution with custom dashboards, real-time alerting, and team collaboration through Slack integration.",
    technologies: ["Grafana", "Prometheus", "Slack API", "Custom Dashboards", "Alert Manager"],
    features: [
      "Custom Grafana dashboards for infrastructure metrics",
      "CPU, memory, disk I/O, and network monitoring",
      "Prometheus data source integration",
      "Real-time data collection and analysis",
      "Advanced alerting rules and thresholds",
      "Slack integration for instant notifications",
      "Enhanced incident response workflows"
    ],
    metrics: {
      "Response Time": "Real-time",
      "Alert Accuracy": "95%+",
      "Team Collaboration": "Enhanced"
    },
    icon: Monitor
  },
  {
    title: "Enterprise Kubernetes Security & Backup Automation",
    description: "Production-ready Kubernetes security implementation with automated backup solutions and disaster recovery processes.",
    technologies: ["Kubernetes", "RBAC", "CronJobs", "AWS S3", "PostgreSQL", "Jenkins"],
    features: [
      "Role-Based Access Control (RBAC) implementation",
      "Automated Jenkins and PostgreSQL backups",
      "Kubernetes CronJobs for scheduled operations",
      "AWS S3 integration for secure backup storage",
      "Disaster recovery process automation",
      "High availability configuration",
      "Security best practices implementation"
    ],
    metrics: {
      "Security": "RBAC Enabled",
      "Backup Automation": "100%",
      "Recovery Time": "Minimized"
    },
    icon: Shield
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world implementations showcasing DevOps expertise and innovative solutions 
            in cloud infrastructure and automation
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Implementation Details</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <div className="space-y-3">
                      {Object.entries(project.metrics).map(([metric, value], metricIndex) => (
                        <div key={metricIndex} className="flex justify-between items-center">
                          <span className="text-gray-600 text-sm">{metric}</span>
                          <span className="font-semibold text-green-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    {/* <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      <Play className="w-4 h-4" />
                      <span>Details</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}