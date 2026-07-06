import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Console from './components/Console';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Background canvas particle system */}
      <CanvasBackground />

      {/* Main navigation header */}
      <Navbar />

      {/* Main Page Layout */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Console />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </main>

      {/* Tech-styled Footer */}
      <footer style={footerStyle}>
        <div className="container" style={footerContainerStyle}>
          <p>© {new Date().getFullYear()} Deependra Gangwar. Built with React & Vanilla CSS.</p>
          <p style={footerSubtextStyle}>Designed for AI Engineering & MLOps Roles.</p>
        </div>
      </footer>
    </>
  );
}

const footerStyle = {
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
  background: 'rgba(5, 8, 17, 0.9)',
  padding: '30px 24px',
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
};

const footerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--text-secondary)',
  fontSize: '0.9rem',
};

const footerSubtextStyle = {
  fontSize: '0.8rem',
  color: 'var(--text-muted)',
  fontFamily: 'var(--font-mono)',
};

export default App;
