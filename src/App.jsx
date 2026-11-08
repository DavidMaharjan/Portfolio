import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { Journey, Process, Services } from './components/Sections.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#services">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Journey />
        <Contact />
      </main>
    </>
  )
}
