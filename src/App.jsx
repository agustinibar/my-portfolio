
import './app.scss'
import Contact from './components/Contact/Contact'
import Cursor from './components/Cursor/Cursor'
import Hero from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import Parallax from './components/Parallax/Parallax'
import Portfolio from './components/Portfolio/Portfolio'
import Technologies from './components/Technologies/Technologies'

function App() {

  return (
    <div>
        <Cursor/>
      <section id="HomePage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="Technologies">
        <Parallax type="Services"/>
      </section>
      <section>
        <Technologies/>
      </section>
        <section id="Portfolio">
          <Parallax type="Portfolio"/>
        </section>
      {/* <section>
        <Portfolio/>
      </section> */}
      {/* <section id="Contact">
        <Contact/>
      </section> */}
  {/* <section>About me</section> */}
    </div>
  )
}

export default App
