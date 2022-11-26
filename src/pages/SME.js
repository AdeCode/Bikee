import React from 'react'
import styled from 'styled-components'
import box from '../images/SME/box.png'
import boxMob from '../images/SME/boxMob.png'
import map from '../images/SME/map.png'
import mapMob from '../images/SME/mapMob.png'

function SME() {
  return (
    <Section className='lg:pt-[100px]'>
        <div className='lg:px-[150px]'>
            <div className='lg:bg-Radial bg-RadialMb lg:rounded-[22px] bg-no-repeat lg:bg-cover bg-center mb-5 lg:mb-0'>
                <div className='bg-dark_text opacity-[0.8] text-center flex flex-col lg:h-fit h-fit lg:py-[160px] 
                items-center pt-[51px] pb-[100px] lg:rounded-[22px] lg:px-[150px]'>
                    <span className='text-white bg-red rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-9 lg:mb-7'>Restaurants</span>
                    <h1 className='text-white lg:w-[803px] lg:font-bold font-medium text-[27px] leading-10 lg:leading-[68px] text-center lg:text-[57px] lg:mb-[22.3px] mb-[14px]'>Powering last mile deliveries for RESTAURANTS</h1>
                    <p className='text-light_gray font-normal lg:font-medium text-base lg:text-[18.9px] lg:leading-7 lg:w-[678px] px-[38px] lg:px-0'>Take time to take Control of Your Daily Deliveries. BIKEE is powering last mile deliveries for businesses across the country.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row lg:gap-[93px] lg:justify-center lg:mt-[130px] px-7 pb-10 lg:pb-[80px] lg:px-[150px]'>
            <div className='flex flex-col lg:justify-center'>
                <span className='text-red pickup font-medium rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-4'>BIKEE FOR RESTAURANT PICKUP & DELIVERY</span>
                <h2 className='lg:font-bold font-semibold text-2xl lg:text-[46px] text-black ;g:text-dark_text lg:leading-[57px] lg:w-[427px] mb-4 lg:mb-[30px]'>Better experience & lower delivery costs.</h2>
                <p className='lg:font-medium font-normal lg:w-[433px] text-sm mb-7 lg:text-[18.9px] text-light_blue lg:leading-7 lg:mb-6'>BIKEE will help you take control of your entire inoming orders and delivery fulfillment in a connected ecosystem built on a technology enabled and scalable platform.
                    <span className='mt-4 block'>
                        We’ll power all your pickup, on demand and scheduled delivery with our monitored fleets  of e-bikes, and provide a platform to track all your deliveries.
                    </span>
                </p>
                <button className='lg:w-fit font-medium text-btn_text text-base py-3 lg:py-[10.3px] lg:px-[17.8px] bg-red rounded-md'>Get Started</button>
            </div>
            <div className='mb-[10px] lg:mb-0'>
                <img src={box} alt='deliveries' className='hidden lg:flex'/>
                <img src={boxMob} alt='deliveries' className='lg:hidden'/>
            </div>
        </div>
        <div className='flex mile lg:flex-row flex-col lg:gap-[94px] lg:justify-center lg:pt-[25px] lg:pb-[124px] px-7 lg:px-0'>
            <div className='flex justify-center'>
                <img src={map} alt='miles' className='hidden lg:flex'/>
                <img src={mapMob} alt='laptop' className='lg:hidden'/>
            </div>
            <div className='flex flex-col lg:justify-center pt-[22px] lg:pt-0 pb-[34px] lg:pb-0'>
                <span className='text-red pickup font-medium rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-4'>FEATURES</span>
                <h1 className='lg:font-bold font-medium text-2xl leading-9 w-[288px] lg:text-[46px] lg:leading-[57px] lg:w-[456px] text-dark_text'>Your Last Mile Fulfillment for all customer deliveries</h1>
                <h3 className='lg:font-medium lg:text-[19px] lg:leading-7 lg:w-[420px] text-light_blue pb-5 lg:pb-0'>
                    <p className='mb-4'>
                        BIKEE digitizes and optimizes your daily delivery operations for end-to-end visibility and control.
                    </p>
                    <p className='mb-4'>
                        Online, In-store visit, Phone calls and Social platform orders volumes expectations keeps growing daily and faster as you keep scaling.
                    </p> 
                    <p className='mb-4'>
                        BIKEE’s end-to-end delivery and management solutions will help you fulfil your daily order deliveries with our e-bike, strategise with you and scale fast with our unified operational model across all locations.
                    </p>
                    Our platform connects your order data from OMS systems to our riders who makes the last mile deliveries, while you monitor your deliveries in rea-time.
                </h3>
                <button className='lg:w-fit font-medium text-btn_text text-base py-3 lg:py-[10.3px] lg:px-[17.8px] bg-red rounded-md lg:hidden'>Sign up</button>
            </div>
        </div>
        <div className='flex flex-col items-center px-[30px] lg:px-0 lg:flex-row news pt-4 pb-11 lg:py-[83px] lg:gap-[165px] lg:justify-center bg-dark_blue'>
            <div className='flex flex-col items-center lg:items-start lg:gap-[15px] mb-[18px]'>
                <h2 className='text-white lg:font-bold font-semibold text-[21px] lg:text-[34px] lg:leading-10 lg:mb-[15px]'>Sign up for our newsletter</h2>
                <p className='font-medium text-secondary_text text-xs text-center lg:text-left w-[278px] lg:w-full lg:text-lg'>Stay in the loop with everything you need to know.</p>
            </div>
            <div>
                <form className='flex flex-col lg:flex-row lg:gap-[23px] lg:mb-[8px]'>
                    <input type='email' placeholder='Enter your email' className='h-[44px] lg:w-[280px] mb-2 bg-white text-input py-[10px] px-[13px] rounded-lg'/>
                    <p className='text-secondary_text lg:hidden mb-6 font-medium text-[11.4px]'>We care about your data in our <span className='text-red'>privacy policy</span></p>
                    <button className='bg-red text-btn_text lg:py-[10px] lg:px-[17px] py-[11px] text-center lg:w-fit rounded-md font-medium text-base'>Subscribe</button>
                </form>
                <p className='text-secondary_text hidden lg:flex lg:text-[11px] lg:leading-[17px] font-medium text-[11.4px]'>We care about your data in our <span className='text-red'>privacy policy</span></p>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`

    .pickup{
        background: rgba(255, 69, 33, 0.12);
        box-shadow: 0px 0.948611px 1.89722px rgba(105, 81, 255, 0.05);
    }
    .mile{
        background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%);
    }
`

export default SME