import { useEffect, useState } from 'react'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/tinafang128', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tina-fang-b08b29331', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll to hash on load (e.g. open page with #experience)
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && document.getElementById(hash)) {
      const el = document.getElementById(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollTo(id)
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <nav className="header__nav">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="header__logo"
          aria-label="Home"
        >
          Portfolio
        </a>
        <ul className="header__links">
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
        <div className="header__social">
          {socialLinks.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="header__social-link"
            >
              <span className={`icon icon--${icon}`} aria-hidden />
            </a>
          ))}
        </div>
      </nav>

      <section id="hero" className={`hero ${mounted ? 'hero--visible' : ''} ${scrolled ? 'hero--hidden' : ''}`}>
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Jinghan (Tina) Fang</h1>
        <p className="hero__title">CSBA undergraduate at USC</p>
        <p className="hero__tagline">
          Bridging data, strategy, and business to drive smarter decisions.
        </p>
        <div className="hero__actions">
          <button onClick={() => scrollTo('experience')} className="btn btn--primary">
            View my work
          </button>
          <button onClick={() => scrollTo('contact')} className="btn btn--outline">
            Get in touch
          </button>
        </div>
        <div className="hero__scroll" aria-hidden>
          <span className="hero__scroll-dot" />
        </div>
      </section>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 2rem;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .header--scrolled {
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(12px);
          box-shadow: 0 1px 0 var(--border);
        }
        .header__nav {
          max-width: var(--container-max);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header__logo {
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--text-primary);
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          text-decoration: none;
        }
        .header__logo:hover { color: #a855f7; }
        .header__links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        .header__links a {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.2s ease;
          text-decoration: none;
        }
        .header__links a:hover { color: #a855f7; }
        .header__social {
          display: flex;
          gap: 1rem;
        }
        .header__social-link {
          color: var(--text-muted);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          transition: color 0.2s, background 0.2s;
        }
        .header__social-link:hover {
          color: #a855f7;
          background: rgba(168, 85, 247, 0.15);
        }
        .icon--github::before { content: '⌘'; font-size: 1.2rem; }
        .icon--linkedin::before { content: 'in'; font-size: 0.9rem; font-weight: 600; }
        .icon--twitter::before { content: '𝕏'; font-size: 1rem; }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero--visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero--hidden {
          min-height: 0;
          max-height: 0;
          padding: 0;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease, max-height 0.3s ease, padding 0.3s ease;
        }
        .hero__greeting {
          color: #a855f7;
          font-size: 1rem;
          font-family: var(--font-mono);
          margin-bottom: 0.5rem;
          letter-spacing: 0.1em;
        }
        .hero__name {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero__title {
          color: var(--text-secondary);
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        .hero__tagline {
          color: var(--text-muted);
          max-width: 28rem;
          margin-bottom: 2rem;
          font-size: 1.05rem;
        }
        .hero__actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn--primary {
          background: #a855f7;
          color: #0a0a0f;
          border: none;
        }
        .btn--primary:hover { box-shadow: 0 8px 24px rgba(168, 85, 247, 0.25); }
        .btn--outline {
          background: transparent;
          color: #a855f7;
          border: 2px solid #a855f7;
        }
        .btn--outline:hover { background: rgba(168, 85, 247, 0.15); }
        .hero__scroll {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .hero__scroll-dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a855f7;
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </header>
  )
}

export default Header
