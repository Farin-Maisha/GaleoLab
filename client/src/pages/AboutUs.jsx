import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './AboutUs.module.css'

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

const CORE_TEAM = [
  { role: 'Founder & CEO', dept: 'Leadership & Vision', initial: 'F', color: '#1e90ff' },
  { role: 'Head of Engineering', dept: 'CFD / Simulation', initial: 'E', color: '#00aaff' },
  { role: 'Head of Software', dept: 'Full-stack Dev', initial: 'S', color: '#0066cc' },
  { role: 'Research & Innovation Lead', dept: 'R&D / Academic', initial: 'R', color: '#1e90ff' },
  { role: 'Operations Lead', dept: 'Community & Ops', initial: 'O', color: '#0052b4' },
]

const TECH_TEAM = [
  { role: 'CFD & Simulation Engineers', icon: '🌊' },
  { role: 'Frontend Developers', icon: '🖥️' },
  { role: 'Backend Developers', icon: '⚙️' },
  { role: 'Mobile App Developers', icon: '📱' },
  { role: 'CAD Designers', icon: '📐' },
  { role: 'Research Assistants', icon: '🔬' },
]

const MILESTONES = [
  { year: '2022', title: 'GaleoLab Founded', desc: 'Started as a small engineering simulation consultancy in Dhaka.' },
  { year: '2023', title: 'Software Division Launched', desc: 'Expanded into full-stack web and mobile development services.' },
  { year: '2024', title: '50+ Projects Milestone', desc: 'Completed 50+ real-world projects across simulation and software.' },
  { year: '2025', title: 'Nationwide Community', desc: 'Launched campus ambassador program across Bangladesh.' },
  { year: '2026', title: 'Going Global', desc: 'Expanding to serve international clients and research institutions.' },
]

const VALUES = [
  { icon: '🎯', title: 'Precision', desc: 'Engineering accuracy in every deliverable — no guesswork, only verified results.' },
  { icon: '🔬', title: 'Research-Driven', desc: 'Every solution is grounded in engineering science and peer-validated methods.' },
  { icon: '🚀', title: 'Scalability', desc: 'We build for growth. Systems designed to scale from day one.' },
  { icon: '🤝', title: 'Collaboration', desc: 'We treat every client as a long-term partner, not a ticket number.' },
]

