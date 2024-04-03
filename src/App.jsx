import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <section>Parallax</section>
      <section>Service</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
      <section>About me</section>
    </div>
  )
}

export default App
