import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import NavItem from "./NavItem";
import MenuIcon from "@mui/icons-material/Menu";
import CartIcon from "../../cart/CartIcon";
import InventoryIcon from "@mui/icons-material/Inventory";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { CartContext } from "../../../store/cartContext";

export default function NavBar() {
  const [anchor, setAnchor] = useState(null);
  const { setCartOpen } = useContext(CartContext);
  const router = useRouter();
  const { user, isLoading, error } = useUser();
  // admin functionality
  // protect routes to admins functions

  const links = [
    {
      icon: <InventoryIcon></InventoryIcon>,
      text: "Products",
      click: () => clickHandler(() => router.push("/")),
    },
    {
      icon: <CartIcon></CartIcon>,
      text: "Cart",
      click: () => clickHandler(() => setCartOpen(true)),
    },
    {
      icon: !user ? <LoginIcon></LoginIcon> : <LogoutIcon></LogoutIcon>,
      text: !user ? "Login" : "Logout",
      click: () =>
        clickHandler(() =>
          router.push(!user ? "/api/auth/login" : "/api/auth/logout")
        ),
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
