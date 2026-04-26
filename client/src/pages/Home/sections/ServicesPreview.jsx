import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'
import styles from '../../../styles/ServicesPreview.module.css'

const SERVICES = [
  {
    id: '01',
    title: 'Engineering Simulation',
    desc: 'CFD aerodynamics, FEA structural analysis, thermal simulation, and advanced optimization for real-world engineering problems.',
    tags: ['CFD', 'FEA', 'Thermal', 'ANSYS'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Software Development',
    desc: 'Full-stack web apps, SaaS platforms, admin dashboards — built with scalable architecture and modern technology stacks.',
    tags: ['React', 'Node.js', 'SaaS', 'Full-stack'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Mobile Applications',
    desc: 'iOS and Android apps with cross-platform development — from MVP to production-ready deployment.',
    tags: ['iOS', 'Android', 'Flutter', 'React Native'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
  },
]

function ServicesPreview() {
  const [ref, visible] = useReveal()

  return (
    <section className={styles.section} id="services">
      <div className={styles.bg} />
      <div className="container">
        <div className={`${styles.head} ${visible ? styles.revealed : ''}`} ref={ref}>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">
            Core <span>Service</span> Areas
          </h2>
          <p className={styles.subtitle}>
            From nano-scale simulation to enterprise software — we cover the full technical spectrum.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className={styles.cardNum}>{s.id}</span>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link to="/services" className="btn-outline">
            View All Services
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

export default ServicesPreview