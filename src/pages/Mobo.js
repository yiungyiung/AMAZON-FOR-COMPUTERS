import React from "react";
import Itemcard from "../components/Itemcard";
import Data from "./jsondata/Data";
import { Grid } from "@mui/material";
import { CartProvider } from "react-use-cart";
function Mobo() {
  const renderCard = (card, Index) => {
    if (card.type === "MOBO") {
      return (
        <Grid item sm={6} md={5} lg={4} xl={3} key={card.id}>
          <Itemcard
            key={card.id}
            name={card.name}
            width="200px"
            cardo={card}
            price={card.price}
          />
        </Grid>
      );
    }
  };
  return (
    <Grid container justifyContent="space-evenly" spacing={4}>
      {Data.product.map(renderCard)}
    </Grid>
  );
}

export default Mobo;
