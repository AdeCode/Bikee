import React, {useState} from 'react'
import styled from 'styled-components'
import CartCard from '../components/@shared/CartCard'
import cartData from '../components/@shared/cartData'
import orderData from '../components/@shared/OrderData'
import OrderCard from '../components/@shared/OrderCard'
import {useNavigate } from 'react-router-dom'

function Checkout() {
    const [deliveryType, setDeliveryType] = useState('')
    const navigate = useNavigate()

    const onChange = (event) => {
        setDeliveryType(event.target.value)
        console.log(deliveryType)
    }

    const checkOut = () => {
        navigate("/order-summary");
    }

  return (
    <Section>
        <div className='lg:pt-[90px] lg:pb-[42px] lg:pl-[140px]'>
            <ul className='flex lg:gap-11 font-normal text-[13px] lg:leading-[22px] text-nav_text'>
                <li className=''>E-bike</li>
                <li className=''>Accessories </li>
                <li className=''>Maintanance and Insuransce</li>
            </ul>
        </div>
        <div className='lg:mt-[74px]'>
            <h2 className='text-blue font-medium text-base ml-[140px]'>Go back</h2>
            <div className='flex font-mulish justify-center lg:gap-[100px]'>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-[#25252D] text-[28px] lg:leading-[35px] lg:mb-[18px]'>My Cart</h2>
                    <hr className='text-line mb-7'/>
                    <div className=''>
                        {
                            cartData.map(({id, image, price}) => {
                                return (
                                    <div key={id}>
                                        <CartCard
                                            image={image}
                                            price={price}
                                        />
                                        <hr className='text-line mb-7'/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-between lg:mt-5 text-[#000000] font-semibold'>
                        <h3 className='text-base'>Cart total : 6 items</h3>
                        <h3 className='text-[22px] lg:leading-7'>N76,980,00</h3>
                    </div>
                </div>
                <div className=''>
                    <h3 className='lg:font-bold text-xl text-[#25252D] mb-[7px]'>Order Summary</h3>
                    <hr className='text-line mb-7'/>
                    <p className='font-semibold text-base text-[#000000] lg:mb-6'>Cart amount : 6 items</p>
                    <div className='flex flex-col lg:gap-2'>
                        {
                            orderData.map(({id, image, price}) => {
                                return (
                                    <OrderCard
                                        key={id}
                                        image={image}
                                        price={price}
                                    />
                                )
                            })
                        }
                    </div>
                    <hr className='text-line mb-7'/>
                    <div className='text-[#000000]'>
                        <h3 className='font-semibold text-lg lg:mb-3'>Select delivery options</h3>
                        <div className='lg:mb-[39px] flex flex-col lg:gap-[18px]'>
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
                        <button onClick={checkOut} className='bg-red text-white py-[13px] px-[26px] lg:w-fit rounded-[4px] lg:leading-7'>
                            Proceed To checkout
                        </button>
                    </div>
                </div>
            </div>
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