import stripe from "stripe";

export async function CreateIntent() {
  return await stripe(
    "sk_test_51ORfdBIMDiFLTDWwM5PxxG7SG24ZpIgeondhq86IfzTtqxBdFxaloq7ULv5zOaPMY9BtezLRiBlhttHrUBK2U4h600IDTf21la"
  ).paymentIntents.create({
    amount: 1099,
    currency: "usd",
    payment_method_types: ["card"],
  });
}
