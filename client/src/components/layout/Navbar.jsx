import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/#portfolio' },
  { label: 'Team', to: '/#team' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Career', to: '/#career' },
  { label: 'About', to: '/about' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleHashLink = (e, to) => {
    if (to.includes('#')) {
      const [path, hash] = to.split('#')
      if (location.pathname === '/' || path === '/') {
        e.preventDefault()
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="#1e90ff" strokeWidth="1.5" fill="none"/>
              <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="rgba(30,144,255,0.2)" stroke="#1e90ff" strokeWidth="1"/>
              <circle cx="14" cy="14" r="3" fill="#1e90ff"/>
            </svg>
          </div>
          <span className={styles.logoText}>Galeo<span>Lab</span></span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              {link.to.includes('#') ? (
                <a
                  href={link.to}
                  className={styles.navLink}
                  onClick={e => handleHashLink(e, link.to)}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/#contact" className={styles.hireCta} onClick={e => handleHashLink(e, '/#contact')}>
          Hire Us
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Mobile Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(link => (
          <div key={link.label} className={styles.mobileLink}>
            {link.to.includes('#') ? (
              <a href={link.to} onClick={e => handleHashLink(e, link.to)}>
                {link.label}
              </a>
            ) : (
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? styles.mobileActive : ''}
              >
                {link.label}
              </NavLink>
            )}
          </div>
        ))}
        <Link to="/#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Hire Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar