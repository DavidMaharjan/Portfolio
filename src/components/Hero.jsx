import { useState } from 'react'
import { highlights, profile } from '../data/content.js'
import { asset } from './hooks.js'
import { ArrowRightIcon, CheckIcon, DownloadIcon, PinIcon } from './icons.jsx'
import Socials from './Socials.jsx'

function Photo() {
  const [failed, setFailed] = useState(false)
  return (
    <div className="photo-frame">
      {failed ? (
        <div className="photo photo-fallback" role="img" aria-label={profile.name} data-testid="photo-fallback">
          {profile.initials}
        </div>
      ) : (
        <img
          className="photo"
          src={asset(profile.photo)}
          alt={`Portrait of ${profile.name}`}
          width="320"
          height="380"
          onError={() => setFailed(true)}
          data-testid="photo"
        />
      )}
      <div className="photo-badge">
        <span className="badge-icon"><CheckIcon /></span>
        <span>
          <strong>Associate QA Engineer</strong>
          <small>at {profile.company}</small>
        </span>
      </div>
    </div>
  )
}

export function CvButton({ className = 'btn' }) {
  return (
    <a className={className} href={asset(profile.cv)} download data-testid="cv-download">
      <DownloadIcon /> Download CV
    </a>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          {profile.openToWork && <p className="open">Open to QA roles</p>}
          <p className="hello">
            Hi, I'm {profile.firstName} · {profile.role}
          </p>
          <h1>{profile.headline}</h1>
          <p className="pitch">{profile.pitch}</p>
          <p className="where"><PinIcon /> {profile.location}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#work">
              See my work <ArrowRightIcon />
            </a>
            <CvButton />
          </div>
          <Socials />
        </div>
        <Photo />
      </div>

      <div className="wrap">
        <dl className="highlights">
          {highlights.map((h) => (
            <div key={h.label}>
              <dt>{h.value}</dt>
              <dd>{h.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
