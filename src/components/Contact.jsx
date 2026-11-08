import { profile } from '../data/content.js'
import { CvButton } from './Hero.jsx'
import Socials from './Socials.jsx'

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="wrap">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Looking for a QA engineer who sweats the details?</h2>
            <p>
              I'm open to QA and test engineering roles. Send me a message on LinkedIn or by email,
              or grab my CV.
            </p>
          </div>
          <div className="contact-actions">
            <CvButton className="btn primary" />
            <Socials />
          </div>
        </div>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap footer-row">
          <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
          <Socials compact />
        </div>
      </footer>
    </>
  )
}
