import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import {useNavigate} from 'react-router-dom'
import orderService from '../../@services/orderService';
import Moment from 'react-moment';



function Order() {
    const {orderId} = useParams()

    const navigate = useNavigate()


    const {data:order, isLoading, error, isError} = useQuery(['order',{orderId}], orderService.getOrder)

    order && console.log(order.data)

    if (isLoading) return 'Loading...'

    if (isError) {
        return <span>{error.message}</span>
    }

   
  return (
    <div className='flex flex-col lg:w-[500px] mt-8'>
        <h3 className='cursor-pointer text-blue mb-4' onClick={()=>navigate(-1)}>Go back</h3>
        <h2 className='font-semibold text-base mb-5'>Order Details</h2>
        <div className='flex flex-col w-[400px]'>
            
            <div className=''>
                <div className='flex justify-between'>
                    <h3>Order Ref:</h3>
                    <h3 className='font-medium'>{order.data.order_ref}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Order Date:</h3>
                    <h3 className='font-medium'><Moment date={order.data.created_at}/></h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Customer name:</h3>
                    <h3 className='font-medium'>{order.data.customer.first_name+' '+order.data.customer.last_name} </h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Customer email:</h3>
                    <h3 className='font-medium'>{order.data.customer?.email}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Customer Phone:</h3>
                    <h3 className='font-medium'>{order.data.customer?.phone}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Customer address:</h3>
                    <h3 className='font-medium text-end'>{order.data.customer.address.formatted_address}</h3>
                </div>
                {/* <div className='flex justify-between'>
                    <h3>Product Type:</h3>
                    <h3 className='font-medium'>{product.data.type}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Amount:</h3>
                    <h3 className='font-medium'>{product.data.amount}</h3>
                </div> */}
            </div>
        </div>
        
    </div>
  )
}

export default Order