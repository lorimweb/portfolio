import MainNav from '@/components/Navbar/Navbar'
import About from '@/sections/About/About'
import Skills from '@/sections/Skills/Skills'
import Projects from '@/sections/Projects/Projects'
import Header from '@/sections/Header/Header'

export default function Home() {
  return (
    <main>
      <MainNav />
      <Header />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
