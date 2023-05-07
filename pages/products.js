import { Box, Typography } from "@mui/material";
import ProductList from "../components/products/ProductList";
import useProducts from "../custom-hooks/useProducts";

export default function ProductPage() {
  const products = useProducts();

  return (
    <Box>
      <ProductList products={products}></ProductList>
    </Box>
  );
}
