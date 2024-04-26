import React, { useState } from 'react';
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { LanguageProvider } from './LanguageContext';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div>
        <Navbar scrollToTop={scrollToTop} setActiveSection={setActiveSection} />
        <Banner />
        <About id="about" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
      </div>
    </LanguageProvider>
  );
}

export default App;
