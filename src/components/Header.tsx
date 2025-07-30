import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { trackEvent } from './Analytics';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Track navigation clicks
      trackEvent('navigation_click', {
        section: sectionId,
        source: 'header_nav'
      });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = async () => {
    setIsDownloading(true);
    
    // Track resume download initiation
    trackEvent('resume_download_started', {
      source: 'header_button'
    });
    
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
      
      // Track successful download
      trackEvent('resume_download_completed', {
        source: 'header_button',
        filename: 'Abhijeet_Raj_Devops.pdf'
      });
    } catch (error) {
      console.error('Download failed:', error);
      
      // Track download failure
      trackEvent('resume_download_failed', {
        source: 'header_button',
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50" role="banner">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            <span className="text-blue-600">Abhijeet</span> Raj
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-600 transition-colors capitalize"
                aria-label={`Navigate to ${section} section`}
              >
                {section}
              </button>
            ))}

            <button
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isDownloading ? 'Downloading resume...' : 'Download resume'}
            >
              {isDownloading ? (
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" aria-hidden="true">
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
                <Download className="w-4 h-4" aria-hidden="true" />
              )}
              <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              // Track mobile menu toggle
              trackEvent('mobile_menu_toggle', {
                action: !isMenuOpen ? 'opened' : 'closed'
              });
            }}
            className="md:hidden p-2"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            id="mobile-navigation"
            className="md:hidden mt-4 pb-4 space-y-4" 
            role="navigation" 
            aria-label="Mobile navigation"
          >
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors capitalize"
                aria-label={`Navigate to ${section} section`}
              >
                {section}
              </button>
            ))}

            <button
              onClick={handleResumeDownload}
              disabled={isDownloading}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isDownloading ? 'Downloading resume...' : 'Download resume'}
            >
              {isDownloading ? (
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" aria-hidden="true">
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
                <Download className="w-4 h-4" aria-hidden="true" />
              )}
              <span>{isDownloading ? 'Downloading...' : 'Resume'}</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
