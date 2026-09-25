import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import UIUXShowcase from './components/UIUXShowcase'
import Certifications from './components/Certifications'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <UIUXShowcase /> */}
        <Certifications />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
