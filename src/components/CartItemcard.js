//
import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import {useCart} from "react-use-cart";


function CartItemcard(props) {
  const {removeItem} = useCart();
  return (
    
    <Box sx={{width: `${props.width}`}} >
    <Card sx={{backgroundColor: `${props.background}`}}>
      <CardMedia
        component="img"
        height="auto"
        image={require("../assests/images/gmaillogo.png")}
        alt="green iguana"
      />
      <CardContent sx={{flex: '1 0 auto',justifyContent: 'center'}}>
        <Typography variant="h6">
          {props.name}
          <Divider/>
        </Typography>
        <Typography>
        quantity:{props.quantity}
        </Typography>
      </CardContent>
      <CardActions >
        <Button onClick={() => removeItem(props.cardid)} size="medium">Remove</Button>
      </CardActions>
    </Card>
    </Box>
  );
}

export default CartItemcard;