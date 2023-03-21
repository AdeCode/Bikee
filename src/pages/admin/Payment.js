import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import {useNavigate} from 'react-router-dom'
import orderService from '../../@services/orderService';



function Payment() {
    const {paymentId} = useParams()

    const navigate = useNavigate()


    const {data:payment, isLoading, error, isError} = useQuery(['payment',{paymentId}], orderService.getPayment)

    payment && console.log(payment.data)

    if (isLoading) return 'Loading...'

    if (isError) {
        return <span>{error.message}</span>
    }

   
  return (
    <div className='flex flex-col w-[500px] mt-8'>
        <h3 className='cursor-pointer text-blue mb-4' onClick={()=>navigate(-1)}>Go back</h3>
        <h2 className='font-semibold text-base mb-5'>Payment Details</h2>
        <div className='flex flex-col w-[300px]'>
            
            <div className=''>
                <div className='flex justify-between'>
                    <h3>Order Ref:</h3>
                    <h3 className='font-medium'>{payment.data.order_ref}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Amount:</h3>
                    <h3 className='font-medium'>{payment.data.amount}</h3>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Payment