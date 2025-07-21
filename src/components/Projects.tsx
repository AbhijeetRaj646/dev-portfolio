import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '50px' 
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'devops', name: 'DevOps', icon: '⚙️' },
    { id: 'monitoring', name: 'Monitoring', icon: '📊' },
    { id: 'security', name: 'Security', icon: '🔒' },
  ], []);

  // Real projects based on your resume
  const projects: Project[] = useMemo(() => [
    {
      id: 'infrastructure-monitoring',
      title: 'Infrastructure Monitoring with Grafana and Slack Integration',
      description: 'Comprehensive monitoring solution with custom dashboards, real-time alerting, and team collaboration through Slack integration.',
      longDescription: 'Built a complete monitoring infrastructure using Prometheus for metrics collection, Grafana for visualization, and integrated Slack notifications for real-time alerts. Implemented custom dashboards for CPU, memory, disk I/O, and network monitoring with advanced alerting rules.',
      technologies: ['Grafana', 'Prometheus', 'Slack API', 'Custom Dashboards', 'Alert Manager', 'Linux'],
      category: 'monitoring',
      githubUrl: 'https://github.com/abhijeetraj646/monitoring-stack',
      duration: '2 months',
      teamSize: '1 (Solo Project)',
      highlights: [
        'Custom Grafana dashboards for infrastructure metrics',
        'Real-time data collection and analysis with Prometheus',
        'Slack integration for instant notifications',
        'Enhanced incident response workflows',
        '95%+ alert accuracy achieved',
        'Real-time monitoring implementation'
      ],
      challenges: [
        'Integrating multiple monitoring tools seamlessly',
        'Reducing alert noise and false positives',
        'Creating meaningful dashboards for different stakeholders',
        'Ensuring high availability of monitoring stack itself'
      ],
      learnings: [
        'Advanced Prometheus query language (PromQL)',
        'Grafana dashboard design best practices',
        'Slack API integration and bot development',
        'Incident management and alert optimization'
      ]
    },
    {
      id: 'kubernetes-security-backup',
      title: 'Enterprise Kubernetes Security & Backup Automation',
      description: 'Production-ready Kubernetes security implementation with automated backup solutions and disaster recovery processes.',
      longDescription: 'Implemented comprehensive RBAC (Role-Based Access Control) in Kubernetes to enhance security. Developed automated backup solutions for Jenkins and PostgreSQL using Kubernetes CronJobs with AWS S3 integration for secure storage.',
      technologies: ['Kubernetes', 'RBAC', 'CronJobs', 'AWS S3', 'PostgreSQL', 'Jenkins', 'Docker'],
      category: 'security',
      githubUrl: 'https://github.com/abhijeetraj646/k8s-security-backup',
      duration: '3 months',
      teamSize: '2 (DevOps Team)',
      highlights: [
        'Role-Based Access Control (RBAC) implementation',
        'Automated Jenkins and PostgreSQL backups',
        'AWS S3 integration for secure backup storage',
        'Disaster recovery process automation',
        'High availability configuration',
        'Security best practices implementation'
      ],
      challenges: [
        'Complex RBAC policy design and testing',
        'Ensuring backup integrity and consistency',
        'Managing secrets and credentials securely',
        'Coordinating backup schedules across services'
      ],
      learnings: [
        'Kubernetes security architecture and RBAC',
        'Backup and disaster recovery strategies',
        'AWS S3 lifecycle management',
        'Kubernetes CronJob optimization and monitoring'
      ]
    },
    {
      id: 'cicd-pipeline-automation',
      title: 'Automated Full Stack CI/CD with Infrastructure as Code',
      description: 'Comprehensive CI/CD pipeline implementation with infrastructure automation, security scanning, and continuous deployment using modern DevOps practices.',
      longDescription: 'Designed and implemented end-to-end CI/CD pipelines for full-stack applications using Jenkins. Integrated Terraform for infrastructure provisioning, SonarQube for code quality analysis, and Trivy for security scanning. Implemented GitOps workflow with ArgoCD for continuous deployment.',
      technologies: ['Jenkins', 'Terraform', 'SonarQube', 'Trivy', 'Docker', 'AWS ECR', 'Argo CD', 'Git'],
      category: 'devops',
      githubUrl: 'https://github.com/abhijeetraj646/cicd-automation',
      duration: '4 months',
      teamSize: '3 (Development Team)',
      highlights: [
        'Jenkins pipelines for frontend and backend applications',
        'Terraform integration for infrastructure provisioning',
        'SonarQube static code analysis integration',
        'Trivy security scanning for vulnerabilities',
        'Automated Docker image creation and ECR push',
        'Continuous deployment with Argo CD',
        'End-to-end automation and monitoring'
      ],
      challenges: [
        'Orchestrating complex multi-stage pipelines',
        'Managing environment-specific configurations',
        'Implementing proper security scanning gates',
        'Handling pipeline failures and rollback strategies'
      ],
      learnings: [
        'Advanced Jenkins pipeline scripting',
        'Infrastructure as Code with Terraform',
        'Security integration in CI/CD pipelines',
        'GitOps principles and ArgoCD implementation'
      ]
    },
    {
      id: 'python-jira-integration',
      title: 'Python Web Application with Jira Integration',
      description: 'Custom Python web application integrated with Jira for enhanced issue tracking and project management, deployed using Docker.',
      longDescription: 'Developed a Python web application that integrates seamlessly with Jira API for automated issue tracking and project management. Containerized the application using Docker and deployed it on Kubernetes for scalability and reliability.',
      technologies: ['Python', 'Jira API', 'Docker', 'Kubernetes', 'Flask/Django', 'REST APIs'],
      category: 'devops',
      githubUrl: 'https://github.com/abhijeetraj646/python-jira-app',
      duration: '1.5 months',
      teamSize: '1 (Solo Project)',
      highlights: [
        'Python web application with Jira API integration',
        'Automated issue tracking and project management',
        'Docker containerization for deployment',
        'Kubernetes deployment for scalability',
        'RESTful API design and implementation',
        'Enhanced team productivity and workflow automation'
      ],
      challenges: [
        'Jira API authentication and rate limiting',
        'Handling different Jira project configurations',
        'Ensuring application security and data privacy',
        'Managing application state and session handling'
      ],
      learnings: [
        'Jira API integration and webhook handling',
        'Python web framework development',
        'Containerization best practices',
        'API design and security implementation'
      ]
    },
    {
      id: 'traefik-reverse-proxy',
      title: 'Traefik Reverse Proxy Implementation',
      description: 'Implemented Traefik as reverse proxy for optimized routing and application performance with automatic SSL certificate management.',
      longDescription: 'Configured and deployed Traefik reverse proxy to handle routing for multiple applications. Implemented automatic SSL certificate generation using Let\'s Encrypt, load balancing, and service discovery for containerized applications.',
      technologies: ['Traefik', 'Docker', 'Let\'s Encrypt', 'Load Balancing', 'SSL/TLS', 'Service Discovery'],
      category: 'devops',
      githubUrl: 'https://github.com/abhijeetraj646/traefik-setup',
      duration: '3 weeks',
      teamSize: '1 (Solo Project)',
      highlights: [
        'Traefik reverse proxy configuration',
        'Automatic SSL certificate management',
        'Load balancing and service discovery',
        'Optimized routing and application performance',
        'Container orchestration integration',
        'Enhanced security with automatic HTTPS'
      ],
      challenges: [
        'Configuring complex routing rules',
        'Managing SSL certificates for multiple domains',
        'Handling service discovery in dynamic environments',
        'Optimizing performance and reducing latency'
      ],
      learnings: [
        'Reverse proxy configuration and management',
        'SSL/TLS certificate automation',
        'Load balancing strategies and algorithms',
        'Service mesh concepts and implementation'
      ]
    }
  ], []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  const ProjectCard: React.FC<{ project: Project; index: number }> = React.memo(({ project, index }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.6) }}
        className="group relative overflow-hidden rounded-xl border transition-all duration-300 card-hover bg-white dark:bg-gray-800"
        style={{ borderColor: 'rgb(var(--border))' }}
      >
        {/* Project Header */}
        <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          <div className="text-center text-white">
            <h3 className="text-lg font-bold mb-1">{project.title.split(' ').slice(0, 2).join(' ')}</h3>
            <p className="text-sm opacity-90">{project.category.toUpperCase()}</p>
          </div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(project)}
                className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                aria-label="View project details"
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
                  className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                  aria-label="View source code"
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
                  className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                  aria-label="View live demo"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <CalendarIcon className="w-4 h-4 mr-1" />
              {project.duration}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <UserGroupIcon className="w-4 h-4 mr-1" />
              {project.teamSize}
            </div>
          </div>

          <h3 className="text-lg font-bold mb-3 line-clamp-2" style={{ color: 'rgb(var(--foreground))' }}>
            {project.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md border text-center"
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
                className="px-2 py-1 text-xs rounded-md font-medium"
                style={{ color: 'rgb(var(--primary))' }}
              >
                +{project.technologies.length - 3}
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
  });

  ProjectCard.displayName = 'ProjectCard';

  if (!inView) {
    return (
      <section ref={ref} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'rgb(var(--primary))' }} />
              <p className="text-lg" style={{ color: 'rgb(var(--muted-foreground))' }}>Loading Projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Key Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world implementations showcasing DevOps expertise and innovative solutions 
            in cloud infrastructure and automation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                selectedCategory === category.id ? 'shadow-lg' : 'hover:shadow-md'
              }`}
              style={{
                backgroundColor: selectedCategory === category.id ? 'rgb(var(--primary))' : 'rgb(var(--muted))',
                color: selectedCategory === category.id ? 'rgb(var(--primary-foreground))' : 'rgb(var(--foreground))',
              }}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border"
                style={{ 
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--background))'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 flex items-center justify-between p-6 border-b backdrop-blur-sm" style={{ 
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--background) / 0.9)'
                }}>
                  <h3 className="text-2xl font-bold" style={{ color: 'rgb(var(--foreground))' }}>
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Close modal"
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
                        <h4 className="font-semibold mb-3 flex items-center" style={{ color: 'rgb(var(--foreground))' }}>
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
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
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
                            <span className="text-orange-500 mr-2 mt-0.5">⚠</span>
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
                            <span className="text-blue-500 mr-2 mt-0.5">💡</span>
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
    </section>
  );
};

export default Projects;