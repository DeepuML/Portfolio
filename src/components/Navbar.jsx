import { useState, useEffect } from 'react';
import { Menu, X, Cpu, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Agent Console', href: '#console', id: 'console' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Publications', href: '#publications', id: 'publications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section Highlighter
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-content">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={(e) => handleLinkClick(e, '#home')}>
          <Cpu size={24} className="logo-icon" />
          <span>DEEPENDR<span className="gradient-text">A</span></span>
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Quick Links */}
        <div className="navbar-socials">
          <a href="https://github.com/DeepuML" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/deependra-gangwar" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:deependra74678@gmail.com" className="social-icon-btn">
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-socials">
            <a href="https://github.com/DeepuML" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/deependra-gangwar" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:deependra74678@gmail.com" className="social-icon-btn">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}

      {/* Embedded Component Styles */}
      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid transparent;
          padding: 20px 24px;
        }

        .navbar-scrolled {
          background: rgba(5, 8, 17, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: rgba(255, 255, 255, 0.05);
          padding: 12px 24px;
          box-shadow: rgba(0, 0, 0, 0.2) 0 4px 20px;
        }

        .navbar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-title);
          font-weight: 700;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .logo-icon {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 8px rgba(0, 242, 254, 0.5));
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .navbar-link {
          font-family: var(--font-title);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 6px 0;
        }

        .navbar-link:hover, .navbar-link.active {
          color: var(--accent-cyan);
        }

        .navbar-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(to right, var(--accent-cyan), var(--accent-blue));
          transition: width 0.3s ease;
        }

        .navbar-link:hover::after, .navbar-link.active::after {
          width: 100%;
        }

        .navbar-socials {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          cursor: pointer;
        }

        .social-icon-btn:hover {
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.05);
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.2);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Nav Dropdown */
        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(5, 8, 17, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
          list-style: none;
        }

        .mobile-nav-link {
          font-family: var(--font-title);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
          display: block;
          padding: 8px 0;
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--accent-cyan);
          padding-left: 8px;
        }

        .mobile-nav-socials {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--border-color);
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .navbar-links, .navbar-socials {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .navbar-container {
            padding: 16px;
          }
          .navbar-scrolled {
            padding: 12px 16px;
          }
        }
      `}</style>
    </nav>
  );
}
