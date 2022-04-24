import React from "react";
import Itemcard from "../components/Itemcard";
import Gpujson from "./jsondata/data.json";
import { Grid } from "@mui/material";
function Gpu() {
  const renderCard = (card, Index) => {
    if(card.type === "GPU"){
    return (
        
      <Grid item sm={6} md={5} lg={4} xl={3}>
        <Itemcard key={Index} name={card.name} width="200px" />
      </Grid>
    );}
  };
  return (
    <Grid container justifyContent="space-evenly" spacing={4}>
      {Gpujson.map(renderCard)}
    </Grid>
  );
}

export default Gpu;
