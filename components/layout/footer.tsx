import { LINKS } from '@/lib/constants'

interface FooterLinks {
  github: string
  linkedin: string
  email: string
}

interface FooterProps {
  links?: FooterLinks
}

export const Footer = ({ links = LINKS }: FooterProps) => {
  return (
      <footer className="footer">
      <div className="footer-glow" aria-hidden />
      <div className="container footer-cta reveal">
        <h2 className="footer-title">
          Have a system to build?<br/>
          <span className="grad">Let's talk.</span>
        </h2>
        <a href="#contact" className="btn btn-primary footer-btn">
          Start a conversation
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
      <div className="container footer-bottom">
        <div className="foot-brand">
          <span className="brand-mark">{"</>"}</span>
          <span>Efrain Coutiño · Full-Stack Developer</span>
        </div>
        <div className="foot-links">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${links.email}`}>Email</a>
        </div>
        <div className="foot-meta">© 2026 · Designed & built with care</div>
      </div>
    </footer>
  )
}
