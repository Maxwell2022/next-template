import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe, subscriptions } from '@/app/libs/stripe';

export async function POST(req: NextRequest) {
  const headersList = headers();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          ...subscriptions[0],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${headersList.get('origin')}/thank-you`,
      cancel_url: `${headersList.get('origin')}/`,
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Error creating checkout session' });
    }

    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Error creating checkout session' });
  }
}
