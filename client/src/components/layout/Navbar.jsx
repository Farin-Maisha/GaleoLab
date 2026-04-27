import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from '../../styles/Navbar.module.css'

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Career', to: '/career' },
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

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const scrollToContact = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      window.location.href = '/#contact'
      return
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoMark}>
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8"
                stroke="#2563EB" strokeWidth="1.5" fill="none"/>
              <polygon points="14,7 21,11 21,17 14,21 7,17 7,11"
                fill="rgba(37,99,235,0.15)" stroke="#2563EB" strokeWidth="1"/>
              <circle cx="14" cy="14" r="3" fill="#2563EB"/>
            </svg>
          </div>
          <span className={styles.logoText}>Galeo<span>Lab</span></span>
        </Link>

        <ul className={styles.navLinks}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.active : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.hireCta} onClick={scrollToContact}>
          Contact Us
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(link => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <a href="#contact" className={styles.mobileCta}
          onClick={(e) => { scrollToContact(e); setMenuOpen(false) }}>
          Contact Us
        </a>
      </div>
    </nav>
  )
}

export default Navbar