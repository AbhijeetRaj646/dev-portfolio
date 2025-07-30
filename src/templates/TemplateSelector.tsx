import React, { useState } from 'react';
import { Monitor, Moon, Sparkles, Briefcase, Layers, FileText, Gamepad2, TrendingUp } from 'lucide-react';

// Template imports
import MinimalistTemplate from './MinimalistTemplate';
import DarkTerminalTemplate from './DarkTerminalTemplate';
import GlassmorphismTemplate from './GlassmorphismTemplate';
import CorporateTemplate from './CorporateTemplate';
import NeomorphismTemplate from './NeomorphismTemplate';
import MagazineTemplate from './MagazineTemplate';
import GamingTemplate from './GamingTemplate';
import StartupTemplate from './StartupTemplate';

export type TemplateType = 'minimalist' | 'dark-terminal' | 'glassmorphism' | 'corporate' | 'neomorphism' | 'magazine' | 'gaming' | 'startup';

interface Template {
  id: TemplateType;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
  preview: string;
  category: string;
}

const templates: Template[] = [
  {
    id: 'minimalist',
    name: 'Minimalist Professional',
    description: 'Clean, simple design focused on content and readability',
    icon: Monitor,
    component: MinimalistTemplate,
    preview: 'Clean white background with subtle shadows and professional typography',
    category: 'Traditional'
  },
  {
    id: 'dark-terminal',
    name: 'Dark Terminal',
    description: 'Developer-focused dark theme with terminal aesthetics',
    icon: Moon,
    component: DarkTerminalTemplate,
    preview: 'Dark background with green accents and monospace fonts',
    category: 'Developer'
  },
  {
    id: 'glassmorphism',
    name: 'Creative Glassmorphism',
    description: 'Modern design with glass effects and smooth animations',
    icon: Sparkles,
    component: GlassmorphismTemplate,
    preview: 'Frosted glass cards with colorful gradients and blur effects',
    category: 'Creative'
  },
  {
    id: 'corporate',
    name: 'Corporate Executive',
    description: 'Business-focused professional layout for corporate roles',
    icon: Briefcase,
    component: CorporateTemplate,
    preview: 'Traditional corporate design with blue accents and formal structure',
    category: 'Corporate'
  },
  {
    id: 'neomorphism',
    name: 'Neomorphic Soft UI',
    description: 'Modern soft shadows and 3D-like design elements',
    icon: Layers,
    component: NeomorphismTemplate,
    preview: 'Subtle 3D effects with soft shadows and modern aesthetics',
    category: 'Modern'
  },
  {
    id: 'magazine',
    name: 'Magazine Editorial',
    description: 'Publishing-style layout with typography focus',
    icon: FileText,
    component: MagazineTemplate,
    preview: 'Editorial design with article-like layout and professional typography',
    category: 'Editorial'
  },
  {
    id: 'gaming',
    name: 'Gaming/Cyberpunk',
    description: 'Interactive gaming interface with neon aesthetics',
    icon: Gamepad2,
    component: GamingTemplate,
    preview: 'Cyberpunk design with interactive elements and neon colors',
    category: 'Interactive'
  },
  {
    id: 'startup',
    name: 'Startup/Y Combinator',
    description: 'Silicon Valley style with growth metrics and product focus',
    icon: TrendingUp,
    component: StartupTemplate,
    preview: 'Startup pitch deck style with metrics and modern branding',
    category: 'Startup'
  }
];

interface TemplateSelectorProps {
  defaultTemplate?: TemplateType;
}

export default function TemplateSelector({ defaultTemplate = 'minimalist' }: TemplateSelectorProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>(defaultTemplate);
  const [showSelector, setShowSelector] = useState(false);

  const currentTemplate = templates.find(t => t.id === selectedTemplate);
  const SelectedComponent = currentTemplate?.component || MinimalistTemplate;

  // Group templates by category
  const groupedTemplates = templates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = [];
    }
    acc[template.category].push(template);
    return acc;
  }, {} as Record<string, Template[]>);

  return (
    <div className="min-h-screen">
      {/* Template Selector UI */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${showSelector ? 'w-96' : 'w-12'}`}>
        <div className="bg-white rounded-lg shadow-xl border">
          {!showSelector ? (
            <button
              onClick={() => setShowSelector(true)}
              className="p-3 hover:bg-gray-50 rounded-lg transition-colors group"
              aria-label="Open template selector"
            >
              <Monitor className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </button>
          ) : (
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900">Portfolio Templates</h3>
                  <p className="text-xs text-gray-500 mt-1">8 unique designs to choose from</p>
                </div>
                <button
                  onClick={() => setShowSelector(false)}
                  className="text-gray-400 hover:text-gray-600 text-xl font-bold w-6 h-6 flex items-center justify-center"
                  aria-label="Close template selector"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                {Object.entries(groupedTemplates).map(([category, categoryTemplates]) => (
                  <div key={category}>
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {categoryTemplates.map((template) => (
                        <button
                          key={template.id}
                          onClick={() => {
                            setSelectedTemplate(template.id);
                            setShowSelector(false);
                          }}
                          className={`w-full p-3 rounded-lg border text-left transition-all group ${
                            selectedTemplate === template.id
                              ? 'border-blue-500 bg-blue-50 shadow-sm'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-1.5 rounded-md ${
                              selectedTemplate === template.id 
                                ? 'bg-blue-100' 
                                : 'bg-gray-100 group-hover:bg-gray-200'
                            }`}>
                              <template.icon className={`w-3.5 h-3.5 ${
                                selectedTemplate === template.id ? 'text-blue-600' : 'text-gray-500'
                              }`} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className={`font-medium text-sm ${
                                selectedTemplate === template.id ? 'text-blue-900' : 'text-gray-900'
                              }`}>
                                {template.name}
                              </div>
                              <div className={`text-xs mt-1 ${
                                selectedTemplate === template.id ? 'text-blue-700' : 'text-gray-500'
                              }`}>
                                {template.description}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center">
                  Current: <span className="font-medium text-gray-700">{currentTemplate?.name}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Current Template */}
      <SelectedComponent />
    </div>
  );
}