function AboutUs() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [missionRef, missionVisible] = useReveal(0.1)
  const [teamRef, teamVisible] = useReveal(0.1)
  const [timelineRef, timelineVisible] = useReveal(0.1)
  const [valuesRef, valuesVisible] = useReveal(0.1)

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={`container ${styles.heroInner} ${heroVisible ? styles.visible : ''}`} ref={heroRef}>
          <p className="section-label">About GaleoLab</p>
          <h1 className={styles.heroTitle}>
            Engineering Meets<br /><span>Innovation</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We are a multidisciplinary engineering and software solutions company — building real-world systems for startups, researchers, and industries worldwide.
          </p>
          <div className={styles.heroStats}>
            {[
              { n: '50+', l: 'Projects' },
              { n: '10+', l: 'Domains' },
              { n: '3+', l: 'Years' },
              { n: '100+', l: 'Community' },
            ].map(s => (
              <div key={s.l} className={styles.heroStat}>
                <span className={styles.heroStatN}>{s.n}</span>
                <span className={styles.heroStatL}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className={styles.mission} ref={missionRef}>
        <div className={styles.missionBg} />
        <div className="container">
          <div className={styles.missionLayout}>
            <div className={`${styles.missionLeft} ${missionVisible ? styles.revealed : ''}`}>
              <p className="section-label">Our Mission</p>
              <h2 className="section-title">
                Bridging Engineering,<br />Technology &amp; <span>Innovation</span>
              </h2>
              <p className={styles.missionText}>
                GaleoLab exists to bridge the gap between engineering science and software technology. We believe the most powerful solutions come from teams that understand both the physical laws governing engineering problems and the software systems that solve them.
              </p>
              <p className={styles.missionText}>
                Our mission is to deliver industry-grade engineering and software services while building a strong, collaborative engineering ecosystem across Bangladesh and beyond.
              </p>
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
            </div>
            <div className={`${styles.missionRight} ${missionVisible ? styles.revealed : ''}`}>
              <div className={styles.missionCards}>
                <div className={styles.missionCard}>
                  <div className={styles.missionCardIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h4>Engineering Simulation</h4>
                  <p>CFD, FEA, and advanced analysis powered by industry-standard tools.</p>
                </div>
                <div className={styles.missionCard}>
                  <div className={styles.missionCardIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
                    </svg>
                  </div>
                  <h4>Software Systems</h4>
                  <p>Scalable full-stack apps, SaaS products, and mobile applications.</p>
                </div>
                <div className={styles.missionCard}>
                  <div className={styles.missionCardIcon}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="2"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
                    </svg>
                  </div>
                  <h4>Research & Innovation</h4>
                  <p>Academic-industry collaboration and simulation-based research.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className={styles.team} ref={teamRef} id="team">
        <div className="container">
          <div className={`${styles.sectionHead} ${teamVisible ? styles.revealed : ''}`}>
            <p className="section-label">The Team</p>
            <h2 className="section-title">Meet the <span>People</span> Behind GaleoLab</h2>
            <p className={styles.sectionSubtitle}>
              A hybrid team of simulation engineers, software developers, and researchers working together.
            </p>
          </div>

          <div className={styles.coreTeam}>
            <h3 className={styles.teamGroupTitle}>Core Leadership</h3>
            <div className={styles.coreGrid}>
              {CORE_TEAM.map((m, i) => (
                <div key={i} className={`${styles.coreCard} ${teamVisible ? styles.cardVisible : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={styles.coreAvatar} style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}88)` }}>
                    {m.initial}
                  </div>
                  <h4 className={styles.coreRole}>{m.role}</h4>
                  <p className={styles.coreDept}>{m.dept}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.techTeam}>
            <h3 className={styles.teamGroupTitle}>Technical Team</h3>
            <div className={styles.techGrid}>
              {TECH_TEAM.map((m, i) => (
                <div key={i} className={`${styles.techCard} ${teamVisible ? styles.cardVisible : ''}`}
                  style={{ animationDelay: `${0.5 + i * 0.08}s` }}>
                  <span className={styles.techIcon}>{m.icon}</span>
                  <span className={styles.techRole}>{m.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.extNetwork} ${teamVisible ? styles.revealed : ''}`}>
            <h3 className={styles.teamGroupTitle}>Extended Network</h3>
            <div className={styles.extGrid}>
              {['Research Assistants', 'Campus Ambassadors (Nationwide)', 'Industry Mentors'].map(n => (
                <div key={n} className={styles.extCard}>
                  <div className={styles.extDot} />
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className={styles.timeline} ref={timelineRef}>
        <div className={styles.timelineBg} />
        <div className="container">
          <div className={`${styles.sectionHead} ${timelineVisible ? styles.revealed : ''}`}>
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">Building the <span>Future</span> Step by Step</h2>
          </div>
          <div className={styles.timelineTrack}>
            <div className={styles.timelineLine} />
            {MILESTONES.map((m, i) => (
              <div key={i} className={`${styles.milestone} ${i % 2 === 0 ? styles.milestoneLeft : styles.milestoneRight} ${timelineVisible ? styles.milestoneVisible : ''}`}
                style={{ animationDelay: `${i * 0.15}s` }}>
                <div className={styles.milestoneCard}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <h4 className={styles.milestoneTitle}>{m.title}</h4>
                  <p className={styles.milestoneDesc}>{m.desc}</p>
                </div>
                <div className={styles.milestoneDot} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={styles.values} ref={valuesRef}>
        <div className="container">
          <div className={`${styles.sectionHead} ${valuesVisible ? styles.revealed : ''}`}>
            <p className="section-label">Our Values</p>
            <h2 className="section-title">What Drives <span>Everything</span> We Do</h2>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div key={i} className={`${styles.valueCard} ${valuesVisible ? styles.cardVisible : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaBg} />
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Ready to Build Something <span>Extraordinary?</span></h2>
          <p className={styles.ctaDesc}>From simulation to software — let's solve your hardest engineering problems together.</p>
          <div className={styles.ctaBtns}>
            <Link to="/#contact" className="btn-primary">Start a Project</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs