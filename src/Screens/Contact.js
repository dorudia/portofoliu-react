import { Box, Button, Container, Fab, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
  return (
    <Box>
      <Box
        classNane='contact'
        style={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          padding: '0 25px',
        }}
        sx={{padding: {xs: 0, md: 25}}}
      >
        <Typography
          variant='h3'
          fontSize={{ xs: 30, md: 39, lg: 48 }}
          style={{
            fontWeight: 'bold',
            color: '#444',
            textShadow: '0 1px 4px rgba(255, 255, 255)',
          }}
          gutterBottom
        >
          DIACONU DORU
        </Typography>
        <Typography
          variant='h6'
          style={{
            fontWeight: 200,
            color: '#444',
            textShadow: '0 1px 4px rgba(255, 255, 255)',
          }}
          fontSize={{ xs: 28, md: 36, lg: 42 }}
          component='h3'
          className='email-dd'
          gutterBottom
        >
          dorudia@gmail.com
        </Typography>
        <a href='tel:0757418580'>
          <Typography
            variant='h2'
            variant='contained'
            size='large'
            style={{
              fontWeight: 200,
              color: '#444',
              fontSize: 26,
              textShadow: '0 1px 4px rgba(255, 255, 255)',
            }}
            id='telefon'
          >
            <span style={{ textDecoration: 'none !important' }}>
              Tel: 0757 418 580
            </span>
          </Typography>
        </a>
      </Box>
    </Box>
  );
};

export default Contact;
