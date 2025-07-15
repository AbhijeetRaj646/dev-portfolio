import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  CheckCircle,
  Users,
  TrendingUp
} from 'lucide-react';

const workExperience = {
  title: "Software Engineer",
  company: "Realthingks",
  location: "Remote/Hybrid",
  period: "July 2023 - Present",
  description: "DevOps Engineer focused on cloud infrastructure automation, Kubernetes management, and CI/CD pipeline optimization in an Agile environment.",
  achievements: [
    "Implemented Role-Based Access Control (RBAC) in Kubernetes to enhance security and manage user access effectively",
    "Developed Kubernetes CronJobs for automated Jenkins and PostgreSQL database backups, eliminating manual intervention",
    "Integrated AWS S3 for secure backup storage, improving disaster recovery processes",
    "Deployed cloud-based Catalog suite using Docker and Kubernetes for scalable operations",
    "Implemented comprehensive monitoring with Prometheus and Grafana, including custom dashboards and alerts",
    "Set up centralized log monitoring with Grafana Loki and Promtail, reducing debugging time by 50%",
    "Developed Python web application integrated with Jira for issue tracking, deployed using Docker",
    "Implemented Traefik as reverse proxy for optimized routing and application performance",
    "Successfully delivered 10+ sprints in Agile environment with active participation in daily stand-ups and code reviews"
  ],
  technologies: ["Kubernetes", "Docker", "AWS", "Jenkins", "Prometheus", "Grafana", "Python", "Terraform", "Jira"]
};

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Electronics & Telecommunication Engineering",
    institution: "GES RH Sapat College of Engineering, Nashik",
    period: "2019 - 2023",
    grade: "CGPA: 9.4",
    location: "Nashik, India"
  },
  {
    degree: "Higher Secondary Certificate",
    field: "CBSE",
    institution: "S.T. Joseph High School",
    period: "2017 - 2019",
    grade: "88%",
    location: "Patna, India"
  },
  {
    degree: "Secondary School Certificate",
    field: "ICSE",
    institution: "S.T. Xavier's High School",
    period: "2015 - 2017",
    grade: "94%",
    location: "Patna, India"
  }
];

const keyMetrics = [
  { label: "Years Experience", value: "2+", icon: Calendar },
  { label: "Projects Delivered", value: "15+", icon: Briefcase },
  { label: "Team Sprints", value: "10+", icon: Users },
  { label: "System Uptime", value: "99.9%", icon: TrendingUp }
];

export default function ExperienceSection() {
  return (
    <div className="p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            My journey in DevOps engineering, education background, and key achievements 
            in cloud infrastructure and automation.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <metric.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{workExperience.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{workExperience.company}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 mr-1" />
                    {workExperience.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {workExperience.location}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{workExperience.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-4 h-4 mr-2 text-green-600" />
                  Key Achievements
                </h4>
                <div className="space-y-3">
                  {workExperience.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {workExperience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium mb-2">{edu.field}</p>
                      <p className="text-gray-700 mb-2">{edu.institution}</p>
                      <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-500">{edu.period}</span>
                        <span className="font-semibold text-green-600">{edu.grade}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🏗️</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">AWS Solutions Architect</h4>
                        <p className="text-sm text-gray-600">In Progress - 75% Complete</p>
                      </div>
                    </div>
                    <div className="text-blue-600 font-semibold">In Progress</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">🔧</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Git and GitHub</h4>
                        <p className="text-sm text-gray-600">Online Certification</p>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">Completed</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">☕</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Java Fundamentals</h4>
                        <p className="text-sm text-gray-600">Online Certification</p>
                      </div>
                    </div>
                    <div className="text-green-600 font-semibold">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Improvement</h4>
              <p className="text-gray-600">Reduced debugging time by 50% through centralized log monitoring implementation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Automation Success</h4>
              <p className="text-gray-600">Eliminated manual intervention in database backups through automated solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Team Collaboration</h4>
              <p className="text-gray-600">Successfully delivered 10+ sprints with active participation in Agile processes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}