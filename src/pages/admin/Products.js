import React, { useState } from 'react'
import { useQuery } from 'react-query'
import productService from '../../@services/productService'
import EnhancedTable from '../../components/ProductTable'
import LinearLoader from '../../components/@shared/LinearLoader'

function Products() {
    const {data:products, isLoading, error} = useQuery('product', productService.getProducts)

    // products && console.log(products.data.data)


    if(error) return "An error occured, could not load products: "+error.message;
  return (
    <div className='w-full'>
        <h3 className='font-bold text-[18px]'>Product Lists</h3>
        {
            isLoading ? <LinearLoader/> 
            : 
            <EnhancedTable
                rowData={products.data.data}
            />
        }
        
    </div>
  )
}

export default Products