import React from 'react';
import TemplateSelector from './templates/TemplateSelector';
import Analytics from './components/Analytics';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Analytics />
      <TemplateSelector defaultTemplate="minimalist" />
    </ErrorBoundary>
  );
}

export default App;