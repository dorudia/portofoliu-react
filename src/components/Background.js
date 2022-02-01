import { Box } from '@mui/material'
import React from 'react'
const bg =
  'https://images.unsplash.com/photo-1582056615449-5dcb2332b3b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';


const Background = () => {
    return (
        <Box style={{
            position:'fixed',
            width:'100%',
            height:'100vh',
            top: 0,
            right: 0,
            backgroundImage: `url(${bg})`,
            backgroundPositionX: 'right',
            backgroundPositionY: 'center'

        }}>
            
        </Box>
    )
}

export default Background
