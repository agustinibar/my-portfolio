import './technologies.scss';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = { 
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}
const Technologies = () => {

  const handleClickPortfolio = () => {
    const contactSection = document.getElementById('Portfolio');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  const ref = useRef()

  const isInView = useInView(ref,{margin:"-100px"})

  return (
    <motion.div 
    className="technologies" 
    variants={variants} 
    initial="initial" 
    // animate="animate"
    ref={ref}
    animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>I am a fullstack developer and I am focused 
          <br />on specializing in back-end</p>
          <hr />
      </motion.div>
      <motion.div className="tittleContainer" variants={variants}>
          <div className="tittle">
            <img src="/people.webp" alt="" />
            <h1><motion.b whileHover={{color:"orange"}}>Mastered</motion.b> technology &</h1>
          </div>
          <div className="tittle">  
            <h1><motion.b whileHover={{color:"orange"}}>Path In</motion.b> Development</h1>
            <button onClick={handleClickPortfolio}>WHAT I DID?</button>
          </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black"}}>
          <h2>Main Stack</h2>
          <p>Proficient in web development with PERN-MERN stack. Led successful projects, demonstrating expertise in building robust and scalable web applications</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Backend:</h2>
          <p>Expert in backend development with Express.js. Proficient in Django, FastAPI, and Flask. Specialized in RESTful APIs and management of SQL, NoSQL, and realtime databases.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Machine Learning</h2>
          <p>Exploring Machine Learning and Data Science, especially with TensorFlow. Focusing on data analysis and predictive modeling to enhance skills in this dynamic domain.</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Methodologies and Tools:</h2>
          <p>Skilled in SCRUM methodology and adept at using tools like Notion, Figma, and Corel. A strong team player focused on organization and planning, contributing effectively to agile projects.  </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Technologies;