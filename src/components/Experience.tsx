import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CalendarIcon,
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

interface Experience {
  id: string;
  type: 'work' | 'education' | 'certification';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  grade?: string;
  field?: string;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '50px' 
  });

  // Real data from your resume
  const experiences: Experience[] = useMemo(() => [
    // Work Experience
    {
      id: 'realthingks',
      type: 'work',
      title: 'Software Engineer (DevOps Engineer)',
      organization: 'Realthingks',
      location: 'Remote/Hybrid',
      period: 'July 2023 - Present',
      description: 'DevOps Engineer focused on cloud infrastructure automation, Kubernetes management, and CI/CD pipeline optimization in an Agile environment.',
      achievements: [
        'Implemented Role-Based Access Control (RBAC) in Kubernetes to enhance security and manage user access effectively',
        'Developed Kubernetes CronJobs for automated Jenkins and PostgreSQL database backups, eliminating manual intervention',
        'Integrated AWS S3 for secure backup storage, improving disaster recovery processes',
        'Deployed cloud-based Catalog suite using Docker and Kubernetes for scalable operations',
        'Implemented comprehensive monitoring with Prometheus and Grafana, including custom dashboards and alerts',
        'Set up centralized log monitoring with Grafana Loki and Promtail, reducing debugging time by 50%',
        'Developed Python web application integrated with Jira for issue tracking, deployed using Docker',
        'Implemented Traefik as reverse proxy for optimized routing and application performance',
        'Successfully delivered 10+ sprints in Agile environment with active participation in daily stand-ups and code reviews'
      ],
      technologies: ['Kubernetes', 'Docker', 'AWS', 'Jenkins', 'Prometheus', 'Grafana', 'Python', 'Terraform', 'Jira']
    },
    // Education
    {
      id: 'engineering',
      type: 'education',
      title: 'Bachelor of Engineering',
      field: 'Electronics & Telecommunication Engineering',
      organization: 'GES RH Sapat College of Engineering, Nashik',
      location: 'Nashik, India',
      period: '2019 - 2023',
      grade: 'CGPA: 9.4',
      description: 'Specialized in Electronics & Telecommunication Engineering with focus on modern communication systems, embedded systems, and network technologies.',
      achievements: [
        'Graduated with distinction (CGPA: 9.4)',
        'Strong foundation in programming, networking, and system design',
        'Participated in technical workshops and coding competitions',
        'Developed projects in embedded systems and network automation'
      ]
    },
    {
      id: 'hsc',
      type: 'education',
      title: 'Higher Secondary Certificate',
      field: 'CBSE',
      organization: 'S.T. Joseph High School',
      location: 'Patna, India',
      period: '2017 - 2019',
      grade: '88%',
      description: 'Completed higher secondary education with focus on Science and Mathematics.',
      achievements: [
        'Achieved 88% in CBSE board examinations',
        'Strong foundation in Mathematics, Physics, and Chemistry',
        'Active participation in science exhibitions and competitions'
      ]
    },
    {
      id: 'ssc',
      type: 'education',
      title: 'Secondary School Certificate',
      field: 'ICSE',
      organization: 'S.T. Xavier\'s High School',
      location: 'Patna, India',
      period: '2015 - 2017',
      grade: '94%',
      description: 'Completed secondary education with excellent academic performance.',
      achievements: [
        'Achieved 94% in ICSE board examinations',
        'Consistent academic excellence throughout school years',
        'Developed strong analytical and problem-solving skills'
      ]
    },
    // Certifications
    {
      id: 'git-github',
      type: 'certification',
      title: 'Git and Github',
      organization: 'Online Certification',
      location: 'Online',
      period: '2023',
      description: 'Comprehensive certification covering Git version control system and GitHub collaboration workflows.',
      achievements: [
        'Mastered Git commands and workflows',
        'Understanding of branching strategies and merge conflicts',
        'GitHub Actions and CI/CD integration',
        'Collaborative development practices'
      ]
    },
    {
      id: 'java-certification',
      type: 'certification',
      title: 'Java Course for Complete Beginners',
      organization: 'Online Certification',
      location: 'Online',
      period: '2023',
      description: 'Foundational Java programming certification covering object-oriented programming concepts.',
      achievements: [
        'Object-oriented programming principles',
        'Java syntax and core libraries',
        'Exception handling and debugging',
        'Application development fundamentals'
      ]
    }
  ], []);

  const getIcon = (type: string) => {
    switch (type) {
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'bg-blue-500';
      case 'education':
        return 'bg-green-500';
      case 'certification':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const TimelineItem: React.FC<{ experience: Experience; index: number; isLast: boolean }> = React.memo(({ experience, index, isLast }) => {
    const [itemRef, itemInView] = useInView({ 
      threshold: 0.3, 
      triggerOnce: true,
      rootMargin: '20px'
    });

    const isEven = index % 2 === 0;

    return (
      <motion.div
        ref={itemRef}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={itemInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.8) }}
        className="relative flex items-center"
      >
        {/* Timeline line and dot */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={itemInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.8) + 0.2 }}
            className={`w-4 h-4 rounded-full ${getTypeColor(experience.type)} border-4 border-white dark:border-gray-900 shadow-lg z-10`}
          />
          {!isLast && (
            <motion.div
              initial={{ height: 0 }}
              animate={itemInView ? { height: '100%' } : {}}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.8) + 0.4 }}
              className="w-0.5 bg-gray-300 dark:bg-gray-600 mt-2"
              style={{ minHeight: '120px' }}
            />
          )}
        </div>

        {/* Content */}
        <div className={`w-full ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
          <div className={`max-w-md ${isEven ? 'ml-auto' : 'mr-auto'}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={itemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.8) + 0.3 }}
              className="p-6 rounded-xl border transition-all duration-300 card-hover bg-white dark:bg-gray-800"
              style={{ borderColor: 'rgb(var(--border))' }}
            >
              {/* Header */}
              <div className={`flex items-start ${isEven ? 'flex-row-reverse' : 'flex-row'} gap-4 mb-4`}>
                <div className={`p-3 rounded-lg ${getTypeColor(experience.type)} text-white`}>
                  {getIcon(experience.type)}
                </div>
                <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'rgb(var(--foreground))' }}>
                    {experience.title}
                  </h3>
                  {experience.field && (
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                      {experience.field}
                    </p>
                  )}
                  <p className="text-sm font-medium" style={{ color: 'rgb(var(--primary))' }}>
                    {experience.organization}
                  </p>
                </div>
              </div>

              {/* Meta information */}
              <div className={`flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400 ${isEven ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1" />
                  {experience.period}
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-1" />
                  {experience.location}
                </div>
                {experience.grade && (
                  <div className="font-medium text-green-600 dark:text-green-400">
                    {experience.grade}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {experience.description}
              </p>

              {/* Achievements */}
              {experience.achievements && experience.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${isEven ? 'text-right' : 'text-left'}`} style={{ color: 'rgb(var(--foreground))' }}>
                    {experience.type === 'work' ? 'Key Achievements:' : 'Highlights:'}
                  </h4>
                  <ul className="space-y-1">
                    {experience.achievements.slice(0, 4).map((achievement, idx) => (
                      <li key={idx} className={`text-xs text-gray-600 dark:text-gray-300 flex items-start ${isEven ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                        <span className={`text-green-500 ${isEven ? 'ml-2' : 'mr-2'} mt-0.5`}>✓</span>
                        <span className="flex-1">{achievement}</span>
                      </li>
                    ))}
                    {experience.achievements.length > 4 && (
                      <li className={`text-xs ${isEven ? 'text-right' : 'text-left'}`} style={{ color: 'rgb(var(--primary))' }}>
                        +{experience.achievements.length - 4} more achievements
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              {experience.technologies && experience.technologies.length > 0 && (
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${isEven ? 'text-right' : 'text-left'}`} style={{ color: 'rgb(var(--foreground))' }}>
                    Technologies:
                  </h4>
                  <div className={`flex flex-wrap gap-1 ${isEven ? 'justify-end' : 'justify-start'}`}>
                    {experience.technologies.slice(0, 6).map((tech) => (
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
                    {experience.technologies.length > 6 && (
                      <span className="text-xs" style={{ color: 'rgb(var(--primary))' }}>
                        +{experience.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  });

  TimelineItem.displayName = 'TimelineItem';

  if (!inView) {
    return (
      <section ref={ref} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'rgb(var(--primary))' }} />
              <p className="text-lg" style={{ color: 'rgb(var(--muted-foreground))' }}>Loading Experience...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of continuous learning and professional growth in DevOps and cloud technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={experience.id} 
                experience={experience} 
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">1.5+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">10+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">9.4</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Engineering CGPA</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">2</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;