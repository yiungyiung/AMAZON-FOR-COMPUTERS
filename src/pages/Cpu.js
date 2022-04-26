import React from "react";
import Itemcard from "../components/Itemcard";
import Data from "./jsondata/Data";
import { Grid } from "@mui/material";

function Cpu() {
  const renderCard = (card, Index) => {
    if (card.type === "CPU") {
      return (
        <Grid key={card.id} item sm={6} md={5} lg={4} xl={3}>
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

export default Cpu;
