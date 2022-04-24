import React from "react";
import {
  Box,
  Divider,
  Toolbar,

} from "@mui/material";
import { useCart } from "react-use-cart";
import CartItemcard from "./CartItemcard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Cart(props) {
  const { items, cartTotal , totalUniqueItems , totalItems,updateItemQuantity,isEmpty,emptyCart } = useCart();
  const renderCard = (card, Index) => {
    
    return (<CartItemcard key={card.id} name={card.name} cardid={card.id} quantity={card.quantity} width="100px"/>);}
  return (
    <>
      <Box style={{ display: "flex", justifyContent: "center" }}>
              <Toolbar>
                <ShoppingCartIcon />
                <h3> CART-{totalItems}-${cartTotal} </h3>
              </Toolbar>
      </Box>
      <Divider/>
      
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      > 
        {items.map(renderCard)}
      </Box>
    </>
  );
}

export default Cart;
