import styles from './AboutUs.module.css'

const TEAM = [
  { name: 'Alice Rahman',  role: 'Founder & CEO'       },
  { name: 'Bob Hossain',   role: 'Lead Engineer'        },
  { name: 'Carol Sultana', role: 'Head of Design'       },
]

export default function AboutUs() {
  return (
    <div className="page">
      <div className="container">

        {/* Intro */}
        <section className={styles.intro}>
          <p className={styles.eyebrow}>Who we are</p>
          <h1 className="section-title">
            Driven by purpose,<br />
            <span className="accent">built by people.</span>
          </h1>
          <p className={styles.body}>
            We are a team of passionate builders who believe great software
            changes lives. Founded on the principle that technology should
            serve people — not the other way around.
          </p>
        </section>

        {/* Mission */}
        <section className={styles.mission}>
          <h2 className={styles.sectionHeading}>Our Mission</h2>
          <p>
            To deliver high-quality digital solutions that empower businesses
            and delight their customers. Replace this with your actual mission statement.
          </p>
        </section>

        {/* Team */}
        <section className={styles.team}>
          <h2 className={styles.sectionHeading}>The Team</h2>
          <div className={styles.teamGrid}>
            {TEAM.map(({ name, role }) => (
              <div key={name} className={styles.card}>
                <div className={styles.avatar}>{name[0]}</div>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
