import type { ExperienceItem } from '../types'

const experience: ExperienceItem[] = [
  {
    role: 'Project Lead',
    company: 'Soapbox, Los Angeles, CA',
    period: 'Sep 2025 – Present',
    description: [
      'Led campus launch of Soapbox VR at USC, designing and executing go-to-market strategy that engaged 1,000+ students.',
      'Defined target audience and product differentiators through user segmentation and competitor analysis, built automated data pipelines to track multi-channel outreach by integrating digital campaign metrics with on-campus event logs.',
      'Developed Python scripts to clean and integrate multi-source pilot data, performed cohort analysis to validate targeting hypotheses, optimize live campaigns, and evaluate differential conversion patterns.',
      'Organized two large-scale demo events (100+ attendees each), managing logistics and structured user experience testing to achieve 30% pilot sign-up rate and collect actionable product feedback.',
      'Synthesized user feedback and event metrics into strategic pitch deck, directly facilitating high-level discussions with university departments for institutional subscriptions.',
    ],
  },
  {
    role: 'Audit Intern',
    company: 'KPMG, Beijing, China',
    period: 'Jul 2025 – Aug 2025',
    description: [
      'Executed data analytics procedures in collaboration with Agricultural Bank of China\'s credit audit team to assess loan portfolios, including data validation, interest expense recalculation, and impairment testing.',
      'Performed financial data cleaning and variance analysis, identifying potential audit risk exposures across 10+ regional branches.',
      'Designed dashboards to visualize risk distribution by region and sector, enabling data-driven discussions with management.',
      'Synthesized complex audit findings into actionable summaries, informing client recommendations for strengthening credit risk controls and optimizing portfolio management.',
    ],
  },
  {
    role: 'Digital Marketing Intern',
    company: 'Beijing Hanying Saisi Education Tech Co., Ltd., Beijing, China',
    period: 'May 2024 – Present',
    description: [
      'Guided multi-platform content strategy (WeChat, Xiaohongshu) through integrated influencer mapping and network analytics (audience overlap, content performance, and network mapping), establishing data foundation for campaign optimization.',
      'Built cross-platform analytics dashboard to automate consolidation of performance metrics, reducing manual reporting time by 40% and enabling real-time decision-making.',
      'Analyzed raw marketing data using Python to identify high-performing topics, formats, and hashtags, leveraged Google Analytics for audience segmentation and conversion path analysis to refine targeting and messaging.',
      'Delivered 20% increase in followers and 35% rise in engagement within one month through data-driven content redesign.',
    ],
  },
  {
    role: 'Marketing Analyst',
    company: 'Beijing Normal University, Beijing, China',
    period: 'Dec 2022 – Jun 2024',
    description: [
      'Defined event theme, recruited key speakers, and coordinated with school departments for technical and logistical support.',
      'Orchestrated pre-event marketing campaigns through social media platforms and school assemblies to maximize engagement.',
      'Drove project execution through task delegation and weekly progress reviews to ensure on-time delivery of all milestones.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <h2 className="section__title">
          <span className="section__number">02.</span> Experience
        </h2>
        <div className="experience__timeline">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="experience__item">
              <div className="experience__line" aria-hidden />
              <div className="experience__content">
                <div className="experience__header">
                  <h3 className="experience__role">{item.role}</h3>
                  <span className="experience__period">{item.period}</span>
                </div>
                <p className="experience__company">{item.company}</p>
                <ul className="experience__desc">
                  {item.description.map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .experience__timeline { position: relative; }
        .experience__item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2rem;
        }
        .experience__item:last-child { padding-bottom: 0; }
        .experience__line {
          position: absolute;
          left: 0;
          top: 0.5rem;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent), var(--border));
          border-radius: 2px;
        }
        .experience__content {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s, background 0.2s;
        }
        .experience__content:hover {
          border-color: var(--accent);
          background: var(--bg-card-hover);
        }
        .experience__header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.25rem;
        }
        .experience__role {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .experience__period {
          font-size: 0.85rem;
          font-family: var(--font-mono);
          color: var(--accent);
        }
        .experience__company {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin-bottom: 0.75rem;
        }
        .experience__desc {
          list-style: none;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
        }
        .experience__desc li {
          position: relative;
          padding-left: 1.25rem;
          margin-bottom: 0.35rem;
        }
        .experience__desc li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--accent);
        }
      `}</style>
    </section>
  )
}

export default Experience
