"use client"
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext'
import {loadStripe} from "@stripe/stripe-js"
import React, { useContext } from 'react'
import {Elements} from '@stripe/react-stripe-js'
import CheckOutForm from '@/components/Payment/CheckoutForm'
function Payment() {
    // const {carAmount,setCarAmount}=useContext(SelectedCarAmountContext)
    const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any)
    const options:any={
        mode:'payment',
        amount:547,
        currency:'usd'
    }
  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckOutForm/>
    </Elements>
  )
}

export default Payment