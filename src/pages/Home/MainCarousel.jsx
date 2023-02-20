import React from 'react'
import { Box, Typography, useMediaQuery, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { shades } from "../../theme";

// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets/carousel", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)")
  return (
    <Carousel
      showArrows={ isNonMobile ? true : false}
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img 
            src={texture}
            alt={`carousel-images-${index}`}
            style={{
              objectFit: "cover",
              backgroundAttachment: "fixed",
              width: "100%",
              height: "700px",
            }}
          />
          <Box 
            position="absolute"
            width={ isNonMobile ? "500px" : "100%" }
            heigh="auto"
            top= '38%'
            left= {isNonMobile ? "10%" : "0" }
            textAlign="left"
            backgroundColor='rgba(0,0,0,0.4)'
          >
            <Typography variant='h2' pl={2} pt={1.5} color={shades.yellow[500]}>
              CHOSE YOUR FAVORITES
            </Typography>
            <Typography variant='body1' pl={2} color={shades.purple[200]}
              sx={{
                fontFamily: "Cormorant Garamond",
                lineHeight: "90px",
                textTransform: "capitalize",
                fontSize: "80px",
                letterSpacing: "1.5px",
                }}
            >Best Seller</Typography>
            <Button size='large' variant='outlined' color='neutral' sx={{
              margin: "0px 16px 16px",
              fontWeight: "700",
            }}>Shop Now</Button>
          </Box>
        </Box>

      ))}
    </Carousel>
  )
}

export default MainCarousel