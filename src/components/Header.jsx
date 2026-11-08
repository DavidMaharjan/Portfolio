import { useState } from 'react'
import { profile } from '../data/content.js'
import { useActiveSection, useTheme } from './hooks.js'
import { MenuIcon, MoonIcon, SunIcon } from './icons.jsx'

const SECTIONS = [
  { id: 'services', label: 'What I do' },
  { id: 'process', label: 'How I test' },
  { id: 'work', label: 'Work' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]
const IDS = SECTIONS.map((s) => s.id)

export default function Header() {
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection(IDS)
  const [open, setOpen] = useState(false)
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="logo" href="#top" aria-label={`${profile.name}, back to top`}>
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-name">{profile.name}</span>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`} id="site-nav" aria-label="Main">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${next} mode`}
          title={`Switch to ${next} mode`}
          data-testid="theme-toggle"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
        <button
          type="button"
          className="icon-btn menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  )
}
