import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

export async function POST(request: NextRequest) {
  try {
    const { plan, userId, email } = await request.json()

    const priceIds = {
      premium: process.env.STRIPE_PREMIUM_PRICE_ID!,
      business: process.env.STRIPE_BUSINESS_PRICE_ID!,
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceIds[plan as keyof typeof priceIds],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${request.headers.get('origin')}/dashboard?success=true`,
      cancel_url: `${request.headers.get('origin')}/pricing?canceled=true`,
      customer_email: email,
      metadata: {
        userId,
        plan,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
