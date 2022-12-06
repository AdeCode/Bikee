import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom"
import styled from 'styled-components'
import Footer from '../Footer'

function OrderLayout() {
    let location = useLocation()
    const { pathname } = location
    return (
        <Container>
            <nav className='lg:hidden flex flex-col pt-[100px] w-full px-7'>
                <ul className='flex justify-between w-full font-semibold text-sm'>
                    <li>
                        <Link to={`/order-checkout/shipping-address`}>Shipping address</Link>
                    </li>
                    <li className=''>
                        <Link to={`/order-checkout/payment`}>Payment</Link>
                    </li>
                    <li className=''>
                        <Link to={`/order-checkout/summary`}>Summary</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <Footer/>
        </Container>
    )
}

const Container = styled.section`
    color: rgba(34, 2, 2, 0.6);
`
export default OrderLayout