import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css'

/* ── Intersection observer hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, on]
}

/* ── Animated counter ── */
function Count({ to, suffix = '' }) {
  const [n, setN] = useState(0)
  const [ref, on] = useReveal(0.3)
  useEffect(() => {
    if (!on) return
    let v = 0
    const step = Math.ceil(to / 55)
    const t = setInterval(() => {
      v += step
      if (v >= to) { setN(to); clearInterval(t) } else setN(v)
    }, 22)
    return () => clearInterval(t)
  }, [on, to])
  return <span ref={ref}>{n}{suffix}</span>
}

/* ── Data ── */
const SERVICES = [
  { icon: '🌊', num: '01', title: 'Engineering Simulation', short: 'CFD · FEA · Thermal · Optimization', desc: 'Aerodynamics, fluid flow, heat transfer, and structural analysis using ANSYS, OpenFOAM & industry-standard solvers.' },
  { icon: '💻', num: '02', title: 'Software Development', short: 'React · Node.js · SaaS · Dashboards',  desc: 'Full-stack web apps, admin dashboards, and SaaS platforms built with scalable modern architecture.' },
  { icon: '📱', num: '03', title: 'Mobile Applications',   short: 'iOS · Android · Flutter',            desc: 'Cross-platform mobile apps from MVP to production — with clean UI and native performance.' },
  { icon: '⚙️', num: '04', title: 'Backend & Systems',     short: 'APIs · Cloud · Microservices',       desc: 'Robust REST/GraphQL APIs, cloud deployments, and scalable system design for high-traffic apps.' },
  { icon: '📐', num: '05', title: 'CAD & Product Design',  short: 'SolidWorks · Prototyping · 3D',      desc: '3D modeling, industrial prototyping, and engineering design optimization for physical products.' },
  { icon: '🔬', num: '06', title: 'Research & Innovation', short: 'R&D · Simulation Studies · Academic', desc: 'Simulation-based research, academic-industry collaboration, and R&D across engineering domains.' },
]

const TRUST = [
  { n: 50, s: '+', l: 'Projects Completed' },
  { n: 10, s: '+', l: 'Simulation Domains' },
  { n: 3,  s: '+', l: 'Years Active' },
  { n: 100,s: '+', l: 'Community Members' },
]

const WHY = [
  { icon: '⚡', title: 'Engineering + Software', desc: 'Rare hybrid team that understands both physical simulation and production code.' },
  { icon: '🎯', title: 'Real Simulation Expertise', desc: 'Production-level ANSYS, OpenFOAM & CFD — not just theory.' },
  { icon: '🚀', title: 'Startup to Enterprise', desc: 'We build systems that grow with you from day one.' },
  { icon: '🔬', title: 'Research-Driven', desc: 'Every solution is backed by rigorous engineering science.' },
  { icon: '🌐', title: 'Nationwide Community', desc: 'Campus ambassadors and engineers across Bangladesh.' },
  { icon: '📐', title: 'Scalable Architecture', desc: 'Designed for performance, maintainability and growth.' },
]

