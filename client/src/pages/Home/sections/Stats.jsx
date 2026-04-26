import React from 'react'
import { useCounter } from '../../../hooks/useCounter'
import styles from '../../../styles/Stats.module.css'

const STATS = [
  { target: 50, suffix: '+', label: 'Projects Completed' },
  { target: 10, suffix: '+', label: 'Simulation Domains' },
  { target: 3,  suffix: '+', label: 'Years Experience' },
  { target: 100,suffix: '+', label: 'Community Members' },
]

function StatItem({ target, suffix, label }) {
  const [ref, count] = useCounter(target)
  return (
    <div className={styles.statItem} ref={ref}>
      <span className={styles.statNum}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

function Stats() {
  return (
    <div className={styles.stats}>
      <div className={styles.line} />
      <div className={`container ${styles.grid}`}>
        {STATS.map(s => (
          <StatItem key={s.label} {...s} />
        ))}
        <div className={styles.extra}>
          <span>Software + Engineering Hybrid Team</span>
          <span className={styles.dot}>·</span>
          <span>Nationwide Engineering Community — Bangladesh</span>
        </div>
      </div>
      <div className={styles.line} />
    </div>
  )
}

export default Stats