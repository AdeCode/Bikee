import React, {useContext, useState, useRef} from 'react'
import styled from 'styled-components'
import CartCard from '../components/@shared/CartCard'
import cartData from '../components/@shared/cartData'
import orderData from '../components/@shared/OrderData'
import OrderCard from '../components/@shared/OrderCard'
import {useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import SubMenu from '../components/@shared/SubMenu'
import helperFunction from '../@helpers/helperFunction'

function Checkout() {
    const [deliveryType, setDeliveryType] = useState('')
    const navigate = useNavigate()
    const totalSumRef = useRef(0)

    const {state:cartState, dispatch} = useContext(CartContext)
    // console.log(cartState)

    if(cartState){
        let total = cartState.map(item => item.total)
        if (total && total.length > 0){
            const TotalSum = total.reduce(
                (accumulator, currentValue) => accumulator + currentValue)
                totalSumRef.current = TotalSum
        }
    }

    const onChange = (event) => {
        setDeliveryType(event.target.value)
        console.log(deliveryType)
    }

    const checkOut = () => {
        console.log(deliveryType)
        sessionStorage.setItem('deliveryType',deliveryType)
        navigate("/order-summary");
        // navigate("/order-summary",{
        //     state:{
        //         deliveryType:deliveryType
        //     }
        // });
    }

  return (
    <Section>
        <SubMenu/>
        <div className='lg:mt-[5px]'>
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
                        {
                            cartState.length > 0 &&
                            <div className='flex justify-between lg:mt-5 text-[#000000] font-semibold'>
                                <h3 className='text-base'>Cart total : {cartState.length} Accessories</h3>
                                <h3 className='text-[22px] lg:leading-7'>{helperFunction.nairaFormat(totalSumRef.current)}</h3>
                            </div>
                        }
                        
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
                        <div className='flex justify-between text-[20px] font-bold'>
                            <h3>Total</h3>
                            <h3 className='text-[20px] lg:leading-7'>{helperFunction.nairaFormat(totalSumRef.current)}</h3>
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
                            <div className='lg:w-[400px] border-[3px] border-[#D9D9D9] py-4 px-5 rounded-2xl lg:mb-6 text-[14.8px]'>
                                <h2 className='text-black font-bold'>Target delivery date: 11 April - 18 April 2023</h2>
                                <p className='text-[#979797] font-bold'>
                                    Please note that this is an estimate and can change depending on our delivery partners and order backlog. If there is a change, we'll always update it on your order page.
                                    You'll receive a tracking and confirmation email from our delivery partner approximately 1 week before your order is due to be delivered.
                                </p>
                                <ul className='font-bold text-black'>
                                    <li>1 - year warranty</li>
                                    <li>Free Bike Shipping</li>
                                </ul>
                            </div>
                            <button onClick={checkOut} disabled={deliveryType === '' ? true : false} className='bg-red text-white py-[13px] w-full px-[26px] lg:w-fit rounded-[4px] lg:leading-7'>
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
            
        </div>
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

export default Checkout