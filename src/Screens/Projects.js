import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { projects } from '../data/data';
import Project from '../components/Project';

const useStyles = makeStyles({
  titluSubtitlu: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    minHeight: 230,
    padding: '5px 15px',
    boxShadow: '0px 0px 12px 4px white',
    marginTop: 12,
    marginBottom: 30,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& span': {
      display: 'flex',
      justifyContent: 'center',
      // width: '100%',
      color: 'white',
      fontFamily: 'verdana',
      fontSize: 38,
      fontWeight: 900,
      letterSpacing: 1,
      textAlign: 'center',
      textShadow:
        '1px 1px 1px #444,2px 3px 1px #444,3px 4px 1px #444,4px 5px 1px #444,5px 6px 1px #fff,10px 10px 8px #222',
    },
    '& p': {
      fontSize: 26,
      color: '#ddd',
      margin: '15px 0',
      textShadow: '1px 2px 3px 2px white',
    },
    '& b': {
      fontSize: { xs: 28, md: 45 },
      fontFamily: 'verdana',
      fontSize: 40,
      fontWeight: 900,
      textAlign: 'center',
      backgroundImage:
        'url("https://media0.giphy.com/media/9PcvOTnh6lyfs2mFON/giphy.gif?cid=790b7611a434694af11f7fdefdb621cbfa5fbaa33542267b&rid=giphy.gif&ct=g")',
      backgroundSize: '30%',
      backgroundClip: 'text',
      '-webkitBackgroundClip': 'text',
      color: 'transparent',
    },
  },
});

const Projects = () => {
  const classes = useStyles();
  // console.log(projects);
  return (
    <Box>
      <Box item className={classes.titluSubtitlu}>
        <Typography component='span'>DIACONU DORU</Typography>
        <Typography component='p'>Frontend Developer</Typography>
        <Typography component='b'>MY PROJECTS</Typography>
      </Box>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {projects.map((project) => {
          return (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={project.id}
              // className='project'
            >
              <Project {...project} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Projects;
