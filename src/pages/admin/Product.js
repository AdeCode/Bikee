import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import productService from '../../@services/productService'
import {useNavigate} from 'react-router-dom'



function Product() {
    const {productId} = useParams()

    const navigate = useNavigate()


    const {data:product, isLoading, error, isError} = useQuery(['product',{productId}], productService.getProduct)

    // product && console.log(product.data)

    if (isLoading) return 'Loading...'

    if (isError) {
        return <span>{error.message}</span>
    }

   
  return (
    <div className='flex flex-col w-[500px] mt-8'>
        <h3 className='cursor-pointer text-blue mb-4' onClick={()=>navigate(-1)}>Go back</h3>
        <h2 className='font-semibold text-base mb-5'>Product Details</h2>
        <div className='flex flex-col w-[300px]'>
            <div className='flex justify-center mb-4'>
                {
                    product.data.image_url &&
                    <img src={product.data.image_url} alt={product.data.name} width='150px' height='150px'/>
                }
            </div>
            <div className=''>
                <div className='flex justify-between'>
                    <h3>Product Name:</h3>
                    <h3 className='font-medium'>{product.data.name}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Product Type:</h3>
                    <h3 className='font-medium'>{product.data.type}</h3>
                </div>
                <div className='flex justify-between'>
                    <h3>Amount:</h3>
                    <h3 className='font-medium'>{product.data.amount}</h3>
                </div>
                {
                    product.data.property.length > 0 && 
                    product.data.property.map(productProperty => {
                        return (
                            <>
                                {
                                    productProperty.weight &&
                                    <div className='flex justify-between'>
                                        <h3>Weight:</h3>
                                        <h3 className='font-medium'>{productProperty.weight}</h3>
                                    </div>
                                }
                                {
                                    productProperty.charging &&
                                    <div className='flex justify-between'>
                                        <h3>Charging:</h3>
                                        <h3 className='font-medium'>{productProperty.charging}</h3>
                                    </div>
                                }
                                {
                                    productProperty.speed &&
                                    <div className='flex justify-between'>
                                        <h3>Speed:</h3>
                                        <h3 className='font-medium'>{productProperty.speed}</h3>
                                    </div>
                                }
                                {
                                    productProperty.battery &&
                                    <div className='flex justify-between'>
                                        <h3>Battery:</h3>
                                        <h3 className='font-medium'>{productProperty.battery}</h3>
                                    </div>
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
        
    </div>
  )
}

export default Product