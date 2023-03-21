import React, { useState } from 'react'
import { useQuery } from 'react-query'
import EnhancedTable from '../../components/ProductTable'
import LinearLoader from '../../components/@shared/LinearLoader'
import orderService from '../../@services/orderService'
import OrderTable from '../../components/tables/OrderTable'

function Orders() {
    const {data:orders, isLoading, error} = useQuery('orders', orderService.getAllOrders)

    orders && console.log(orders.data.data)


    if(error) return "An error occured, could not load payments: "+error.message;
  return (
    <div className='w-full'>
        <h3 className='font-bold text-[18px]'>Orders List</h3>
        {
            isLoading ? <LinearLoader/> 
            : 
            <OrderTable
                data={orders.data.data}
            />
        }
        
    </div>
  )
}

export default Orders