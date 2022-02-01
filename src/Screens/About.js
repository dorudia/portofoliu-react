import { Box, Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [cubeActive, setCubeActive] = useState(false);

  const handleActiveCube = () => {
    const cubeBtn = document.getElementsByClassName('cube-btn')[0];
    cubeBtn.classList.toggle('change');
    document.getElementsByClassName('change').textContent = 'stop';
    document.querySelector('.container').classList.toggle('active');

    document.querySelectorAll('.face').forEach((item) => {
      item.classList.toggle('active');
    });
  };

//   cubeBtn.addEventListener('click', () => {
    // cubeBtn.classList.toggle('change');
    // document.getElementsByClassName('change').textContent = 'stop';
    // document.querySelector('.container').classList.toggle('active');
    // document.querySelectorAll('.face').forEach((item) => {
    //   item.classList.toggle('active');
    // });
//   });

  return (
    <Box className='section-about'>
      <Box className='titlu-subtitlu'>
        <span className='title'>
          <b>D</b>
          <b>I</b>
          <b>A</b>
          <b>C</b>
          <b>O</b>
          <b>N</b>
          <b>U</b>
          <i style={{ width: 20 }}></i>
          <b>D</b>
          <b>O</b>
          <b>R</b>
          <b>U</b>
        </span>
        <p>
          In ianuarie 2021 am hotarat sa fac o schimbare pe plan profesional
          urmand cursul Frontend Developer de la Atelierele ILBAH unde am
          invatat HTML, CSS, JavaScript, dupa care am fost acceptat sa lucrez
          pentru Keemoji (part of Mocha Global), unde am invatat si lucrat cu
          React-Redux.
        </p>
        <div className='container-h2'>
          <h2>
            <span id='front'>Frontend Developer</span>
            <span id='top'>JavaScript</span>
            <span id='bottom'>React Redux</span>
            <span id='back'>HTML, CSS, SASS</span>
          </h2>
        </div>
        <button className='cube-btn' onClick={handleActiveCube}>
          Click Me!
        </button>
      </Box>
      <Box className='cube-container'>
        <Box className='section-cube'>
          <div className='container'>
            <div className='face' title='cube-1'>
              HTML
            </div>
            <div className='face' title='cube-2'>
              CSS
            </div>
            <div className='face' title='cube-3'>
              REACT
            </div>
            <div className='face' title='cube-4'>
              JAVA SCRIPT
            </div>
            <div className='face' title='cube-5'>
              REDUX
            </div>
            <div className='face' title='cube-6'>
              RESPONSIVE WEB DESIGN
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
