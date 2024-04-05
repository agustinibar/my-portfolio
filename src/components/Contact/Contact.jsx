import './contact.scss';

import { motion } from 'framer-motion';

const variants = { 
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
};

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" animate="animate">
        <div className="textContainer">
            <h1>Let's work together</h1>
            <div className="item">
                <h2>Mail</h2>
                <span>agustinibarperrotta@gmail.com</span>
            </div>
            <div className="item">
                <h2>Adress</h2>
                <span>Zarate - Buenos Aires, Argentina.</span>
            </div>
            <div className="item">
                <h2>Phone</h2>
                <span>+54 3487 522074</span>
            </div>
        </div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder='Name'/>
                <input type="email" required placeholder='Email'/>
                <textarea rows={8} placeholder='Message'/>
                <button>Submit</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact;