import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import orderData from './OrderData'
import OrderCard from './OrderCard'

function SummaryOrder() {
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
        <div className=''>
            <h3 className='lg:font-bold text-xl text-[#25252D] mb-[7px]'>Order Summary</h3>
            <hr className='text-line mb-7' />
            <p className='font-semibold text-base text-[#000000] lg:mb-6'>Cart amount : 6 items</p>
            <div className='flex flex-col lg:gap-2'>
                {
                    orderData.map(({ id, image, price }) => {
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
            <hr className='text-line mb-7' />
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
                <button onClick={checkOut} className='bg-red text-white py-[13px] px-[26px] lg:w-fit w-full rounded-[4px] lg:leading-7'>
                    Proceed To checkout
                </button>
            </div>
        </div>
    )
}

export default SummaryOrder