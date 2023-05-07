import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SiteWrapper from "../components/layout/SiteWrapper";
import CartContextProvider from "../store/cartContext";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <SiteWrapper>
          <Component {...pageProps} />
        </SiteWrapper>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
