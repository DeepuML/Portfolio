import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end demonstration only
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Let's discuss opportunities, collaborations, or custom AI solutions.</p>

        <div className="contact-grid">
          {/* Info Card */}
          <div className="contact-info-card glass-card">
            <h3 className="card-title">Contact Information</h3>
            <p className="card-subtitle">Feel free to reach out via email, phone, or LinkedIn.</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={18} />
                </div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <a href="mailto:deependra74678@gmail.com" className="info-value">deependra74678@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={18} />
                </div>
                <div className="info-text">
                  <span className="info-label">Mobile</span>
                  <a href="tel:+917467876886" className="info-value">+91-7467876886</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={18} />
                </div>
                <div className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div className="social-links-title">Connect on Socials</div>
            <div className="contact-socials">
              <a href="https://github.com/DeepuML" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/deependra-gangwar" target="_blank" rel="noopener noreferrer" className="social-btn">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card glass-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Deependra, I would like to discuss..."
                  className="form-input text-area"
                />
              </div>

              <button type="submit" disabled={submitted} className="btn btn-primary submit-btn">
                {submitted ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding-top: 60px;
          padding-bottom: 100px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          text-align: left;
        }

        .contact-info-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1.6rem;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-family: var(--font-title);
        }

        .card-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 32px;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 32px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0, 242, 254, 0.05);
          border: 1px solid rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .info-text {
          display: flex;
          flex-direction: column;
        }

        .info-label {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .info-value {
          font-size: 1.02rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        a.info-value:hover {
          color: var(--accent-cyan);
        }

        .social-links-title {
          font-size: 0.9rem;
          font-family: var(--font-title);
          color: var(--text-secondary);
          font-weight: 500;
          margin-bottom: 12px;
          border-top: 1px solid var(--border-color);
          padding-top: 24px;
        }

        .contact-socials {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .social-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.04);
          transform: translateY(-2px);
        }

        /* Form styling */
        .contact-form-card {
          padding: 40px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-family: var(--font-title);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .form-input {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          border-color: rgba(0, 242, 254, 0.5);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.1);
          background: rgba(255, 255, 255, 0.04);
        }

        .text-area {
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 10px;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-info-card, .contact-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
