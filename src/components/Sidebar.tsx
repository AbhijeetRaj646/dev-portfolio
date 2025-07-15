import React from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Download,
  Github,
  Linkedin,
  MapPin,
  Phone
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: 'home', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'experience', label: 'Experience', icon: GraduationCap },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const handleResumeDownload = async () => {
    try {
      const response = await fetch('/Abhijeet_Devops.pdf');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abhijeet_Raj_DevOps_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="w-80 bg-white shadow-xl h-screen fixed left-0 top-0 z-50 overflow-y-auto">
      {/* Profile Section */}
      <div className="p-8 text-center border-b border-gray-100">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">AR</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Abhijeet Raj</h1>
        <p className="text-blue-600 font-medium mb-3">DevOps Engineer</p>
        <div className="flex items-center justify-center text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Pune, India</span>
        </div>
        <div className="flex items-center justify-center text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span>Available for opportunities</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Download Resume */}
      <div className="p-6 border-t border-gray-100">
        <button
          onClick={handleResumeDownload}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </button>
      </div>

      {/* Contact Info */}
      <div className="p-6 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Quick Contact</h3>
        <div className="space-y-3">
          <a 
            href="mailto:abhijeetraj646@gmail.com"
            className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">abhijeetraj646@gmail.com</span>
          </a>
          <a 
            href="tel:+916299070026"
            className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">+91 6299070026</span>
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="p-6 border-t border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Connect</h3>
        <div className="flex space-x-3">
          <a
            href="https://github.com/AbhijeetRaj646"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhijeetraj646"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}