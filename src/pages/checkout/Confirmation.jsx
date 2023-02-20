import React, { useEffect } from "react";
import { runFireworks } from "../../utils/confetti";
import {Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { Button } from "@mui/material";
import { shades } from "../../theme"
import {useNavigate} from "react-router-dom"

const Confirmation = () => {
  useEffect(() =>{
    runFireworks();
  })
  const navigate = useNavigate();
  
	return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: shades.black[100],
        }}
      >
        <AccountBalanceWalletOutlinedIcon sx={{
          margin: "12px 0px",
          fontSize: "34px"
        }}/>
        <Typography>Thank you for Shopping</Typography>
        <Typography>Please check your email to get receipt</Typography>
        <Typography mt={2}>If you have a question</Typography>
        <Typography>Contact me: <b style={{ color: "red"}}>phamdacthanh197vh@gmail.com</b></Typography>
        <Button onClick={() => navigate("/")} variant="contained" color="secondary" sx={{
          marginTop: "20px"
        }}>
          Comback to shopping!
        </Button>
      </Box>
    </Box>
  );
};

export default Confirmation;
