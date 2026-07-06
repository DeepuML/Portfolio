import { ExternalLink, Code, Layers, Settings } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const projectsList = [
    {
      title: 'Large Language Model from Scratch',
      icon: <Code size={20} className="proj-icon cyan" />,
      desc: 'Built a transformer-based LLM from scratch, implementing custom tokenization, Rotary Position Embeddings (RoPE), multi-head attention, and transformer blocks. Optimized pretraining using mixed-precision, gradient checkpointing, and FlashAttention to reduce GPU memory footprint.',
      tech: ['Python', 'PyTorch', 'CUDA', 'Transformer Architecture', 'FlashAttention'],
      github: 'https://github.com/DeepuML',
      highlight: 'Reduced GPU memory usage by 45% during training',
    },
    {
      title: 'RAG-based Medical Nutrition Chatbot',
      icon: <Layers size={20} className="proj-icon purple" />,
      desc: 'Built a domain-specific medical nutrition RAG chatbot indexed on a 1,200-page textbook, achieving 92% retrieval accuracy via semantic chunking and optimized vector search. Integrated a 7B LLM with persistent multi-session chat history and REST API endpoints.',
      tech: ['Python', 'ChromaDB', 'Llama-7B', 'Vector Search', 'REST API', 'Flask'],
      github: 'https://github.com/DeepuML',
      highlight: '92% retrieval accuracy & 35% response latency reduction',
    },
    {
      title: 'YouTube Comment Intelligence System',
      icon: <Settings size={20} className="proj-icon blue" />,
      desc: 'Built a real-time comment intelligence system utilizing a Chrome extension frontend to scrape comments, passing them to a multi-model ML pipeline. Automated MLOps workflows with MLflow and Docker, reducing deployment time by half.',
      tech: ['JavaScript', 'Chrome API', 'Python', 'Scikit-learn', 'Docker', 'MLflow', 'CI/CD'],
      github: 'https://github.com/DeepuML',
      highlight: 'Processes 1,000+ comments/session with 30%+ classification accuracy gain',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Core engineering projects demonstrating model training, optimization, and system integration.</p>

        <div className="projects-grid">
          {projectsList.map((project, idx) => (
            <div key={idx} className="project-card glass-card">
              <div className="project-card-header">
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="View Source on GitHub">
                  <Github size={18} />
                </a>
              </div>

              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                
                {/* Metric/Highlight Badge */}
                <div className="project-highlight-bar">
                  <span className="highlight-tag">Impact</span>
                  <span className="highlight-text">{project.highlight}</span>
                </div>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-badges">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          text-align: left;
        }

        .project-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .project-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }

        .proj-icon.cyan {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 6px rgba(0, 242, 254, 0.4));
        }

        .proj-icon.purple {
          color: var(--accent-purple);
          filter: drop-shadow(0 0 6px rgba(138, 43, 226, 0.4));
        }

        .proj-icon.blue {
          color: var(--accent-blue);
          filter: drop-shadow(0 0 6px rgba(79, 172, 254, 0.4));
        }

        .project-link-btn {
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .project-link-btn:hover {
          color: var(--accent-cyan);
        }

        .project-card-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 12px;
          font-family: var(--font-title);
          font-weight: 600;
          line-height: 1.4;
        }

        .project-card-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .project-highlight-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 24px;
        }

        .highlight-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-family: var(--font-mono);
          color: var(--accent-cyan);
          font-weight: bold;
        }

        .highlight-text {
          font-size: 0.8rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .project-card-footer {
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }

        .project-tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 2px 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
