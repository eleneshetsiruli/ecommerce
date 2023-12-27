import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";

import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { CreateIntent } from "./backEnd";

const stripePromise = loadStripe(
  "pk_test_51ORfdBIMDiFLTDWwYbMhyNLSl4ZUahAHyh6BLof8cWNa7fRTYTJkLdSFEf7uQpGBVIrRxGzO9bUIn0cL2DlZK58M00uw0K5hen"
);
export const Payment = () => {
  const [intent, setIntent] = useState();
  console.log(intent);

  useEffect(() => {
    loadIntent();
  }, []);

  async function loadIntent() {
    const res = await CreateIntent();
    setIntent(res);
  }

  if (!intent) {
    return <div>Loading ...</div>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret: intent.client_secret }}
    >
      <CheckoutForm />
    </Elements>
  );
};
