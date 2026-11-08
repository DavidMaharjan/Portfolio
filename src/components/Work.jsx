import { work } from '../data/content.js'
import { ArrowOutIcon, CheckIcon, GitHubIcon } from './icons.jsx'
import { SectionHead } from './Sections.jsx'

const S = ({ c, children }) => <span className={c}>{children}</span>

// A small picture for each piece of work, built from text so it stays sharp.
const visuals = {
  modules: (
    <div className="vis vis-modules" aria-hidden="true">
      {['Risk', 'Policy', 'Compliance', 'Service Provider'].map((m) => (
        <div key={m}>
          <span className="dot" />
          {m}
          <span className="pass">Passed</span>
        </div>
      ))}
    </div>
  ),
  api: (
    <pre className="vis vis-code" aria-hidden="true">
      <span><S c="m post">POST</S>  /policies        <S c="ok">201</S></span>{'\n'}
      <span><S c="m get">GET</S>   /policies/{'{id}'}   <S c="ok">200</S></span>{'\n'}
      <span><S c="m put">PUT</S>   /policies/{'{id}'}   <S c="ok">200</S></span>{'\n'}
      <span><S c="m del">DEL</S>   /policies/{'{id}'}   <S c="ok">204</S></span>{'\n'}
      <span><S c="dim">no auth token     </S><S c="warn">401</S></span>
    </pre>
  ),
  code: (
    <pre className="vis vis-code" aria-hidden="true">
      <S c="kw">def</S> test_login(page):{'\n'}
      {'  '}page.goto(BASE_URL){'\n'}
      {'  '}page.get_by_label(<S c="str">"Email"</S>).fill(USER){'\n'}
      {'  '}page.get_by_role(<S c="str">"button"</S>,{'\n'}
      {'      '}name=<S c="str">"Sign in"</S>).click(){'\n'}
      {'  '}expect(page).to_have_url(<S c="str">"/home"</S>)
    </pre>
  ),
  ci: (
    <pre className="vis vis-code" aria-hidden="true">
      <S c="dim">$</S> pytest{'\n'}
      <S c="ok">✓</S> social links open in new tab{'\n'}
      <S c="ok">✓</S> CV downloads as PDF{'\n'}
      <S c="ok">✓</S> theme switch is remembered{'\n'}
      <S c="ok">✓</S> no sideways scroll on mobile{'\n'}
      <S c="ok">all passed</S> <S c="dim">→ deploying</S>
    </pre>
  ),
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead
          eyebrow="Selected work"
          title="What I've been testing"
          intro="A mix of my day-to-day QA work and the projects I build to grow my automation skills."
        />
        <div className="work">
          {work.map((w, i) => (
            <article className={`work-card ${i === 0 ? 'featured' : ''}`} key={w.title} data-testid="work-card">
              <div className="work-visual">{visuals[w.visual]}</div>
              <div className="work-body">
                <p className="work-kind">{w.kind}</p>
                <h3>{w.title}</h3>
                <p>{w.summary}</p>
                {w.did && (
                  <ul className="did">
                    {w.did.map((d) => (
                      <li key={d}><CheckIcon /> {d}</li>
                    ))}
                  </ul>
                )}
                <ul className="chips">
                  {w.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {w.link && (
                  <a className="work-link" href={w.link} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> View on GitHub <ArrowOutIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
