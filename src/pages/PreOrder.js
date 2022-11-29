import React from 'react'
import styled from 'styled-components'
import bikeYellow from '../images/preorder/bikeYellow.png'
import AccessoryCard from '../components/@shared/AccessoryCard'
import inventory from '../components/@shared/inventory'

function PreOrder() {
  return (
    <Section>
        <div className='bg-rider bg-cover bg-center'>
            <div className='lg:py-[161px] lg:px-[130px] text-white font-mulish'>
                <h2 className='lg:mb-[15px] lg:font-semibold lg:text-[53px] lg:leading-[67px]'>Ride all classy</h2>
                <h1 className='lg:mb-[15px] lg:font-bold lg:text-[54px] lg:leading-[67px]'>With HELLOBIKEE!</h1>
                <p className='lg:mb-[56px] font-medium lg:text-lg'>Introducing the safest electronic bike</p>
                <button className='border-2 border-white py-[6px] px-3 mb-7 lg:mb-0'>PRE-ORDER NOW</button>
            </div>
            
        </div>
        <div className='flex flex-col-reverse lg:justify-center lg:flex-row font-mulish lg:py-24 bg-bg_brown lg:gap-[14px]'>
            <div className='flex flex-col lg:gap-6 px-[33px] lg:px-0'>
                <h2 className='lg:font-bold font-semibold text-2xl text-black_text mb-2 lg:mb-0'>Bikee</h2>
                <p className='lg:w-[296px] w-[231px] font-normal text-sm text-brown mb-4 lg:mb-0'>Designed and engineered in Germany. Loved around the world.</p>
                <h3 className='font-bold lg:text-lg text-base text-black_text mb-[17px] lg:mb-0'>N600,000.00</h3>
                <button className='w-fit lg:font-semibold font-bold text-btn_text text-xs py-3 lg:py-[7px] px-[38px] bg-red lg:rounded-xl rounded-[10px]'>PRE-ORDER</button>
                <div className='flex gap-[34px] lg:gap-4 lg:flex-col mb-10 lg:mb-0'>
                    <div className=''>
                        <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Optimized for</h4>
                        <p className='text-pre_brown font-normal text-sm'>150-185 cm tall</p>
                    </div>
                    <div className=''>
                        <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Max total weight</h4>
                        <p className='text-pre_brown font-normal text-sm'>150-185 cm tall</p>
                    </div>
                </div>
                <div className='flex gap-[34px] lg:gap-4 lg:flex-col mb-10 lg:mb-0'>
                    <div className=''>
                        <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Weight</h4>
                        <p className='text-pre_brown font-normal text-sm'>150-185 cm tall</p>
                    </div>
                    <div className=''>
                        <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Battery range</h4>
                        <p className='text-pre_brown font-normal text-sm'>60000mAh</p>
                    </div>
                </div>
                <div className='flex gap-[34px] lg:gap-4 lg:flex-col mb-10 lg:mb-0'>
                    <div className=''>
                        <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Charging time </h4>
                        <p className='text-pre_brown font-normal text-sm'>1hrs - 2hrs</p>
                    </div>
                    <div className=''>
                        <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Assist speed</h4>
                        <p className='text-pre_brown font-normal text-sm'>150-185 cm tall</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[557px] lg:h-[490px]'>
                <img src={bikeYellow} alt="yellow bike"/>
            </div>
        </div>
        <div className='flex justify-center lg:pt-[57px] lg:pb-[67px]'>
            <div className="flex flex-wrap lg:w-[1220px] lg:gap-7  lg:px-[auto]">
            {
                inventory.map(accessory => {
                    console.log(accessory)
                    return (
                        <>
                            <AccessoryCard
                                title={accessory.name}
                                image={accessory.image}
                                price={accessory.price}
                                key={accessory.id}
                            />
                        </>
                        
                    )
                })
            }
            </div>
        </div>
        <div className="flex justify-center">
            <div className='flex lg:w-[1205px] bg-nav_text rounded-lg justify-between lg:py-[24px] lg:px-[32px] font-mulish font-normal text-xl text-light_gray'>
                <h3 className=''>6 items</h3>
                <h3 className='font-semibold text-[22px]'>View order</h3>
                <h3 className=''>N120,890.00</h3>
            </div>
        </div>
        <div className='flex lg:gap-[50px]'>
            <div className=''>

            </div>
            <div className=''>

            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`

`
export default PreOrder