import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    'STRIPE_SECRET_KEY is missing. Please set the environment variable.'
  );
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

export const subscriptions: Stripe.Checkout.SessionCreateParams.LineItem[] = [
  {
    // 👇 Provide the exact Price ID (for example, pr_1234) of the product you want to sell
    price: 'price_1PwGEl06LrSPIcL3EVi66d3K',
  },
];
