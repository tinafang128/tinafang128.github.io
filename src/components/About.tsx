const skills = ['Python', 'C++', 'SPSS', 'Canva']

function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <h2 className="section__title">
          <span className="section__number">01.</span> About
        </h2>
        <div className="about__grid">
          <div className="about__content">
            <p className="about__bio">
              With a background in Computer Science and Business Administration at
              USC and diverse internship experience, I bring a dual perspective
              that blends technical rigor with strategic insight. I'm interested
              in using data and technology to solve complex problems and create
              meaningful impact.
            </p>
          </div>
          <div className="about__skills">
            <h3 className="about__skills-title">Skills & tools</h3>
            <ul className="about__skills-list">
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className="about__skill animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                >
                  <span className="about__skill-bullet" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .about__grid { grid-template-columns: 1fr; }
        }
        .about__content { max-width: 32rem; }
        .about__bio {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }
        .about__skills-title {
          font-size: 0.9rem;
          color: var(--accent);
          font-family: var(--font-mono);
          margin-bottom: 1rem;
        }
        .about__skills-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem 1.5rem;
        }
        .about__skill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        .about__skill-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
      `}</style>
    </section>
  )
}

export default About
