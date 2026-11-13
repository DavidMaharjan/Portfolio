// ================================================================
// All the words on the site live here. Edit, save, and the page updates.
// ================================================================

export const profile = {
  name: 'David Maharjan',
  firstName: 'David',
  initials: 'DM',
  role: 'Software QA Engineer',
  location: 'Lalitpur, Nepal',
  company: 'Cyberensic',
  openToWork: true,

  // Files in the /public folder, with exactly these names:
  photo: 'IMG_20260226_180157.jpg',
  cv: 'David_Maharjan_CV.pdf',

  email: 'dmaharjan224@gmail.com',
  linkedin: 'https://www.linkedin.com/in/david-maharjan-896138277',
  github: 'https://github.com/DavidMaharjan',

  headline: 'I make sure software works the way people expect, before it reaches them.',
  pitch:
    'QA engineer testing an enterprise GRC platform. I turn requirements into test cases, find the defects that matter, and stay with them until they are fixed and verified. Now adding automation with Python and Playwright.',
}

// Small recruiter-friendly numbers under the intro. Keep them true.
export const highlights = [
  { value: '1+', label: 'year testing enterprise software' },
  { value: '4', label: 'product modules I test end to end' },
  { value: '3', label: 'browsers in every regression run' },
  { value: 'Postman', label: 'Student Expert certified' },
]

// "What I bring": icon names match the icons in components/icons.jsx
export const services = [
  {
    icon: 'search',
    title: 'Manual & exploratory testing',
    text: 'Functional, regression, smoke and UAT testing driven by the requirements, plus exploratory sessions to find what the test cases missed.',
  },
  {
    icon: 'api',
    title: 'API testing',
    text: 'CRUD testing of REST APIs in Postman: request payloads, authentication, status codes and JSON responses, kept in reusable collections.',
  },
  {
    icon: 'browser',
    title: 'Cross-browser & responsive',
    text: 'Checking that features behave the same on Chrome, Firefox and Edge, and on different screen sizes.',
  },
  {
    icon: 'code',
    title: 'Test automation',
    text: 'Writing UI tests with Python and Playwright, using locators and assertions, and running them in CI. This site has its own test suite.',
  },
]

// "How I test": a real sequence, so the numbers mean something.
export const process = [
  { title: 'Understand', text: 'Read the requirements and ask questions early, before anything is built.' },
  { title: 'Design', text: 'Write test cases that cover the happy path, edge cases and negative cases.' },
  { title: 'Execute', text: 'Run the tests, then explore around them to find what nobody expected.' },
  { title: 'Report', text: 'Log defects in Azure DevOps with steps, severity, priority, expected and actual results.' },
  { title: 'Verify', text: 'Retest fixes with the developer and run regression so nothing else broke.' },
  { title: 'Release', text: 'Smoke test the build before UAT and production deployments.' },
]

// "Selected work": a portfolio shows work, not just job titles.
// visual: 'modules' | 'api' | 'code' | 'ci'
export const work = [
  {
    title: 'Testing an enterprise GRC platform',
    kind: 'Professional work · Cyberensic',
    summary:
      'End-to-end testing of a governance, risk and compliance web application across its Risk, Policy, Compliance and Service Provider modules, in two-week Scrum sprints.',
    did: [
      'Designed and ran test cases from business and functional requirements',
      'Tracked defects from discovery to verified fix in Azure DevOps',
      'Kept requirements, test cases, defects and releases traceable',
      'Smoke-tested builds before UAT and production releases',
    ],
    tags: ['Functional', 'Regression', 'UAT', 'Azure DevOps'],
    visual: 'modules',
  },
  {
    title: 'Policy module API testing',
    kind: 'Professional work · Postman',
    summary:
      'Full CRUD coverage of the Policy API: valid and invalid payloads, authentication, status codes and response bodies, organised as a reusable Postman collection.',
    tags: ['Postman', 'REST', 'JSON'],
    visual: 'api',
  },
  {
    title: 'Playwright UI automation',
    kind: 'Personal project',
    summary:
      'Automated login and core user workflows with Python and Playwright, using role-based locators and web-first assertions, run with the Playwright test runner.',
    tags: ['Python', 'Playwright', 'Git'],
    visual: 'code',
    link: 'https://github.com/DavidMaharjan', // change to the project repo
  },
  {
    title: 'This portfolio, tested',
    kind: 'Personal project',
    summary:
      'Built with React and Vite. A pytest-playwright suite checks links, the CV download, the theme switch and mobile layout, and GitHub only deploys if every test passes.',
    tags: ['React', 'pytest-playwright', 'GitHub Actions'],
    visual: 'ci',
    link: 'https://github.com/DavidMaharjan', // change to this site's repo
  },
]

export const journey = [
  { when: 'Sep 2025 – now', title: 'Associate QA Engineer', where: 'Cyberensic Pty. Ltd.', text: 'Testing a GRC web application in an Agile Scrum team.' },
  { when: 'Jul – Aug 2025', title: 'QA Trainee', where: 'Cyberensic Pty. Ltd.', text: 'Learned the defect lifecycle, STLC and Azure DevOps on real releases.' },
  { when: '2025', title: 'B.E. Computer Engineering', where: 'Kantipur Engineering College, Tribhuvan University', text: 'Graduated June 2025.' },
]

export const toolbox = [
  { group: 'Testing', items: ['Functional', 'Regression', 'Smoke', 'Sanity', 'Exploratory', 'Black-box', 'UAT', 'Cross-browser'] },
  { group: 'Tools', items: ['Azure DevOps', 'Jira', 'Postman', 'Git', 'GitHub', 'Excel'] },
  { group: 'Automation', items: ['Python', 'Playwright', 'pytest'] },
  { group: 'Practice', items: ['SDLC', 'STLC', 'Agile Scrum', 'Test case design', 'Traceability', 'SQL (learning)'] },
]

export const certifications = [
  { name: 'Postman Student Expert', by: 'Postman' },
  { name: 'AWS Cloud Foundational Fellowship', by: '2024' },
  { name: 'Data Science with Python', by: '30 hours' },
]
