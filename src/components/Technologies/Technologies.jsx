import './technologies.scss';

import { motion } from 'framer-motion';

const Technologies = () => {
  return (
    <motion.div className="technologies">
      <motion.div className="textContainer">
        <p>I am a fullstack developer and I am focused 
          <br />on specializing in back-end</p>
      </motion.div>
      <motion.div className="tittleContainer">
          <div className="tittle">
            <img src="" alt="" />
          </div>
      </motion.div>
      <motion.div className="listContainer"></motion.div>
    </motion.div>
  )
}

export default Technologies;