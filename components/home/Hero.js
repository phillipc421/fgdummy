import { useRouter } from "next/router";
import styles from "./Hero.module.css";

import { Box, Typography, Button } from "@mui/material";

export default function Hero() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
      className={styles.container}
    >
      <Box sx={{ flex: "1 1 25rem" }}>
        <img src="/1366width.png"></img>
      </Box>
      <Box
        sx={{
          flex: "1 1 20rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h4" component={"h1"}>
          Future Hair
        </Typography>
        <Typography variant="body1">
          Passion, creativity, confidence, and success. These are the values
          that make up the foundation of our brand. We exist to encourage people
          to be truly authentic. To eliminate future regrets and drive happy
          living. Your interests, passions, and thoughts are all uniquely yours,
          and that's special.
        </Typography>
        <Button variant="contained" onClick={() => router.push("/products")}>
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}
