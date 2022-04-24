import React from "react";
import {
  Box,
  AppBar,
  Grid,
  Typography,
  Toolbar,
  Container,
  Paper,
  Divider,
} from "@mui/material";
import Itemcard from "./Itemcard"

function Cart(props) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Itemcard background="gg" width="150px" />
      </Box>
    </>
  );
}

export default Cart;
