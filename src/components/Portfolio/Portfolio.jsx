import { useRef } from 'react';
import './portfolio.scss'

import { motion, useScroll, useSpring, useTransform  } from 'framer-motion';

const items = [
  {
    id:1,
    tittle: "Dream Lodge",
    img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos necessitatibus veritatis ducimus, sapiente iusto eveniet fuga eligendi laudantium excepturi. Doloribus autem cumque dolorum fuga corporis asperiores molestias. Repellendus, architecto dolorem."
  },
  {
    id:2,
    tittle: "Xapport",
    img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos necessitatibus veritatis ducimus, sapiente iusto eveniet fuga eligendi laudantium excepturi. Doloribus autem cumque dolorum fuga corporis asperiores molestias. Repellendus, architecto dolorem."
  },
  {
    id:3,
    tittle: "Amuebla",
    img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos necessitatibus veritatis ducimus, sapiente iusto eveniet fuga eligendi laudantium excepturi. Doloribus autem cumque dolorum fuga corporis asperiores molestias. Repellendus, architecto dolorem."
  },
  {
    id:3,
    tittle: "Run Up",
    img: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos necessitatibus veritatis ducimus, sapiente iusto eveniet fuga eligendi laudantium excepturi. Doloribus autem cumque dolorum fuga corporis asperiores molestias. Repellendus, architecto dolorem."
  }
];

const Single = ({ item })=>{
  
  const ref = useRef();

  const { scrollYProgress } = useScroll({ 
    target: ref,
    // offset: ["end end", "start start"]
  });

  const y =  useTransform( scrollYProgress, [0,1], [-300, 300]);

  return(
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
        <motion.div className="textContainer" style={{y}}>
          <h2>{item.tittle}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
const Portfolio = () => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  return (
        <div className="portfolio" ref={ref}>
          <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
          </div>
          {items.map(item=>(
            <Single item={item} key={item.id}/>
          ))}
        </div>
  )

}

export default Portfolio;