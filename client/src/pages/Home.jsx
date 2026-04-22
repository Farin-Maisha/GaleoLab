import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className="page">
      <section className={`${styles.hero} container`}>
        <p className={styles.eyebrow}>Welcome</p>
        <h1 className="section-title">
          We build things<br />
          <span className="accent">that matter.</span>
        </h1>
        <p className={styles.subtitle}>
          A modern platform delivering results. Fast, reliable, and built with care.
        </p>
        <div className={styles.actions}>
          <Link to="/services" className={styles.btnPrimary}>Explore Services</Link>
          <Link to="/about" className={styles.btnSecondary}>Learn About Us</Link>
        </div>
      </section>

      {/* Placeholder feature strip */}
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featureGrid}>
            {['Speed', 'Reliability', 'Quality'].map((item) => (
              <div key={item} className={styles.featureCard}>
                <span className={styles.featureIcon}>◈</span>
                <h3>{item}</h3>
                <p>Placeholder description for {item.toLowerCase()}. Replace with real copy.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
