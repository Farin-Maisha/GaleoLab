import React from 'react'
import { useReveal } from '../../../hooks/useReveal'
import styles from '../../../styles/WhyUs.module.css'

const REASONS = [
  {
    title: 'Engineering + Software Combined',
    desc: 'Rare hybrid team that understands both simulation physics and production code.',
  },
  {
    title: 'Real Simulation Expertise',
    desc: 'Our engineers run production-level ANSYS, OpenFOAM, and more — not theory.',
  },
  {
    title: 'Startup to Industry Scale',
    desc: 'We build systems that grow with you, from MVP to enterprise-grade architecture.',
  },
  {
    title: 'Research-Driven Approach',
    desc: 'Every solution is backed by rigorous engineering research and peer validation.',
  },
  {
    title: 'Scalable Architecture',
    desc: 'Systems designed for performance, maintainability, and long-term growth.',
  },
  {
    title: 'Nationwide Community',
    desc: 'Campus ambassadors and engineers across Bangladesh supporting every project.',
  },
]

function WhyUs() {
  const [ref, visible] = useReveal()

  return (
    <section className={styles.section} id="why">
      <div className={styles.bg} />
      <div className="container">
        <div className={`${styles.head} ${visible ? styles.revealed : ''}`} ref={ref}>
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">
            The <span>GaleoLab</span> Difference
          </h2>
        </div>

        <div className={styles.grid}>
          {REASONS.map((r, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.num}>0{i + 1}</div>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.desc}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs