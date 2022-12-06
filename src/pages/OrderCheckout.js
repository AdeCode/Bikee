import React from 'react'
import {Router, Routes, Route, useLocation, Link} from 'react-router-dom'
import ShippingAddress from './ShippingAddress'
import Payment from './Payment'

function OrderCheckout() {
    let location = useLocation()
    const {pathname} = location
    console.log(pathname)
  return (
    <div className='pt-[100px]'>
         <Link to={`${pathname}/payment`}>Payment</Link>
        <Link to={`${pathname}/shipping-address`}>shipping</Link>   
        <h2>Welcome to order checkout</h2>
       
    </div>
  )
}

export default OrderCheckout