import { useRef } from 'react';
import './portfolio.scss';

import dreamlodgeImage from '../../../public/dreamlodge1.png';
import xapportImage from '../../../public/logo.png';
import arbaImage from '../../../public/arba.jpg'
import lumenbyteImage from '../../../public/lumenbyte.png';

import { motion, useScroll, useSpring, useTransform  } from 'framer-motion';

const items = [
  {
    id:1,
    tittle: "Dream Lodge",
    img: dreamlodgeImage,
    desc: "An innovative React project leveraging Firebase technologies for luxury accommodation rentals in the US. With real-time database, storage, and user authentication, it offers a seamless booking experience. Responsive design ensures usability across devices.",
    demo:"https://dreamlodgeprueba.web.app/",
  },
  {
    id:2,
    tittle: "Xapport",
    img: xapportImage,
    desc: " A dynamic MERN stack application integrating Firebase database to supplement MongoAtlas. Inspired by Twitter, it features user authentication, post creation and viewing, advertising space, friend management, self-help group creation, user chat, and user profile views. Currently in development phase.",
    demo:"https://xapport.netlify.app/"
  },
  {
    id:3,
    tittle: "ARBA",
    img: arbaImage,
    desc: "At ARBA, I modernize tax systems by migrating Adabas to Java, SQL, and Oracle. I optimize queries, enhance performance by 40%, and reduce legacy reliance. Using Spring Boot, I unify data sources, improve tax deduction processing, and ensure system stability. My work enhances efficiency in critical financial operations.",
    demo:"https://web.arba.gov.ar/",
  },
  {
    id:3,
    tittle: "Lumenbyte",
    img: lumenbyteImage,
    desc: "At Lumenbyte, I develop AI and Blockchain projects for e-commerce and tourism, using React, Node.js, and PostgreSQL. I lead a team of 3, applying agile methodologies. Key projects include MatchOffer, an AI-driven mobile app built with Expo and Firebase, connecting users with personalized offers.",
    demo:"https://www.lumenbytech.com/"
  }
];

const Single = ({ item })=>{
  
  const ref = useRef();

  const { scrollYProgress } = useScroll({ 
    target: ref,
    // offset: ["end end", "start start"]
  });

  const y =  useTransform( scrollYProgress, [0,1], [-300, 300]);

  const handleDemoClick = () => {
    window.open(item.demo, '_blank');
  };

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
          <button onClick={handleDemoClick}>See Demo</button>
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