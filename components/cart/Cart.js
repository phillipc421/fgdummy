import { useContext, Fragment, useState } from "react";
import { CartContext } from "../../store/cartContext";

import CartItem from "./CartItem";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkout from "../checkout/Checkout";

export default function Cart() {
  const { setCartOpen, cart, setCart } = useContext(CartContext);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const emptyHandler = () => setCart({});

  const cartTotal = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const cartComponent = (
    <>
      <List
        subheader={
          <ListSubheader
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography color="primary" variant="h4" component="p">
              Cart
            </Typography>
            <IconButton color="primary" onClick={() => setCartOpen(false)}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </ListSubheader>
        }
      >
        {Object.values(cart).map((item) => (
          <Fragment key={item.id}>
            <CartItem item={item} setCart={setCart}></CartItem>
            <Divider key={item.id}></Divider>
          </Fragment>
        ))}
      </List>
      {cartTotal ? (
        <Box>
          <Typography variant="body1">Sub Total: ${cartTotal}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              endIcon={<DeleteOutlineIcon></DeleteOutlineIcon>}
              variant="text"
              onClick={emptyHandler}
              disabled={!cartTotal}
            >
              Empty
            </Button>
            <Button
              variant="contained"
              disabled={!cartTotal}
              onClick={() => setCheckoutOpen(true)}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="body1" textAlign="center">
          Your Cart is Empty!
        </Typography>
      )}
    </>
  );
  return (
    <Box sx={{ width: "20rem", padding: "1rem" }}>
      {!checkoutOpen ? (
        cartComponent
      ) : (
        <Checkout cart={cart} checkoutSetter={setCheckoutOpen}></Checkout>
      )}
    </Box>
  );
}
