import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
      <div className="textContainer">
        <h2>AGUSTIN IBAR</h2>
        <h1>Fullstack Developer</h1>
        <div className="buttons">
          <button>See my lastest works</button>
          <button>Contact Me</button>
        </div>
        <img src="/scroll.png" alt="" />
      </div>
      </div>  
      <div className="slidingTextContainer">
        Javascript Python React Nodejs Django SQL and More
      </div>
      <div className='imageContainer'>
        {/* <img src="/hero.jpg" alt="" /> */}
      </div>
    </div>
  )
}

export default Hero