import Layout from './layout/Layout'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Hero from './sections/Hero'
import Projects from './sections/Projects'



const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App