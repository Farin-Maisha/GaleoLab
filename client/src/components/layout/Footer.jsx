import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Footer.module.css'

const SOLUTIONS = [
  { label: 'CFD Analysis', to: '/services' },
  { label: 'FEA Structural', to: '/services' },
  { label: 'Web Development', to: '/services' },
  { label: 'Mobile Apps', to: '/services' },
  { label: 'SaaS Products', to: '/services' },
  { label: 'Research & R&D', to: '/services' },
]

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Career', to: '/career' },
  { label: 'Contact Us', to: '/#contact' },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState(null)
  const year = new Date().getFullYear()

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) return
    setSubStatus('sending')
    await new Promise(r => setTimeout(r, 800))
    setSubStatus('done')
    setEmail('')
    setTimeout(() => setSubStatus(null), 3000)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />

      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8"
                  stroke="#2563EB" strokeWidth="1.5" fill="none"/>
                <polygon points="14,7 21,11 21,17 14,21 7,17 7,11"
                  fill="rgba(37,99,235,0.15)" stroke="#2563EB" strokeWidth="1"/>
                <circle cx="14" cy="14" r="3" fill="#2563EB"/>
              </svg>
            </div>
            <span className={styles.logoText}>Galeo<span>Lab</span></span>
          </Link>
          <p className={styles.tagline}>
            Engineering intelligent solutions that drive progress and create
            a better future for our clients and partners.
          </p>
          <div className={styles.socials}>
            <a href="https://linkedin.com/company/galeolab"
              target="_blank" rel="noopener noreferrer"
              className={styles.social} aria-label="LinkedIn">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://github.com/galeolab"
              target="_blank" rel="noopener noreferrer"
              className={styles.social} aria-label="GitHub">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
            <a href="https://facebook.com/galeolab"
              target="_blank" rel="noopener noreferrer"
              className={styles.social} aria-label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Solutions</h4>
          <ul className={styles.links}>
            {SOLUTIONS.map(l => (
              <li key={l.label}>
                <Link to={l.to} className={styles.link}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Company</h4>
          <ul className={styles.links}>
            {COMPANY_LINKS.map(l => (
              <li key={l.label}>
                <Link to={l.to} className={styles.link}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.contact}>
            <a href="mailto:info@galeolab.com" className={styles.contactLink}>
              info@galeolab.com
            </a>
            <a href="tel:+8801633681482" className={styles.contactLink}>
              +880 1633 681482
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Newsletter</h4>
          <p className={styles.newsletterDesc}>
            Stay updated with insights and innovations from GaleoLab.
          </p>
          <form className={styles.subForm} onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={styles.subInput}
              required
            />
            <button type="submit" className={styles.subBtn}
              disabled={subStatus === 'sending' || subStatus === 'done'}>
              {subStatus === 'done' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              )}
            </button>
          </form>
          {subStatus === 'done' && (
            <p className={styles.subSuccess}>Subscribed successfully.</p>
          )}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            &copy; {year} GaleoLab. All rights reserved.
          </p>
          <p className={styles.tagStrip}>
            Engineering &nbsp;&bull;&nbsp; Simulation &nbsp;&bull;&nbsp;
            Software &nbsp;&bull;&nbsp; Innovation
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer