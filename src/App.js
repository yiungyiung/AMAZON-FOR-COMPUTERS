import { useState, useEffect, React } from "react";
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Cpu from "./pages/Cpu";
import Gpu from "./pages/Gpu";


function App() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <>
      <Grid container direction="row" justifyContent="flex-start">
        <Grid item xl={9} lg={9} md={9} sm={8} xs={8}>
          <Navbar />

          <Box
            component="main"
            sx={{
              overflow: "auto",
              bgcolor: "transparent",
              color: "white",
              height: `calc(${size.y}px - 60px)`,
            }}
          >
            <Toolbar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Cpu />} />
                <Route path="/GPU" element={<Gpu />}/>
                <Route path="/MOBO"/>
              </Routes>
            </BrowserRouter>
            
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={4} xs={4}>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Toolbar>
                <ShoppingCartIcon />
                <h3>CART</h3>
              </Toolbar>
            </Box>

            <Divider />
            <Paper
              style={{
                height: `calc(${size.y}px - 60px)`,
                overflow: "auto",
                backgroundColor: "grey",
              }}
            >
              <Cart/>
              
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
