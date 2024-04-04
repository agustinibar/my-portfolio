import './technologies.scss';

import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <motion.div className="technologies">
      <motion.div className="textContainer">
        <p>I am a fullstack developer and I am focused 
          <br />on specializing in back-end</p>
          <hr />
      </motion.div>
      <motion.div className="tittleContainer">
          <div className="tittle">
            <img src="/people.webp" alt="" />
            <h1><b>Mastered</b> technology &</h1>
          </div>
          <div className="tittle">  
            <h1><b>Path In</b> Development</h1>
            <button>WHAT CAN I DO?</button>
          </div>
      </motion.div>
      <motion.div className="listContainer">
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
          <h2>Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam molestiae voluptatem natus! Alias cupiditate eligendi accusamus officia doloribus laudantium, labore, ad soluta expedita vitae iste, unde ipsum aspernatur pariatur!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black"}}>
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam molestiae voluptatem natus! Alias cupiditate eligendi accusamus officia doloribus laudantium, labore, ad soluta expedita vitae iste, unde ipsum aspernatur pariatur!</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Technologies;