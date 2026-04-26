import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'
import styles from '../../../styles/PortfolioPreview.module.css'

const PROJECTS = [
  { cat: 'Engineering', title: 'Airfoil CFD Analysis', metric: 'Reduced drag by 22%', color: '#54ACBF' },
  { cat: 'Software',    title: 'SaaS Dashboard System', metric: '10k+ active users', color: '#A7EBF2' },
  { cat: 'Research',    title: 'Heat Transfer Study', metric: '18% efficiency gain', color: '#54ACBF' },
]

function PortfolioPreview() {
  const [ref, visible] = useReveal()

  return (
    <section className={styles.section} id="portfolio">
      <div className="container">
        <div className={`${styles.head} ${visible ? styles.revealed : ''}`} ref={ref}>
          <p className="section-label">Our Work</p>
          <h2 className="section-title">Selected <span>Projects</span></h2>
          <p className={styles.subtitle}>
            Real-world solutions across engineering, simulation, and software.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={styles.visual}>
                <svg viewBox="0 0 280 160" fill="none" className={styles.vizSvg}>
                  {p.cat === 'Software' ? (
                    <>
                      <rect x="20" y="15" width="240" height="130" rx="8"
                        stroke={p.color} strokeWidth="1.2"
                        fill={p.color} fillOpacity="0.04"/>
                      <rect x="32" y="30" width="216" height="10" rx="4"
                        fill={p.color} fillOpacity="0.3"/>
                      <rect x="32" y="50" width="140" height="7" rx="3"
                        fill={p.color} fillOpacity="0.18"/>
                      <rect x="32" y="65" width="170" height="7" rx="3"
                        fill={p.color} fillOpacity="0.14"/>
                      <rect x="32" y="85" width="90" height="36" rx="5"
                        fill={p.color} fillOpacity="0.2"
                        stroke={p.color} strokeWidth="1"/>
                      <rect x="132" y="85" width="116" height="36" rx="5"
                        fill={p.color} fillOpacity="0.08"/>
                    </>
                  ) : (
                    <>
                      <path d="M20,80 Q70,30 140,70 Q200,105 260,80"
                        stroke={p.color} strokeWidth="2" fill="none" opacity="0.8"/>
                      <path d="M20,90 Q70,40 140,80 Q200,115 260,90"
                        stroke={p.color} strokeWidth="1.2" fill="none" opacity="0.5"/>
                      <path d="M20,70 Q70,20 140,60 Q200,95 260,70"
                        stroke={p.color} strokeWidth="1" fill="none" opacity="0.35"/>
                      <ellipse cx="140" cy="75" rx="32" ry="20"
                        fill={p.color} fillOpacity="0.1"
                        stroke={p.color} strokeWidth="1" strokeOpacity="0.5"/>
                      <circle cx="140" cy="75" r="6"
                        fill={p.color} fillOpacity="0.5"/>
                    </>
                  )}
                </svg>
              </div>
              <div className={styles.info}>
                <span className={styles.cat}>{p.cat}</span>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.metric}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                    <polyline points="16 7 22 7 22 13"/>
                  </svg>
                  {p.metric}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/portfolio" className="btn-outline">
            View All Projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview