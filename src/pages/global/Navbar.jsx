import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import {
	Paper,
	IconButton,
	Badge,
	Menu,
	MenuItem,
	useMediaQuery,
	Fade,
	Link,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DialerSipOutlinedIcon from '@mui/icons-material/DialerSipOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import logo from "../../assets/logo.png";
import CustomTooltip from "../../components/customizeTooltip";
import { setIsCartOpen } from "../cartSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const isNonMobilDevice = useMediaQuery("(min-width:600px)");
	const { palette } = useTheme();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cart);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			width="100%"
			display="flex"
			justifyContent="center"
			alignItems="center"
			backgroundColor={palette.neutral.light}
			position="fixed"
			top="0"
			left="0"
			zIndex="1"
		>
			<Box
				alignItems="center"
				justifyContent="space-between"
				display="flex"
				width={{ md: "80%", xs: "100%", sm: "80%" }}
			>
				<Box
					onClick={() => navigate(`/`)}
					sx={{ "&:hover": { cursor: "pointer" } }}
					height="45px"
					textAlign="center"
					px={2}
				>
					<img height="100%" width="auto" src={logo} alt="logo" />
				</Box>
				<Paper
					elevation={0}
					sx={{
						height: "45px",
						width: { md: "400px", sm: "300px", sx: "150px" },
						margin: "5px 0",
						border: "1px solid black",
						borderRadius: "999px",
						display: "flex",
						alignItems: "center",
						"&:hover": {
							border: "1px solid rgba(0,0,0,0.4)",
						},
					}}
				>
					<input
						style={{
							width: "80%",
							outline: "none",
							border: "none",
							fontSize: "18px",
							margin: "0px 15px",
						}}
					/>
					<IconButton>
						<SearchIcon />
					</IconButton>
				</Paper>

				{/* laptop device and pc */}
				{isNonMobilDevice && (
					<Box
						width="200px"
						height="100%"
						display="flex"
						justifyContent="flex-end"
						alignItems="center"
					>
						<CustomTooltip title="phone">
							<IconButton>
								<DialerSipOutlinedIcon />
							</IconButton>
						</CustomTooltip>

						<CustomTooltip  title="get Coupon">
							<IconButton href="#coupon">
								<MonetizationOnOutlinedIcon />
							</IconButton>
						</CustomTooltip>

						<CustomTooltip title="About us">
							<IconButton  href="#hotline">
								<InfoOutlinedIcon />
							</IconButton>
						</CustomTooltip>

						<CustomTooltip title="cart">
							<IconButton onClick={() => dispatch(setIsCartOpen())}>
								<Badge color="secondary" badgeContent={cartItems.length}>
									<ShoppingCartOutlinedIcon />
								</Badge>
							</IconButton>
						</CustomTooltip>
					</Box>
				)}

				{/* moblie device */}
				{!isNonMobilDevice && (
					<Box
						width="200px"
						height="100%"
						display="flex"
						justifyContent="flex-end"
						alignItems="center"
					>
						<CustomTooltip>
							<IconButton onClick={() => dispatch(setIsCartOpen())}>
								<Badge color="secondary" badgeContent={cartItems.length}>
									<ShoppingCartOutlinedIcon />
								</Badge>
							</IconButton>
						</CustomTooltip>
						<IconButton
							id="fade-button"
							aria-controls={open ? "fade-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}
						>
							<MenuOutlinedIcon />
						</IconButton>
						<Menu
							id="fade-menu"
							MenuListProps={{
								"aria-labelledby": "fade-button",
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							TransitionComponent={Fade}
						>
							<Link href="#hotline"><MenuItem onClick={handleClose} >Contact</MenuItem></Link>
							<Link href="#about"><MenuItem onClick={handleClose} >About us</MenuItem></Link>
							<Link href="#coupon"><MenuItem onClick={handleClose} >Get Coupon</MenuItem></Link>
						</Menu>
					</Box>
				)}
			</Box>
		</Box> 
);
};

export default Navbar;
