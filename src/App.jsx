
import './app.scss'
import Hero from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'

function App() {

  return (
    <div>
      <section id="HomePage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Services">
        <Parallax type="Services"/>
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="Portfolio"/>
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
      <section>About me</section>
    </div>
  )
}

export default App
