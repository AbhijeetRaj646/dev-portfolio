import React from 'react';
import { Star, Quote, Linkedin, User } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Senior DevOps Manager",
    company: "TechCorp Solutions",
    image: null,
    rating: 5,
    text: "Abhijeet's expertise in Kubernetes and CI/CD automation has been instrumental in our infrastructure modernization. His proactive approach to monitoring and alerting significantly improved our system reliability.",
    highlight: "Improved system reliability by 40%"
  },
  {
    name: "Michael Chen",
    role: "Lead Software Engineer",
    company: "CloudTech Innovations",
    image: null,
    rating: 5,
    text: "Working with Abhijeet was a game-changer for our deployment processes. His implementation of automated CI/CD pipelines reduced our deployment time from hours to minutes.",
    highlight: "Reduced deployment time by 75%"
  },
  {
    name: "Priya Sharma",
    role: "Infrastructure Architect",
    company: "ScaleUp Systems",
    image: null,
    rating: 5,
    text: "Abhijeet's deep understanding of AWS services and infrastructure as code practices helped us build a robust, scalable platform. His attention to security best practices is commendable.",
    highlight: "Built scalable infrastructure for 10x growth"
  }
];

const achievements = [
  {
    metric: "99.9%",
    label: "System Uptime",
    description: "Maintained across all managed infrastructures"
  },
  {
    metric: "50%",
    label: "Faster Deployments",
    description: "Through CI/CD automation and optimization"
  },
  {
    metric: "15+",
    label: "Successful Projects",
    description: "Delivered on time and within budget"
  },
  {
    metric: "24/7",
    label: "Monitoring Coverage",
    description: "Comprehensive observability implementation"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What <span className="gradient-text">Colleagues Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Feedback from team members and colleagues who have experienced my work firsthand
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 card-hover">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{achievement.metric}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{achievement.label}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="w-8 h-8" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Highlight */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-6 rounded-r-lg">
                <p className="text-blue-800 font-semibold text-sm">{testimonial.highlight}</p>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}