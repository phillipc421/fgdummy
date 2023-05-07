import { Box, Typography } from "@mui/material";
import ProductList from "../components/products/productList";
import useProducts from "../custom-hooks/useProducts";

export default function ProductPage() {
  const products = useProducts();

  return (
    <Box>
      <ProductList products={products}></ProductList>
    </Box>
  );
}
