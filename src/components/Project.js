import React from 'react';
import { Box, Grid } from '@mui/material';

const Project = ({ image, site, gitRepo }) => {
  
  return (
    <div className='project'>
      <img src={image} alt='project-image' className='project-image' />
      <Box className='btns-div'>
        <a
          href={site}
          className='project-btn'
          target='_blank'
        >
          Go To Site
        </a>
        <a
          href={gitRepo}
          className='code-btn'
          target='_blank'
        >
          Go To Github
        </a>
      </Box>
    </div>
  );
};

export default Project;
