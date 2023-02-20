import React, {useState, useEffect} from "react";
import { Box, Tabs, Typography, Tab, useMediaQuery, Divider  } from "@mui/material";
import Item from "../../components/item";
import { shades } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../cartSlice"

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [value, setValue] = useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const breakPoint = useMediaQuery("(min-width:600px)");

  async function getItems() {
    const items = await fetch(
      "http://localhost:1337/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    console.log(itemsJson)
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.attributes.category === "topRated"
  );
  const newArrivalItems = items.filter(
    (item) => item.attributes.category === "newArrival"
  );
  const bestSellerItems = items.filter(
    (item) => item.attributes.category === "bestSeller"
  );

	return (
		<Box width="80%" margin="80px auto">
			<Typography
				variant="h2"
				fontFamily="Cormorant Garamond"
				textAlign="center"
			>
				Our <b>Feature</b> Products
			</Typography>
      <Divider />
			<Tabs 
        fontWeight= "700"
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        centered
        sx={{
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrival" />
        <Tab label="BEST SELLERS" value="bestSeller" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box
        margin="12px auto 0"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {value === "all" &&
          items.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "newArrival" &&
          newArrivalItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "bestSeller" &&
          bestSellerItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {value === "topRated" &&
          topRatedItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
		</Box>
	);
};

export default ShoppingList;
