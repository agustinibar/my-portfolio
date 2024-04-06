import { useRef } from 'react';
import './portfolio.scss';

import dreamlodgeImage from '../../../public/dreamlodge1.png';
import xapportImage from '../../../public/logo.png';
import amueblaImage from '../../../public/amuebla.png';
import foodieImage from '../../../public/foodie.png';

import { motion, useScroll, useSpring, useTransform  } from 'framer-motion';

const items = [
  {
    id:1,
    tittle: "Dream Lodge",
    img: dreamlodgeImage,
    desc: "An innovative React project leveraging Firebase technologies for luxury accommodation rentals in the US. With real-time database, storage, and user authentication, it offers a seamless booking experience. Responsive design ensures usability across devices."
  },
  {
    id:2,
    tittle: "Xapport",
    img: xapportImage,
    desc: " A dynamic MERN stack application integrating Firebase database to supplement MongoAtlas. Inspired by Twitter, it features user authentication, post creation and viewing, advertising space, friend management, self-help group creation, user chat, and user profile views. Currently in development phase."
  },
  {
    id:3,
    tittle: "Amuebla",
    img: amueblaImage,
    desc: "Amuebla is an ecommerce site built using React and Firebase. It features user authentication, product browsing, detailed product pages, and a cart with MercadoPago integration. An admin dashboard allows for product management, user security, and order tracking. The platform is still in development."
  },
  {
    id:3,
    tittle: "Foodie Portfolio",
    img: foodieImage,
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