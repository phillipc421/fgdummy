import { useContext } from "react";
import { CartContext } from "../../store/cartContext";
import Cart from "../cart/Cart";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import Header from "./Header";
import NavBar from "./navigation/NavBar";
import Divider from "@mui/material/Divider";
import Footer from "./Footer";
import styles from "./SiteWrapper.module.css";
import { footerLinks } from "../../constants/links";

export default function SiteWrapper({ children }) {
  const { cartOpen, setCartOpen } = useContext(CartContext);

  return (
    <main className={styles.container}>
      <Header>
        <Link href={"/"}>
          <p className={styles.logo}>FLYGUY Hair</p>
        </Link>
        <div className={styles.menu}>
          <NavBar></NavBar>
        </div>
      </Header>
      <Divider
        variant="middle"
        sx={{ marginTop: "1rem", marginBottom: "1rem" }}
      ></Divider>
      {children}
      <Divider
        variant="middle"
        sx={{ marginTop: "1rem", marginBottom: "1rem" }}
      ></Divider>
      <Footer>
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Typography variant="body1">{link.text}</Typography>
          </Link>
        ))}
        <Typography variant="body1">
          &#169; {new Date().getFullYear()} FLYGUY Hair LLC
        </Typography>
      </Footer>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart></Cart>
      </Drawer>
    </main>
  );
}
