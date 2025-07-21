import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'rgb(var(--background))' }}>
        <Header />
        <main className="relative">
          <section id="home">
            <Hero />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgb(var(--background))',
              color: 'rgb(var(--foreground))',
              border: '1px solid rgb(var(--border))',
            },
          }}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;