import React, { useState, useEffect } from 'react';
import { Terminal, User, Folder, FileText, Mail, Github, Linkedin } from 'lucide-react';

export default function DarkTerminalTemplate() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '$ whoami',
    'abhijeet-raj',
    '$ cat about.txt',
    'DevOps Engineer with 2+ years of experience...',
    '$'
  ]);

  useEffect(() => {
    const commands = [
      '$ ls -la',
      'total 42',
      'drwxr-xr-x  projects/',
      'drwxr-xr-x  experience/',
      '-rw-r--r--  skills.txt',
      '-rw-r--r--  contact.info',
      '$'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < commands.length) {
        setTerminalOutput(prev => [...prev, commands[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* Header */}
      <header className="border-b border-gray-700 p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="text-xl">~/abhijeet-raj</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-green-300 transition-colors">./about</a>
            <a href="#experience" className="hover:text-green-300 transition-colors">./experience</a>
            <a href="#projects" className="hover:text-green-300 transition-colors">./projects</a>
            <a href="#contact" className="hover:text-green-300 transition-colors">./contact</a>
          </nav>
        </div>
      </header>

      {/* Terminal Hero */}
      <section id="about" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-black border border-gray-700 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-gray-400 text-sm">terminal — bash — 80x24</span>
            </div>
            <div className="space-y-1">
              {terminalOutput.map((line, index) => (
                <div key={index} className={line.startsWith('$') ? 'text-green-400' : 'text-gray-300'}>
                  {line}
                </div>
              ))}
              <div className="flex">
                <span className="text-green-400">$ </span>
                <span className="ml-1 animate-pulse">|</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">
                  <span className="text-green-400">#!/bin/bash</span><br />
                  Abhijeet Raj
                </h1>
                <p className="text-2xl text-gray-300 mb-6">DevOps Engineer & SysAdmin</p>
                <div className="bg-gray-800 border border-gray-600 rounded p-4">
                  <pre className="text-sm">
{`export ROLE="DevOps Engineer"
export EXPERIENCE="2+ years"
export LOCATION="Baner, Pune"
export SKILLS=(
  "Kubernetes" "Docker" "AWS" 
  "Terraform" "Jenkins" "Python"
)
export STATUS="Available for hire"`}
                  </pre>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-green-600 text-black px-6 py-3 font-semibold hover:bg-green-500 transition-colors">
                  ./download-resume.sh
                </button>
                <button className="border border-green-400 text-green-400 px-6 py-3 font-semibold hover:bg-green-400 hover:text-black transition-colors">
                  cat projects.txt
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* System Info */}
              <div className="bg-gray-800 border border-gray-600 rounded p-4">
                <h3 className="text-green-400 font-semibold mb-3">$ system-info</h3>
                <div className="space-y-2 text-sm">
                  <div>🟢 System Status: <span className="text-green-400">Online</span></div>
                  <div>📊 Uptime: <span className="text-blue-400">99.9%</span></div>
                  <div>🔧 Active Projects: <span className="text-yellow-400">3</span></div>
                  <div>📈 Performance: <span className="text-green-400">Optimized</span></div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-800 border border-gray-600 rounded p-4">
                <h3 className="text-green-400 font-semibold mb-3">$ ls ~/links/</h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                    <Github className="w-4 h-4" />
                    <span>github.com/AbhijeetRaj646</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/abhijeetraj646</span>
                  </a>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span>abhijeetraj646@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">
            <span className="text-green-400">$</span> cat experience.log
          </h2>
          
          <div className="bg-black border border-gray-600 rounded p-6">
            <div className="space-y-6">
              <div className="border-l-2 border-green-400 pl-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-400">[2023-07-01 - PRESENT]</span>
                  <span className="text-white font-semibold">Software Engineer @ Realthingks</span>
                </div>
                <div className="text-gray-300 space-y-1 text-sm">
                  <div>• Implemented RBAC in Kubernetes clusters</div>
                  <div>• Automated backup processes for Jenkins & PostgreSQL</div>
                  <div>• Set up monitoring with Prometheus + Grafana</div>
                  <div>• Reduced debugging time by 50% with centralized logging</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">
            <span className="text-green-400">$</span> ls ./projects/
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-800 border border-gray-600 rounded p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Folder className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">ci-cd-automation/</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Full CI/CD pipeline with infrastructure as code, security scanning, 
                and automated deployment workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">Jenkins</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">Terraform</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">Docker</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">AWS</span>
              </div>
              <button className="text-green-400 hover:text-green-300 text-sm">
                $ cat README.md
              </button>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 border border-gray-600 rounded p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Folder className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">k8s-security/</span>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                Production Kubernetes security implementation with RBAC, 
                automated backups, and disaster recovery.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">Kubernetes</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">RBAC</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">AWS S3</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded">CronJobs</span>
              </div>
              <button className="text-green-400 hover:text-green-300 text-sm">
                $ cat README.md
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">
            <span className="text-green-400">$</span> cat skills.txt
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-600 rounded p-4">
              <h3 className="text-green-400 font-semibold mb-3"># Cloud & Infrastructure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AWS</span>
                  <span className="text-green-400">███████████ 90%</span>
                </div>
                <div className="flex justify-between">
                  <span>Kubernetes</span>
                  <span className="text-green-400">██████████ 85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Docker</span>
                  <span className="text-green-400">███████████ 88%</span>
                </div>
                <div className="flex justify-between">
                  <span>Terraform</span>
                  <span className="text-green-400">█████████ 82%</span>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-600 rounded p-4">
              <h3 className="text-green-400 font-semibold mb-3"># CI/CD & Automation</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Jenkins</span>
                  <span className="text-green-400">███████████ 92%</span>
                </div>
                <div className="flex justify-between">
                  <span>Argo CD</span>
                  <span className="text-green-400">███████ 70%</span>
                </div>
                <div className="flex justify-between">
                  <span>GitHub Actions</span>
                  <span className="text-green-400">████████ 75%</span>
                </div>
                <div className="flex justify-between">
                  <span>Python</span>
                  <span className="text-green-400">█████████ 80%</span>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gray-600 rounded p-4">
              <h3 className="text-green-400 font-semibold mb-3"># Monitoring & Security</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Prometheus</span>
                  <span className="text-green-400">██████████ 85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Grafana</span>
                  <span className="text-green-400">███████████ 90%</span>
                </div>
                <div className="flex justify-between">
                  <span>SonarQube</span>
                  <span className="text-green-400">████████ 78%</span>
                </div>
                <div className="flex justify-between">
                  <span>Trivy</span>
                  <span className="text-green-400">█████████ 80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">
            <span className="text-green-400">$</span> cat contact.info
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-600 rounded p-6">
              <pre className="text-sm">
{`#!/bin/bash
# Contact Information

NAME="Abhijeet Raj"
ROLE="DevOps Engineer"
EMAIL="abhijeetraj646@gmail.com"
PHONE="+91 6299070026"
LOCATION="Baner, Pune, India"

# Social Links
GITHUB="github.com/AbhijeetRaj646"
LINKEDIN="linkedin.com/in/abhijeetraj646"

# Status
AVAILABILITY="Open to opportunities"
RESPONSE_TIME="24 hours"`}
              </pre>
            </div>
            
            <div>
              <h3 className="text-green-400 font-semibold mb-4">$ ./send-message.sh</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="# Your name"
                  className="w-full bg-gray-800 border border-gray-600 p-3 text-green-400 placeholder-gray-500 focus:border-green-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="# Your email"
                  className="w-full bg-gray-800 border border-gray-600 p-3 text-green-400 placeholder-gray-500 focus:border-green-400 outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="# Your message"
                  className="w-full bg-gray-800 border border-gray-600 p-3 text-green-400 placeholder-gray-500 focus:border-green-400 outline-none resize-none"
                />
                <button className="w-full bg-green-600 text-black py-3 font-semibold hover:bg-green-500 transition-colors">
                  ./execute --send-message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            <span className="text-green-400">$</span> echo "© 2025 Abhijeet Raj. All processes terminated successfully."
          </p>
        </div>
      </footer>
    </div>
  );
}