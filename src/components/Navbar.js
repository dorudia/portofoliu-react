import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { FiFacebook, FiLinkedin, FiInstagram } from 'react-icons/fi';

const MyNavbarMobile = styled('nav')({
  height: '60px',
  backgroundColor: '#000d38',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  position: 'fixed',
  zIndex: 5,
  top: 0,
  left: 0,
  right: 0,
});

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const navLinks = document.querySelectorAll('.navLink');

  useEffect(() => {
    navLinks.forEach((item) => {
      item.classList.remove('active');
    });
    if (navLinks[activeLink] !== undefined) {
      navLinks[activeLink].classList.add('active');
    }
  }, [activeLink]);

  return (
    <MyNavbarMobile color='primary' className='navbarMobile'>
      <Box className='myImg'>
        <img src='/assets/myImg.jpg' />
      </Box>
      <Link className='navLink' to='/' onClick={() => setActiveLink(0)}>
        <Typography variant='span'>Projects</Typography>
      </Link>
      <Link className='navLink' to='/about' onClick={() => setActiveLink(1)}>
        <Typography variant='span'>About</Typography>
      </Link>
      <Link className='navLink' to='/contact' onClick={() => setActiveLink(2)}>
        <Typography className='navLink' variant='span'>
          Contact
        </Typography>
      </Link>
      <Box
        className='socialIcons'
        style={{
          width: '100%',
          // height: '60px',
          padding: '0 5px',
          display: 'none',
          justifyContent: 'space-around',
          color: 'white',
          fontSize: 24,
          position: 'absolute',
          bottom: 40,
        }}
      >
        <a href='https://www.facebook.com/doru.dia'>
          <FiFacebook className='socialItem' />
        </a>
        <a href='https://www.linkedin.com/in/doru-diaconu/'>
          <FiLinkedin onClick={() => setActiveLink(1)} className='socialItem' />
        </a>
        <a href='https://www.instagram.com/doru.dia/'>
          <FiInstagram
            onClick={() => setActiveLink(2)}
            className='socialItem'
          />
        </a>
      </Box>
    </MyNavbarMobile>
  );
};

export default Navbar;
