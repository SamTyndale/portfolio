import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { SelectedWork } from './sections/SelectedWork'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Exploring } from './sections/Exploring'
import { Contact } from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-copper text-bg px-4 py-2 rounded"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Skills />
        <Exploring />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
