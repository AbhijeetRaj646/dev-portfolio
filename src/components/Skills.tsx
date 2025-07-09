import React from 'react';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Shield, 
  Terminal, 
  Database,
  Server
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: [
      { name: "Python", level: 80, color: "bg-blue-500" },
      { name: "Java", level: 70, color: "bg-red-500" },
      { name: "Bash/Shell", level: 50, color: "bg-gray-700" },
      { name: "C", level: 50, color: "bg-blue-600" }
    ]
  },
  {
    title: "Containerization & Orchestration",
    icon: Container,
    skills: [
      { name: "Docker", level: 80, color: "bg-blue-500" },
      { name: "Kubernetes", level: 80, color: "bg-blue-600" },
      { name: "Docker Swarm", level: 75, color: "bg-blue-400" },
      { name: "Helm", level: 75, color: "bg-indigo-500" }
    ]
  },
  {
    title: "Cloud Services (AWS)",
    icon: Cloud,
    skills: [
      { name: "EKS", level: 85, color: "bg-orange-500" },
      { name: "EC2", level: 90, color: "bg-orange-600" },
      { name: "S3", level: 85, color: "bg-green-500" },
      { name: "VPC & Route 53", level: 80, color: "bg-purple-500" }
    ]
  },
  {
    title: "CI/CD",
    icon: Server,
    skills: [
      { name: "Jenkins Pipelines", level: 90, color: "bg-blue-500" },
      { name: "Argo CD", level: 50, color: "bg-orange-600" },
      { name: "Github", level: 95, color: "bg-red-500" }
    ]
  },
  {
    title: "Monitoring & Logging",
    icon: Monitor,
    skills: [
      { name: "Prometheus", level: 85, color: "bg-red-500" },
      { name: "Grafana", level: 90, color: "bg-orange-500" },
      { name: "Grafana Loki", level: 80, color: "bg-yellow-500" },
      { name: "Promtail", level: 75, color: "bg-blue-500" }
    ]
  },
  {
    title: "Database & Additional Tools",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 80, color: "bg-blue-600" },
      { name: "MySQL", level: 75, color: "bg-blue-500" },
      { name: "JFrog Artifactory", level: 85, color: "bg-green-500" },
      { name: "Traefik", level: 80, color: "bg-purple-500" }
    ]
  }
];

const additionalSkills = [
  "RESTful Web Services",
  "TCP/IP, HTTP/HTTPS, DNS",
  "Load Balancing",
  "Linux & Windows",
  "SonarQube",
  "Trivy Security Scanning",
  "Agile Methodology"
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise in DevOps tools and technologies with hands-on experience 
            in cloud infrastructure management and automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Technologies & Concepts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}