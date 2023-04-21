// import Button from "../ui/Button";
import Button from "@mui/material/Button";
import styles from "./ProductCard.module.css";
export default function ProductCard({ product }) {
	const { name, price, stock, description, image } = product;
	return (
		<article className={styles.container}>
			<h2>{name}</h2>
			<img src={image} alt={name}></img>
			<p className={styles.description}>{description}</p>
			<p>${price}</p>
			{/* <Button label={"Add to Cart"} variant={"primary"}></Button> */}
			<Button variant="contained">Add To Cart</Button>
		</article>
	);
}
