import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import DeveloperBoardTwoToneIcon from "@mui/icons-material/DeveloperBoardTwoTone";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" elevation={0} variant="outlined">
        <Toolbar>
          <IconButton href="/" edge="start">
            <DeveloperBoardTwoToneIcon />
          </IconButton>
          <Typography
            color="black"
            component="div"
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            PCBUILDER
          </Typography>
          <Stack direction="row">
            <Button variant="outlined" color="inherit" href="/">
              CPU
            </Button>
            <Button variant="outlined" color="inherit" href="/GPU">
              GPU
            </Button>
            <Button variant="outlined" color="inherit">
              MOBO
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
