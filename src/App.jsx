import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Research from './components/Research/Research';
import Metrics from './components/Metrics/Metrics';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Layout Sections */}
      <main>
        {/* 1 & 2. Hero / About Section */}
        <Hero />

        {/* 3. What I Work With / Technical Skills Bento Grid */}
        <Skills />

        {/* 4. Engineering Experience Interactive Vertical Timeline */}
        <Experience />

        {/* 5. Featured Projects Showcase */}
        <Projects />

        {/* 6. Research & Innovation Showcase */}
        <Research />

        {/* 7. Impact & Verified Engineering Metrics */}
        <Metrics />

        {/* 8. Certifications & Leadership */}
        <Certifications />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
