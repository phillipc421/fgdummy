import { useState } from "react";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import NavItem from "./NavItem";
import MenuIcon from "@mui/icons-material/Menu";
import CartIcon from "../../cart/CartIcon";
import InventoryIcon from "@mui/icons-material/Inventory";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { CartContext } from "../../../store/cartContext";
const ROLES = "flyguy/roles";
export default function NavBar() {
  const [anchor, setAnchor] = useState(null);
  const { setCartOpen } = useContext(CartContext);
  const router = useRouter();

  // admin functionality
  // protect routes to admins functions

  const links = [
    {
      icon: <InventoryIcon></InventoryIcon>,
      text: "Products",
      click: () => clickHandler(() => router.push("/products")),
    },
    {
      icon: <InfoIcon></InfoIcon>,
      text: "About",
      click: () => clickHandler(() => router.push("/about")),
    },
    {
      icon: <EmailIcon></EmailIcon>,
      text: "Contact",
      click: () => clickHandler(() => router.push("/contact")),
    },
    {
      icon: <CartIcon></CartIcon>,
      text: "Cart",
      click: () => clickHandler(() => setCartOpen(true)),
    },
  ];

  // wrapper to always close menu when an item is clicked
  const clickHandler = (fn) => {
    setAnchor(null);
    fn();
  };

  return (
    <div>
      <IconButton color="primary" onClick={(e) => setAnchor(e.currentTarget)}>
        <MenuIcon></MenuIcon>
      </IconButton>
      <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>
        {links.map((link) => (
          <NavItem
            key={link.text}
            icon={link.icon}
            text={link.text}
            onClick={link.click}
          ></NavItem>
        ))}
      </Menu>
    </div>
  );
}
