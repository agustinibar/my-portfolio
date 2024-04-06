import './hero.scss'

import { motion } from 'framer-motion';

const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton:{
    opacity: 0,
    y: 10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};


const sliderVariants = {
  initial:{
    x:0,  
  },
  animate:{
    x: "-1600%",
    opacity: 1,
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:80
    }
  }
};

const Hero = () => {

  const handleClickContact = () => {
    // Scroll to the contact section
    const contactSection = document.getElementById('Contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickPortfolio = () => {
    // Scroll to the contact section
    const contactSection = document.getElementById('Portfolio');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>AGUSTIN IBAR</motion.h2>
        <motion.h1 variants={textVariants}>Fullstack Developer</motion.h1>
        <motion.div variants={textVariants} className="buttons">
          <motion.button variants={textVariants} onClick={handleClickPortfolio}>See my lastest works</motion.button>
          <motion.button variants={textVariants} onClick={handleClickContact}>Contact Me</motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton"src="/scroll.png" alt="" />
      </motion.div>
      </div>  
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Javascript - Python - React - Nodejs - Django - MongoDB - SQL - Firebase - AWS and More...
      </motion.div>
      <div className='imageContainer'>
        {/* <img src="/hero.jpg" alt="" /> */}
      </div>
    </div>
  )
}

export default Hero;