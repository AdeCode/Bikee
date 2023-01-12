import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import productService from '../../@services/productService'



function Product() {
    const {productId} = useParams()

    useEffect(()=>{

    })

    const {data:product, isLoading, error, isError} = useQuery(['product',{productId}], productService.getProduct)

    // product && console.log(product.data)

    if (isLoading) return 'Loading...'

    if (isError) {
        return <span>{error.message}</span>
    }

   
  return (
    <div className='flex flex-col'>
        <h2>Product Details</h2>
        <div className='flex flex-col lg:flex-row'>
            <div className=''>
                {
                    product.data.image_url &&
                    <img src={product.data.image_url} alt={product.data.name} width='200px' height='200px'/>
                }
            </div>
            <div className=''>
                <h3>Product Name: {product.data.name}</h3>
                <h3>Product Type: {product.data.type}</h3>
                <h3>Amount: {product.data.amount}</h3>
                {
                    product.data.property.length > 0 && 
                    product.data.property.map(productProperty => {
                        return (
                            <>
                                {
                                    productProperty.weight &&
                                    <h3>Weight: {productProperty.weight}</h3>
                                }
                                {
                                    productProperty.charging &&
                                    <h3>Charging: {productProperty.charging}</h3>
                                }
                                {
                                    productProperty.speed &&
                                    <h3>Speed: {productProperty.speed}</h3>
                                }
                                {
                                    productProperty.battery &&
                                    <h3>Battery: {productProperty.battery}</h3>
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