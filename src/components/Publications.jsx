import { Award, BookOpen, GraduationCap } from 'lucide-react';

export default function Publications() {
  const certifications = [
    {
      title: "Generative AI Certification",
      issuer: 'Euron',
      period: 'Jan 2025 - May 2025',
      desc: 'Practical implementation and development with Large Language Models, Retrieval-Augmented Generation (RAG) pipelines, and Agentic AI applications.',
    },
    {
      title: 'Data Science Master Program (DSMP)',
      issuer: 'CampusX',
      period: 'May 2024 - Dec 2024',
      desc: 'Comprehensive practical training program covering classical machine learning, deep learning models, and building/deploying end-to-end ML projects.',
    },
  ];

  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2 className="section-title">Publications & <span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle">Academic research contributions and specialized credentials.</p>

        <div className="publications-grid">
          {/* Publication Card */}
          <div className="publication-column">
            <h3 className="column-title">
              <BookOpen size={20} className="column-title-icon cyan" />
              Research Publications
            </h3>
            
            <div className="pub-card glass-card">
              <div className="pub-badge">Peer-Reviewed</div>
              <h4 className="pub-title">
                Proposing a Hybrid Machine Learning Approach for Language Identification in Code-Switching Text
              </h4>
              <p className="pub-venue">
                Published in the proceedings of the <strong>Hinweis International Conference</strong>.
              </p>
              <p className="pub-desc">
                Developed a hybrid machine learning model to accurately identify languages inside code-switching text blocks 
                (sentences blending multiple languages, e.g., Hinglish). This research is highly applicable to pretraining datasets 
                curation and improving multilingual parser tokens for LLMs.
              </p>
            </div>

            <div className="education-mini glass-card">
              <h3 className="column-title education-header">
                <GraduationCap size={20} className="column-title-icon purple" />
                Education
              </h3>
              <h4 className="edu-degree">B.Tech - Computer Science & Engineering</h4>
              <p className="edu-school">Lovely Professional University (Punjab, India)</p>
              <p className="edu-dates">July 2022 - June 2026</p>
              <p className="edu-courses">
                <strong>Relevant coursework:</strong> Data Structures & Algorithms, Artificial Intelligence, 
                Machine Learning, Deep Learning, Natural Language Processing, Computer Vision.
              </p>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="certification-column">
            <h3 className="column-title">
              <Award size={20} className="column-title-icon blue" />
              Professional Certifications
            </h3>

            <div className="certs-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card glass-card">
                  <div className="cert-header">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer badge">{cert.issuer}</span>
                  </div>
                  <span className="cert-period">{cert.period}</span>
                  <p className="cert-desc">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .publications-section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .publications-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          text-align: left;
        }

        .publication-column, .certification-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .column-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.35rem;
          color: var(--text-primary);
          font-family: var(--font-title);
          font-weight: 500;
        }

        .column-title-icon.cyan {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 4px rgba(0, 242, 254, 0.4));
        }

        .column-title-icon.purple {
          color: var(--accent-purple);
          filter: drop-shadow(0 0 4px rgba(138, 43, 226, 0.4));
        }

        .column-title-icon.blue {
          color: var(--accent-blue);
          filter: drop-shadow(0 0 4px rgba(79, 172, 254, 0.4));
        }

        .pub-card {
          padding: 30px;
          position: relative;
        }

        .pub-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.05);
          border: 1px solid rgba(0, 242, 254, 0.2);
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 16px;
        }

        .pub-title {
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 12px;
          line-height: 1.4;
          font-family: var(--font-title);
        }

        .pub-venue {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .pub-venue strong {
          color: var(--text-primary);
        }

        .pub-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* Education Card */
        .education-mini {
          padding: 30px;
        }

        .education-header {
          margin-bottom: 16px;
        }

        .edu-degree {
          font-size: 1.15rem;
          color: var(--text-primary);
          font-family: var(--font-title);
        }

        .edu-school {
          color: var(--accent-cyan);
          font-size: 0.95rem;
          margin-top: 4px;
        }

        .edu-dates {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
          margin-bottom: 16px;
        }

        .edu-courses {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          border-top: 1px solid var(--border-color);
          padding-top: 16px;
        }

        .edu-courses strong {
          color: var(--text-primary);
        }

        /* Certs styling */
        .certs-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cert-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
        }

        .cert-title {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-family: var(--font-title);
          line-height: 1.3;
        }

        .cert-period {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 12px;
        }

        .cert-desc {
          color: var(--text-secondary);
          font-size: 0.88rem;
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .publications-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
