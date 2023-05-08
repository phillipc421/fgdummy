import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY, { apiVersion: "2022-11-15" });

export default async function handler(req, res) {
  const METHOD = req.method;
  // checkout needs to be separate from the intent endpoint
  switch (METHOD) {
    case "POST":
      try {
        // convert body to schema for backend
        const cartItems = Object.values(req.body).map((item) => ({
          id: item.id,
          qty: item.qty,
        }));
        const data = await calculateAmount(cartItems);
        const paymentIntent = await createPaymentIntent(data);
        return res.status(200).json(paymentIntent);
      } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal Server Error" });
      }
  }
}

const getProducts = async () => {
  const response = await fetch(process.env.DEV_URL + "/api/data");
  return response.json();
};

const calculateAmount = async (cartItems) => {
  const products = await getProducts();
  const idPriceMap = {};
  products.forEach((product) => (idPriceMap[product.id] = product.price));

  // calculate total cart amount
  // stripe wants smallest currency unit, ie cents, hence the * 100
  return (
    cartItems.reduce((prev, curr) => prev + idPriceMap[curr.id] * curr.qty, 0) *
    100
  );
};

const createPaymentIntent = async (data) => {
  const paymentIntent = await stripe.paymentIntents.create({
    setup_future_usage: "off_session",
    amount: data,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  return { stripeClientSecret: paymentIntent.client_secret };
};
