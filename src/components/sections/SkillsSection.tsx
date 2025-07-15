import React from 'react';
import { 
  Terminal, 
  Container, 
  Cloud, 
  Server, 
  Monitor, 
  Shield,
  Award,
  TrendingUp
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: [
      { name: "Python", level: 85, description: "Backend development, automation scripts" },
      { name: "Java", level: 75, description: "Enterprise applications, microservices" },
      { name: "Bash/Shell", level: 90, description: "System automation, scripting" },
      { name: "JavaScript", level: 70, description: "Frontend development, Node.js" }
    ]
  },
  {
    title: "Containerization & Orchestration",
    icon: Container,
    skills: [
      { name: "Docker", level: 90, description: "Container creation, multi-stage builds" },
      { name: "Kubernetes", level: 85, description: "Cluster management, deployments" },
      { name: "Docker Swarm", level: 75, description: "Container orchestration" },
      { name: "Helm", level: 80, description: "Package management for Kubernetes" }
    ]
  },
  {
    title: "Cloud Services (AWS)",
    icon: Cloud,
    skills: [
      { name: "EKS", level: 85, description: "Managed Kubernetes service" },
      { name: "EC2", level: 90, description: "Virtual servers, auto-scaling" },
      { name: "S3", level: 85, description: "Object storage, data management" },
      { name: "VPC & Route 53", level: 80, description: "Networking, DNS management" }
    ]
  },
  {
    title: "CI/CD & DevOps Tools",
    icon: Server,
    skills: [
      { name: "Jenkins", level: 90, description: "Pipeline automation, build management" },
      { name: "Argo CD", level: 75, description: "GitOps continuous deployment" },
      { name: "GitHub Actions", level: 80, description: "CI/CD workflows" },
      { name: "Terraform", level: 85, description: "Infrastructure as Code" }
    ]
  },
  {
    title: "Monitoring & Observability",
    icon: Monitor,
    skills: [
      { name: "Prometheus", level: 85, description: "Metrics collection, alerting" },
      { name: "Grafana", level: 90, description: "Data visualization, dashboards" },
      { name: "Grafana Loki", level: 80, description: "Log aggregation system" },
      { name: "Promtail", level: 75, description: "Log collection agent" }
    ]
  },
  {
    title: "Security & Infrastructure",
    icon: Shield,
    skills: [
      { name: "PostgreSQL", level: 80, description: "Database administration" },
      { name: "SonarQube", level: 85, description: "Code quality analysis" },
      { name: "Trivy", level: 80, description: "Security vulnerability scanning" },
      { name: "RBAC", level: 85, description: "Role-based access control" }
    ]
  }
];

const certifications = [
  { name: "AWS Solutions Architect", status: "In Progress", progress: 75, color: "blue" },
  { name: "Certified Kubernetes Administrator", status: "Planned", progress: 30, color: "purple" },
  { name: "Git and GitHub", status: "Completed", progress: 100, color: "green" },
  { name: "Java Fundamentals", status: "Completed", progress: 100, color: "green" }
];

export default function SkillsSection() {
  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Technical <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive expertise across the DevOps ecosystem with hands-on experience 
            in modern cloud-native technologies and industry best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Certifications & Learning</h2>
              <p className="text-gray-600">Continuous learning journey in cloud and DevOps technologies</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  cert.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  cert.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {cert.status}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      cert.color === 'green' ? 'bg-green-500' :
                      cert.color === 'blue' ? 'bg-blue-500' :
                      'bg-purple-500'
                    }`}
                    style={{ width: `${cert.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{cert.progress}% Complete</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              Always staying updated with the latest technologies and industry best practices
            </p>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Expertise</h3>
            <p className="text-gray-600">
              Pursuing industry-recognized certifications to validate skills and knowledge
            </p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
            <p className="text-gray-600">
              Implementing security best practices across all infrastructure and deployment processes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}