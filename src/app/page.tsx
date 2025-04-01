import MainNav from '@/components/Navbar'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'

export default function Home() {
  return (
    <main>
      <MainNav />
      <div className="hero bg-dark text-white min-vh-100 d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-3 mb-4">Full Stack Developer</h1>
          <p className="lead mb-4">Building modern web applications with cutting-edge technologies</p>
          <a href="#about" className="btn btn-light btn-lg">Learn More</a>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
