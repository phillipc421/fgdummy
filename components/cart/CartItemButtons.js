import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./CartItemButton.module.css";

export default function CartItemButtons({ addFunc, removeFunc }) {
  return (
    <div className={styles.container}>
      <IconButton color="primary" onClick={addFunc}>
        <AddIcon></AddIcon>
      </IconButton>
      <IconButton color="primary" onClick={removeFunc}>
        <RemoveIcon></RemoveIcon>
      </IconButton>
    </div>
  );
}
