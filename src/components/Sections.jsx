import { certifications, journey, process, services, toolbox } from '../data/content.js'
import { ServiceIcon } from './icons.jsx'

export function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

export function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow="What I do"
          title="What I bring to a team"
          intro="I'm happiest in the details: reading requirements closely, asking the awkward questions early, and testing the paths most people skip."
        />
        <div className="services">
          {services.map((s) => (
            <article className="service" key={s.title}>
              <span className="service-icon"><ServiceIcon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Process() {
  return (
    <section className="section alt" id="process">
      <div className="wrap">
        <SectionHead
          eyebrow="How I test"
          title="From requirement to release"
          intro="The routine I follow every sprint, so nothing reaches production untested."
        />
        <ol className="process">
          {process.map((step, i) => (
            <li key={step.title}>
              <span className="step-no">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Journey() {
  return (
    <section className="section" id="journey">
      <div className="wrap journey-grid">
        <div>
          <SectionHead eyebrow="Journey" title="Where I've been" />
          <ol className="timeline">
            {journey.map((j) => (
              <li key={j.title} data-testid="journey-item">
                <p className="when">{j.when}</p>
                <h3>{j.title}</h3>
                <p className="where-at">{j.where}</p>
                <p>{j.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <SectionHead eyebrow="Toolbox" title="What I work with" />
          <div className="toolbox">
            {toolbox.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul className="chips">
                  {g.items.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="cert-title">Certifications</h3>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name}>
                <span>{c.name}</span>
                <span className="muted">{c.by}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
