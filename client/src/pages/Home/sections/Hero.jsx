import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../styles/Hero.module.css'

const TAGS = ['CFD', 'FEA', 'SaaS', 'Simulation', 'Full-stack', 'Mobile', 'R&D']

function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    setTimeout(() => el.classList.add(styles.visible), 100)
  }, [])

  const scrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className={`container ${styles.inner}`} ref={contentRef}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            Engineering + Software Hybrid Company
          </p>

          <h1 className={styles.title}>
            We Solve<br />
            <span className={styles.accent}>Engineering</span><br />
            Problems.<br />
            Software Is How.
          </h1>

          <p className={styles.desc}>
            High-performance engineering simulation, scalable software systems,
            and innovative product development — from concept to deployment,
            for startups, researchers, and industries worldwide.
          </p>

          <div className={styles.ctas}>
            <a href="#contact" className="btn-primary" onClick={scrollToContact}>
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
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
              <span className={styles.cardLabel}>Simulation Active</span>
            </div>
            <div className={styles.cardBody}>
              <svg viewBox="0 0 260 160" className={styles.cfdSvg} fill="none">
                <defs>
                  <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#26658C" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#54ACBF" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#A7EBF2" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M30,80 Q80,40 180,75 Q220,80 230,80 Q220,82 180,85 Q80,120 30,80Z"
                  fill="rgba(84,172,191,0.12)" stroke="rgba(84,172,191,0.5)" strokeWidth="1"/>
                {[35,45,55,65,75,90,100,110,120].map((y, i) => (
                  <path key={i}
                    d={`M10,${y} Q80,${y - (i < 4 ? 18 : i > 6 ? -18 : 0)} 250,${y}`}
                    stroke="url(#fg1)" strokeWidth={i === 4 ? 1.8 : 1}
                    fill="none" opacity="0.7"
                    className={styles.flowLine}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
                <ellipse cx="80" cy="80" rx="18" ry="12"
                  fill="rgba(167,235,242,0.1)" stroke="rgba(167,235,242,0.3)" strokeWidth="0.8"/>
                <ellipse cx="170" cy="77" rx="15" ry="10"
                  fill="rgba(84,172,191,0.15)" stroke="rgba(84,172,191,0.4)" strokeWidth="0.8"/>
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
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero