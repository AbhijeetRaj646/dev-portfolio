import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedSection } from './ui/AnimatedSection';
import {
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  EyeIcon,
  TagIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  duration: string;
  teamSize: string;
  highlights: string[];
  challenges: string[];
  learnings: string[];
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'devops', name: 'DevOps', icon: '⚙️' },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: '☁️' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'monitoring', name: 'Monitoring', icon: '📊' },
  ];

  const projects: Project[] = [
    {
      id: 'microservices-k8s',
      title: 'Microservices on Kubernetes',
      description: 'Complete CI/CD pipeline for microservices deployment on AWS EKS with monitoring and logging.',
      longDescription: 'Built a comprehensive microservices architecture deployed on AWS EKS cluster with full CI/CD automation. Implemented GitOps workflow using ArgoCD, integrated security scanning with Trivy, and set up comprehensive monitoring with Prometheus and Grafana.',
      image: '/api/placeholder/400/300',
      technologies: ['Kubernetes', 'AWS EKS', 'Docker', 'Jenkins', 'ArgoCD', 'Prometheus', 'Grafana', 'Helm'],
      category: 'devops',
      githubUrl: 'https://github.com/abhijeetraj646/microservices-k8s',
      liveUrl: 'https://demo.abhijeetraj.dev',
      duration: '3 months',
      teamSize: '1 (Solo Project)',
      highlights: [
        'Deployed 15+ microservices with zero-downtime deployments',
        'Achieved 99.9% uptime with automated scaling',
        'Reduced deployment time from 2 hours to 15 minutes',
        'Implemented comprehensive monitoring and alerting'
      ],
      challenges: [
        'Inter-service communication complexity',
        'Service mesh configuration',
        'Resource optimization across namespaces',
        'Secrets management across environments'
      ],
      learnings: [
        'Advanced Kubernetes networking concepts',
        'GitOps best practices with ArgoCD',
        'Observability patterns for microservices',
        'Cost optimization strategies for cloud resources'
      ]
    },
    {
      id: 'terraform-aws-infrastructure',
      title: 'Infrastructure as Code with Terraform',
      description: 'Automated AWS infrastructure provisioning using Terraform with modules and best practices.',
      longDescription: 'Designed and implemented a complete AWS infrastructure using Terraform modules. Created reusable modules for VPC, EKS, RDS, and monitoring stack. Implemented proper state management with remote backends and workspace management.',
      image: '/api/placeholder/400/300',
      technologies: ['Terraform', 'AWS', 'Terragrunt', 'GitHub Actions', 'Checkov', 'tfsec'],
      category: 'cloud',
      githubUrl: 'https://github.com/abhijeetraj646/terraform-aws-infrastructure',
      duration: '2 months',
      teamSize: '2 (Infrastructure Team)',
      highlights: [
        'Reduced infrastructure provisioning time by 80%',
        'Implemented security scanning with Checkov and tfsec',
        'Created 10+ reusable Terraform modules',
        'Automated cost optimization with lifecycle policies'
      ],
      challenges: [
        'Managing Terraform state across multiple environments',
        'Handling resource dependencies and ordering',
        'Implementing proper security policies',
        'Cost management and resource tagging'
      ],
      learnings: [
        'Advanced Terraform module design patterns',
        'AWS security best practices',
        'Infrastructure cost optimization techniques',
        'Automated compliance and security scanning'
      ]
    },
    {
      id: 'jenkins-pipeline-automation',
      title: 'Advanced Jenkins Pipeline Automation',
      description: 'Automated CI/CD pipelines with security scanning, testing, and deployment automation.',
      longDescription: 'Built advanced Jenkins pipelines with parallel execution, dynamic environments, and comprehensive security scanning. Integrated with SonarQube for code quality, Trivy for container scanning, and automated deployment to multiple environments.',
      image: '/api/placeholder/400/300',
      technologies: ['Jenkins', 'Groovy', 'Docker', 'SonarQube', 'Trivy', 'Slack', 'AWS', 'Kubernetes'],
      category: 'automation',
      githubUrl: 'https://github.com/abhijeetraj646/jenkins-pipeline-automation',
      duration: '1.5 months',
      teamSize: '3 (DevOps Team)',
      highlights: [
        'Reduced build time by 60% with parallel execution',
        'Implemented automated security scanning',
        'Zero-touch deployment to production',
        'Comprehensive notification and reporting system'
      ],
      challenges: [
        'Pipeline complexity management',
        'Resource allocation for parallel builds',
        'Integration with multiple security tools',
        'Error handling and rollback strategies'
      ],
      learnings: [
        'Advanced Jenkins pipeline as code techniques',
        'Security-first CI/CD approach',
        'Pipeline optimization and resource management',
        'Automated testing and quality gates'
      ]
    },
    {
      id: 'monitoring-observability-stack',
      title: 'Complete Monitoring & Observability Stack',
      description: 'Comprehensive monitoring solution with Prometheus, Grafana, and ELK stack for full observability.',
      longDescription: 'Implemented a complete observability stack using Prometheus for metrics, Grafana for visualization, and ELK stack for logging. Created custom dashboards, alerting rules, and automated incident response workflows.',
      image: '/api/placeholder/400/300',
      technologies: ['Prometheus', 'Grafana', 'Elasticsearch', 'Logstash', 'Kibana', 'AlertManager', 'PagerDuty'],
      category: 'monitoring',
      githubUrl: 'https://github.com/abhijeetraj646/monitoring-stack',
      liveUrl: 'https://monitoring.abhijeetraj.dev',
      duration: '2 months',
      teamSize: '2 (Platform Team)',
      highlights: [
        'Monitoring 200+ services across multiple clusters',
        'Reduced MTTR by 70% with automated alerting',
        'Custom Grafana dashboards for business metrics',
        'Automated log aggregation and analysis'
      ],
      challenges: [
        'Scaling monitoring infrastructure',
        'Data retention and storage optimization',
        'Alert noise reduction and tuning',
        'Integration with incident management systems'
      ],
      learnings: [
        'Observability design patterns',
        'PromQL query optimization',
        'Log aggregation at scale',
        'SRE practices and SLI/SLO implementation'
      ]
    },
    {
      id: 'gitops-argocd-deployment',
      title: 'GitOps Deployment with ArgoCD',
      description: 'GitOps workflow implementation using ArgoCD for declarative continuous deployment.',
      longDescription: 'Implemented GitOps methodology using ArgoCD for managing application deployments across multiple Kubernetes clusters. Created automated sync policies, health checks, and rollback mechanisms.',
      image: '/api/placeholder/400/300',
      technologies: ['ArgoCD', 'Kubernetes', 'Helm', 'Kustomize', 'Git', 'Slack'],
      category: 'devops',
      githubUrl: 'https://github.com/abhijeetraj646/gitops-argocd',
      duration: '1 month',
      teamSize: '1 (Solo Project)',
      highlights: [
        'Deployed applications across 5 different environments',
        'Implemented automated rollback on health check failures',
        'Created custom ArgoCD applications and projects',
        'Integrated with Slack for deployment notifications'
      ],
      challenges: [
        'Multi-cluster application management',
        'Secrets synchronization across environments',
        'Application dependency management',
        'Custom resource handling and health checks'
      ],
      learnings: [
        'GitOps principles and best practices',
        'ArgoCD configuration and customization',
        'Declarative application management',
        'Multi-environment deployment strategies'
      ]
    },
    {
      id: 'aws-cost-optimization',
      title: 'AWS Cost Optimization Automation',
      description: 'Automated AWS cost optimization using Lambda functions and CloudWatch for resource management.',
      longDescription: 'Built automated cost optimization system using AWS Lambda, CloudWatch, and Cost Explorer APIs. Implemented automated resource tagging, rightsizing recommendations, and unused resource cleanup.',
      image: '/api/placeholder/400/300',
      technologies: ['AWS Lambda', 'Python', 'CloudWatch', 'Cost Explorer', 'SNS', 'Boto3', 'Terraform'],
      category: 'cloud',
      githubUrl: 'https://github.com/abhijeetraj646/aws-cost-optimization',
      duration: '1 month',
      teamSize: '1 (Solo Project)',
      highlights: [
        'Reduced AWS costs by 40% through automation',
        'Automated resource tagging and lifecycle management',
        'Daily cost reports and budget alerts',
        'Rightsizing recommendations for EC2 and RDS'
      ],
      challenges: [
        'Complex cost analysis across multiple services',
        'Automated decision making for resource cleanup',
        'Integration with existing tagging strategies',
        'Risk management for automated actions'
      ],
      learnings: [
        'AWS Cost Explorer API and billing optimization',
        'Serverless architecture patterns',
        'Financial operations (FinOps) practices',
        'Automated governance and compliance'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative overflow-hidden rounded-2xl border transition-all duration-300 card-hover glass-morphism"
        style={{ borderColor: 'rgb(var(--border))' }}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{project.title.substring(0, 2)}</span>
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(project)}
                className="p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
              >
                <EyeIcon className="w-5 h-5" />
              </motion.button>
              {project.githubUrl && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                </motion.a>
              )}
              {project.liveUrl && (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium px-3 py-1 rounded-full" style={{
              backgroundColor: 'rgb(var(--primary) / 0.1)',
              color: 'rgb(var(--primary))'
            }}>
              {categories.find(cat => cat.id === project.category)?.name}
            </span>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <CalendarIcon className="w-4 h-4 mr-1" />
              {project.duration}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3" style={{ color: 'rgb(var(--foreground))' }}>
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md border"
                style={{
                  borderColor: 'rgb(var(--border))',
                  color: 'rgb(var(--muted-foreground))',
                  backgroundColor: 'rgb(var(--muted))'
                }}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span
                className="px-2 py-1 text-xs rounded-md"
                style={{ color: 'rgb(var(--primary))' }}
              >
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          <button
            onClick={() => setSelectedProject(project)}
            className="w-full py-2 text-sm font-medium rounded-lg border transition-colors duration-200 hover:shadow-md"
            style={{
              borderColor: 'rgb(var(--primary))',
              color: 'rgb(var(--primary))',
              backgroundColor: 'transparent'
            }}
          >
            View Details
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatedSection id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my DevOps and cloud infrastructure projects, demonstrating expertise 
            in automation, monitoring, and scalable system design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id ? 'shadow-lg' : 'hover:shadow-md'
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? 'rgb(var(--primary))' : 'rgb(var(--muted))',
                color: selectedCategory === category.id ? 'rgb(var(--primary-foreground))' : 'rgb(var(--foreground))',
              }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border glass-morphism"
                style={{ 
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--background))'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 flex items-center justify-between p-6 border-b" style={{ 
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--background))'
                }}>
                  <h3 className="text-2xl font-bold" style={{ color: 'rgb(var(--foreground))' }}>
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" style={{ color: 'rgb(var(--foreground))' }} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          {selectedProject.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <UserGroupIcon className="w-4 h-4 mr-1" />
                          {selectedProject.teamSize}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center" style={{ color: 'rgb(var(--foreground))' }}>
                          <TagIcon className="w-4 h-4 mr-2" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm rounded-full border"
                              style={{
                                borderColor: 'rgb(var(--primary))',
                                color: 'rgb(var(--primary))',
                                backgroundColor: 'rgb(var(--primary) / 0.1)'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4">
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors"
                            style={{
                              borderColor: 'rgb(var(--border))',
                              color: 'rgb(var(--foreground))'
                            }}
                          >
                            <CodeBracketIcon className="w-4 h-4" />
                            <span>View Code</span>
                          </a>
                        )}
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors"
                            style={{
                              backgroundColor: 'rgb(var(--primary))',
                              color: 'rgb(var(--primary-foreground))'
                            }}
                          >
                            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Sections */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: 'rgb(var(--foreground))' }}>
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-green-500 mr-2">✓</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: 'rgb(var(--foreground))' }}>
                        Challenges Solved
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-orange-500 mr-2">⚠</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3" style={{ color: 'rgb(var(--foreground))' }}>
                        Key Learnings
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-blue-500 mr-2">💡</span>
                            {learning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};

export default Projects;