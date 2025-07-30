import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

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

const certifications = [
  {
    title: "Git and Github",
    issuer: "Online Certification",
    date: "2023",
    logo: "🔧"
  },
  {
    title: "Java Course for Complete Beginners",
    issuer: "Online Certification",
    date: "2023",
    logo: "☕"
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h2 id="experience-heading" className="text-4xl font-bold text-gray-900 mb-8">Work Experience</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{workExperience.title}</h3>
                  <p className="text-blue-600 font-medium">{workExperience.company}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                    <time dateTime="2023-07">{workExperience.period}</time>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                    {workExperience.location}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{workExperience.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="space-y-1" role="list">
                  {workExperience.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start text-sm text-gray-700" role="listitem">
                      <span className="text-green-600 mr-2 mt-1" aria-hidden="true">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {workExperience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-blue-600" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                        <p className="text-blue-600 font-medium mb-1">{edu.field}</p>
                        <p className="text-gray-700 mb-2">{edu.institution}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                          <time dateTime={edu.period.split(' - ')[0]}>{edu.period}</time>
                          <span className="font-semibold text-green-600">{edu.grade}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{edu.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Certifications</h2>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl" role="img" aria-label={`${cert.title} certification`}>{cert.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h3>
                        <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                        <div className="text-sm text-gray-500">
                          <span>Completed: <time dateTime={cert.date}>{cert.date}</time></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Continuous Learning</h3>
                <p className="text-blue-700 text-sm">
                  Actively pursuing advanced certifications in AWS, Kubernetes, and DevSecOps 
                  to stay current with industry best practices and emerging technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}