import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Research Analyst – Machine Learning',
      company: 'Edureka',
      location: 'Bangalore, India',
      period: 'Sep 2025 - Present',
      bullets: [
        'Built and evaluated 10+ end-to-end Machine Learning and Generative AI pipelines using Python, PyTorch, TensorFlow, and Hugging Face for NLP and CV applications.',
        'Implemented advanced LLM-based workflows including semantic search, text classification, and Retrieval-Augmented Generation (RAG) using OpenAI APIs, boosting accuracy by 30%+',
        'Established reproducible ML training and deployment pipelines adopting MLOps workflows using Docker, MLflow, and CI/CD integrations for automated experimentation.',
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
        <p className="section-subtitle">Professional roles in machine learning development and analysis.</p>

        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-core"></div>
              </div>
              
              <div className="timeline-content glass-card">
                <div className="exp-header">
                  <div className="role-company">
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company gradient-text">{exp.company}</h4>
                  </div>
                  
                  <div className="exp-metadata">
                    <span className="meta-item">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="meta-item">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="exp-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .timeline-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          padding-left: 30px;
          text-align: left;
        }

        /* Vertical timeline track line */
        .timeline-container::before {
          content: '';
          position: absolute;
          left: 8px;
          top: 5px;
          bottom: 5px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-cyan) 0%, var(--accent-purple) 100%);
          opacity: 0.3;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-marker {
          position: absolute;
          left: -30px;
          top: 18px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #050811;
          border: 2px solid var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .marker-core {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan);
        }

        .timeline-content {
          padding: 32px;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .exp-role {
          font-size: 1.4rem;
          color: var(--text-primary);
          font-family: var(--font-title);
        }

        .exp-company {
          font-size: 1.15rem;
          font-family: var(--font-title);
          font-weight: 500;
          margin-top: 4px;
        }

        .exp-metadata {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-end;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-muted);
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }

        .exp-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-bullet-item {
          position: relative;
          padding-left: 20px;
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .exp-bullet-item::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--accent-cyan);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .exp-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .exp-metadata {
            align-items: flex-start;
          }
          .timeline-content {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
