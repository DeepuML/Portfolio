import { useState, useRef, useEffect } from 'react';
import { Send, Terminal, Play, RotateCcw } from 'lucide-react';

export default function Console() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const consoleEndRef = useRef(null);

  const initialWelcomeMessage = {
    sender: 'system',
    text: `Initializing Deependra's AI Clone (v1.0.3)...
=============================================
Status: ONLINE
RAG Database: LOADED (resume_embedding_v2)
LLM Model: Active (Llama-3-Agent-Quantized)
=============================================

Hi there! I am Deependra's Agentic AI clone. Ask me anything about his experience, projects, skills, or publications. You can type a question below or click the quick queries!`,
  };

  useEffect(() => {
    setMessages([initialWelcomeMessage]);
  }, []);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const knowledgeBase = [
    {
      keywords: ['edureka', 'experience', 'work', 'job', 'role', 'analyst', 'research'],
      response: `Deependra's Experience at Edureka (Research Analyst - Machine Learning | Sep 2025 - Present):
• Built & evaluated 10+ end-to-end ML & GenAI pipelines using Python, PyTorch, TensorFlow, and Hugging Face.
• Implemented LLM workflows (semantic search, text classification, RAG) using OpenAI APIs, boosting model accuracy by 30%+.
• Established reproducible ML pipelines & MLOps practices using Docker, MLflow, and CI/CD for scalable experimentation & deployment.`,
    },
    {
      keywords: ['llm', 'scratch', 'transformer', 'pretraining', 'mixed-precision', 'gpu'],
      response: `Large Language Model from Scratch:
• Built a transformer-based LLM from scratch, implementing custom tokenization, RoPE embeddings, multi-head attention, and transformer blocks.
• Optimized training using mixed-precision, gradient checkpointing, and FlashAttention (reducing GPU memory by 45% and boosting throughput).
• Developed a reproducible end-to-end data ingestion and pretraining pipeline for large-scale corpora with high GPU utilization.`,
    },
    {
      keywords: ['rag', 'medical', 'chatbot', 'nutrition', 'vector', 'semantic'],
      response: `RAG-based Medical Nutrition Chatbot:
• Built a domain-specific medical nutrition RAG chatbot using a 1,200-page textbook, achieving 92% retrieval accuracy via semantic chunking and optimized vector search.
• Integrated a 7B parameter LLM, reducing latency by 35% while enabling persistent multi-session chat history.
• Architected a scalable retrieval-generation pipeline with REST API deployment, improving complex query resolution by 40%.`,
    },
    {
      keywords: ['youtube', 'comment', 'intelligence', 'extension', 'chrome'],
      response: `YouTube Comment Intelligence System:
• Real-time comment intelligence system with a Chrome extension, processing 1,000+ comments per session.
• Designed a multi-model ML pipeline with hyperparameter tuning, improving classification accuracy by 30%+.
• Automated MLOps workflows (CI/CD, monitoring), reducing deployment time by 50% and failures by 35%.`,
    },
    {
      keywords: ['skills', 'tech', 'languages', 'frameworks', 'tools', 'databases'],
      response: `Deependra's Skill Summary:
• Languages: Python, C++, JavaScript, SQL, HTML, CSS
• Frameworks: Scikit-learn, TensorFlow, Keras, PyTorch, Hugging Face, NLTK, SpaCy, Flask
• MLOps & Tools: Docker, Git, MySQL, MLflow, Dagshub, Linux, Windows, AWS, GCP`,
    },
    {
      keywords: ['contact', 'email', 'phone', 'mobile', 'hire', 'reach', 'linkedin', 'github'],
      response: `Contact & Social Links for Deependra Gangwar:
• Email: deependra74678@gmail.com
• Phone: +91-7467876886
• LinkedIn: linkedin.com/in/deependra-gangwar
• GitHub: github.com/DeepuML
• Location: Bangalore, India`,
    },
    {
      keywords: ['education', 'college', 'lpu', 'university', 'btech', 'degree', 'cse'],
      response: `Education Details:
• Degree: Bachelor of Technology (B.Tech) - Computer Science & Engineering
• University: Lovely Professional University, Punjab, India (July 2022 - June 2026)
• Core Coursework: Data Structures, Analysis of Algorithms, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, NLP`,
    },
    {
      keywords: ['publication', 'paper', 'research', 'hinweis', 'conference', 'switching'],
      response: `Publications:
• Published a peer-reviewed research paper at the Hinweis International Conference.
• Title: "Proposing a Hybrid Machine Learning Approach for Language Identification in Code-Switching Text".`,
    },
    {
      keywords: ['certifications', 'certificate', 'euron', 'campusx', 'dsmp'],
      response: `Certifications:
• Euron's Generative AI Certification: Gained practical experience with LLMs, RAG pipelines, and GenAI app development (Jan 2025 - May 2025).
• CampusX - Data Science Master Program (DSMP): Gained practical experience in ML, DL, and deploying end-to-end ML projects (May 2024 - Dec 2024).`,
    },
  ];

  const quickQueries = [
    { label: 'Work @ Edureka', query: 'Tell me about your Edureka ML experience' },
    { label: 'LLM from Scratch', query: 'Tell me about building an LLM from scratch' },
    { label: 'Medical RAG Chatbot', query: 'Tell me about the Medical RAG Chatbot' },
    { label: 'Tech Stack & Skills', query: 'Show me your technical skills' },
    { label: 'Contact Info', query: 'How can I contact or hire you?' },
  ];

  const handleQuery = (queryText) => {
    if (!queryText.trim() || isTyping) return;

    // Add user message
    const userMsg = { sender: 'user', text: queryText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate Agent Response Time
    setTimeout(() => {
      const lowerQuery = queryText.toLowerCase();
      let matchedResponse = null;

      // Scan keywords
      for (const item of knowledgeBase) {
        if (item.keywords.some((keyword) => lowerQuery.includes(keyword))) {
          matchedResponse = item.response;
          break;
        }
      }

      if (!matchedResponse) {
        matchedResponse = `Semantic Search Result for: "${queryText}"
--------------------------------------------------------
I couldn't find an exact match for that specific question in my prompt history. 

However, here is a quick overview: Deependra Gangwar is an AI/ML Engineer and MLOps specialist based in Bangalore. His core expertise lies in PyTorch, GenAI (LLMs, RAG), and MLOps deployment (Docker, MLflow, CI/CD). 

Please try one of the quick buttons below, or ask about "Edureka", "LLM from scratch", "RAG chatbot", or "skills"!`;
      }

      // Add assistant message
      setMessages((prev) => [...prev, { sender: 'agent', text: matchedResponse }]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages([initialWelcomeMessage]);
    setInput('');
  };

  return (
    <section id="console" className="console-section">
      <div className="container">
        <h2 className="section-title">Interactive <span className="gradient-text">AI Agent Console</span></h2>
        <p className="section-subtitle">
          Query my virtual clone to instantly extract details about my projects, experience, and certifications.
        </p>

        {/* Terminal Window */}
        <div className="terminal-window">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="dot dot-close"></span>
              <span className="dot dot-minimize"></span>
              <span className="dot dot-maximize"></span>
            </div>
            <div className="terminal-title">
              <Terminal size={14} className="terminal-title-icon" />
              deepu_ai_clone@agent-v1.0.3:~
            </div>
            <div className="terminal-action-btns">
              <button onClick={handleReset} className="reset-btn" title="Reset Console">
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="terminal-body">
            <div className="messages-container">
              {messages.map((msg, index) => (
                <div key={index} className={`message-row ${msg.sender}`}>
                  {msg.sender === 'user' ? (
                    <span className="msg-prefix user-prefix">guest@visitor:~$ </span>
                  ) : msg.sender === 'agent' ? (
                    <span className="msg-prefix agent-prefix">ai_agent@deepu:~$ </span>
                  ) : (
                    <span className="msg-prefix system-prefix">[SYSTEM]: </span>
                  )}
                  <div className="msg-text">{msg.text}</div>
                </div>
              ))}
              {isTyping && (
                <div className="message-row agent typing">
                  <span className="msg-prefix agent-prefix">ai_agent@deepu:~$ </span>
                  <div className="msg-text">
                    <span className="thinking-text">Thinking & searching database...</span>
                    <span className="typing-cursor"></span>
                  </div>
                </div>
              )}
              <div ref={consoleEndRef} />
            </div>
          </div>

          {/* Terminal Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleQuery(input);
            }}
            className="terminal-input-bar"
          >
            <span className="input-prefix">guest@visitor:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, Edureka work, certifications, skills..."
              disabled={isTyping}
              className="terminal-input"
            />
            <button type="submit" disabled={isTyping || !input.trim()} className="send-btn">
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Quick Query Shortcuts */}
        <div className="quick-queries-container">
          <span className="quick-queries-label">Quick Commands:</span>
          <div className="quick-queries-list">
            {quickQueries.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleQuery(item.query)}
                disabled={isTyping}
                className="quick-query-chip"
              >
                <Play size={10} className="chip-play-icon" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .console-section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .terminal-window {
          max-width: 900px;
          margin: 0 auto;
          background: #050811;
          border: 1px solid rgba(0, 242, 254, 0.15);
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 242, 254, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 480px;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #0d111d;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .terminal-controls {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-close { background-color: #ef4444; }
        .dot-minimize { background-color: #eab308; }
        .dot-maximize { background-color: #22c55e; }

        .terminal-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .terminal-title-icon {
          color: var(--accent-cyan);
        }

        .reset-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
        }

        .reset-btn:hover {
          color: var(--accent-cyan);
        }

        .terminal-body {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          line-height: 1.5;
          text-align: left;
          background: #03050a;
        }

        .messages-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .message-row {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .msg-prefix {
          font-weight: bold;
          font-size: 0.8rem;
          margin-bottom: 2px;
        }

        .user-prefix {
          color: var(--accent-purple);
        }

        .agent-prefix {
          color: var(--accent-cyan);
        }

        .system-prefix {
          color: #ef4444;
        }

        .msg-text {
          white-space: pre-wrap;
          color: var(--text-primary);
        }

        .message-row.user .msg-text {
          color: var(--accent-cyan);
        }

        .message-row.system .msg-text {
          color: var(--text-muted);
        }

        .thinking-text {
          color: var(--text-muted);
          font-style: italic;
        }

        .terminal-input-bar {
          display: flex;
          align-items: center;
          background: #0d111d;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 12px 16px;
          gap: 8px;
        }

        .input-prefix {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent-purple);
          font-weight: bold;
          white-space: nowrap;
        }

        .terminal-input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          outline: none;
        }

        .terminal-input::placeholder {
          color: var(--text-muted);
        }

        .send-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
          display: flex;
          align-items: center;
        }

        .send-btn:hover:not(:disabled) {
          color: var(--accent-cyan);
        }

        .send-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        /* Quick Queries Chips */
        .quick-queries-container {
          margin-top: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .quick-queries-label {
          font-family: var(--font-title);
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .quick-queries-list {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .quick-query-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-query-chip:hover:not(:disabled) {
          background: rgba(0, 242, 254, 0.05);
          border-color: rgba(0, 242, 254, 0.3);
          color: var(--accent-cyan);
          transform: scale(1.02);
        }

        .quick-query-chip:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chip-play-icon {
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .terminal-window {
            height: 400px;
          }
          .terminal-body {
            font-size: 0.8rem;
          }
          .terminal-input-bar {
            padding: 8px 12px;
          }
          .quick-queries-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
