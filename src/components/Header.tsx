import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/Abhijeet_Devops.pdf');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'Abhijeet_Raj_Devops.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-blue-600">Abhijeet</span> Raj
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-600 transition-colors capitalize"
              >
                {section}
              </button>
            ))}

            <button
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              {isDownloading ? (
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="white"
                    d="M4 12a8 8 0 018-8v4l4-4-4-4v4a12 12 0 00-12 12h4z"
                  />
                </svg>
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors capitalize"
              >
                {section}
              </button>
            ))}

            <button
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              {isDownloading ? (
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="white"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="white"
                    d="M4 12a8 8 0 018-8v4l4-4-4-4v4a12 12 0 00-12 12h4z"
                  />
                </svg>
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
