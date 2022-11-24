import React from 'react'
import styled from 'styled-components'
import delivery from '../images/restaurants/delivery.png'

function Restaurant() {
  return (
    <Section className='lg:px-[150px]'>
        <div className='lg:bg-Radial bg-RadialMb lg:rounded-[22px] bg-no-repeat lg:bg-cover bg-center mb-5 lg:mb-0'>
            <div className='bg-dark_text opacity-[0.8] text-center flex flex-col lg:h-fit h-fit lg:py-[160px] 
            items-center pt-[51px] pb-[100px] lg:rounded-[22px]'>
                <span className='text-white bg-red rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-9 lg:mb-7'>Restaurants</span>
                <h1 className='text-white lg:w-[803px] lg:font-bold font-medium text-[27px] leading-10 text-center lg:text-[57px] lg:mb-[22.3px] mb-[14px]'>Powering last mile deliveries for RESTAURANTS</h1>
                <p className='text-light_gray font-normal lg:font-medium text-base lg:text-[18.9px] lg:leading-7 lg:w-[678px] px-[38px] lg:px-0'>Take time to take Control of Your Daily Deliveries. BIKEE is powering last mile deliveries for businesses across the country.</p>
            </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row lg:gap-[93px] lg:justify-center lg:mt-[130px] px-7 lg:px-0'>
            <div className='flex flex-col lg:justify-center'>
                <span className='text-red pickup font-medium rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-4'>BIKEE FOR RESTAURANT PICKUP & DELIVERY</span>
                <h2 className='lg:font-bold font-semibold text-2xl lg:text-[46px] text-black ;g:text-dark_text lg:leading-[57px] lg:w-[427px] mb-4 lg:mb-[30px]'>Time to Take Control of Your Daily Deliveries.</h2>
                <p className='lg:font-medium font-normal lg:w-[433px] text-sm mb-7 lg:text-[18.9px] text-light_blue lg:leading-7 lg:mb-6'>BIKEE will help you take control of your entire inoming orders and delivery fulfillment in a connected ecosystem built on a technology enabled and scalable platform.
                    <span className='mt-4 block'>
                        We’ll power all your pickup, on demand and scheduled delivery with our monitored fleets  of e-bikes, and provide a platform to track all your deliveries.
                    </span>
                </p>
                <button className='lg:w-fit font-medium text-btn_text text-base py-3 lg:py-[10.3px] lg:px-[17.8px] bg-red rounded-md'>Get Started</button>
            </div>
            <div className='mb-[10px] lg:mb-0'>
                <img src={delivery} alt='deliveries'/>
            </div>
        </div>
        <div className=''>

        </div>
    </Section>
  )
}

const Section = styled.section`

.pickup{
    background: rgba(255, 69, 33, 0.12);
    box-shadow: 0px 0.948611px 1.89722px rgba(105, 81, 255, 0.05);
}
`
export default Restaurant