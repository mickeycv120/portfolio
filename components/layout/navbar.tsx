'use client'
import { useState, useEffect } from "react"

const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#skills',     label: 'Skills' },
  { href: '#work',       label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
]

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    })
  return (
      <header className={`nav${scrolled ? 'nav--scrolled':''}`}>
          <div className="nav-inner">
              <a href="#home" className="brand">
                  <span className="brand-mark">{'</>'}</span>
                  <span className="brand-name">EFRAIN</span>
              </a>

              <nav className="nav-links">
                  {NAV_LINKS.map((link) => (
                      <a key={link.href} href={link.href} className="nav-link">
                          {link.label}
                      </a>
                  ))}
              </nav>

              <a href="#contact" className="btn btn-primary nav-cta">
                  Let&apos;s Talk
              </a>
        </div>
      </header>
  )
}
