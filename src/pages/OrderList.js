import React, {useContext, useState, useRef} from 'react'
import styled from 'styled-components'
import cartData from '../components/@shared/cartData'
import orderData from '../components/@shared/OrderData'
import OrderCard from '../components/@shared/OrderCard'
import {useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import SubMenu from '../components/@shared/SubMenu'
import CartCard from '../components/@shared/CartCard'
import { useMutation, useQuery } from 'react-query'
import orderService from '../@services/orderService'

function OrderList() {
    const [deliveryType, setDeliveryType] = useState('')
    const navigate = useNavigate()
    const totalSumRef = useRef(0)

    const {state:cartState, dispatch} = useContext(CartContext)
    console.log(cartState)

    const orderId = 'bb920a4d-a9cd-41b2-a58b-788581e23096'

    const {data:order, isLoading, error, isError} = useQuery(['product',{orderId}], orderService.getUserOrders)

    order && console.log(order)

    // if(cartState){
    //     let total = cartState.map(item => item.total)
    //     if (total){
    //         const TotalSum = total.reduce(
    //             (accumulator, currentValue) => accumulator + currentValue)
    //             totalSumRef.current = TotalSum
    //     }
    // }

    const onChange = (event) => {
        setDeliveryType(event.target.value)
        console.log(deliveryType)
    }

    const checkOut = () => {
        navigate("/order-summary");
    }

  return (
    <Section>
        <SubMenu/>
        {/* <div className='lg:mt-[5px]'>
            <h2 className='text-blue font-medium text-base ml-[140px] cursor-pointer' onClick={()=>{navigate(-1)}}>Go back</h2>
            {
                cartState.length > 0 ? 
                <div className='flex flex-col lg:flex-row font-mulish justify-center lg:gap-[100px] px-5 lg:px-0'>
                    <div className='flex flex-col'>
                        <h2 className='font-bold text-[#25252D] text-[28px] lg:leading-[35px] lg:mb-[18px]'>My Cart</h2>
                        <hr className='text-line mb-7'/>
                        <div className=''>
                            {
                                cartState && cartState.map(({id, image_url, amount, quantity, name}) => {
                                    return (
                                        <div key={id} className=''>
                                            <CartCard
                                                image={image_url}
                                                price={amount}
                                                quantity={quantity}
                                                name={name}
                                                id={id}
                                            />
                                            <hr className='text-line lg:mb-4'/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex justify-between lg:mt-5 text-[#000000] font-semibold'>
                            <h3 className='text-base'>Cart total : {cartState.length} items</h3>
                            <h3 className='text-[22px] lg:leading-7'>N{totalSumRef.current}</h3>
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <h3 className='lg:font-bold text-xl text-[#25252D] mb-[7px]'>Order Summary</h3>
                        <hr className='text-line mb-7'/>
                        <p className='font-semibold text-base text-[#000000] lg:mb-6'>Cart amount : {cartState.length} items</p>
                        <div className='flex flex-col lg:gap-2'>
                            {
                                cartState && cartState.map(({id, image_url, amount, quantity, name}) => {
                                    return (
                                        <OrderCard
                                            key={id}
                                            image={image_url}
                                            price={amount}
                                            quantity={quantity}
                                            name={name}
                                        />
                                    )
                                })
                            }
                        </div>
                        <hr className='text-line mb-4'/>
                        <div className='text-[#000000]'>
                            <h3 className='font-semibold text-lg lg:mb-3'>Select delivery options</h3>
                            <div className='lg:mb-[29px] mb-4 flex flex-col lg:gap-[18px]'>
                                <div className="">
                                    <label>
                                        <input
                                        type="radio"
                                        value="doorstep"
                                        checked={deliveryType === "doorstep"}
                                        onChange={onChange}
                                        name='delivery_type'
                                        className='mr-2'
                                        />
                                        Deliver to doorstep
                                    </label>
                                </div>
                                <div className="">
                                    <label>
                                        <input
                                            type="radio"
                                            value="pickup"
                                            checked={deliveryType === "pickup"}
                                            onChange={onChange}
                                            name='delivery_type'
                                            className='mr-2'
                                        />
                                        Pickup in store
                                    </label>
                                </div>
                            </div>
                            <button onClick={checkOut} className='bg-red text-white py-[13px] w-full px-[26px] lg:w-fit rounded-[4px] lg:leading-7'>
                                Proceed To checkout
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div className='ml-[140px]'>
                    You currently have 0 items in your cart.
                </div>
            }
            
        </div> */}
    </Section>
  )
}

const Section = styled.section`

    input[type='radio']:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        /* top: 2px;
        left: 1px; */
        position: relative;
        background-color: #ffffff;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid #FF0000;
    }

    input[type='radio']:checked:after {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        /* top: -2px;
        left: -1px; */
        position: relative;
        background-color: #FF0000;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 2px solid #FF0000;
    }
`

export default OrderList