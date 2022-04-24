import React from "react";
import Itemcard from "../components/Itemcard";
import Cpujson from "./jsondata/data.json";
import { Grid } from "@mui/material";
function Cpu() {
  const renderCard = (card, Index) => {
    if(card.type === "CPU"){
    return (
      <Grid item sm={6} md={5} lg={4} xl={3}>
        <Itemcard key={Index} name={card.name} width="200px" />
      </Grid>
    );
    }
  };
  return (
    <Grid container justifyContent="space-evenly" spacing={4}>
      {Cpujson.map(renderCard)}
    </Grid>
  );
}

export default Cpu;
