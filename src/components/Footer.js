import React from 'react';
import './Footer.css';
import FooterNav from './FooterNav';
import { Box, Link } from '@mui/material';

function Footer(){
  return (
    <footer >
      <FooterNav />

      <Box className='footer'>
        <Box className='footer-info'>
            <p className='footer-info-p'>NFTFY makes it easy for you to create a real NFT on the
                blockchain straight from your iPhone in a few taps! No coding
                experience needed!
            </p>
        </Box>
        <Box sx={{width:{xs:400,sm:768,md:200}, justifyContent:"space-between"}} className='social-links'>
          <Link href="#" class="fa fa-facebook"></Link>
          <Link href="#" class="fa fa-twitter"></Link>
          <Link href="#" class="fa fa-instagram"></Link>
        </Box>
      </Box>
      <Box sx={{width:{xs:400,sm:768,md:960}, justifyContent:"space-evenly"}} className='copyright'>
        <hr />
        <p className='copyright-p'>Privacy policy</p>
        <p className='copyright-p'>Copyright@Nft Cretive agency</p>
        <p className='copyright-p'>Terms of service</p>
      </Box>
    </footer>
  )
}

export default Footer;
