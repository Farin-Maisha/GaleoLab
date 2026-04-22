import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>

        <div className={styles.brand}>
          <span className={styles.logo}>MyApp</span>
          <p className={styles.tagline}>Building great things, one commit at a time.</p>
        </div>

        <nav className={styles.nav}>
          <span className={styles.navHeading}>Pages</span>
          <NavLink to="/" className={styles.navLink}>Home</NavLink>
          <NavLink to="/about" className={styles.navLink}>About Us</NavLink>
          <NavLink to="/services" className={styles.navLink}>Services</NavLink>
        </nav>

      </div>

      <div className={`${styles.bottom} container`}>
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  )
}
