import React from 'react';
import { Link } from 'react-router-dom';
import '../components/FooterNav.css';
import { Box } from '@mui/material';

function NavbarFooter(){
  return (
    <Box sx={{width: { xs: 400, sm: 786, md: 960 },}}>
      <nav className="footerNav">
        <Box className="navbar-container">
            <Box className='footer-logo'>
            <Link to="/" calssName="navbar-logo">
                <h3>Entry</h3>
            </Link>
            </Box>
            <Box className='nav-footer'>
                <Box className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Explore
                    </Link>
                </Box>
                <Box className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Help Center
                    </Link>
                </Box>
                <Box className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Become a partner
                    </Link>
                </Box>
                <Box className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Job
                    </Link>
                </Box>
            </Box>
        </Box>
      </nav>
    </Box>
  )
}

export default NavbarFooter
