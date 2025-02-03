import "./navbar.scss"

import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Sidebar } from "../Sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}></motion.span>
            <div className="social">
                <a href="https://twitter.com/IbarAgustinIgna">
                <Twitter/>
                </a>
                <a href="https://www.linkedin.com/in/agustin-ibar-59b123215/">
                <LinkedIn/>
                </a>
                <a href="#">
                <WhatsApp onClick={() => {
                window.open('https://wa.me/5493487708257', '_blank');
              }}/>
                </a>
            </div>
        </div>
    </div>
  )
}
