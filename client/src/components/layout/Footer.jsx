import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Footer.module.css'

const QUICK = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact',  to: '/#contact' },
]

const SERVICES = ['CFD Analysis', 'FEA Structural', 'Web Development', 'Mobile Apps', 'SaaS Products', 'R&D Research']

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.inner}>

          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoBox}>
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                  <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" stroke="#60a5fa" strokeWidth="2" fill="rgba(96,165,250,0.15)"/>
                  <circle cx="14" cy="14" r="4" fill="#60a5fa"/>
                </svg>
              </div>
              <span className={styles.logoText}>Galeo<span>Lab</span></span>
            </Link>
            <p className={styles.tagline}>Engineering, Simulation & Software Solutions — All in One Place.</p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.social}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.social}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.social}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul>{QUICK.map(l => <li key={l.label}><Link to={l.to} className={styles.footLink}>{l.label}</Link></li>)}</ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul>{SERVICES.map(s => <li key={s}><Link to="/services" className={styles.footLink}>{s}</Link></li>)}</ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li><span>📧</span><a href="mailto:info@galeolab.com">info@galeolab.com</a></li>
              <li><span>📱</span><a href="tel:+8801633681482">+880 1633 681482</a></li>
              <li><span>🌐</span><a href="https://www.galeolab.com" target="_blank" rel="noopener noreferrer">www.galeolab.com</a></li>
              <li><span>📍</span><span>Dhaka, Bangladesh</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p>© {new Date().getFullYear()} GaleoLab. All rights reserved.</p>
          <p>Engineering · Simulation · Software · Innovation</p>
        </div>
      </div>
    </footer>
  )
}