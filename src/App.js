import React, { useState } from "react";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import PublicIcon from "@mui/icons-material/Public";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-[#F1F1F1] text-[rgb(36,36,36)]"
          : "bg-[rgb(36,36,36)] text-white"
      } scroll-smooth h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 transition-all duration-500`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <a href="#hero" alt="Home" title="Goes up to hero section">
          <div className="flex items-center justify-center">
            <PublicIcon
              fontSize="large"
              className="text-[#F7AB0A] filter grayscale hover:grayscale-0 transition duration-150"
            />
          </div>
        </a>
      </footer>
    </div>
  );
}

export default App;
