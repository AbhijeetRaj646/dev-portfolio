import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Zap, 
  Shield, 
  Code, 
  Target, 
  PlayCircle, 
  Gamepad2, 
  Trophy, 
  Star,
  ChevronRight,
  Mail,
  Github,
  Linkedin,
  Download
} from 'lucide-react';

export default function GamingTemplate() {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [currentQuest, setCurrentQuest] = useState(0);

  const quests = [
    "Initialize Cloud Infrastructure",
    "Deploy Kubernetes Cluster", 
    "Implement CI/CD Pipeline",
    "Configure Monitoring Systems",
    "Secure Production Environment"
  ];

  const achievements = [
    { name: "Cloud Master", icon: "☁️", description: "Mastered AWS Services", unlocked: true },
    { name: "Container Expert", icon: "📦", description: "Kubernetes Specialist", unlocked: true },
    { name: "Pipeline Builder", icon: "⚡", description: "CI/CD Automation", unlocked: true },
    { name: "Security Guardian", icon: "🛡️", description: "DevSecOps Implementation", unlocked: false },
    { name: "Monitoring Sage", icon: "👁️", description: "Observability Expert", unlocked: true }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => prev + Math.floor(Math.random() * 10));
      setXp(prev => {
        const newXp = prev + 1;
        if (newXp >= 100) {
          setLevel(l => l + 1);
          return 0;
        }
        return newXp;
      });
      setCurrentQuest(prev => (prev + 1) % quests.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* HUD Header */}
      <header className="relative z-10 border-b-2 border-green-400 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Player Stats */}
            <div className="flex space-x-6">
              <div className="border border-green-400 p-2 bg-green-400/10">
                <div className="text-xs">LEVEL</div>
                <div className="text-xl font-bold">{level}</div>
              </div>
              <div className="border border-green-400 p-2 bg-green-400/10">
                <div className="text-xs">SCORE</div>
                <div className="text-xl font-bold">{score.toLocaleString()}</div>
              </div>
              <div className="border border-green-400 p-2 bg-green-400/10 flex-1">
                <div className="text-xs">XP</div>
                <div className="w-full bg-black border border-green-400 h-2 mt-1">
                  <div 
                    className="h-full bg-green-400 transition-all duration-500"
                    style={{ width: `${xp}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Player Info */}
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">ABHIJEET.RAJ</div>
              <div className="text-sm text-green-400">[ DEVOPS ENGINEER ]</div>
            </div>

            {/* Navigation */}
            <nav className="flex justify-end space-x-4">
              {['PROFILE', 'SKILLS', 'QUESTS', 'CONTACT'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-1 border border-green-400 hover:bg-green-400 hover:text-black transition-all text-xs"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Game Interface */}
      <section id="profile" className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Character Sheet */}
            <div className="lg:col-span-2">
              <div className="border-2 border-green-400 bg-black/80 p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 border border-green-400 bg-green-400/20 flex items-center justify-center">
                    <Cpu className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-cyan-400">PLAYER: ABHIJEET RAJ</h1>
                    <p className="text-green-400">CLASS: DEVOPS ENGINEER</p>
                    <p className="text-yellow-400">SPECIALIZATION: CLOUD INFRASTRUCTURE</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-3">[ STATS ]</h3>
                    <div className="space-y-2">
                      {[
                        { name: "EXPERIENCE", value: "2+ YEARS", level: 85 },
                        { name: "AUTOMATION", value: "EXPERT", level: 92 },
                        { name: "CLOUD MASTERY", value: "ADVANCED", level: 88 },
                        { name: "SECURITY", value: "HIGH", level: 80 }
                      ].map((stat) => (
                        <div key={stat.name} className="flex justify-between items-center">
                          <span className="text-green-400 text-sm">{stat.name}:</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 h-2 bg-black border border-green-400">
                              <div 
                                className="h-full bg-green-400 transition-all duration-1000"
                                style={{ width: `${stat.level}%` }}
                              />
                            </div>
                            <span className="text-yellow-400 text-xs">{stat.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-cyan-400 mb-3">[ EQUIPMENT ]</h3>
                    <div className="space-y-2">
                      {[
                        { name: "AWS ARSENAL", rarity: "LEGENDARY", icon: "☁️" },
                        { name: "KUBERNETES CORE", rarity: "EPIC", icon: "⚙️" },
                        { name: "DOCKER ENGINE", rarity: "RARE", icon: "📦" },
                        { name: "JENKINS PIPELINE", rarity: "EPIC", icon: "🔧" }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center space-x-3 p-2 border border-green-400/30 bg-green-400/5">
                          <span className="text-lg">{item.icon}</span>
                          <div className="flex-1">
                            <div className="text-green-400 text-sm">{item.name}</div>
                            <div className={`text-xs ${
                              item.rarity === 'LEGENDARY' ? 'text-yellow-400' :
                              item.rarity === 'EPIC' ? 'text-purple-400' : 'text-blue-400'
                            }`}>
                              {item.rarity}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-green-400 pt-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">[ MISSION BRIEFING ]</h3>
                  <p className="text-green-400 leading-relaxed">
                    Elite DevOps operative with 2+ years of field experience in cloud infrastructure automation. 
                    Specialized in Kubernetes orchestration, CI/CD pipeline construction, and security protocol implementation. 
                    Currently deployed at Realthingks, successfully completing high-priority missions with 99.9% uptime achievement.
                  </p>
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Current Quest */}
              <div className="border border-green-400 bg-black/80 p-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">[ ACTIVE QUEST ]</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-yellow-400" />
                    <span className="text-green-400 text-sm">{quests[currentQuest]}</span>
                  </div>
                  <div className="text-xs text-yellow-400">PRIORITY: HIGH</div>
                  <div className="text-xs text-green-400">REWARD: +500 XP</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="border border-green-400 bg-black/80 p-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">[ ACHIEVEMENTS ]</h3>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`flex items-center space-x-3 p-2 border ${
                        achievement.unlocked 
                          ? 'border-green-400 bg-green-400/10' 
                          : 'border-gray-600 bg-gray-600/10'
                      }`}
                    >
                      <span className="text-lg">{achievement.icon}</span>
                      <div className="flex-1">
                        <div className={`text-sm ${achievement.unlocked ? 'text-green-400' : 'text-gray-500'}`}>
                          {achievement.name}
                        </div>
                        <div className={`text-xs ${achievement.unlocked ? 'text-yellow-400' : 'text-gray-600'}`}>
                          {achievement.description}
                        </div>
                      </div>
                      {achievement.unlocked && <Trophy className="w-4 h-4 text-yellow-400" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Terminal */}
              <div className="border border-green-400 bg-black/80 p-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-3">[ COMMUNICATION ]</h3>
                <div className="space-y-2">
                  <div className="text-green-400 text-xs">EMAIL: abhijeetraj646@gmail.com</div>
                  <div className="text-green-400 text-xs">PHONE: +91 6299070026</div>
                  <div className="text-green-400 text-xs">LOCATION: BANER, PUNE</div>
                  <div className="text-green-400 text-xs">STATUS: AVAILABLE FOR MISSIONS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
            [ SKILL TREE ]
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "CLOUD INFRASTRUCTURE",
                color: "cyan",
                skills: [
                  { name: "AWS", level: 90, mastered: true },
                  { name: "KUBERNETES", level: 85, mastered: true },
                  { name: "DOCKER", level: 88, mastered: true },
                  { name: "TERRAFORM", level: 82, mastered: false }
                ]
              },
              {
                category: "AUTOMATION SYSTEMS",
                color: "green",
                skills: [
                  { name: "JENKINS", level: 92, mastered: true },
                  { name: "ARGO CD", level: 70, mastered: false },
                  { name: "GITHUB ACTIONS", level: 75, mastered: false },
                  { name: "PYTHON", level: 80, mastered: true }
                ]
              },
              {
                category: "MONITORING & SECURITY",
                color: "yellow",
                skills: [
                  { name: "PROMETHEUS", level: 85, mastered: true },
                  { name: "GRAFANA", level: 90, mastered: true },
                  { name: "SONARQUBE", level: 78, mastered: false },
                  { name: "TRIVY", level: 80, mastered: true }
                ]
              }
            ].map((category, index) => (
              <div key={index} className="border border-green-400 bg-black/80 p-6">
                <h3 className={`text-lg font-bold text-${category.color}-400 mb-4`}>
                  [ {category.category} ]
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-green-400 text-sm flex items-center space-x-2">
                          <span>{skill.name}</span>
                          {skill.mastered && <Star className="w-3 h-3 text-yellow-400" />}
                        </span>
                        <span className="text-yellow-400 text-xs">LVL {skill.level}</span>
                      </div>
                      <div className="w-full h-2 bg-black border border-green-400">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            skill.mastered ? 'bg-yellow-400' : 'bg-green-400'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Log */}
      <section id="quests" className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
            [ MISSION LOG ]
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mission: "OPERATION: CI/CD REVOLUTION",
                status: "COMPLETED",
                difficulty: "EXPERT",
                description: "Implemented comprehensive automation pipeline with security scanning and infrastructure as code",
                rewards: ["100% Deployment Automation", "Security Integration", "Zero Downtime"],
                tech: ["JENKINS", "TERRAFORM", "DOCKER", "AWS"]
              },
              {
                mission: "OPERATION: FORTRESS KUBERNETES",
                status: "COMPLETED", 
                difficulty: "LEGENDARY",
                description: "Deployed production-ready security architecture with RBAC and automated backup systems",
                rewards: ["RBAC Implementation", "Automated Backups", "High Availability"],
                tech: ["KUBERNETES", "RBAC", "AWS S3", "CRONJOBS"]
              }
            ].map((mission, index) => (
              <div key={index} className="border border-green-400 bg-black/80 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-cyan-400">{mission.mission}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs border ${
                      mission.status === 'COMPLETED' 
                        ? 'border-green-400 text-green-400 bg-green-400/20' 
                        : 'border-yellow-400 text-yellow-400 bg-yellow-400/20'
                    }`}>
                      {mission.status}
                    </span>
                    <span className={`px-2 py-1 text-xs border ${
                      mission.difficulty === 'LEGENDARY' 
                        ? 'border-yellow-400 text-yellow-400 bg-yellow-400/20' 
                        : 'border-purple-400 text-purple-400 bg-purple-400/20'
                    }`}>
                      {mission.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className="text-green-400 text-sm mb-4 leading-relaxed">
                  {mission.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-cyan-400 text-sm font-bold mb-2">[ MISSION REWARDS ]</h4>
                  <div className="space-y-1">
                    {mission.rewards.map((reward) => (
                      <div key={reward} className="flex items-center space-x-2">
                        <ChevronRight className="w-3 h-3 text-yellow-400" />
                        <span className="text-green-400 text-xs">{reward}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-cyan-400 text-sm font-bold mb-2">[ TECH STACK ]</h4>
                  <div className="flex flex-wrap gap-1">
                    {mission.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-green-400/20 text-green-400 text-xs border border-green-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Interface */}
      <section id="contact" className="py-12 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">
            [ INITIATE CONTACT ]
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-green-400 bg-black/80 p-6">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">[ TRANSMISSION FORM ]</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-green-400 text-sm mb-1">SENDER_NAME:</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-green-400 p-2 text-green-400 focus:border-cyan-400 focus:outline-none font-mono"
                    placeholder="Enter your identifier..."
                  />
                </div>
                <div>
                  <label className="block text-green-400 text-sm mb-1">COMM_CHANNEL:</label>
                  <input 
                    type="email" 
                    className="w-full bg-black border border-green-400 p-2 text-green-400 focus:border-cyan-400 focus:outline-none font-mono"
                    placeholder="your.email@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-green-400 text-sm mb-1">MESSAGE_PAYLOAD:</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black border border-green-400 p-2 text-green-400 focus:border-cyan-400 focus:outline-none font-mono resize-none"
                    placeholder="Transmit your message..."
                  />
                </div>
                <button className="w-full bg-green-400 text-black py-2 hover:bg-cyan-400 transition-colors font-bold">
                  [ SEND TRANSMISSION ]
                </button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="border border-green-400 bg-black/80 p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">[ DIRECT CHANNELS ]</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 border border-green-400/30 hover:border-green-400 transition-colors">
                    <Mail className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-green-400 text-sm">EMAIL_PROTOCOL</div>
                      <div className="text-cyan-400 text-xs">abhijeetraj646@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 border border-green-400/30 hover:border-green-400 transition-colors">
                    <Github className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-green-400 text-sm">CODE_REPOSITORY</div>
                      <div className="text-cyan-400 text-xs">github.com/AbhijeetRaj646</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-2 border border-green-400/30 hover:border-green-400 transition-colors">
                    <Linkedin className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-green-400 text-sm">NETWORK_LINK</div>
                      <div className="text-cyan-400 text-xs">linkedin.com/in/abhijeetraj646</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border border-green-400 bg-black/80 p-6">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">[ SYSTEM STATUS ]</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-green-400 text-sm">AVAILABILITY:</span>
                    <span className="text-yellow-400 text-sm">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400 text-sm">RESPONSE_TIME:</span>
                    <span className="text-yellow-400 text-sm">24H</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400 text-sm">LOCATION:</span>
                    <span className="text-yellow-400 text-sm">PUNE_INDIA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400 text-sm">STATUS:</span>
                    <span className="text-green-400 text-sm">ACCEPTING_QUESTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Console */}
      <footer className="border-t-2 border-green-400 bg-black/80 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-green-400 mb-2">
              © 2025 ABHIJEET.RAJ | DEVOPS_ENGINEER.EXE | ALL_SYSTEMS_OPERATIONAL
            </div>
            <div className="text-cyan-400 text-sm">
              [ GAME_MODE: PROFESSIONAL | DIFFICULTY: EXPERT | STATUS: READY_FOR_DEPLOYMENT ]
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}