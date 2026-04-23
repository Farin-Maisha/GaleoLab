import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

/* ─── Intersection Observer Hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* ─── Animated Counter ─── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useReveal(0.3)
  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 25)
    return () => clearInterval(timer)
  }, [visible, target])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Services Data ─── */
const SERVICES = [
  {
    id: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Engineering Simulation',
    desc: 'CFD aerodynamics, FEA structural analysis, thermal simulation, and advanced optimization for real-world problems.',
    tags: ['CFD', 'FEA', 'Thermal', 'ANSYS'],
  },
  {
    id: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>
      </svg>
    ),
    title: 'Software Development',
    desc: 'Full-stack web apps, SaaS platforms, admin dashboards — built with scalable architecture and modern stacks.',
    tags: ['React', 'Node.js', 'SaaS', 'Full-stack'],
  },
  {
    id: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
      </svg>
    ),
    title: 'Mobile Applications',
    desc: 'iOS and Android apps with cross-platform Flutter development — from MVP to production-ready deployment.',
    tags: ['iOS', 'Android', 'Flutter', 'React Native'],
  },
  {
    id: '04',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    title: 'Backend & Systems',
    desc: 'Robust API development, cloud-based architecture, and scalable system design for high-traffic applications.',
    tags: ['APIs', 'Cloud', 'Microservices', 'AWS'],
  },
  {
    id: '05',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: 'Design & Product Dev',
    desc: '3D CAD modeling, industrial prototyping, and engineering design optimization for physical products.',
    tags: ['CAD', 'SolidWorks', 'Prototyping', '3D'],
  },
  {
    id: '06',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2"/><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83"/>
      </svg>
    ),
    title: 'Research & Innovation',
    desc: 'Simulation-based research, academic-industry collaboration, and R&D projects across engineering domains.',
    tags: ['Research', 'R&D', 'Academic', 'Papers'],
  },
]

/* ─── Portfolio Data ─── */
const PORTFOLIO = [
  { cat: 'Engineering', title: 'Airfoil CFD Analysis', metric: 'Reduced drag by 22%', color: '#1e90ff' },
  { cat: 'Software', title: 'SaaS Dashboard System', metric: '10k+ active users', color: '#00c8ff' },
  { cat: 'Engineering', title: 'Structural Analysis', metric: 'Optimized by 31%', color: '#1e90ff' },
  { cat: 'Product', title: 'Industrial Product Design', metric: '3 patent applications', color: '#0066cc' },
  { cat: 'Software', title: 'Business Web Platform', metric: '98% uptime SLA', color: '#00c8ff' },
  { cat: 'Research', title: 'Heat Transfer Study', metric: '18% efficiency gain', color: '#1e90ff' },
]

/* ─── Team Data ─── */
const TEAM = [
  { name: 'Founder & CEO', dept: 'Leadership', initial: 'F' },
  { name: 'Head of Engineering', dept: 'Simulation', initial: 'H' },
  { name: 'Head of Software', dept: 'Development', initial: 'S' },
  { name: 'Research & Innovation Lead', dept: 'R&D', initial: 'R' },
  { name: 'Operations Lead', dept: 'Community', initial: 'O' },
]

/* ─── Pricing Data ─── */
const PRICING = [
  {
    tier: 'Basic',
    price: '৳3,000 – ৳15,000',
    desc: 'Perfect for startups and small projects needing quick delivery.',
    features: ['Simple CAD / Simulation', 'Basic Web App', 'Mobile App MVP', '1 Revision Round', 'Email Support'],
    cta: 'Start Project',
    highlight: false,
  },
  {
    tier: 'Professional',
    price: '৳15,000 – ৳50,000',
    desc: 'Full-featured solutions for growing businesses and complex engineering.',
    features: ['Full CFD / FEA Simulation', 'SaaS / Full-stack App', 'Cloud Deployment', '3 Revision Rounds', 'Priority Support', 'Documentation'],
    cta: 'Start Project',
    highlight: true,
  },
  {
    tier: 'Enterprise',
    price: 'Custom Pricing',
    desc: 'Large-scale systems, R&D projects, and startup product development.',
    features: ['Custom System Architecture', 'Long-term R&D Engagement', 'Dedicated Team', 'Unlimited Revisions', '24/7 Support', 'SLA Agreement'],
    cta: 'Contact Us',
    highlight: false,
  },
]

