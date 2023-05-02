import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Form from "./Form";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_P_KEY);
export default function Checkout({ cart, checkoutSetter }) {
  const [stripeCs, setStripeCs] = useState("");
  console.log(stripePromise);
  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(cart),
        });
        const data = await response.json();
        if (data.stripeClientSecret) {
          setStripeCs(data.stripeClientSecret);
        }
        // success
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (!stripeCs) {
      fetcher();
    }
    return () => console.log("unmounted");
  }, [cart]);
  console.log(stripeCs);
  return (
    <div>
      {/* {JSON.stringify(cart)} */}
      {stripeCs && (
        <Elements
          options={{ clientSecret: stripeCs, appearance: { theme: "stripe" } }}
          stripe={stripePromise}
        >
          <Form></Form>
        </Elements>
      )}
      <IconButton onClick={() => checkoutSetter(false)}>
        <ArrowBackIcon></ArrowBackIcon>
      </IconButton>
    </div>
  );
}
