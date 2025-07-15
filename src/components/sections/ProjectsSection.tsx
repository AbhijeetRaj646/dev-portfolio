import React, { useState } from 'react';
import { 
  GitBranch, 
  Monitor, 
  Shield, 
  ExternalLink, 
  Github, 
  Clock,
  Users,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Automated Full Stack CI/CD with Infrastructure as Code",
    description: "Comprehensive end-to-end CI/CD pipeline implementation with infrastructure automation, security scanning, and continuous deployment using modern DevOps practices.",
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
      "Deployment Time": "Reduced from 4 hours to 15 minutes",
      "Security Issues": "95% reduction in production vulnerabilities",
      "Developer Productivity": "3x faster feature delivery"
    },
    icon: GitBranch,
    category: "DevOps Automation",
    complexity: 5,
    duration: "3 months",
    teamSize: "4 members"
  },
  {
    id: 2,
    title: "Infrastructure Monitoring with Grafana and Slack Integration",
    description: "Comprehensive monitoring solution with custom dashboards, real-time alerting, and team collaboration through Slack integration for enhanced incident response.",
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
      "Incident Detection": "90% faster issue identification",
      "Downtime": "Reduced by 70%",
      "Team Response": "Automated notification system"
    },
    icon: Monitor,
    category: "Monitoring & Observability",
    complexity: 4,
    duration: "2 months",
    teamSize: "3 members"
  },
  {
    id: 3,
    title: "Enterprise Kubernetes Security & Backup Automation",
    description: "Production-ready Kubernetes security implementation with automated backup solutions, disaster recovery processes, and comprehensive RBAC configuration.",
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
      "Security Posture": "Zero security incidents post-implementation",
      "Backup Reliability": "99.9% success rate",
      "Recovery Time": "RTO reduced to 30 minutes"
    },
    icon: Shield,
    category: "Security & Compliance",
    complexity: 5,
    duration: "3 months",
    teamSize: "5 members"
  }
];

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Real-world implementations showcasing DevOps expertise and innovative solutions 
            in cloud infrastructure, automation, and operational excellence.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              {/* Project Header */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleProject(project.id)}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <span>{expandedProject === project.id ? 'Show Less' : 'Details'}</span>
                    {expandedProject === project.id ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      {'★'.repeat(project.complexity)}
                      {'☆'.repeat(5 - project.complexity)}
                    </div>
                    <div className="text-sm text-gray-600">Complexity</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="font-medium text-gray-900">{project.duration}</span>
                    </div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="font-medium text-gray-900">{project.teamSize}</span>
                    </div>
                    <div className="text-sm text-gray-600">Team Size</div>
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedProject === project.id && (
                <div className="border-t border-gray-100 p-8 bg-gray-50">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-600" />
                        Implementation Details
                      </h4>
                      <ul className="space-y-3">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Impact */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-green-600" />
                        Business Impact
                      </h4>
                      <div className="space-y-4">
                        {Object.entries(project.metrics).map(([key, value], index) => (
                          <div key={index} className="bg-white p-4 rounded-lg">
                            <div className="text-sm text-gray-600 mb-1">{key}</div>
                            <div className="font-semibold text-gray-900">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 mt-8 pt-6 border-t border-gray-200">
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Summary</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-sm text-gray-600">Months Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}