import { useState } from 'react'
import { profile } from '../data/content.js'
import { ArrowOutIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx'

// Clicking "Email" shows the address with Copy / Gmail / mail-app options,
// because a plain mailto: link does nothing for people without a mail app.
function EmailPanel({ onClose }) {
  const [copied, setCopied] = useState(false)
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.querySelector('.email-panel .address')
      const range = document.createRange()
      range.selectNodeContents(el)
      window.getSelection().removeAllRanges()
      window.getSelection().addRange(range)
    }
  }

  return (
    <div className="email-panel" data-testid="email-panel">
      <span className="address">{profile.email}</span>
      <div className="email-actions">
        <button type="button" onClick={copy} data-testid="copy-email">{copied ? 'Copied' : 'Copy'}</button>
        <a href={gmail} target="_blank" rel="noopener noreferrer">Open in Gmail</a>
        <a href={`mailto:${profile.email}`}>Open mail app</a>
      </div>
      <button type="button" className="close" onClick={onClose} aria-label="Close">×</button>
    </div>
  )
}

// Labelled buttons with real brand icons, so visitors know what each one opens.
export default function Socials({ compact = false }) {
  const [showEmail, setShowEmail] = useState(false)

  return (
    <div className="socials-block" data-testid="socials">
      <ul className={`socials ${compact ? 'compact' : ''}`}>
        <li>
          <a
            className="social social-linkedin"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Open my LinkedIn profile in a new tab"
            aria-label={compact ? 'LinkedIn' : undefined}
          >
            <LinkedInIcon />
            {!compact && <><span>LinkedIn</span><ArrowOutIcon /></>}
          </a>
        </li>
        <li>
          <a
            className="social social-github"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Open my GitHub profile in a new tab"
            aria-label={compact ? 'GitHub' : undefined}
          >
            <GitHubIcon />
            {!compact && <><span>GitHub</span><ArrowOutIcon /></>}
          </a>
        </li>
        <li>
          <button
            type="button"
            className="social social-email"
            aria-expanded={showEmail}
            aria-label={compact ? 'Email' : undefined}
            title="Show my email address"
            onClick={() => setShowEmail((s) => !s)}
          >
            <MailIcon />
            {!compact && <span>Email</span>}
          </button>
        </li>
      </ul>
      {showEmail && <EmailPanel onClose={() => setShowEmail(false)} />}
    </div>
  )
}
