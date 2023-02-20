import React, { useState } from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, Button } from "@mui/material"
import { shades } from '../theme';



const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <Box
      sx={{
        display: visible ? 'inline' : 'none',
        position: "fixed",
        bottom: "20px",
        right: "30px",
        zIndex: "99",
      }}
    >
      <Button onClick={scrollToTop} variant='contained' color='secondary'>  
        <KeyboardDoubleArrowUpIcon sx={{ fontSize: "40px"}}/>
      </Button>
    </Box>
  )
}

export default ScrollTopButton