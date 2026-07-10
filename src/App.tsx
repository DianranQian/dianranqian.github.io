import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CSFoundation from './components/CSFoundation';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CSFoundation />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
