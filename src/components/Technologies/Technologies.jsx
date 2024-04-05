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
            <button>WHAT I DID?</button>
          </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black"}}>
          <h2>Frontend</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam molestiae voluptatem natus! Alias cupiditate eligendi accusamus officia doloribus laudantium, labore, ad soluta expedita vitae iste, unde ipsum aspernatur pariatur!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Backend</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam molestiae voluptatem natus! Alias cupiditate eligendi accusamus officia doloribus laudantium, labore, ad soluta expedita vitae iste, unde ipsum aspernatur pariatur!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Agile Methodology</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam molestiae voluptatem natus! Alias cupiditate eligendi accusamus officia doloribus laudantium, labore, ad soluta expedita vitae iste, unde ipsum aspernatur pariatur!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>AI Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam molestiae voluptatem natus! Alias cupiditate eligendi accusamus officia doloribus laudantium, labore, ad soluta expedita vitae iste, unde ipsum aspernatur pariatur!</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Technologies;