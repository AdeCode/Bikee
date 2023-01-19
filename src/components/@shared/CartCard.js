import React, { useContext } from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartContext'


function CartCard({image, price, quantity, name, id}) {

    const {state:cartState, dispatch} = useContext(CartContext)

  return (
    <Container className='flex items-center lg:mb-[14px]'>
        <div className='lg:mr-[14px]'>
            <img src={image} alt='item' height='100px' width='150px'/>
        </div>
        <h3 className='font-normal text-[#19191D] lg:text-base text-sm lg:mr-[58px]'>{name}</h3>
        <div className='flex items-center'>
            <div className='flex p-[10px] quant mr-3 gap-2 items-center'>
                <h4>{quantity}</h4>
                <div className='flex flex-col'>
                    <MdKeyboardArrowUp className='cursor-pointer' onClick={()=>{dispatch({type:'INCREASE',payload:{id}})}}/>
                    <MdKeyboardArrowDown className='cursor-pointer' onClick={()=>{dispatch({type:'DECREASE',payload:{id}})}}/>
                </div>
            </div>
            <span className='font-medium text-base text-[#000000]'>x {price}</span>
        </div>
        <span className='ml-4 font-bold text-2xl cursor-pointer' onClick={()=>dispatch({type:'REMOVE_PRODUCT',payload:{id}})}>
            <MdDeleteOutline/>    
        </span>
    </Container>
  )
}

const Container = styled.div`
    .quant{
        background: rgba(255, 0, 0, 0.12);

    }
`

export default CartCard