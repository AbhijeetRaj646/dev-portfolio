import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Analytics />
        <Header />
        <main role="main">
          <section id="about" aria-labelledby="hero-heading">
            <Hero />
          </section>
          <section id="skills" aria-labelledby="skills-heading">
            <Skills />
          </section>
          <section id="projects" aria-labelledby="projects-heading">
            <Projects />
          </section>
          <section id="experience" aria-labelledby="experience-heading">
            <Experience />
          </section>
          <section id="contact" aria-labelledby="contact-heading">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;