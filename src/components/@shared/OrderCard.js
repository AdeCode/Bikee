import React, { useContext } from 'react'
import styled from 'styled-components'
import {CartContext} from '../../contexts/CartContext';



function OrderCard({image, price, quantity, name, id}) {

  const {dispatch} = useContext(CartContext)

  return (
    <Container className='flex items-center'>
        <div className='lg:mr-[14px]'>
            <img src={image} alt='item' width='80px' height='50px'/>
        </div>
        <div className='flex items-center'>
            <div className='flex lg:flex-col p-[10px] mr-[60px] gap-1 items-start font-medium'>
                <h3 className='text-[#19191D] lg:text-base text-sm'>{name}</h3>
                <h4 className='text-[10px]'>x {quantity}</h4>
            </div>
            <span className='font-medium text-base text-[#000000]' onClick={()=>dispatch({type:'REMOVE_PRODUCT',payload:{id}})}>x {price}</span>
        </div>
    </Container>
  )
}

const Container = styled.section`

`
export default OrderCard