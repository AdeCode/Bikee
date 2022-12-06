import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import error from '../../images/home/error.png'

function NotFound() {
  return (
    <Container className='flex justify-center lg:items-center h-[100vh] font-poppings px-[30px] pt-[66px] lg:px-0 lg:pt-0'>
        <div className='flex-col flex items-center'>
            <div className='lg:hidden'>
                <img src={error} alt='error'/>
            </div>
            <h3 className='error text-red font-medium text-xs py-[1.4px] px-[7.6px] w-fit lg:mb-[14px] hidden lg:flex'>Error 404</h3>
            <h1 className='font-bold text-dark_text lg:text-[46px] text-[22px] leading-[57px] mb-[6px] lg:mb-[15px]'>Page not found</h1>
            <p className='font-normal lg:text-lg text-base mb-14 text-light_blue lg:mb-[46px] text-center'>Something has gone wrong, page not found</p>
            <div className='flex flex-col lg:flex-row lg:gap-[23px] gap-[19px] w-full'>
                <button className='bg-red text-btn_text text-lg lg:w-fit lg:py-[13px] py-[13px] lg:px-[26px] rounded-md w-full'>
                    <Link to='/'>Go back to Homepage</Link> 
                </button>
                <button className='text-btn lg:py-[13px] lg:px-[26px] rounded-md retry w-full lg:w-fit py-[13px] text-lg'>Retry</button>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    .error{
        background: rgba(255, 0, 0, 0.08);
        box-shadow: 0px 0.948611px 1.89722px rgba(105, 81, 255, 0.05);
        border-radius: 34.15px;
    }

    .retry{
        border: 0.947955px solid #D5DAE1;
        box-shadow: 0px 0.947955px 1.89591px rgba(105, 81, 255, 0.05);
    }
`

export default NotFound