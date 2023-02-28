import { CardTravelOutlined } from '@mui/icons-material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import helperFunction from '../@helpers/helperFunction'
import OrderCard from '../components/@shared/OrderCard'
import { AuthContext } from '../contexts/AuthContext'
import { CartContext } from '../contexts/CartContext'
import { useQuery } from 'react-query'
import orderService from '../@services/orderService'
import { IoCheckmarkCircleOutline } from "react-icons/io5";



function UserProfile() {
    const { state: user, dispatch:authDispatch } = useContext(AuthContext)

    const { state: cart } = useContext(CartContext)

    // const [orderHistory, setOrderHistory] = useState([])

    let orderHistory = []

    const totalSumRef = useRef(0)

    if (cart) {
        let total = cart.map(item => item.total)
        if (total.length > 0) {
            const TotalSum = total.reduce(
                (accumulator, currentValue) => accumulator + currentValue)
            totalSumRef.current = TotalSum
        }
    }

    const userId = user.user.id

    const {data:orders, isLoading, error, isError} = useQuery(['order',{userId}], orderService.getOrders)

    orders && console.log(orders.data.data)

    if(orders){
        orderHistory=orders.data.data

    }

    const {data:address} = useQuery(['address',{userId}], orderService.getUserAddress)
    address && console.log(address)


    const getOrderHistory = () => {
        //orders && setOrderHistory(orders.data.data)
    }


    useEffect(()=>{
        getOrderHistory()
    },[])


    // user && console.log(user)
    // cart && console.log(cart)

    const logout = () => {
        authDispatch({type:'LOGOUT'})
    }

    return (
        <Container className='pt-[150px]'>
            <div className='flex lg:px-[100px] lg:mb-5'>
                <h3 className='cursor-pointer text-[#1071FF] font-medium text-base' onClick={logout}>Logout</h3>
                <div className='lg:px-[200px] font-bold text-[22px]'>
                    {
                        user && 
                        <h2 className=''>My Profile</h2>
                    }
                    {
                        user &&
                        <h2 className="">Welcome back, {user.user.first_name}</h2>

                    }
                </div>
            </div>
            

            <div className='lg:flex flex-col lg:flex-row justify-center gap-[100px] px-7 lg:px-0'>
                <div className='lg:flex flex-col lg:flex-row justify-center gap-[100px] px-7 lg:px-0'>
                    <div className='flex flex-col font-mulish'>
                        {/* <h2 className='font-bold text-[#030919] text-[28px] lg:leading-[35px] mb-[29px]'>My Profile</h2> */}
                        <p className='font-bold text-base mb-[39px]'>Shipping address</p>
                        <div className=''>
                            <form className='flex flex-col'>
                                <div className='form-group lg:w-[465px] lg:mb-[39px] mb-[18px]'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Email address</h2>
                                    <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                </div>
                                <div className='form-group lg:w-[465px] lg:mb-[39px]'>
                                    <h2 className='lg:font-normal font-bold text-base text-[#030919] lg:leading-[19px] mb-2'>Contact information</h2>
                                    <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px] w-full'>
                                        <div className='flex flex-col lg:w-[50%] w-full'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>First name</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                        </div>
                                        <div className='flex flex-col lg:w-[50%] w-full'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Last name</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                        <div className='flex flex-col lg:w-[50%]'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Company name (optional)</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                        </div>
                                        <div className='flex flex-col lg:w-[50%]'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Item quantity</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group lg:w-[465px] lg:mb-[21px] mb-[18px]'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Street address</h2>
                                    <input type='text' name='address' placeholder='' className='h-[46px] border w-full' />
                                </div>
                                <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>State</h2>
                                        <input type='text' name='state' placeholder='' className='h-[46px] border w-full' />
                                    </div>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>City</h2>
                                        <input type='text' name='city' placeholder='' className='h-[46px] border w-full' />
                                    </div>
                                </div>
                                <div className='form-group lg:w-[465px] lg:mb-[50px] mb-8'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Phone number</h2>
                                    <input type='number' name='phoneNumber' placeholder='' className='h-[46px] border w-full' />
                                </div>
                                <button className='lg:w-full font-bold text-btn_text bg-red text-base py-[14px] rounded-[4px]'>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[300px]">
                    <h3 className='lg:font-bold text-xl text-[#25252D] mb-[7px]'>Order Summary</h3>
                    <hr className='text-line mb-7' />
                    <p className='font-semibold text-base text-[#000000] lg:mb-6'>Item amount : {orderHistory.length}</p>
                    <div className='flex flex-col lg:gap-2'>
                        {
                            // orderHistory.length > 0 ?
                            orderHistory.length > 0 ?
                            orderHistory.map((order) => {
                                return (
                                    <div className='' key={order.id}>
                                        <div className='flex justify-between'>
                                            <h3 className='font-medium'>Order ref: </h3><h3 className=''>{order.order_ref}</h3>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h3 className='font-medium'>Total amount: </h3><h3 className=''>{helperFunction.nairaFormat(order.total_amount)}</h3>
                                        </div>
                                        <div className='flex justify-between'>
                                                <h3 className='font-medium' >Delivery option:</h3><h3 className=''>Free</h3>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h3  className='font-medium'>Subtotal: </h3>
                                            <h3 className=''>{helperFunction.nairaFormat(order.total_amount)}</h3>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h3  className='font-medium'>Provider: </h3>
                                            <h3 className=''>{order.payment?.provider}</h3>
                                        </div>
                                        <div className='flex justify-between'>
                                            <h3  className='font-medium'>Payment: </h3>
                                            {
                                                order.payment?.status === 'successful' ?
                                                <div className='flex items-center text-green-700 gap-1'>
                                                    <h3 className='text-green-700'>Paid</h3>
                                                    <IoCheckmarkCircleOutline/>
                                                </div>
                                                :
                                                <h3 className=''>{order.payment?.status}</h3>
                                            }
                                        </div>
                                    </div>
                                )
                            })
                            :
                            'You currently have no order history'
                        }
                        {/* {
                            cart.map(({ id, image_url, total, quantity, name, total_amount }) => {
                                return (
                                    <OrderCard
                                        key={id}
                                        image={image_url}
                                        price={total}
                                        quantity={quantity}
                                        id={id}
                                        name={name}
                                    />
                                )
                            })
                        } */}
                    </div>
                    {/* <div className='flex flex-col font-normal text-base mt-7'>
                        <div className='flex justify-between'>
                            <h3>Subtotal</h3><h3 className=''>{helperFunction.nairaFormat(totalSumRef.current)}</h3>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <h3 className='font-normal text-xl' >Bikee delivery</h3><h3 className=''>Free</h3>
                        </div>
                    </div>
                    <hr className='text-line mb-7' />
                    <div className='flex justify-between'>
                        <h2 className='font-medium text-xl'>Total</h2> <span className='font-bold text-xl'>{helperFunction.nairaFormat(totalSumRef.current)}</span>
                    </div>
                    <hr className='text-line mb-7' /> */}
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`


`

export default UserProfile