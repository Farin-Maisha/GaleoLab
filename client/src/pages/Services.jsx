import styles from './Services.module.css'

const SERVICES = [
  {
    icon: '⬡',
    title: 'Service One',
    description:
      'Placeholder description for your first service. Replace with real copy that explains the value you deliver.',
  },
  {
    icon: '◈',
    title: 'Service Two',
    description:
      'Placeholder description for your second service. Keep it concise — one or two sentences work best.',
  },
  {
    icon: '△',
    title: 'Service Three',
    description:
      'Placeholder description for your third service. Focus on the outcome your client gets, not the process.',
  },
  {
    icon: '◇',
    title: 'Service Four',
    description:
      'Another placeholder. Add as many service cards as you need by extending the SERVICES array.',
  },
]

export default function Services() {
  return (
    <div className="page">
      <div className="container">

        {/* Header */}
        <section className={styles.header}>
          <p className={styles.eyebrow}>What we offer</p>
          <h1 className="section-title">
            Our <span className="accent">Services</span>
          </h1>
          <p className={styles.subtitle}>
            Everything you need, handled by experts. Explore what we can do for you.
          </p>
        </section>

        {/* Service cards */}
        <div className={styles.grid}>
          {SERVICES.map(({ icon, title, description }) => (
            <div key={title} className={styles.card}>
              <span className={styles.icon}>{icon}</span>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardBody}>{description}</p>
              <button className={styles.learnMore}>Learn more →</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
