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
  <svg
    width="190"
    height="38"
    viewBox="0 0 190 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="GaleoLab"
  >
    {/* G mark — absolute coords, nothing clips */}
    <circle
      cx="19" cy="19" r="13"
      fill="none"
      stroke="#18181b"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeDasharray="68 12"
      strokeDashoffset="-5"
    />
    <line x1="19" y1="19" x2="32" y2="19"
      stroke="#18181b" strokeWidth="2.6" strokeLinecap="round"/>
    <line x1="32" y1="19" x2="32" y2="13"
      stroke="#18181b" strokeWidth="2.6" strokeLinecap="round"/>

    {/* Wordmark */}
    <text
      x="42" y="19"
      dominantBaseline="central"
      fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
      fontSize="19"
      fontWeight="500"
      letterSpacing="-0.5"
    >
      <tspan fill="#18181b">Galeo</tspan>
      <tspan fill="#2563EB">Lab</tspan>
    </text>
  </svg>
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