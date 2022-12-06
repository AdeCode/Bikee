import React from 'react'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from 'styled-components';


function CartCard({image, price}) {
  return (
    <Container className='flex items-center lg:mb-[14px]'>
        <div className='lg:mr-[14px]'>
            <img src={image} alt='item'/>
        </div>
        <h3 className='font-normal text-[#19191D] lg:text-base text-sm lg:mr-[58px]'>Brake oil distressed</h3>
        <div className='flex items-center'>
            <div className='flex p-[10px] quant mr-3 gap-2 items-center'>
                <h4 >2</h4>
                <div className='flex flex-col'>
                    <MdKeyboardArrowUp/>
                    <MdKeyboardArrowDown/>
                </div>
            </div>
            <span className='font-medium text-base text-[#000000]'>x {price}</span>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .quant{
        background: rgba(255, 0, 0, 0.12);

    }
`

export default CartCard