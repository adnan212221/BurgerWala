import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <>
    <div className="container">
        <h1>order confirmed</h1>
        <p>order placed successfully, you can check order status below</p>
        <Link to={'/myorder'}>Check status</Link>
    </div>
    </>
  )
}

export default PaymentSuccess