import React from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../../../hooks/useReveal'
import styles from '../../../styles/CareerPreview.module.css'

const ROLES = [
  'Software Developer — Frontend',
  'Software Developer — Backend',
  'Mobile App Developer',
  'CFD / Simulation Engineer',
  'CAD Designer',
  'Research Assistant',
]

function CareerPreview() {
  const [ref, visible] = useReveal()

  return (
    <section className={styles.section} id="career">
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.left} ${visible ? styles.revealed : ''}`} ref={ref}>
            <p className="section-label">Join The Team</p>
            <h2 className="section-title">
              Work on <span>Real</span> Engineering Problems
            </h2>
            <p className={styles.desc}>
              At GaleoLab, you work on production-grade systems — not toy
              projects. Build your portfolio, learn industry tools, and grow
              in a high-performance environment.
            </p>
            <div className={styles.perks}>
              {[
                'Real project experience',
                'Learn industry tools',
                'Build a strong portfolio',
                'High-performance culture',
              ].map(perk => (
                <div key={perk} className={styles.perk}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="#54ACBF" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {perk}
                </div>
              ))}
            </div>
            <Link to="/career" className="btn-primary">
              View Open Positions
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className={`${styles.right} ${visible ? styles.revealed : ''}`}>
            <p className={styles.rolesLabel}>Open Positions</p>
            {ROLES.map((role, i) => (
              <div key={role} className={styles.role}
                style={{ animationDelay: `${i * 0.06}s` }}>
                <span className={styles.roleDot} />
                <span>{role}</span>
                <span className={styles.status}>Hiring</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerPreview