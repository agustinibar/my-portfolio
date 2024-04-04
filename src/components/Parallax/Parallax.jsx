import { useRef } from 'react';
import './parallax.scss';

import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

  const backgroundStyle = type === "Services" 
    ? { background: "linear-gradient(180deg, #0c0c1d, #111132)" }
    : { background: "linear-gradient(180deg, #0c0c1d, #505064)" };

  return (
    <motion.div className="parallax" 
    ref={ref}
    style={backgroundStyle}>
        <motion.h1 style={{ y:yText }}> 
        { type === "Services" ? "What I Do?" : "What I Did?" }
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{ y: yBg  }} className="planets"></motion.div>
        <motion.div style={{ x: yBg  }} className="stars"></motion.div>
    </motion.div>
  )
}

export default Parallax;
