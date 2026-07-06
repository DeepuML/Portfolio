import { Cpu, Server, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <Cpu size={24} className="pillar-icon-svg cyan" />,
      title: 'Generative AI & LLMs',
      desc: 'Expertise in custom tokenization, RoPE embeddings, multi-head attention mechanisms, and pretraining transformers from scratch. Skilled in quantization and FlashAttention optimization.',
    },
    {
      icon: <Server size={24} className="pillar-icon-svg purple" />,
      title: 'MLOps & DevOps',
      desc: 'Building reproducible training/inference pipelines, model tracking with MLflow, containerization via Docker, cloud hosting (AWS/GCP), and automating workflows via CI/CD.',
    },
    {
      icon: <GraduationCap size={24} className="pillar-icon-svg blue" />,
      title: 'Academic Foundation',
      desc: 'Pursuing B.Tech in Computer Science & Engineering at Lovely Professional University. Active researcher with a published paper in language identification.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">A blend of machine learning research and systems engineering.</p>

        <div className="about-grid">
          {/* Bio text */}
          <div className="about-bio-card glass-card">
            <h3 className="bio-title">Bridging Theory & Production</h3>
            <p className="bio-paragraph">
              I am an **AI/ML Engineer** based in Bangalore, India, currently working as a 
              **Research Analyst - Machine Learning** at **Edureka**. My work centers on designing, training, 
              and deploying high-impact Generative AI solutions.
            </p>
            <p className="bio-paragraph">
              I believe that real engineering lies in understanding the core mathematics and mechanics of the systems we build. 
              To prove this, I built a **custom Transformer LLM from scratch** (handling custom tokenization, RoPE, and attention layers) 
              and optimized it for maximum hardware utilization.
            </p>
            <p className="bio-paragraph">
              Beyond model building, I am deeply committed to **MLOps best practices**. I utilize Docker, MLflow, 
              and CI/CD pipelines to ensure ML models are not just notebook files but reliable, scalable production microservices.
            </p>
            
            <div className="quick-stats">
              <div className="stat-item">
                <span className="stat-num">10+</span>
                <span className="stat-label">ML Pipelines Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">1</span>
                <span className="stat-label">Published Paper</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">92%</span>
                <span className="stat-label">RAG Accuracy Achieved</span>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="about-pillars">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-icon-wrapper">
                  {pillar.icon}
                </div>
                <div className="pillar-info">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          text-align: left;
        }

        .about-bio-card {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bio-title {
          font-size: 1.8rem;
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .bio-paragraph {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .bio-paragraph strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .quick-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border-color);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-num {
          font-family: var(--font-title);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-cyan);
          text-shadow: 0 0 10px rgba(0, 242, 254, 0.3);
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .about-pillars {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .pillar-card {
          padding: 24px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .pillar-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .pillar-icon-svg.cyan {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 6px rgba(0, 242, 254, 0.4));
        }

        .pillar-icon-svg.purple {
          color: var(--accent-purple);
          filter: drop-shadow(0 0 6px rgba(138, 43, 226, 0.4));
        }

        .pillar-icon-svg.blue {
          color: var(--accent-blue);
          filter: drop-shadow(0 0 6px rgba(79, 172, 254, 0.4));
        }

        .pillar-title {
          font-size: 1.15rem;
          margin-bottom: 8px;
          color: var(--text-primary);
        }

        .pillar-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-bio-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
