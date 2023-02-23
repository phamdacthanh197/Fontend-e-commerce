import React, { useMemo } from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton, Box, Typography, Button, Alert  } from "@mui/material";
import { shades } from "../theme";
import { addToCart, setIsCartOpen } from "../pages/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { domainName } from '../api/config';


const Item = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openToaster, setOpenToaster] = useState(false)
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered ] = useState(false)
  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;  
  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      console.log(123)
      // After 3 seconds set the show value to false
      setOpenToaster(false)
    }, 1000)

    return () => {
      clearTimeout(timeId)
    }
  });
  return (
    <>
      <Box >
        <Box 
          position="relative"
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <img 
            width="300px"
            height="400px"
            src={`${domainName}${url}`}
            onClick={() => navigate(`/item/${item.id}`)}
            style={{ cursor: "pointer"}}
          />
          <Box
            display={isHovered ? "block" : "none"}
            position='absolute'
            bottom="10%"
            left="0"
            width="100%"
            padding= "0 5%"
          >
            <Box display="flex" justifyContent="space-between">
              <Box
                display="flex"
                alignItems="center"
                backgroundColor="yellow"
                borderRadius="4px"
  
              >
                <IconButton color={shades.purple[500]} onClick={() => setCount(Math.max(count - 1, 1))}>
                  <RemoveIcon/>
                </IconButton>
                <Typography fontFamily="Open Sans" color={shades.purple[500]}>{count}</Typography>
                <IconButton color={shades.purple[500]} onClick={() => setCount(count + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                onClick={() => {
                  setOpenToaster(true);
                  setCount(1);
                  dispatch(addToCart({ item: { ...item, count } }));
                }}
                sx={{
                  background: "transparent",
                  border: '1px solid yellow',
                  fontWeight: "800",
                  color: "yellow",
                  '&:hover': {
                    background: "rgba(0,0,0,0.8)"
                  }
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        </Box>
  
        <Box mt="3px">
          <Typography variant='body1' color={shades.purple[600]} fontWeight="700">
            {category
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
          </Typography>
          <Typography color="black" fontWeight="500">{name}</Typography>
          <Typography fontFamily="Open Sans" fontWeight="bold">${price}</Typography>
        </Box>
      </Box>
      {openToaster && <Alert severity="success" sx={{
        position: "fixed",
        width: "200px",
        top: "60px",
        right: "25px",
        zIndex: "100",
        transition: "1s linear"
      }}>Add Success</Alert> }
    </>
  )
}

export default Item