import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';
import { Box } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        width: { xs: 400, sm: 786, md: 1024, lg: 1024 },
        margin:'auto'
      }}
    >
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  )
}

export default Home;
