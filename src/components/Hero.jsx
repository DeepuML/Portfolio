import { useState, useEffect } from 'react';
import { Terminal, ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  const roles = [
    'AI/ML Engineer',
    'Generative AI Developer',
    'MLOps Specialist',
    'Agentic AI Engineer',
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const activeRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        setTypingSpeed(30);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    if (!isDeleting && currentText === activeRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Open to Roles in Bangalore & Remote
          </div>
          <h4 className="hero-sub">Hi, my name is</h4>
          <h1 className="hero-title">Deependra Gangwar</h1>
          <h2 className="hero-role-wrapper">
            I am a {"\u00A0"} <span className="hero-role gradient-text">{currentText}</span>
            <span className="typing-cursor"></span>
          </h2>
          <p className="hero-desc">
            <strong>AI/ML Engineer</strong> specializing in <strong>Generative AI</strong>, <strong>Large Language Models (LLMs)</strong>, <strong>Agentic AI</strong>, and scalable <strong>RAG/Graph RAG</strong> systems. 
            Skilled in designing production-ready AI applications, building end-to-end LLM pipelines, orchestrating multi-agent workflows, and implementing 
            reliable <strong>MLOps</strong> practices using <strong>Docker, MLflow, CI/CD</strong>, and modern AI infrastructure. Passionate about <strong>Deep Learning</strong>, 
            <strong>Natural Language Processing (NLP)</strong>, <strong>Computer Vision</strong>, and building intelligent AI systems that solve real-world problems at scale.
          </p>
          <div className="hero-actions">
            <a
              href="#console"
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, '#console')}
            >
              <Terminal size={18} />
              Query AI Clone
            </a>
            <a
              href="#projects"
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, '#projects')}
            >
              Explore Projects
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Cyber decoration container */}
        <div className="hero-visual">
          <div className="cyber-sphere-container">
            <div className="cyber-sphere-outer"></div>
            <div className="cyber-sphere-mid"></div>
            <div className="cyber-sphere-inner">
              <img src="/profile.jpg" alt="Deependra Gangwar" className="profile-img" />
            </div>
            <div className="glow-accent-1"></div>
            <div className="glow-accent-2"></div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          padding-bottom: 60px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 242, 254, 0.04);
          border: 1px solid rgba(0, 242, 254, 0.15);
          color: var(--accent-cyan);
          padding: 6px 16px;
          border-radius: 50px;
          font-family: var(--font-title);
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background-color: var(--accent-cyan);
          border-radius: 50%;
          animation: pulse 1.5s infinite;
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        @keyframes pulse {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.4;
          }
          100% {
            transform: scale(0.9);
            opacity: 1;
          }
        }

        .hero-sub {
          font-family: var(--font-mono);
          color: var(--accent-blue);
          font-size: 1.1rem;
          margin-bottom: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 16px;
          background: linear-gradient(to right, #ffffff, #cbd5e1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-role-wrapper {
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 24px;
          min-height: 3.5rem;
          display: flex;
          align-items: center;
        }

        .hero-desc {
          color: rgba(243, 244, 246, 0.75);
          font-size: 1.05rem;
          margin-bottom: 40px;
          max-width: 650px;
          line-height: 1.8;
          letter-spacing: 0.01em;
        }

        .hero-desc strong {
          color: var(--accent-cyan);
          font-weight: 600;
          text-shadow: 0 0 10px rgba(0, 242, 254, 0.25);
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* Sci-fi Sphere Styling */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .cyber-sphere-container {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cyber-sphere-outer {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(0, 242, 254, 0.25);
          border-radius: 50%;
          animation: spin-clockwise 20s linear infinite;
        }

        .cyber-sphere-mid {
          position: absolute;
          width: 80%;
          height: 80%;
          border: 1px solid rgba(138, 43, 226, 0.2);
          border-left: 2px solid var(--accent-purple);
          border-right: 2px solid var(--accent-purple);
          border-radius: 50%;
          animation: spin-counter 15s linear infinite;
        }

        .cyber-sphere-inner {
          position: absolute;
          width: 72%;
          height: 72%;
          background: #030712;
          border: 1px solid rgba(0, 242, 254, 0.3);
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(0, 242, 254, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          overflow: hidden;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transition: transform 0.5s ease;
        }

        .cyber-sphere-container:hover .profile-img {
          transform: scale(1.05);
        }

        .glow-accent-1 {
          position: absolute;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(0, 242, 254, 0.1) 0%, transparent 70%);
          filter: blur(10px);
          top: 10%;
          left: 10%;
          animation: floatGlow 6s ease-in-out infinite;
        }

        .glow-accent-2 {
          position: absolute;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.1) 0%, transparent 70%);
          filter: blur(10px);
          bottom: 10%;
          right: 10%;
          animation: floatGlow 6s ease-in-out infinite alternate;
        }

        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-counter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes floatGlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 10px); }
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          .hero-text {
            align-items: center;
          }
          .hero-role-wrapper {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-title {
            font-size: 3rem;
          }
          .cyber-sphere-container {
            width: 260px;
            height: 260px;
          }
        }
      `}</style>
    </section>
  );
}

// Inline custom CPU vector icon for premium sci-fi design
function CpuIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#cpuGrad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: 'drop-shadow(0 0 10px rgba(0, 242, 254, 0.6))' }}
    >
      <defs>
        <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="100%" stopColor="#8a2be2" />
        </linearGradient>
      </defs>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  );
}