/* ─── Differentiators ─── */
const WHYS = [
  { icon: '⚡', title: 'Engineering + Software', desc: 'Rare hybrid team that understands both simulation and code.' },
  { icon: '🎯', title: 'Real Simulation Expertise', desc: 'Not theory — our engineers run production-level ANSYS, OpenFOAM, and more.' },
  { icon: '🚀', title: 'Startup to Industry Scale', desc: 'We build systems that grow with you, from MVP to enterprise.' },
  { icon: '🔬', title: 'Research-Driven Approach', desc: 'Every solution is backed by rigorous engineering research.' },
  { icon: '🌐', title: 'Nationwide Community', desc: 'Campus ambassadors and engineers across Bangladesh.' },
  { icon: '📐', title: 'Scalable Architecture', desc: 'Systems designed for performance, maintainability, and growth.' },
]

/* ─── Roles ─── */
const ROLES = [
  'Software Developer (Frontend)', 'Software Developer (Backend)', 'Mobile App Developer',
  'CFD / Simulation Engineer', 'CAD Designer', 'Research Assistant',
]

/* ─── MAIN COMPONENT ─── */
function Home() {
  const [heroRef, heroVisible] = useReveal(0.1)
  const [statsRef, statsVisible] = useReveal(0.2)
  const [servicesRef, servicesVisible] = useReveal(0.1)
  const [portfolioRef, portfolioVisible] = useReveal(0.1)
  const [teamRef, teamVisible] = useReveal(0.1)
  const [pricingRef, pricingVisible] = useReveal(0.1)
  const [whyRef, whyVisible] = useReveal(0.1)
  const [careerRef, careerVisible] = useReveal(0.1)
  const [contactRef, contactVisible] = useReveal(0.1)

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', message: '' })
  const [formStatus, setFormStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleFormChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleFormSubmit = async e => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate API call
    await new Promise(r => setTimeout(r, 1200))
    setFormStatus('sent')
    setTimeout(() => {
      setFormStatus(null)
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
    }, 4000)
  }

  return (
    <div className={styles.page}>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className={styles.hero} ref={heroRef}>
        {/* Background Elements */}
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />
        <div className={styles.heroDots} />

        {/* Floating Hexagons */}
        <div className={styles.hexWrap}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`${styles.hex} ${styles[`hex${i + 1}`]}`}>
              <svg viewBox="0 0 60 60" fill="none">
                <polygon points="30,4 54,17 54,43 30,56 6,43 6,17" stroke="rgba(30,144,255,0.3)" strokeWidth="1.2" fill="rgba(30,144,255,0.04)"/>
              </svg>
            </div>
          ))}
        </div>

        <div className={`container ${styles.heroInner} ${heroVisible ? styles.heroVisible : ''}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              Engineering + Software Hybrid Company
            </div>
            <h1 className={styles.heroTitle}>
              We Solve <span className={styles.heroAccent}>Engineering</span><br />
              Problems. Software<br />
              <span className={styles.heroAccent}>is How.</span>
            </h1>
            <p className={styles.heroDesc}>
              High-performance engineering simulation, scalable software systems, and innovative product development — from concept to deployment, for startups, researchers, and industries worldwide.
            </p>
            <div className={styles.heroCTAs}>
              <a href="#contact" className={`btn-primary ${styles.heroBtn}`}
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                Hire Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#portfolio" className={`btn-outline ${styles.heroBtn}`}
                onClick={e => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}>
                View Our Work
              </a>
            </div>
            <div className={styles.heroTags}>
              {['CFD', 'FEA', 'SaaS', 'AI', 'Simulation', 'Full-stack', 'Mobile'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardTop}>
                <div className={styles.heroCardDots}>
                  <span /><span /><span />
                </div>
                <span className={styles.heroCardLabel}>Simulation Active</span>
              </div>
              <div className={styles.heroCardBody}>
                {/* CFD Visualization Mockup */}
                <div className={styles.cfdViz}>
                  <svg viewBox="0 0 260 160" className={styles.cfdSvg}>
                    <defs>
                      <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0052b4" stopOpacity="0"/>
                        <stop offset="50%" stopColor="#1e90ff" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#4db8ff" stopOpacity="0"/>
                      </linearGradient>
                      <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0052b4" stopOpacity="0"/>
                        <stop offset="40%" stopColor="#00aaff" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#4db8ff" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    {/* Airfoil shape */}
                    <path d="M30,80 Q80,40 180,75 Q220,80 230,80 Q220,82 180,85 Q80,120 30,80Z" fill="rgba(30,144,255,0.15)" stroke="rgba(30,144,255,0.5)" strokeWidth="1"/>
                    {/* Flow lines */}
                    {[35,45,55,65,75,90,100,110,120].map((y, i) => (
                      <path key={i} d={`M10,${y} Q80,${y - (i < 4 ? 18 : i > 6 ? -18 : 0)} 250,${y}`}
                        stroke="url(#flowGrad1)" strokeWidth={i === 4 ? 1.8 : 1} fill="none" opacity="0.7"
                        className={styles.flowLine} style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                    {/* High pressure zone */}
                    <ellipse cx="80" cy="80" rx="18" ry="12" fill="rgba(255,80,80,0.18)" stroke="rgba(255,80,80,0.35)" strokeWidth="0.8"/>
                    <ellipse cx="170" cy="77" rx="15" ry="10" fill="rgba(30,144,255,0.25)" stroke="rgba(30,144,255,0.45)" strokeWidth="0.8"/>
                  </svg>
                  <div className={styles.cfdLegend}>
                    <span className={styles.legendHigh}>High P</span>
                    <div className={styles.legendBar} />
                    <span className={styles.legendLow}>Low P</span>
                  </div>
                </div>
                <div className={styles.heroMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricVal}>22%</span>
                    <span className={styles.metricLabel}>Drag Reduction</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metric}>
                    <span className={styles.metricVal}>18%</span>
                    <span className={styles.metricLabel}>Lift Efficiency</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metric}>
                    <span className={styles.metricVal}>4.7M</span>
                    <span className={styles.metricLabel}>Mesh Cells</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className={`${styles.floatBadge} ${styles.badge1}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1e90ff" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
              CFD Live
            </div>
            <div className={`${styles.floatBadge} ${styles.badge2}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00cc88" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              50+ Projects
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}><div className={styles.scrollWheel} /></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUST / STATS STRIP
      ══════════════════════════════════════ */}
      <section className={styles.stats} ref={statsRef} id="stats">
        <div className={styles.statsLine} />
        <div className={`container ${styles.statsGrid}`}>
          {[
            { num: 50, suffix: '+', label: 'Projects Completed' },
            { num: 10, suffix: '+', label: 'Simulation Domains' },
            { num: 3, suffix: '+', label: 'Years Experience' },
            { num: 100, suffix: '+', label: 'Community Members' },
          ].map((s, i) => (
            <div key={i} className={`${styles.statItem} ${statsVisible ? styles.statVisible : ''}`}
              style={{ animationDelay: `${i * 0.12}s` }}>
              <div className={styles.statNum}>
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
          <div className={styles.statsExtra}>
            <span className={styles.statsTag}>Software + Engineering Hybrid Team</span>
            <span className={styles.statsDivider}>•</span>
            <span className={styles.statsTag}>Nationwide Engineering Community (Bangladesh)</span>
          </div>
        </div>
        <div className={styles.statsLine} />
      </section>

      {/* ══════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════ */}
      <section className={styles.services} ref={servicesRef} id="services">
        <div className={styles.sectionBg} />
        <div className="container">
          <div className={`${styles.sectionHead} ${servicesVisible ? styles.revealed : ''}`}>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">
              Core <span>Service</span> Areas
            </h2>
            <p className={styles.sectionSubtitle}>
              From nano-scale simulation to enterprise software — we cover the full technical spectrum.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                className={`${styles.serviceCard} ${servicesVisible ? styles.cardVisible : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={styles.serviceNum}>{s.id}</div>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <div className={styles.serviceTags}>
                  {s.tags.map(t => <span key={t} className={styles.serviceTag}>{t}</span>)}
                </div>
                <div className={styles.serviceArrow}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.servicesCta}>
            <Link to="/services" className="btn-outline">
              Explore All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PORTFOLIO SECTION
      ══════════════════════════════════════ */}
      <section className={styles.portfolio} ref={portfolioRef} id="portfolio">
        <div className="container">
          <div className={`${styles.sectionHead} ${portfolioVisible ? styles.revealed : ''}`}>
            <p className="section-label">Our Work</p>
            <h2 className="section-title">Selected <span>Projects</span></h2>
            <p className={styles.sectionSubtitle}>
              Real-world solutions across engineering, simulation, and software.
            </p>
          </div>

          <div className={styles.portfolioGrid}>
            {PORTFOLIO.map((p, i) => (
              <div
                key={i}
                className={`${styles.portfolioCard} ${portfolioVisible ? styles.cardVisible : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.portfolioVisual} style={{ '--accent': p.color }}>
                  <div className={styles.portfolioPattern}>
                    {p.cat === 'Engineering' || p.cat === 'Research' ? (
                      <svg viewBox="0 0 200 120" fill="none">
                        <path d="M20,60 Q60,20 100,55 Q140,90 180,60" stroke={p.color} strokeWidth="2" fill="none" opacity="0.7"/>
                        <path d="M20,70 Q60,30 100,65 Q140,100 180,70" stroke={p.color} strokeWidth="1.5" fill="none" opacity="0.5"/>
                        <path d="M20,50 Q60,10 100,45 Q140,80 180,50" stroke={p.color} strokeWidth="1" fill="none" opacity="0.4"/>
                        <ellipse cx="100" cy="60" rx="30" ry="18" fill={p.color} fillOpacity="0.1" stroke={p.color} strokeWidth="1" strokeOpacity="0.5"/>
                        <circle cx="100" cy="60" r="6" fill={p.color} fillOpacity="0.4"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 200 120" fill="none">
                        <rect x="20" y="15" width="160" height="90" rx="8" stroke={p.color} strokeWidth="1.5" fill={p.color} fillOpacity="0.05"/>
                        <rect x="30" y="28" width="140" height="8" rx="4" fill={p.color} fillOpacity="0.25"/>
                        <rect x="30" y="44" width="90" height="6" rx="3" fill={p.color} fillOpacity="0.15"/>
                        <rect x="30" y="56" width="110" height="6" rx="3" fill={p.color} fillOpacity="0.15"/>
                        <rect x="30" y="72" width="60" height="22" rx="4" fill={p.color} fillOpacity="0.2" stroke={p.color} strokeWidth="1"/>
                        <rect x="100" y="72" width="70" height="22" rx="4" fill={p.color} fillOpacity="0.1"/>
                      </svg>
                    )}
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <span className={styles.portfolioCat}>{p.cat}</span>
                  <h3 className={styles.portfolioTitle}>{p.title}</h3>
                  <div className={styles.portfolioMetric}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                    </svg>
                    {p.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT / TEAM SECTION
      ══════════════════════════════════════ */}
      <section className={styles.team} ref={teamRef} id="team">
        <div className={styles.sectionBg} />
        <div className="container">
          <div className={styles.teamLayout}>
            <div className={`${styles.teamLeft} ${teamVisible ? styles.revealed : ''}`}>
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">We are <span>GaleoLab</span></h2>
              <p className={styles.teamDesc}>
                A hybrid engineering & software team focused on solving real-world technical problems through simulation, intelligent design, and scalable software systems.
              </p>
              <p className={styles.teamDesc}>
                We bridge the gap between the physical and digital worlds — combining deep simulation expertise with production-grade software engineering.
              </p>
              <div className={styles.teamBadges}>
                <div className={styles.teamBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Engineering Simulation
                </div>
                <div className={styles.teamBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Scalable Software
                </div>
                <div className={styles.teamBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Research-Driven
                </div>
              </div>
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className={`${styles.teamRight} ${teamVisible ? styles.revealed : ''}`}>
              <div className={styles.teamGrid}>
                {TEAM.map((m, i) => (
                  <div key={i} className={styles.memberCard} style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className={styles.memberAvatar}>
                      <span>{m.initial}</span>
                    </div>
                    <div>
                      <p className={styles.memberName}>{m.name}</p>
                      <p className={styles.memberDept}>{m.dept}</p>
                    </div>
                  </div>
                ))}
                <div className={styles.extendedNetwork}>
                  <p className={styles.networkTitle}>Extended Network</p>
                  <div className={styles.networkItems}>
                    <span>Campus Ambassadors</span>
                    <span>Industry Mentors</span>
                    <span>Research Assistants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING SECTION
      ══════════════════════════════════════ */}
      <section className={styles.pricing} ref={pricingRef} id="pricing">
        <div className="container">
          <div className={`${styles.sectionHead} ${pricingVisible ? styles.revealed : ''}`}>
            <p className="section-label">Pricing</p>
            <h2 className="section-title">Transparent <span>Pricing</span></h2>
            <p className={styles.sectionSubtitle}>
              Fixed-price tiers with clear deliverables. Custom scoping for enterprise.
            </p>
          </div>

          <div className={styles.pricingGrid}>
            {PRICING.map((p, i) => (
              <div
                key={p.tier}
                className={`${styles.pricingCard} ${p.highlight ? styles.pricingHighlight : ''} ${pricingVisible ? styles.cardVisible : ''}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {p.highlight && <div className={styles.popularBadge}>Most Popular</div>}
                <div className={styles.pricingTier}>{p.tier}</div>
                <div className={styles.pricingPrice}>{p.price}</div>
                <p className={styles.pricingDesc}>{p.desc}</p>
                <ul className={styles.pricingFeatures}>
                  {p.features.map(f => (
                    <li key={f}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={p.highlight ? 'btn-primary' : 'btn-outline'}
                  onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center', width: '100%', textDecoration: 'none' }}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY GALEOLAB SECTION
      ══════════════════════════════════════ */}
      <section className={styles.why} ref={whyRef} id="why">
        <div className={styles.sectionBg} />
        <div className="container">
          <div className={`${styles.sectionHead} ${whyVisible ? styles.revealed : ''}`}>
            <p className="section-label">Why Choose Us</p>
            <h2 className="section-title">The <span>GaleoLab</span> Difference</h2>
          </div>

          <div className={styles.whyGrid}>
            {WHYS.map((w, i) => (
              <div key={i} className={`${styles.whyCard} ${whyVisible ? styles.cardVisible : ''}`}
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={styles.whyIcon}>{w.icon}</div>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAREER SECTION
      ══════════════════════════════════════ */}
      <section className={styles.career} ref={careerRef} id="career">
        <div className={styles.careerBg} />
        <div className="container">
          <div className={styles.careerLayout}>
            <div className={`${styles.careerLeft} ${careerVisible ? styles.revealed : ''}`}>
              <p className="section-label">Join The Team</p>
              <h2 className="section-title">Work on <span>Real</span> Engineering Problems</h2>
              <p className={styles.careerDesc}>
                At GaleoLab, you'll work on production-grade systems — not toy projects. Build your portfolio. Learn industry tools. Grow in a high-performance environment.
              </p>
              <div className={styles.careerPerks}>
                {['Real project experience', 'Learn industry tools', 'Build strong portfolio', 'High-performance culture'].map(perk => (
                  <div key={perk} className={styles.perk}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e90ff" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {perk}
                  </div>
                ))}
              </div>
              <a href="mailto:info@galeolab.com?subject=Job Application" className="btn-primary">
                Apply Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
            <div className={`${styles.careerRight} ${careerVisible ? styles.revealed : ''}`}>
              <div className={styles.rolesGrid}>
                <p className={styles.rolesTitle}>Open Positions</p>
                {ROLES.map((role, i) => (
                  <div key={role} className={styles.roleCard} style={{ animationDelay: `${i * 0.07}s` }}>
                    <div className={styles.roleDot} />
                    <span>{role}</span>
                    <span className={styles.roleStatus}>Hiring</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════ */}
      <section className={styles.contact} ref={contactRef} id="contact">
        <div className="container">
          <div className={`${styles.sectionHead} ${contactVisible ? styles.revealed : ''}`}>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Build Something <span>Together</span></h2>
            <p className={styles.sectionSubtitle}>
              Ready to solve a hard engineering or software problem? We'd love to hear about your project.
            </p>
          </div>

          <div className={styles.contactLayout}>
            {/* Info */}
            <div className={`${styles.contactInfo} ${contactVisible ? styles.revealed : ''}`}>
              {[
                { icon: '📧', label: 'Email', value: 'info@galeolab.com', href: 'mailto:info@galeolab.com' },
                { icon: '📱', label: 'Phone', value: '+880 1633 681482', href: 'tel:+8801633681482' },
                { icon: '🌐', label: 'Website', value: 'www.galeolab.com', href: 'https://www.galeolab.com' },
                { icon: '📍', label: 'Location', value: 'Dhaka, Bangladesh', href: null },
              ].map(c => (
                <div key={c.label} className={styles.contactItem}>
                  <div className={styles.contactItemIcon}>{c.icon}</div>
                  <div>
                    <p className={styles.contactItemLabel}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className={styles.contactItemValue}>{c.value}</a>
                    ) : (
                      <p className={styles.contactItemValue}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className={`${styles.contactForm} ${contactVisible ? styles.revealed : ''}`}>
              <form onSubmit={handleFormSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      placeholder="+880 XXXX XXXXXX"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFormChange}
                      className={styles.formInput}
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="engineering">Engineering Simulation</option>
                      <option value="software">Software Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="cad">CAD / Product Design</option>
                      <option value="research">Research & R&D</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className={styles.formTextarea}
                    placeholder="Tell us about your project — scope, timeline, goals..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className={styles.spinner} />
                      Sending...
                    </>
                  ) : formStatus === 'sent' ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home