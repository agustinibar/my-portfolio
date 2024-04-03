import "./navbar.scss"

import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Ibar Agustin</span>
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
