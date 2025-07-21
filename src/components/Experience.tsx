import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedSection } from './ui/AnimatedSection';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

interface Experience {
  id: string;
  type: 'work' | 'education' | 'certification';
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  companyUrl?: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const experiences: Experience[] = [
    {
      id: 'current-role',
      type: 'work',
      title: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      period: 'Jan 2023 - Present',
      current: true,
      description: 'Leading DevOps initiatives for cloud migration and infrastructure automation. Responsible for designing and implementing CI/CD pipelines, managing Kubernetes clusters, and ensuring high availability of production systems.',
      achievements: [
        'Reduced deployment time by 75% through automated CI/CD pipelines',
        'Led cloud migration of 50+ applications to AWS EKS',
        'Implemented GitOps workflows resulting in 99.9% deployment success rate',
        'Established monitoring and alerting systems reducing MTTR by 60%',
        'Mentored junior team members on DevOps best practices'
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'ArgoCD', 'Prometheus', 'Grafana', 'Docker'],
      companyUrl: 'https://techcorp.com'
    },
    {
      id: 'previous-role',
      type: 'work',
      title: 'DevOps Engineer',
      company: 'CloudTech Innovations',
      location: 'Pune, India',
      period: 'Jun 2021 - Dec 2022',
      description: 'Managed cloud infrastructure and automated deployment processes for e-commerce applications. Worked closely with development teams to implement DevOps practices and improve system reliability.',
      achievements: [
        'Automated infrastructure provisioning using Terraform',
        'Implemented security scanning in CI/CD pipelines',
        'Designed and deployed monitoring solutions for 100+ services',
        'Reduced infrastructure costs by 40% through resource optimization',
        'Achieved zero-downtime deployments for critical applications'
      ],
      technologies: ['AWS', 'Docker', 'Jenkins', 'Terraform', 'Ansible', 'ELK Stack', 'Python', 'Bash'],
      companyUrl: 'https://cloudtech.com'
    },
    {
      id: 'first-role',
      type: 'work',
      title: 'Junior DevOps Engineer',
      company: 'StartupTech',
      location: 'Remote',
      period: 'Aug 2020 - May 2021',
      description: 'Started career in DevOps, focusing on learning cloud technologies and automation tools. Assisted in setting up development environments and basic CI/CD processes.',
      achievements: [
        'Set up automated testing and deployment for 10+ microservices',
        'Learned and implemented Docker containerization',
        'Assisted in AWS infrastructure setup and management',
        'Created documentation for deployment processes',
        'Participated in on-call rotation for production support'
      ],
      technologies: ['AWS', 'Docker', 'Git', 'Linux', 'Python', 'MySQL', 'Nginx'],
      companyUrl: 'https://startuptech.com'
    },
    {
      id: 'education',
      type: 'education',
      title: 'Bachelor of Engineering in Computer Science',
      company: 'VTU University',
      location: 'Karnataka, India',
      period: '2016 - 2020',
      description: 'Completed Bachelor\'s degree in Computer Science with focus on software engineering, algorithms, and system design. Participated in various technical projects and competitions.',
      achievements: [
        'Graduated with First Class with Distinction',
        'Led final year project on Cloud Computing',
        'Participated in inter-college technical competitions',
        'Member of Computer Science Society',
        'Completed internship in web development'
      ],
      technologies: ['Java', 'Python', 'C++', 'JavaScript', 'MySQL', 'Linux', 'Git']
    },
    {
      id: 'aws-cert',
      type: 'certification',
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      location: 'Online',
      period: 'Mar 2022',
      description: 'Achieved AWS Solutions Architect Associate certification, demonstrating expertise in designing and deploying scalable systems on AWS.',
      achievements: [
        'Demonstrated proficiency in AWS core services',
        'Validated skills in designing resilient architectures',
        'Proven knowledge of cost optimization strategies',
        'Certified in security best practices on AWS'
      ],
      technologies: ['AWS', 'Cloud Architecture', 'Security', 'Cost Optimization']
    },
    {
      id: 'k8s-cert',
      type: 'certification',
      title: 'Certified Kubernetes Administrator (CKA)',
      company: 'Cloud Native Computing Foundation',
      location: 'Online',
      period: 'Aug 2022',
      description: 'Earned CKA certification, validating skills in Kubernetes cluster administration, troubleshooting, and management.',
      achievements: [
        'Proven expertise in Kubernetes cluster management',
        'Demonstrated skills in troubleshooting and debugging',
        'Validated knowledge of networking and security',
        'Certified in backup and restore procedures'
      ],
      technologies: ['Kubernetes', 'Container Orchestration', 'Networking', 'Security']
    }
  ];

