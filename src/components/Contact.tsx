import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AnimatedSection } from './ui/AnimatedSection';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  LinkIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import {
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  contactMethod: 'email' | 'phone' | 'linkedin';
}

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  description: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>();

  const watchedFields = watch();

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/abhijeetraj646',
      color: 'text-blue-600 hover:text-blue-700',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: 'https://github.com/abhijeetraj646',
      color: 'text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white',
      description: 'Code repositories and open source contributions'
    },
    {
      name: 'Email',
      icon: <EnvelopeIcon className="w-6 h-6" />,
      url: 'mailto:abhijeetraj646@gmail.com',
      color: 'text-red-600 hover:text-red-700',
      description: 'Direct email communication'
    },
    {
      name: 'Phone',
      icon: <PhoneIcon className="w-6 h-6" />,
      url: 'tel:+916299070026',
      color: 'text-green-600 hover:text-green-700',
      description: 'Voice calls and WhatsApp'
    },
  ];

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      label: 'Email',
      value: 'abhijeetraj646@gmail.com',
      href: 'mailto:abhijeetraj646@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 6299070026',
      href: 'tel:+916299070026',
      color: 'text-green-600'
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      label: 'Location',
      value: 'Bangalore, India',
      href: 'https://maps.google.com/?q=Bangalore,India',
      color: 'text-purple-600'
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        icon: '🚀',
      });
      
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ContactCard: React.FC<{ info: typeof contactInfo[0]; index: number }> = ({ info, index }) => (
    <motion.a
      href={info.href}
      target={info.href.startsWith('http') ? '_blank' : undefined}
      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="p-6 rounded-2xl border transition-all duration-300 card-hover glass-morphism group"
      style={{ borderColor: 'rgb(var(--border))' }}
    >
      <div className={`${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {info.icon}
      </div>
      <h3 className="font-semibold mb-2" style={{ color: 'rgb(var(--foreground))' }}>
        {info.label}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
        {info.value}
      </p>
    </motion.a>
  );

  const SocialCard: React.FC<{ social: SocialLink; index: number }> = ({ social, index }) => (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 rounded-xl border transition-all duration-300 group glass-morphism"
      style={{ borderColor: 'rgb(var(--border))' }}
    >
      <div className={`${social.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
        {social.icon}
      </div>
      <h4 className="font-semibold mb-1" style={{ color: 'rgb(var(--foreground))' }}>
        {social.name}
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400">
        {social.description}
      </p>
    </motion.a>
  );

  return (
    <AnimatedSection id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next DevOps project? Let's discuss how I can help 
            optimize your infrastructure and streamline your deployment processes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(var(--foreground))' }}>
                Contact Information
              </h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <ContactCard key={info.label} info={info} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(var(--foreground))' }}>
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <SocialCard key={social.name} social={social} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-2xl border glass-morphism"
              style={{ borderColor: 'rgb(var(--border))' }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h3 className="text-lg font-semibold" style={{ color: 'rgb(var(--foreground))' }}>
                  Available for Work
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm currently open to new opportunities and freelance projects. 
                Let's build something amazing together!
              </p>
              <div className="flex flex-wrap gap-2">
                {['DevOps Consulting', 'Cloud Migration', 'CI/CD Setup', 'Infrastructure Automation'].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 text-sm rounded-full border"
                    style={{
                      borderColor: 'rgb(var(--primary))',
                      color: 'rgb(var(--primary))',
                      backgroundColor: 'rgb(var(--primary) / 0.1)'
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 rounded-2xl border glass-morphism" style={{ borderColor: 'rgb(var(--border))' }}>
              <div className="flex items-center space-x-3 mb-6">
                <ChatBubbleLeftRightIcon className="w-6 h-6" style={{ color: 'rgb(var(--primary))' }} />
                <h3 className="text-2xl font-bold" style={{ color: 'rgb(var(--foreground))' }}>
                  Send Me a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--foreground))' }}>
                    Your Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    style={{
                      borderColor: errors.name ? '#ef4444' : 'rgb(var(--border))',
                      backgroundColor: 'rgb(var(--background))',
                      color: 'rgb(var(--foreground))',
                      focusRingColor: 'rgb(var(--primary))'
                    }}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--foreground))' }}>
                    Email Address *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    style={{
                      borderColor: errors.email ? '#ef4444' : 'rgb(var(--border))',
                      backgroundColor: 'rgb(var(--background))',
                      color: 'rgb(var(--foreground))'
                    }}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--foreground))' }}>
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    style={{
                      borderColor: errors.subject ? '#ef4444' : 'rgb(var(--border))',
                      backgroundColor: 'rgb(var(--background))',
                      color: 'rgb(var(--foreground))'
                    }}
                    placeholder="DevOps Consultation"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--foreground))' }}>
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['email', 'phone', 'linkedin'] as const).map((method) => (
                      <label key={method} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          {...register('contactMethod')}
                          type="radio"
                          value={method}
                          className="text-blue-600"
                        />
                        <span className="text-sm capitalize" style={{ color: 'rgb(var(--foreground))' }}>
                          {method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'rgb(var(--foreground))' }}>
                    Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none resize-none"
                    style={{
                      borderColor: errors.message ? '#ef4444' : 'rgb(var(--border))',
                      backgroundColor: 'rgb(var(--background))',
                      color: 'rgb(var(--foreground))'
                    }}
                    placeholder="Tell me about your project requirements, goals, and how I can help you..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    {watchedFields.message?.length || 0} characters
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: 'rgb(var(--primary))',
                    color: 'rgb(var(--primary-foreground))'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border glass-morphism" style={{ borderColor: 'rgb(var(--border))' }}>
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--foreground))' }}>
              Typically responds within 24 hours
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;