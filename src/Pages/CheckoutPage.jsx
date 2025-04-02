import React from 'react'
import { EntryHeader } from '../Components/EntryHeader'
import { CheckOut } from '../Components/CheckOut'

export const CheckoutPage = () => {
  return (
    <div>
        <EntryHeader currentStep={2} page="Checkout"/>
        <CheckOut/>
    </div>
  )
}
