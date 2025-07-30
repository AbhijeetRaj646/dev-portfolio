import React, { useState } from 'react';
import { Monitor, Moon, Sparkles, Briefcase } from 'lucide-react';

// Template imports
import MinimalistTemplate from './MinimalistTemplate';
import DarkTerminalTemplate from './DarkTerminalTemplate';
import GlassmorphismTemplate from './GlassmorphismTemplate';
import CorporateTemplate from './CorporateTemplate';

export type TemplateType = 'minimalist' | 'dark-terminal' | 'glassmorphism' | 'corporate';

interface Template {
  id: TemplateType;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
  preview: string;
}

const templates: Template[] = [
  {
    id: 'minimalist',
    name: 'Minimalist Professional',
    description: 'Clean, simple design focused on content and readability',
    icon: Monitor,
    component: MinimalistTemplate,
    preview: 'Clean white background with subtle shadows and professional typography'
  },
  {
    id: 'dark-terminal',
    name: 'Dark Terminal',
    description: 'Developer-focused dark theme with terminal aesthetics',
    icon: Moon,
    component: DarkTerminalTemplate,
    preview: 'Dark background with green accents and monospace fonts'
  },
  {
    id: 'glassmorphism',
    name: 'Creative Glassmorphism',
    description: 'Modern design with glass effects and smooth animations',
    icon: Sparkles,
    component: GlassmorphismTemplate,
    preview: 'Frosted glass cards with colorful gradients and blur effects'
  },
  {
    id: 'corporate',
    name: 'Corporate Executive',
    description: 'Business-focused professional layout for corporate roles',
    icon: Briefcase,
    component: CorporateTemplate,
    preview: 'Traditional corporate design with blue accents and formal structure'
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

  return (
    <div className="min-h-screen">
      {/* Template Selector UI */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${showSelector ? 'w-80' : 'w-12'}`}>
        <div className="bg-white rounded-lg shadow-lg border">
          {!showSelector ? (
            <button
              onClick={() => setShowSelector(true)}
              className="p-3 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="Open template selector"
            >
              <Monitor className="w-6 h-6 text-gray-600" />
            </button>
          ) : (
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Choose Template</h3>
                <button
                  onClick={() => setShowSelector(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close template selector"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => {
                      setSelectedTemplate(template.id);
                      setShowSelector(false);
                    }}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      selectedTemplate === template.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <template.icon className={`w-5 h-5 mt-0.5 ${
                        selectedTemplate === template.id ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <div>
                        <div className="font-medium text-gray-900">{template.name}</div>
                        <div className="text-sm text-gray-500">{template.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
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