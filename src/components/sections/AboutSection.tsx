import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  Award, 
  Code, 
  Server,
  Clock,
  CheckCircle
} from 'lucide-react';

const highlights = [
  {
    icon: Calendar,
    label: "Experience",
    value: "2+ Years",
    description: "Professional DevOps experience"
  },
  {
    icon: Server,
    label: "Expertise",
    value: "Cloud & K8s",
    description: "AWS and Kubernetes specialist"
  },
  {
    icon: Code,
    label: "Languages",
    value: "Python, Java",
    description: "Backend & automation scripting"
  },
  {
    icon: Award,
    label: "Achievements",
    value: "99.9% Uptime",
    description: "Maintained across infrastructures"
  }
];

const keySkills = [
  "AWS Cloud Services", "Kubernetes Orchestration", "Docker Containerization",
  "CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Observability",
  "DevSecOps", "Python Development", "Jenkins Automation", "Terraform"
];

export default function AboutSection() {
  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Hello, I'm <span className="text-blue-600">Abhijeet Raj</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            A passionate <strong>DevOps Engineer</strong> with 2+ years of hands-on experience in designing, 
            implementing, and managing scalable cloud infrastructure. I specialize in automating deployment 
            pipelines, optimizing system performance, and ensuring high availability.
          </p>
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Pune, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span>Software Engineer at Realthingks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <highlight.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{highlight.label}</p>
                  <p className="text-lg font-bold text-gray-900">{highlight.value}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Do</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cloud Infrastructure Design</h3>
                  <p className="text-gray-600">Architect and implement scalable AWS cloud solutions with high availability and performance optimization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">CI/CD Pipeline Automation</h3>
                  <p className="text-gray-600">Build and maintain automated deployment pipelines using Jenkins, Argo CD, and GitOps practices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Kubernetes Management</h3>
                  <p className="text-gray-600">Deploy and manage containerized applications with Kubernetes, including RBAC, monitoring, and scaling.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Infrastructure Monitoring</h3>
                  <p className="text-gray-600">Implement comprehensive monitoring solutions using Prometheus, Grafana, and alerting systems.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {keySkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Focus</h3>
              <p className="text-gray-700 mb-4">
                Currently working as a Software Engineer at Realthingks, focusing on cloud infrastructure 
                automation and Kubernetes management. Actively pursuing AWS Solutions Architect certification.
              </p>
              <div className="flex items-center space-x-2 text-blue-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Open to new opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Faster Deployments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Monitoring Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}