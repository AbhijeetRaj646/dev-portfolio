import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Shield, 
  Terminal, 
  Database,
  Server,
  Award,
  TrendingUp
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Terminal,
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "Python", level: 85, color: "bg-blue-500", description: "Backend development, automation scripts" },
      { name: "Java", level: 75, color: "bg-red-500", description: "Enterprise applications, microservices" },
      { name: "Bash/Shell", level: 90, color: "bg-gray-700", description: "System automation, scripting" },
      { name: "JavaScript", level: 70, color: "bg-yellow-500", description: "Frontend development, Node.js" }
    ]
  },
  {
    title: "Containerization & Orchestration",
    icon: Container,
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Docker", level: 90, color: "bg-blue-500", description: "Container creation, multi-stage builds" },
      { name: "Kubernetes", level: 85, color: "bg-blue-600", description: "Cluster management, deployments" },
      { name: "Docker Swarm", level: 75, color: "bg-blue-400", description: "Container orchestration" },
      { name: "Helm", level: 80, color: "bg-indigo-500", description: "Package management for Kubernetes" }
    ]
  },
  {
    title: "Cloud Services (AWS)",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "EKS", level: 85, color: "bg-orange-500", description: "Managed Kubernetes service" },
      { name: "EC2", level: 90, color: "bg-orange-600", description: "Virtual servers, auto-scaling" },
      { name: "S3", level: 85, color: "bg-green-500", description: "Object storage, data management" },
      { name: "VPC & Route 53", level: 80, color: "bg-purple-500", description: "Networking, DNS management" }
    ]
  },
  {
    title: "CI/CD & DevOps Tools",
    icon: Server,
    color: "from-green-500 to-emerald-600",
    skills: [
      { name: "Jenkins", level: 90, color: "bg-blue-500", description: "Pipeline automation, build management" },
      { name: "Argo CD", level: 75, color: "bg-orange-600", description: "GitOps continuous deployment" },
      { name: "GitHub Actions", level: 80, color: "bg-gray-800", description: "CI/CD workflows" },
      { name: "Terraform", level: 85, color: "bg-purple-600", description: "Infrastructure as Code" }
    ]
  },
  {
    title: "Monitoring & Observability",
    icon: Monitor,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Prometheus", level: 85, color: "bg-red-500", description: "Metrics collection, alerting" },
      { name: "Grafana", level: 90, color: "bg-orange-500", description: "Data visualization, dashboards" },
      { name: "Grafana Loki", level: 80, color: "bg-yellow-500", description: "Log aggregation system" },
      { name: "Promtail", level: 75, color: "bg-blue-500", description: "Log collection agent" }
    ]
  },
  {
    title: "Security & Infrastructure",
    icon: Shield,
    color: "from-red-500 to-pink-600",
    skills: [
      { name: "PostgreSQL", level: 80, color: "bg-blue-600", description: "Database administration" },
      { name: "SonarQube", level: 85, color: "bg-blue-500", description: "Code quality analysis" },
      { name: "Trivy", level: 80, color: "bg-green-500", description: "Security vulnerability scanning" },
      { name: "RBAC", level: 85, color: "bg-purple-500", description: "Role-based access control" }
    ]
  }
];

const certifications = [
  {
    title: "AWS Solutions Architect",
    status: "In Progress",
    icon: "🏗️",
    progress: 75
  },
  {
    title: "Certified Kubernetes Administrator",
    status: "Planned",
    icon: "⚙️",
    progress: 30
  },
  {
    title: "Git and GitHub",
    status: "Completed",
    icon: "🔧",
    progress: 100
  },
  {
    title: "Java Fundamentals",
    status: "Completed",
    icon: "☕",
    progress: 100
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={skillsRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skills across the DevOps ecosystem with hands-on experience 
            in modern cloud-native technologies and best practices
          </p>
        </div>

        {/* Skills Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === index 
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Category */}
        <div className="mb-16">
          <div className={`bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-3xl p-8 mb-8`}>
            <div className="flex items-center space-x-4 mb-6 text-white">
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                <skillCategories[activeCategory].icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{skillCategories[activeCategory].title}</h3>
                <p className="text-white/80">Specialized expertise and hands-on experience</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">{skill.level}%</span>
                    <div className="text-xs text-gray-500">Proficiency</div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out ${isVisible ? 'animate-shimmer' : ''}`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transition: 'width 1.5s ease-out'
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              <Award className="w-8 h-8 inline-block mr-3 text-blue-600" />
              Certifications & Learning Path
            </h3>
            <p className="text-gray-600">Continuous learning journey in cloud and DevOps technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  cert.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  cert.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {cert.status}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      cert.status === 'Completed' ? 'bg-green-500' :
                      cert.status === 'In Progress' ? 'bg-blue-500' :
                      'bg-gray-400'
                    }`}
                    style={{ width: isVisible ? `${cert.progress}%` : '0%' }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-2">{cert.progress}% Complete</div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h4>
            <p className="text-gray-600">Always staying updated with the latest technologies and industry best practices</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Certified Expertise</h4>
            <p className="text-gray-600">Pursuing industry-recognized certifications to validate skills and knowledge</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Security First</h4>
            <p className="text-gray-600">Implementing security best practices across all infrastructure and deployment processes</p>
          </div>
        </div>
      </div>
    </section>
  );
}