import React, { useState } from 'react'
import { useQuery } from 'react-query'
import EnhancedTable from '../../components/ProductTable'
import LinearLoader from '../../components/@shared/LinearLoader'
import orderService from '../../@services/orderService'
import PaymentsTable from '../../components/tables/PaymentsTable'

function Payments() {
    const {data:payments, isLoading, error} = useQuery('payments', orderService.allPayments)

    payments && console.log(payments.data.data)


    if(error) return "An error occured, could not load payments: "+error.message;
  return (
    <div className='w-full'>
        <h3 className='font-bold text-[18px]'>Payment Lists</h3>
        {
            isLoading ? <LinearLoader/> 
            : 
            <PaymentsTable
                rowData={payments.data.data}
            />
        }
        
    </div>
  )
}

export default Payments