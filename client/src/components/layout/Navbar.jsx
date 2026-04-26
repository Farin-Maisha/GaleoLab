import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import styles from '../../styles/Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                   = useLocation()

  const onScroll = useCallback(() => setScrolled(window.scrollY > 40), [])
  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => setMenuOpen(false), [location.pathname])

  const handleHash = (e, to) => {
    if (to.includes('#')) {
      const hash = to.split('#')[1]
      e.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoBox}>
            <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,8 26,20 14,26 2,20 2,8"
                stroke="#1565c0" strokeWidth="2" fill="rgba(21,101,192,0.1)"/>
              <circle cx="14" cy="14" r="4" fill="#1565c0"/>
            </svg>
          </div>
          <span className={styles.logoText}>Galeo<span>Lab</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              {l.to.includes('#') ? (
                <a href={l.to} className={styles.link} onClick={e => handleHash(e, l.to)}>{l.label}</a>
              ) : (
                <NavLink to={l.to} end={l.to === '/'}
                  className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
                  {l.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/#contact" className={styles.cta} onClick={e => handleHash(e, '/#contact')}>
          Hire Us
        </Link>

        {/* Burger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}>
        {NAV_LINKS.map(l => (
          <div key={l.label}>
            {l.to.includes('#') ? (
              <a href={l.to} className={styles.mobileLink} onClick={e => handleHash(e, l.to)}>{l.label}</a>
            ) : (
              <NavLink to={l.to} end={l.to === '/'}
                className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}>
                {l.label}
              </NavLink>
            )}
          </div>
        ))}
        <Link to="/#contact" className={`btn-blue ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
          Hire Us
        </Link>
      </div>
    </nav>
  )
}