import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:abhijeetraj646@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next DevOps project? Let's discuss how I can help 
            optimize your infrastructure and streamline your deployment processes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <address className="space-y-4 not-italic">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:abhijeetraj646@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      abhijeetraj646@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+916299070026" className="text-blue-600 hover:text-blue-700 transition-colors">
                      +91 6299070026
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Baner, Pune, India</p>
                    <p className="text-sm text-gray-500">(Open to relocate)</p>
                  </div>
                </div>
              </address>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect Online</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/abhijeetraj646" 
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  aria-label="Visit my LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
                <a 
                  href="https://github.com/AbhijeetRaj646" 
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors"
                  aria-label="Visit my GitHub profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Availability</h4>
              <p className="text-gray-700 mb-4">
                Currently employed at Realthingks and open to discussing new opportunities. 
                Available for freelance projects and consulting work.
              </p>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></span>
                <span className="text-sm text-gray-600">Open to new opportunities</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Focus</h4>
              <ul className="space-y-2 text-sm text-gray-700" role="list" aria-label="Areas of expertise">
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
                  DevOps & Cloud Infrastructure
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3" aria-hidden="true"></span>
                  Kubernetes & Container Orchestration
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" aria-hidden="true"></span>
                  CI/CD Pipeline Automation
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3" aria-hidden="true"></span>
                  Monitoring & Observability
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                  required
                  aria-describedby="name-error"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                  required
                  aria-describedby="email-error"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Project inquiry, consultation, etc."
                  required
                  aria-describedby="subject-error"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tell me about your project requirements..."
                  required
                  aria-describedby="message-error"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message via email"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send Message</span>
              </button>
              
              <p className="text-sm text-gray-500 text-center">
                This form will open your default email client with the message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}