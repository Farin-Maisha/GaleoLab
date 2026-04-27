import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../styles/Hero.module.css'

const TAGS = ['CFD', 'FEA', 'SaaS', 'Simulation', 'Full-stack', 'Mobile', 'R&D']

function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    setTimeout(() => el.classList.add(styles.visible), 80)
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bgPattern} />
      <div className={styles.bgGlow} />

      <div className={`container ${styles.inner}`} ref={contentRef}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Engineering A Better Future</p>

          <h1 className={styles.title}>
            We engineer solutions<br />
            that drive{' '}
            <span className={styles.accent}>real-world progress.</span>
          </h1>

          <p className={styles.desc}>
            GaleoLab partners with startups, researchers, and industries
            to design, build, and scale high-performance engineering
            simulation and software systems — from concept to deployment.
          </p>

          <div className={styles.ctas}>
            <a href="#contact" className="btn-primary" onClick={scrollToContact}>
              Start a Project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
            <Link to="/portfolio" className="btn-outline">
              View Our Work
            </Link>
          </div>

          <div className={styles.tags}>
            {TAGS.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span /><span /><span />
              </div>
              <span className={styles.cardLabel}>CFD Simulation Active</span>
              <span className={styles.cardStatus}>Live</span>
            </div>
            <div className={styles.cardBody}>
              <svg viewBox="0 0 280 170" className={styles.cfdSvg} fill="none">
                <defs>
                  <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#00B8D9" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="airfoilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#EAF1F7"/>
                    <stop offset="100%" stopColor="#C7D3E0"/>
                  </linearGradient>
                </defs>
                <path d="M35,85 Q90,45 190,78 Q230,84 245,85 Q230,87 190,92 Q90,125 35,85Z"
                  fill="url(#airfoilGrad)" stroke="#2563EB" strokeWidth="1.2"/>
                {[30,42,54,64,74,86,96,106,116,128].map((y, i) => (
                  <path key={i}
                    d={`M8,${y} Q90,${y - (i < 5 ? 20 : i > 7 ? -20 : 0)} 272,${y}`}
                    stroke="url(#flowGrad)"
                    strokeWidth={i === 5 ? 1.8 : 1}
                    fill="none"
                    opacity="0.8"
                    className={styles.flowLine}
                    style={{ animationDelay: `${i * 0.12}s` }}
                  />
                ))}
                <ellipse cx="90" cy="85" rx="20" ry="13"
                  fill="rgba(37,99,235,0.08)"
                  stroke="rgba(37,99,235,0.3)" strokeWidth="0.8"/>
                <ellipse cx="185" cy="82" rx="16" ry="10"
                  fill="rgba(0,184,217,0.1)"
                  stroke="rgba(0,184,217,0.3)" strokeWidth="0.8"/>
                <text x="82" y="74" fontSize="8" fill="#2563EB"
                  fontFamily="Inter" fontWeight="500" opacity="0.7">High P</text>
                <text x="178" y="72" fontSize="8" fill="#00B8D9"
                  fontFamily="Inter" fontWeight="500" opacity="0.7">Low P</text>
              </svg>

              <div className={styles.metrics}>
                {[
                  { val: '22%', label: 'Drag Reduction' },
                  { val: '18%', label: 'Lift Efficiency' },
                  { val: '4.7M', label: 'Mesh Cells' },
                ].map((m, i) => (
                  <React.Fragment key={m.label}>
                    {i > 0 && <div className={styles.metricDiv} />}
                    <div className={styles.metric}>
                      <span className={styles.metricVal}>{m.val}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.floatCard}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="#2563EB" strokeWidth="2">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
              <polyline points="16 7 22 7 22 13"/>
            </svg>
            <div>
              <p className={styles.floatTitle}>50+ Projects</p>
              <p className={styles.floatSub}>Delivered globally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero