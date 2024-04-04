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
            transition={{duration:0.5}}>Portfolio </motion.span>
            <div className="social">
                <a href="#">
                <Twitter/>
                </a>
                <a href="#">
                <LinkedIn/>
                </a>
                <a href="#">
                <WhatsApp/>
                </a>
            </div>
        </div>
    </div>
  )
}
