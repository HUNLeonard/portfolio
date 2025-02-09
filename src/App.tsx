import Layout from './layout/Layout'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Hero from './sections/Hero'



const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App