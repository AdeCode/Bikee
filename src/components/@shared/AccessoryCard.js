import React, { useContext, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../contexts/CartContext'
import helperFunction from '../../@helpers/helperFunction'

function AccessoryCard({image, title, price, item}) {
  // item && console.log(item)
  const [select, setSelect] = useState(false)

  const [quantitySelected, setQuantitySelected] = useState(1)

  const cartRef = useRef(0)

  const [product, setProduct] = useState({
    name:title,
    quantity:1,
    image_url:null,
    price:price
  })

  const {dispatch, state} = useContext(CartContext)

  state && console.log(state)

  const addProduct = (e) => {
    e.preventDefault()
    setSelect(true)
    dispatch({type:'ADD_PRODUCT',payload:item})
  }

  const increaseQuantity = () => {
    setQuantitySelected(quantitySelected+1)
  }

  const decreaseQuantity = () => {
    setQuantitySelected(quantitySelected-1)
  }

  return (
    <Card className='flex flex-col font-inter lg:gap-5 lg:p-2 rounded-xl lg:w-auto w-full'>
        <div className='lg:w-full w-[200px] mb-[15px]'>
            <img src={image} alt={title}/>
        </div>
        <div className='flex justify-between w-full'>
            <div className='flex flex-col gap-[7px]'>
                <h3 className='text-accessory_text font-semibold text-xs'>{title}</h3>
                <h3 className='text-accessory_price font-semibold text-base'>
                  {
                    helperFunction.nairaFormat(price)                    
                  }
                </h3>
            </div>
            <div className='flex items-center'>
              {
                select ? 
                <div className='flex gap-3'>
                  <button onClick={()=>{dispatch({type:'DECREASE',payload:item});decreaseQuantity()}} disabled={quantitySelected<2}>-</button>
                  <div className=''>{quantitySelected}</div>
                  <button onClick={()=>{dispatch({type:'INCREASE',payload:item});increaseQuantity()}}>+</button>
                </div>
                :
                <button onClick={addProduct} className='text-white bg-red py-[4px] px-[11px] rounded-[18px] font-normal text-[9px] leading-[15px]'>Add to cart</button>
              }
            </div>
        </div>
    </Card>
  )
}

const Card = styled.div`
    box-shadow: 0px 0px 0.795967px rgba(12, 26, 75, 0.24), 0px 2.3879px 6.36774px -0.795967px rgba(50, 50, 71, 0.05);
  /* .card{
    box-shadow: 0px 0px 0.795967px rgba(12, 26, 75, 0.24), 0px 2.3879px 6.36774px -0.795967px rgba(50, 50, 71, 0.05);

  } */
`

export default AccessoryCard