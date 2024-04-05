import { useRef } from 'react';
import './portfolio.scss'

import { motion, useScroll, useSpring  } from 'framer-motion';

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
  return(
    <section>
      {item.tittle}
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