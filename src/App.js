import About from './components/About'
import ContactMe from './components/ContactMe'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className='bg-[rgb(36,36,36)] scroll-smooth text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
      <Navbar />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-center'>
        <ContactMe />
      </section>

      <footer className='sticky bottom-5 w-full cursor-pointer'>
      <a href='#hero' alt='Home' title='Goes up to hero section'><div className='flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F7AB0A" className="w-8 h-8 filter grayscale hover:grayscale-0 transition duration-150">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
          </svg>
        </div>
      </a>
      </footer>
    </div>
  );
}

export default App;
