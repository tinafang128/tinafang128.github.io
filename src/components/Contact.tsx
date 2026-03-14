function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner contact__inner">
        <p className="contact__label">03. What's next?</p>
        <h2 className="contact__title">Get in touch</h2>
        <p className="contact__text">
          I'm open to new opportunities and happy to chat. Say hello—whether it's
          a project idea, a question, or just to connect.
        </p>
        <a
          href="mailto:tinafang@usc.edu"
          className="contact__btn"
        >
          Say hello
        </a>
        <div className="contact__footer">
          <a
            href="https://github.com/tinafang128"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tina-fang-b08b29331"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__footer-link"
          >
            LinkedIn
          </a>
          <span className="contact__footer-credit">
            Designed & built with React + TypeScript
          </span>
        </div>
      </div>
      <style>{`
        .contact {
          padding-bottom: 3rem;
        }
        .contact__inner {
          text-align: center;
          max-width: 36rem;
          margin: 0 auto;
        }
        .contact__label {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }
        .contact__title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .contact__text {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        .contact__btn {
          display: inline-block;
          padding: 1rem 2rem;
          border: 2px solid var(--accent);
          border-radius: 10px;
          color: var(--accent);
          font-weight: 500;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .contact__btn:hover {
          background: var(--accent-dim);
          color: var(--text-primary);
          transform: translateY(-2px);
        }
        .contact__footer {
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1rem 2rem;
        }
        .contact__footer-link {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .contact__footer-link:hover { color: var(--accent); }
        .contact__footer-credit {
          color: var(--text-muted);
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  )
}

export default Contact
