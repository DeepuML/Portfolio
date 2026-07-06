import { Code2, Brain, Cpu, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 size={20} className="category-icon cyan" />,
      skills: ['Python', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'AI/ML & GenAI Frameworks',
      icon: <Brain size={20} className="category-icon purple" />,
      skills: [
        'PyTorch',
        'TensorFlow',
        'Hugging Face',
        'RAG Pipelines',
        'LLM Pretraining',
        'Scikit-learn',
        'Keras',
        'NLTK',
        'SpaCy',
        'Flask',
      ],
    },
    {
      title: 'MLOps & DevOps Tools',
      icon: <Cpu size={20} className="category-icon blue" />,
      skills: [
        'Docker',
        'MLflow',
        'Git & GitHub',
        'CI/CD Pipelines',
        'Dagshub',
        'Linux Systems',
      ],
    },
    {
      title: 'Platforms & Cloud Databases',
      icon: <Database size={20} className="category-icon green" />,
      skills: ['AWS Cloud', 'GCP (Google Cloud)', 'MySQL', 'Vector Databases'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">A comprehensive toolkit spanning core development, AI models, and infrastructure.</p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skills-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          text-align: left;
        }

        .skills-category-card {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .category-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }

        .category-icon.cyan {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 6px rgba(0, 242, 254, 0.4));
        }

        .category-icon.purple {
          color: var(--accent-purple);
          filter: drop-shadow(0 0 6px rgba(138, 43, 226, 0.4));
        }

        .category-icon.blue {
          color: var(--accent-blue);
          filter: drop-shadow(0 0 6px rgba(79, 172, 254, 0.4));
        }

        .category-icon.green {
          color: #10b981;
          filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.4));
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          font-family: var(--font-title);
          font-weight: 500;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tag {
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.3);
          background: rgba(0, 242, 254, 0.04);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 242, 254, 0.05);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skills-category-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