/* ── Component ── */
export default function Home() {
  const [heroRef, heroOn]       = useReveal(0.05)
  const [statsRef, statsOn]     = useReveal(0.1)
  const [svcRef, svcOn]         = useReveal(0.08)
  const [whyRef, whyOn]         = useReveal(0.08)
  const [ctaRef, ctaOn]         = useReveal(0.1)
  const [contactRef, contactOn] = useReveal(0.08)

  const [form, setForm]       = useState({ name:'', email:'', phone:'', type:'', message:'' })
  const [status, setStatus]   = useState(null)

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1100))
    setStatus('sent')
    setTimeout(() => { setStatus(null); setForm({ name:'', email:'', phone:'', type:'', message:'' }) }, 4000)
  }

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className={styles.page}>

      {/* ════════════════════════════
          HERO
      ════════════════════════════ */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroGridBg} />
        <div className={styles.heroGlow} />

        {/* Floating hexagons */}
        <div className={styles.hexes} aria-hidden>
          {[1,2,3,4].map(i => (
            <div key={i} className={`${styles.hex} ${styles['h'+i]}`}>
              <svg viewBox="0 0 60 60" fill="none">
                <polygon points="30,3 55,17 55,43 30,57 5,43 5,17"
                  stroke="rgba(21,101,192,0.2)" strokeWidth="1.2"
                  fill="rgba(21,101,192,0.04)"/>
              </svg>
            </div>
          ))}
        </div>

        <div className={`container ${styles.heroInner} ${heroOn ? styles.on : ''}`}>

          {/* Left */}
          <div className={styles.heroLeft}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Engineering + Software Hybrid Company
            </div>

            <h1 className={styles.heroH1}>
              We Solve<br />
              <span className={styles.heroBlue}>Engineering</span><br />
              Problems.<br />
              Software <span className={styles.heroBlue}>is How.</span>
            </h1>

            <p className={styles.heroP}>
              High-performance simulation, scalable software, and innovative product development — from concept to deployment, for startups, researchers, and industries worldwide.
            </p>

            <div className={styles.heroBtns}>
              <button className="btn-blue" onClick={() => scrollTo('contact')}>
                Hire Us
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="btn-outline" onClick={() => scrollTo('services')}>
                View Services
              </button>
            </div>

            <div className={styles.heroPills}>
              {['CFD','FEA','SaaS','Full-stack','Mobile','R&D','ANSYS'].map(t => (
                <span key={t} className={styles.pill}>{t}</span>
              ))}
            </div>
          </div>

          {/* Right — 3D Card Visual */}
          <div className={styles.heroRight}>
            <div className={styles.visualWrap}>
              {/* Outer glow ring */}
              <div className={styles.glowRing} />

              {/* Main card */}
              <div className={styles.vizCard}>
                <div className={styles.vizTop}>
                  <div className={styles.dots}><span /><span /><span /></div>
                  <span className={styles.simLabel}>SIMULATION ACTIVE</span>
                </div>

                <div className={styles.vizBody}>
                  {/* CFD Airfoil SVG */}
                  <div className={styles.cfdWrap}>
                    <svg viewBox="0 0 320 180" className={styles.cfdSvg}>
                      <defs>
                        <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1565c0" stopOpacity="0"/>
                          <stop offset="50%" stopColor="#1e88e5" stopOpacity="0.55"/>
                          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"/>
                        </linearGradient>
                        <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1565c0" stopOpacity="0"/>
                          <stop offset="45%" stopColor="#42a5f5" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="#1565c0" stopOpacity="0"/>
                        </linearGradient>
                        <radialGradient id="highP" cx="40%" cy="50%">
                          <stop offset="0%" stopColor="#ef5350" stopOpacity="0.45"/>
                          <stop offset="100%" stopColor="#ef5350" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="lowP" cx="65%" cy="50%">
                          <stop offset="0%" stopColor="#1e88e5" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="#1e88e5" stopOpacity="0"/>
                        </radialGradient>
                      </defs>

                      {/* Flow lines */}
                      {[28,42,56,68,78,90,102,114,124,136,148].map((y,i)=>(
                        <path key={i}
                          d={`M8,${y} Q80,${y+(i<5?-22+i*4:i>6?22-(i-6)*4:0)} 310,${y}`}
                          stroke="url(#fg1)" strokeWidth={i===5?2:1.2} fill="none"
                          className={styles.fl} style={{animationDelay:`${i*0.13}s`}}/>
                      ))}

                      {/* Airfoil body */}
                      <path d="M40,88 Q90,42 200,80 Q250,88 265,90 Q250,93 200,100 Q90,138 40,88Z"
                        fill="rgba(21,101,192,0.07)"
                        stroke="rgba(21,101,192,0.45)" strokeWidth="1.4"/>

                      {/* Pressure blobs */}
                      <ellipse cx="100" cy="88" rx="28" ry="18" fill="url(#highP)"/>
                      <ellipse cx="200" cy="88" rx="22" ry="14" fill="url(#lowP)"/>
                    </svg>

                    <div className={styles.legend}>
                      <span className={styles.highP}>HIGH P</span>
                      <div className={styles.legendBar}/>
                      <span className={styles.lowP}>LOW P</span>
                    </div>
                  </div>

                  {/* Metrics row */}
                  <div className={styles.metrics}>
                    <div className={styles.mItem}>
                      <span className={styles.mVal}>22%</span>
                      <span className={styles.mLbl}>Drag Reduction</span>
                    </div>
                    <div className={styles.mDiv}/>
                    <div className={styles.mItem}>
                      <span className={styles.mVal}>18%</span>
                      <span className={styles.mLbl}>Lift Efficiency</span>
                    </div>
                    <div className={styles.mDiv}/>
                    <div className={styles.mItem}>
                      <span className={styles.mVal}>4.7M</span>
                      <span className={styles.mLbl}>Mesh Cells</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge top-right */}
              <div className={styles.fbadge1}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                CFD Live
              </div>

              {/* Floating badge bottom-left */}
              <div className={styles.fbadge2}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                50+ Projects
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className={styles.scrollCue} onClick={() => scrollTo('stats')}>
          <div className={styles.mouse}><div className={styles.wheel}/></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ════════════════════════════
          TRUST STATS
      ════════════════════════════ */}
      <section className={styles.stats} ref={statsRef} id="stats">
        <div className="container">
          <div className={styles.statsRow}>
            {TRUST.map((t,i) => (
              <div key={i} className={`${styles.statBox} ${statsOn ? styles.on : ''}`}
                style={{ animationDelay:`${i*0.1}s` }}>
                <span className={styles.statN}><Count to={t.n} suffix={t.s}/></span>
                <span className={styles.statL}>{t.l}</span>
              </div>
            ))}
          </div>
          <div className={styles.statsBand}>
            <span>Software + Engineering Hybrid Team</span>
            <span className={styles.dot}>·</span>
            <span>Nationwide Engineering Community (Bangladesh)</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          SERVICES
      ════════════════════════════ */}
      <section className={styles.services} ref={svcRef} id="services">
        <div className="container">
          <div className={`${styles.secHead} ${svcOn ? styles.on : ''}`}>
            <p className={styles.label}>What We Build</p>
            <h2 className={styles.secTitle}>Core Service <span>Areas</span></h2>
            <p className={styles.secSub}>From nano-scale simulation to enterprise software — we cover the full technical spectrum.</p>
          </div>

          <div className={styles.svcGrid}>
            {SERVICES.map((s,i) => (
              <div key={s.num}
                className={`${styles.svcCard} ${svcOn ? styles.on : ''}`}
                style={{ animationDelay:`${i*0.07}s` }}>

                {/* 3D floating icon box */}
                <div className={styles.svcIconWrap}>
                  <div className={styles.svcIconBox}>
                    <span className={styles.svcEmoji}>{s.icon}</span>
                  </div>
                  <div className={styles.svcIconShadow}/>
                </div>

                <div className={styles.svcNum}>{s.num}</div>
                <h3 className={styles.svcTitle}>{s.title}</h3>
                <p className={styles.svcShort}>{s.short}</p>
                <p className={styles.svcDesc}>{s.desc}</p>

                <div className={styles.svcArrow}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>

                {/* card glow on hover */}
                <div className={styles.cardGlow}/>
              </div>
            ))}
          </div>

          <div className={styles.svcCta}>
            <Link to="/services" className="btn-blue">
              Explore All Services
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          WHY GALEOLAB
      ════════════════════════════ */}
      <section className={styles.why} ref={whyRef} id="why">
        <div className="container">
          <div className={`${styles.secHead} ${whyOn ? styles.on : ''}`}>
            <p className={styles.label}>Why Choose Us</p>
            <h2 className={styles.secTitle}>The <span>GaleoLab</span> Difference</h2>
            <p className={styles.secSub}>What separates us from generic development agencies.</p>
          </div>

          <div className={styles.whyGrid}>
            {WHY.map((w,i) => (
              <div key={i} className={`${styles.whyCard} ${whyOn ? styles.on : ''}`}
                style={{ animationDelay:`${i*0.07}s` }}>
                <div className={styles.whyIconWrap}>
                  <span className={styles.whyIcon}>{w.icon}</span>
                </div>
                <h3 className={styles.whyTitle}>{w.title}</h3>
                <p className={styles.whyDesc}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          CTA BANNER  ← FIXED TEXT
      ════════════════════════════ */}
      <section className={styles.cta} ref={ctaRef} id="cta">
        <div className={styles.ctaBg}/>
        <div className={styles.ctaGlow}/>
        <div className={`container ${styles.ctaInner} ${ctaOn ? styles.on : ''}`}>
          <h2 className={styles.ctaTitle}>
            Ready to Build Something <span>Extraordinary?</span>
          </h2>
          <p className={styles.ctaDesc}>
            From simulation to software — let's solve your hardest technical problems together.
          </p>
          <div className={styles.ctaBtns}>
            <button className={styles.ctaBtnPrimary} onClick={() => scrollTo('contact')}>
              Start a Project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <Link to="/services" className={styles.ctaBtnOutline}>
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          CONTACT
      ════════════════════════════ */}
      <section className={styles.contact} ref={contactRef} id="contact">
        <div className="container">
          <div className={`${styles.secHead} ${contactOn ? styles.on : ''}`}>
            <p className={styles.label}>Get In Touch</p>
            <h2 className={styles.secTitle}>Let's Build <span>Together</span></h2>
            <p className={styles.secSub}>Ready to start? Tell us about your project.</p>
          </div>

          <div className={styles.contactWrap}>
            {/* Info side */}
            <div className={`${styles.contactInfo} ${contactOn ? styles.on : ''}`}>
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>Contact Information</h3>
                <p className={styles.infoSub}>Reach us through any channel — we respond within 24 hours.</p>

                {[
                  { icon:'📧', label:'Email',    val:'info@galeolab.com',  href:'mailto:info@galeolab.com' },
                  { icon:'📱', label:'Phone',    val:'+880 1633 681482',   href:'tel:+8801633681482' },
                  { icon:'🌐', label:'Website',  val:'www.galeolab.com',   href:'https://www.galeolab.com' },
                  { icon:'📍', label:'Location', val:'Dhaka, Bangladesh',  href:null },
                ].map(c => (
                  <div key={c.label} className={styles.contactItem}>
                    <div className={styles.contactIconBox}>{c.icon}</div>
                    <div>
                      <p className={styles.contactLabel}>{c.label}</p>
                      {c.href
                        ? <a href={c.href} className={styles.contactVal}>{c.val}</a>
                        : <p className={styles.contactVal}>{c.val}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form side */}
            <div className={`${styles.contactForm} ${contactOn ? styles.on : ''}`}>
              <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.fRow}>
                  <div className={styles.fField}>
                    <label className={styles.fLabel}>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={onChange}
                      className={styles.fInput} placeholder="Your full name" required/>
                  </div>
                  <div className={styles.fField}>
                    <label className={styles.fLabel}>Email *</label>
                    <input type="email" name="email" value={form.email} onChange={onChange}
                      className={styles.fInput} placeholder="your@email.com" required/>
                  </div>
                </div>
                <div className={styles.fRow}>
                  <div className={styles.fField}>
                    <label className={styles.fLabel}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={onChange}
                      className={styles.fInput} placeholder="+880 XXXX XXXXXX"/>
                  </div>
                  <div className={styles.fField}>
                    <label className={styles.fLabel}>Project Type *</label>
                    <select name="type" value={form.type} onChange={onChange}
                      className={styles.fInput} required>
                      <option value="">Select type</option>
                      <option>Engineering Simulation</option>
                      <option>Software Development</option>
                      <option>Mobile App</option>
                      <option>CAD / Product Design</option>
                      <option>Research & R&D</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className={styles.fField}>
                  <label className={styles.fLabel}>Message *</label>
                  <textarea name="message" value={form.message} onChange={onChange}
                    className={styles.fTextarea}
                    placeholder="Describe your project — scope, timeline, goals..."
                    required/>
                </div>
                <button type="submit" className={`btn-blue ${styles.fBtn}`}
                  disabled={status==='sending'||status==='sent'}>
                  {status==='sending' ? (
                    <><div className={styles.spinner}/>Sending...</>
                  ) : status==='sent' ? (
                    <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>Sent!</>
                  ) : (
                    <>Send Message<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
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