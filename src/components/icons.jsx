// Inline SVG icons. No icon library needed.
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
)

export const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
  </svg>
)

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
)

export const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth="2">
    <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
  </svg>
)

export const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowOutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth="2.2">
    <path d="M8 16L16 8M9 8h7v7" />
  </svg>
)

export const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
  </svg>
)

export const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z" />
  </svg>
)

export const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth="2">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
)

export const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth="2.4">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

// Service icons
const serviceIcons = {
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21M8 10.5l1.8 1.8L13.5 8.7" />
    </>
  ),
  api: (
    <>
      <path d="M8 7L3 12l5 5M16 7l5 5-5 5" />
      <path d="M13.5 5l-3 14" />
    </>
  ),
  browser: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M6.5 6.5h.01M9 6.5h.01" />
      <path d="M8 14.5l2.5 2.5L16 12" />
    </>
  ),
  code: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7.5 10l2.5 2.5-2.5 2.5M12.5 15h4" />
    </>
  ),
}

export const ServiceIcon = ({ name }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    {serviceIcons[name]}
  </svg>
)
