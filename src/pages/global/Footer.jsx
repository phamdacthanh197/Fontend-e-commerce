import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { shades } from "../../theme"
import {useMediaQuery} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const Footer = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  return (
    <Box 
      backgroundColor={shades.yellow[100]}
      width="100%"
      height= {isNonMobile ? "300px" : "400px"}
      display="flex"
      justifyContent="center"
      margin="auto"
    >
      <Box 
        position="relative"
        width="80%"
        height="auto"
        margin="24px 0 12px"
        display="flex"
        flexDirection={ isNonMobile ? "row" : "column" }
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box flex="1">
          <Typography 
            variant='h5'
            fontWeight="bold"
            color={shades.purple[500]}
          >Ecommerce</Typography>
          <Typography mt={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dolorum consectetur veniam aliquam ipsa nemo! Pariatur nesciunt voluptatum animi minima?
          </Typography>
        </Box>
        <Box 
          display= "flex"
          justifyContent={ isNonMobile ? "space-around" : "space-between" }
          flex="2" sx={{
            margin: "5px 0 0"
          }}>
          <Box textAlign='left'>
            <Typography
              variant='h4'
              fontWeight="bold"
              mb={3}
            >Brand</Typography>
            <Typography>Adidas</Typography>
            <Typography>Gucci</Typography>
            <Typography>Rolex</Typography>
            <Typography>Dior</Typography>
          </Box>
          <Box textAlign='left'>
            <Typography
              variant='h4'
              fontWeight="bold"
              mb={3}
            >Contact</Typography>
            <Typography>Facebook</Typography>
            <Typography>Zalo</Typography>
            <Typography>twitter</Typography>
          </Box>
          <Box textAlign='left'>
            <Typography
              id="hotline"
              variant='h4'
              fontWeight="bold"
              mb={3}
            >Hotline</Typography>
            <Typography>+099999999</Typography>
            <Typography>DStore@gmail.com</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            columnGap: "30px"
          }}

        >
          <FacebookIcon />
          <AttachEmailIcon />
          <TwitterIcon />
        </Box>
      </Box>
    </Box> 
  )
}

export default Footer