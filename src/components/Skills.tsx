import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CloudIcon,
  CogIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  ChartBarIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: '50px' 
  });
  const [activeCategory, setActiveCategory] = useState('all');

  // Real data from your resume
  const skillCategories: SkillCategory[] = useMemo(() => [
    {
      name: 'Programming Languages',
      icon: <CodeBracketIcon className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'Python', level: 80, category: 'programming', icon: '🐍', color: 'bg-blue-500' },
        { name: 'Java', level: 70, category: 'programming', icon: '☕', color: 'bg-red-500' },
        { name: 'Bash/Shell', level: 85, category: 'programming', icon: '💻', color: 'bg-gray-700' },
        { name: 'C', level: 50, category: 'programming', icon: '🔧', color: 'bg-blue-600' },
      ],
    },
    {
      name: 'Cloud Services (AWS)',
      icon: <CloudIcon className="w-6 h-6" />,
      color: 'orange',
      skills: [
        { name: 'EKS', level: 85, category: 'cloud', icon: '⚓', color: 'bg-orange-500' },
        { name: 'EC2', level: 90, category: 'cloud', icon: '🖥️', color: 'bg-orange-600' },
        { name: 'S3', level: 85, category: 'cloud', icon: '🗃️', color: 'bg-green-500' },
        { name: 'VPC & Route 53', level: 80, category: 'cloud', icon: '🌐', color: 'bg-purple-500' },
      ],
    },
    {
      name: 'Containerization & Orchestration',
      icon: <CogIcon className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'Docker', level: 80, category: 'devops', icon: '🐳', color: 'bg-blue-500' },
        { name: 'Kubernetes', level: 80, category: 'devops', icon: '⚓', color: 'bg-blue-600' },
        { name: 'Docker Swarm', level: 75, category: 'devops', icon: '🔄', color: 'bg-blue-400' },
        { name: 'Helm', level: 75, category: 'devops', icon: '⛵', color: 'bg-indigo-500' },
      ],
    },
    {
      name: 'CI/CD',
      icon: <ServerIcon className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'Jenkins Pipelines', level: 90, category: 'cicd', icon: '🔧', color: 'bg-blue-500' },
        { name: 'Argo CD', level: 50, category: 'cicd', icon: '🚀', color: 'bg-orange-600' },
        { name: 'GitHub', level: 95, category: 'cicd', icon: '🐙', color: 'bg-gray-800' },
        { name: 'Terraform', level: 85, category: 'cicd', icon: '🏗️', color: 'bg-purple-600' },
      ],
    },
    {
      name: 'Monitoring & Logging',
      icon: <ChartBarIcon className="w-6 h-6" />,
      color: 'red',
      skills: [
        { name: 'Prometheus', level: 85, category: 'monitoring', icon: '📊', color: 'bg-red-500' },
        { name: 'Grafana', level: 90, category: 'monitoring', icon: '📈', color: 'bg-orange-500' },
        { name: 'Grafana Loki', level: 80, category: 'monitoring', icon: '📋', color: 'bg-yellow-500' },
        { name: 'Promtail', level: 75, category: 'monitoring', icon: '📝', color: 'bg-blue-500' },
      ],
    },
    {
      name: 'Database & Additional Tools',
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'PostgreSQL', level: 80, category: 'database', icon: '🐘', color: 'bg-blue-600' },
        { name: 'MySQL', level: 75, category: 'database', icon: '🗄️', color: 'bg-blue-500' },
        { name: 'JFrog Artifactory', level: 85, category: 'tools', icon: '📦', color: 'bg-green-500' },
        { name: 'Traefik', level: 80, category: 'tools', icon: '🔀', color: 'bg-purple-500' },
      ],
    },
  ], []);

  const additionalSkills = [
    "RESTful Web Services",
    "TCP/IP, HTTP/HTTPS, DNS",
    "Load Balancing",
    "Linux & Windows",
    "SonarQube",
    "Trivy Security Scanning",
    "Agile Methodology"
  ];

  const allSkills = useMemo(() => 
    skillCategories.flatMap(category => category.skills), 
    [skillCategories]
  );
  
  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return allSkills;
    return skillCategories
      .find(cat => cat.name.toLowerCase().includes(activeCategory))?.skills || [];
  }, [activeCategory, allSkills, skillCategories]);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Skills', icon: <ChartBarIcon className="w-5 h-5" /> },
    ...skillCategories.map(cat => ({
      id: cat.name.toLowerCase().replace(/ /g, ''),
      name: cat.name,
      icon: cat.icon
    }))
  ], [skillCategories]);

  const SkillBar: React.FC<{ skill: Skill; index: number }> = React.memo(({ skill, index }) => {
    const [barRef, barInView] = useInView({ 
      threshold: 0.3, 
      triggerOnce: true,
      rootMargin: '20px'
    });

    return (
      <motion.div
        ref={barRef}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.8) }}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xl" role="img" aria-label={skill.name}>
              {skill.icon}
            </span>
            <span className="font-medium text-sm sm:text-base" style={{ color: 'rgb(var(--foreground))' }}>
              {skill.name}
            </span>
          </div>
          <span className="text-xs sm:text-sm font-bold" style={{ color: 'rgb(var(--primary))' }}>
            {skill.level}%
          </span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ backgroundColor: 'rgb(var(--muted))' }}>
          <motion.div
            className={`h-full rounded-full ${skill.color} relative overflow-hidden`}
            initial={{ width: 0 }}
            animate={barInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    );
  });

  SkillBar.displayName = 'SkillBar';

  if (!inView) {
    return (
      <section ref={ref} id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: 'rgb(var(--primary))' }} />
              <p className="text-lg" style={{ color: 'rgb(var(--muted-foreground))' }}>Loading Skills...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in DevOps tools and technologies with hands-on experience 
            in cloud infrastructure management and automation.
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
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                activeCategory === category.id ? 'shadow-lg' : 'hover:shadow-md'
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? 'rgb(var(--primary))' : 'rgb(var(--muted))',
                color: activeCategory === category.id ? 'rgb(var(--primary-foreground))' : 'rgb(var(--foreground))',
              }}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              className="p-4 sm:p-6 rounded-xl border transition-all duration-300 card-hover"
              style={{ 
                borderColor: 'rgb(var(--border))',
                backgroundColor: 'rgb(var(--background))'
              }}
            >
              <SkillBar skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center" style={{ color: 'rgb(var(--foreground))' }}>
            Additional Technologies & Concepts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="text-center p-3 rounded-lg border"
                style={{
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--background))'
                }}
              >
                <span className="text-sm font-medium" style={{ color: 'rgb(var(--foreground))' }}>
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">6</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Skill Categories</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{allSkills.length}</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
              {Math.round(allSkills.reduce((acc, skill) => acc + skill.level, 0) / allSkills.length)}%
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Avg. Proficiency</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl border" style={{ borderColor: 'rgb(var(--border))' }}>
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">2+</div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;