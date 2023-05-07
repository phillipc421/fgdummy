import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  AddressElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@mui/material";

export default function Form() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const submitHandler = async () => {
    if (!stripe || !elements) return;
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: "http://localhost:3000" },
    });
    setIsLoading(false);
  };

  return (
    <div>
      <PaymentElement options={{ layout: "accordion" }}></PaymentElement>
      <AddressElement options={{ mode: "shipping" }}></AddressElement>
      <Button
        sx={{ marginTop: "1rem" }}
        onClick={submitHandler}
        disabled={isLoading || !stripe || !elements}
      >
        Place Order
      </Button>
    </div>
  );
}
