import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Screens/About';
import Contact from './Screens/Contact';
import Home from './Screens/Projects';
import Background from './components/Background'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Background/>
      <Box position='relative' className='section-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