  const TimelineItem: React.FC<{ experience: Experience; index: number; isLast: boolean }> = ({ 
    experience, 
    index, 
    isLast 
  }) => {
    const [itemRef, itemInView] = useInView({ threshold: 0.3, triggerOnce: true });

    const getIcon = () => {
      switch (experience.type) {
        case 'work':
          return <BriefcaseIcon className="w-6 h-6" />;
        case 'education':
          return <AcademicCapIcon className="w-6 h-6" />;
        case 'certification':
          return <TrophyIcon className="w-6 h-6" />;
        default:
          return <BriefcaseIcon className="w-6 h-6" />;
      }
    };

    const getIconColor = () => {
      switch (experience.type) {
        case 'work':
          return experience.current ? 'bg-green-500' : 'bg-blue-500';
        case 'education':
          return 'bg-purple-500';
        case 'certification':
          return 'bg-orange-500';
        default:
          return 'bg-gray-500';
      }
    };

    return (
      <motion.div
        ref={itemRef}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={itemInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative flex items-center mb-12"
      >
        {/* Timeline Line */}
        {!isLast && (
          <motion.div
            className="absolute left-1/2 top-20 w-0.5 h-24 -translate-x-1/2 z-0"
            style={{ backgroundColor: 'rgb(var(--border))' }}
            initial={{ height: 0 }}
            animate={itemInView ? { height: '6rem' } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          />
        )}

        {/* Content */}
        <div className={`w-full flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Card */}
          <div className="w-5/12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl border glass-morphism card-hover"
              style={{ borderColor: 'rgb(var(--border))' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'rgb(var(--foreground))' }}>
                    {experience.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <BuildingOfficeIcon className="w-4 h-4 text-gray-500" />
                    {experience.companyUrl ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline"
                        style={{ color: 'rgb(var(--primary))' }}
                      >
                        {experience.company}
                      </a>
                    ) : (
                      <span className="font-semibold" style={{ color: 'rgb(var(--primary))' }}>
                        {experience.company}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>{experience.period}</span>
                      {experience.current && (
                        <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 ml-2">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {experience.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>
                  Key Achievements
                </h4>
                <ul className="space-y-1">
                  {experience.achievements.slice(0, 3).map((achievement, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-green-500 mr-2 mt-0.5">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                {experience.achievements.length > 3 && (
                  <span className="text-sm text-gray-500 mt-2 block">
                    +{experience.achievements.length - 3} more achievements
                  </span>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
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
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Icon */}
          <div className="w-2/12 flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={itemInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.1 }}
              className={`relative z-10 w-12 h-12 rounded-full ${getIconColor()} flex items-center justify-center text-white shadow-lg`}
            >
              {getIcon()}
              {experience.current && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ opacity: 0.3 }}
                />
              )}
            </motion.div>
          </div>

          {/* Spacer */}
          <div className="w-5/12" />
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatedSection id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in DevOps engineering, from learning fundamentals to leading 
            complex cloud infrastructure projects and earning industry certifications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: 'rgb(var(--border))' }}
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {/* Timeline Items */}
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Companies</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">2</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume/abhijeet-raj-resume.pdf';
              link.download = 'Abhijeet-Raj-Resume.pdf';
              link.click();
            }}
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: 'rgb(var(--primary))',
              color: 'rgb(var(--primary-foreground))'
            }}
          >
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;