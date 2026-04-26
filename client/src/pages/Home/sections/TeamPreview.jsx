import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'
import styles from '../../../styles/TeamPreview.module.css'

const TEAM = [
  { role: 'Founder & CEO', dept: 'Leadership & Vision', initial: 'F' },
  { role: 'Head of Engineering', dept: 'CFD / Simulation', initial: 'E' },
  { role: 'Head of Software', dept: 'Full-stack Dev', initial: 'S' },
  { role: 'Research & Innovation Lead', dept: 'R&D / Academic', initial: 'R' },
  { role: 'Operations Lead', dept: 'Community & Ops', initial: 'O' },
]

function TeamPreview() {
  const [ref, visible] = useReveal()

  return (
    <section className={styles.section} id="team">
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.left} ${visible ? styles.revealed : ''}`} ref={ref}>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              We Are <span>GaleoLab</span>
            </h2>
            <p className={styles.desc}>
              A hybrid engineering and software team focused on solving
              real-world technical problems through simulation, intelligent
              design, and scalable software systems.
            </p>
            <p className={styles.desc}>
              We bridge the gap between the physical and digital worlds —
              combining deep simulation expertise with production-grade
              software engineering.
            </p>
            <Link to="/about" className="btn-primary">
              Meet The Full Team
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className={`${styles.right} ${visible ? styles.revealed : ''}`}>
            {TEAM.map((m, i) => (
              <div key={i} className={styles.member}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={styles.avatar}>{m.initial}</div>
                <div>
                  <p className={styles.role}>{m.role}</p>
                  <p className={styles.dept}>{m.dept}</p>
                </div>
              </div>
            ))}
            <div className={styles.network}>
              <p className={styles.networkLabel}>Extended Network</p>
              <div className={styles.networkTags}>
                {['Campus Ambassadors', 'Industry Mentors', 'Research Assistants'].map(n => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamPreview