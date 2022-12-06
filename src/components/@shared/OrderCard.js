import React from 'react'
import styled from 'styled-components'


function OrderCard({image, price}) {
  return (
    <Container className='flex items-center'>
        <div className='lg:mr-[14px]'>
            <img src={image} alt='item'/>
        </div>
        <div className='flex items-center'>
            <div className='flex lg:flex-col p-[10px] mr-[60px] gap-1 items-start font-medium'>
                <h3 className='text-[#19191D] lg:text-base text-sm'>Brake oils lingers</h3>
                <h4 className='text-[10px]'>x 2</h4>
            </div>
            <span className='font-medium text-base text-[#000000]'>x {price}</span>
        </div>
    </Container>
  )
}

const Container = styled.section`

`
export default OrderCard