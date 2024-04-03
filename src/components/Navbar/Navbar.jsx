import './navbar.scss'
import { Twitter } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className='wrapper'>
            <span>Ibar Agustin</span>
            <div className='social'>
                <Twitter/>
                <LinkedIn/>
                <WhatsApp/>
            </div>
        </div>
    </div>
  )
}
