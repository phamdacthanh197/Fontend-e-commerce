import React from "react";
import {
	Box,
	InputBase,
	Divider,
	Typography,
	IconButton,
	Icon,
	Button,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const Subcriber = () => {
	const [email, setEmail] = useState("");
	const isNonMobile = useMediaQuery("(min-width:600px)");
	return (
		<Box width="80%" margin="80px auto" textAlign="center">
			<IconButton>
				<MailOutlineIcon sx={{ fontSize: "52px" }} />
			</IconButton>
			<Typography variant="h2" fontFamily="Cormorant Garamond">
				<b>Subcribes</b> To Me
			</Typography>
			<Typography fontWeight="500">
				Subcribes now to get 50% coupon for fist order when you checkout
			</Typography>
      {/* mobile devie */}
			{!isNonMobile && <Box
				m="15px auto"
				display="flex"
        flexDirection={ isNonMobile ? "row" : "column"}
				alignItems="center"
				width="75%"
			>
				<InputBase
					id="coupon"
					sx={{
            width: "100%",
						pl: 1,
						height: "31px",
						flex: 1,
						border: "1px solid black",
            backgroundColor:"#F2F2F2"
					}}
					placeholder="Enter email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<Button
					size="medium"
					variant="contained"
					color="secondary"
          sx={{
            margin: "10px",
            width: "100%"
          }}
				>
					Subcribe
				</Button>
			</Box> }
      {/* nonMobile device */}
      { isNonMobile && <Box
				m="15px auto"
				display="flex"
        flexDirection={ isNonMobile ? "row" : "column"}
				alignItems="center"
				width="75%"
			>
				<InputBase
					id="coupon"
					sx={{
            width: "100%",
						pl: 1,
            mr: 1,
						height: "31px",
						flex: 1,
						border: "1px solid black",
            backgroundColor:"#F2F2F2"
					}}
					placeholder="Enter email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<Button
					size="medium"
					variant="contained"
					color="secondary"
				>
					Subcribe
				</Button>
			</Box>}
		</Box>
	);
};

export default Subcriber;
