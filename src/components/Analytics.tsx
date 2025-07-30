import { useEffect } from 'react';

// Analytics configuration
const ANALYTICS_CONFIG = {
  // Google Analytics - Set your GA4 Measurement ID
  googleAnalytics: {
    enabled: import.meta.env.VITE_GA_ENABLED === 'true',
    measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
  },
  // Plausible Analytics - Set your domain
  plausible: {
    enabled: import.meta.env.VITE_PLAUSIBLE_ENABLED === 'true',
    domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN || '',
    src: import.meta.env.VITE_PLAUSIBLE_SRC || 'https://plausible.io/js/script.js',
  },
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    plausible: (...args: any[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Initialize Google Analytics
    if (ANALYTICS_CONFIG.googleAnalytics.enabled && ANALYTICS_CONFIG.googleAnalytics.measurementId) {
      // Create script element for Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.googleAnalytics.measurementId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
        page_title: document.title,
        page_location: window.location.href,
      });

      console.log('Google Analytics initialized');
    }

    // Initialize Plausible Analytics
    if (ANALYTICS_CONFIG.plausible.enabled && ANALYTICS_CONFIG.plausible.domain) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.setAttribute('data-domain', ANALYTICS_CONFIG.plausible.domain);
      script.src = ANALYTICS_CONFIG.plausible.src;
      document.head.appendChild(script);

      console.log('Plausible Analytics initialized');
    }
  }, []);

  return null; // This component doesn't render anything
}

// Utility functions for tracking events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics event tracking
  if (ANALYTICS_CONFIG.googleAnalytics.enabled && window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Plausible event tracking
  if (ANALYTICS_CONFIG.plausible.enabled && window.plausible) {
    window.plausible(eventName, { props: properties });
  }
};

// Page view tracking (useful for SPAs)
export const trackPageView = (path?: string) => {
  const page_path = path || window.location.pathname;
  
  // Google Analytics page view
  if (ANALYTICS_CONFIG.googleAnalytics.enabled && window.gtag) {
    window.gtag('config', ANALYTICS_CONFIG.googleAnalytics.measurementId, {
      page_path,
    });
  }

  // Plausible automatically tracks page views, but you can manually trigger them
  if (ANALYTICS_CONFIG.plausible.enabled && window.plausible) {
    window.plausible('pageview');
  }
};