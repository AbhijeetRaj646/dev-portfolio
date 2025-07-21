import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AnimatedSection } from './ui/AnimatedSection';
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
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories: SkillCategory[] = [
    {
      name: 'Cloud Platforms',
      icon: <CloudIcon className="w-6 h-6" />,
      color: 'blue',
      skills: [
        { name: 'AWS', level: 90, category: 'cloud', icon: '☁️', color: 'bg-orange-500' },
        { name: 'Azure', level: 75, category: 'cloud', icon: '🌐', color: 'bg-blue-500' },
        { name: 'Google Cloud', level: 70, category: 'cloud', icon: '🔗', color: 'bg-green-500' },
        { name: 'DigitalOcean', level: 80, category: 'cloud', icon: '💧', color: 'bg-cyan-500' },
      ],
    },
    {
      name: 'DevOps Tools',
      icon: <CogIcon className="w-6 h-6" />,
      color: 'green',
      skills: [
        { name: 'Kubernetes', level: 85, category: 'devops', icon: '⚓', color: 'bg-blue-600' },
        { name: 'Docker', level: 90, category: 'devops', icon: '🐳', color: 'bg-blue-400' },
        { name: 'Jenkins', level: 80, category: 'devops', icon: '🔧', color: 'bg-red-500' },
        { name: 'GitLab CI', level: 75, category: 'devops', icon: '🦊', color: 'bg-orange-600' },
        { name: 'Terraform', level: 85, category: 'devops', icon: '🏗️', color: 'bg-purple-600' },
        { name: 'Ansible', level: 80, category: 'devops', icon: '🎯', color: 'bg-red-600' },
      ],
    },
    {
      name: 'Monitoring',
      icon: <ChartBarIcon className="w-6 h-6" />,
      color: 'purple',
      skills: [
        { name: 'Prometheus', level: 85, category: 'monitoring', icon: '📊', color: 'bg-orange-500' },
        { name: 'Grafana', level: 80, category: 'monitoring', icon: '📈', color: 'bg-orange-600' },
        { name: 'ELK Stack', level: 75, category: 'monitoring', icon: '🔍', color: 'bg-yellow-600' },
        { name: 'Datadog', level: 70, category: 'monitoring', icon: '🐕', color: 'bg-purple-500' },
      ],
    },
    {
      name: 'Programming',
      icon: <CodeBracketIcon className="w-6 h-6" />,
      color: 'indigo',
      skills: [
        { name: 'Python', level: 85, category: 'programming', icon: '🐍', color: 'bg-blue-500' },
        { name: 'Bash/Shell', level: 90, category: 'programming', icon: '💻', color: 'bg-gray-700' },
        { name: 'YAML', level: 85, category: 'programming', icon: '📝', color: 'bg-red-500' },
        { name: 'JavaScript', level: 70, category: 'programming', icon: '⚡', color: 'bg-yellow-500' },
      ],
    },
    {
      name: 'Security',
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      color: 'red',
      skills: [
        { name: 'DevSecOps', level: 80, category: 'security', icon: '🔒', color: 'bg-red-600' },
        { name: 'OWASP', level: 75, category: 'security', icon: '🛡️', color: 'bg-red-500' },
        { name: 'Vault', level: 70, category: 'security', icon: '🗝️', color: 'bg-gray-600' },
        { name: 'SAST/DAST', level: 75, category: 'security', icon: '🔎', color: 'bg-purple-600' },
      ],
    },
    {
      name: 'Infrastructure',
      icon: <ServerIcon className="w-6 h-6" />,
      color: 'gray',
      skills: [
        { name: 'Linux', level: 90, category: 'infrastructure', icon: '🐧', color: 'bg-yellow-600' },
        { name: 'Nginx', level: 80, category: 'infrastructure', icon: '🌐', color: 'bg-green-600' },
        { name: 'Redis', level: 75, category: 'infrastructure', icon: '📦', color: 'bg-red-500' },
        { name: 'PostgreSQL', level: 70, category: 'infrastructure', icon: '🐘', color: 'bg-blue-600' },
      ],
    },
  ];

  const allSkills = skillCategories.flatMap(category => category.skills);
  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : skillCategories.find(cat => cat.name.toLowerCase().includes(activeCategory))?.skills || [];

  const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
    const [barRef, barInView] = useInView({ threshold: 0.5, triggerOnce: true });

    return (
      <motion.div
        ref={barRef}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="space-y-2"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold" style={{ color: 'rgb(var(--foreground))' }}>
              {skill.name}
            </span>
          </div>
          <span className="text-sm font-bold" style={{ color: 'rgb(var(--primary))' }}>
            {skill.level}%
          </span>
        </div>
        <div className="w-full h-3 rounded-full" style={{ backgroundColor: 'rgb(var(--muted))' }}>
          <motion.div
            className={`h-full rounded-full ${skill.color} relative overflow-hidden`}
            initial={{ width: 0 }}
            animate={barInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%' }}
              animate={barInView ? { x: '100%' } : {}}
              transition={{ duration: 1.5, delay: (index * 0.1) + 1, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const CategoryButton: React.FC<{ category: SkillCategory | { name: string; icon: React.ReactNode; color: string } }> = ({ category }) => {
    const isActive = activeCategory === category.name.toLowerCase() || (activeCategory === 'all' && category.name === 'All');
    
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveCategory(category.name === 'All' ? 'all' : category.name.toLowerCase())}
        className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
          isActive 
            ? 'shadow-lg' 
            : 'hover:shadow-md'
        }`}
        style={{
          backgroundColor: isActive ? 'rgb(var(--primary))' : 'rgb(var(--muted))',
          color: isActive ? 'rgb(var(--primary-foreground))' : 'rgb(var(--foreground))',
        }}
      >
        {category.icon}
        <span>{category.name}</span>
      </motion.button>
    );
  };

  return (
    <AnimatedSection id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of DevOps, 
            cloud computing, and software development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <CategoryButton 
            category={{ 
              name: 'All', 
              icon: <ChartBarIcon className="w-5 h-5" />, 
              color: 'blue' 
            }} 
          />
          {skillCategories.map((category) => (
            <CategoryButton key={category.name} category={category} />
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              className="p-6 rounded-2xl border transition-all duration-300 card-hover glass-morphism"
              style={{ 
                borderColor: 'rgb(var(--border))',
                backgroundColor: 'rgb(var(--background) / 0.5)'
              }}
            >
              <SkillBar skill={skill} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">6+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Skill Categories</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">24+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">85%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg. Proficiency</div>
          </div>
          <div className="text-center p-6 rounded-2xl glass-morphism">
            <div className="text-3xl font-bold gradient-text mb-2">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(var(--foreground))' }}>
            Certifications & Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AWS Certified Solutions Architect',
              'Kubernetes Certified Administrator',
              'Docker Certified Associate',
              'HashiCorp Terraform Associate'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="px-4 py-2 rounded-full border text-sm font-medium"
                style={{ 
                  borderColor: 'rgb(var(--primary))',
                  color: 'rgb(var(--primary))',
                  backgroundColor: 'rgb(var(--primary) / 0.1)'
                }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;