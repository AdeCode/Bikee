import React from 'react'
import styled from 'styled-components'
import bikeYellow from '../images/preorder/bikeYellow.png'
import theft from '../images/preorder/theft.png'
import assist from '../images/preorder/assist.png'
import ellipse from '../images/preorder/Ellipse.png'
import bike from '../images/preorder/bike.png'
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
                    <img src={bikeYellow} alt="yellow bike" />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center lg:pt-[57px] lg:pb-[67px]'>
                <div className='flex justify-start lg:w-[1220px] w-full px-6'>
                    <span className='text-red accessories pickup font-medium rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-4'>Accessories</span>
                </div>
                <div className="flex lg:flex-wrap lg:w-[1220px] w-full overflow-auto lg:gap-7 lg:px-[auto]">
                    {
                        inventory.map(accessory => {
                            console.log(accessory)
                            return (

                                <AccessoryCard
                                    title={accessory.name}
                                    image={accessory.image}
                                    price={accessory.price}
                                    key={accessory.id}
                                />


                            )
                        })
                    }
                </div>
            </div>
            <div className="hidden lg:flex justify-center">
                <div className='flex lg:w-[1205px] bg-nav_text rounded-lg justify-between lg:py-[24px] lg:px-[32px] font-mulish font-normal text-xl text-light_gray'>
                    <h3 className=''>6 items</h3>
                    <h3 className='font-semibold text-[22px]'>View order</h3>
                    <h3 className=''>N120,890.00</h3>
                </div>
            </div>
            <div className='flex justify-center lg:mt-4'>
                <div className='lg:w-[1120px] flex-col'>
                    <div className='flex flex-col lg:flex-row lg:gap-[33px]'>
                        <div className='bg-gray_background rounded-[7px] pt-[33px] pb-4 px-6 lg:px-0 flex flex-col items-center mx-7 lg:mx-0'>
                            <div className='lg:mb-[33px] lg:w-[170px] lg:h-[170px]'>
                                <img src={theft} alt='theft' />
                            </div>
                            <h2 className='mb-[17px] font-medium text-[22px] text-[#0B0B0B]'>Theft Alerts</h2>
                            <p className='lg:w-[316px] text-center font-normal text-base text-[#292929]'>The value of your bike should remain just what you paid for it. That's why there's no depreciation and no excess in the plan.</p>
                        </div>
                        <div className='flex w-full lg:hidden rounded-lg justify-between bg-nav_text py-4 px-[30px] font-mulish font-semibold text-base text-light_gray'>
                            <h3 className=''>6 items</h3>
                            <h3 className='font-normal'>View order</h3>
                            <h3 className='font-bold'>N120,890.00</h3>
                        </div>
                        <div className='bg-gray_background rounded-[7px] pt-[33px] pb-4 px-6 lg:px-0 flex flex-col items-center mx-7 lg:mx-0'>
                            <div className='lg:mb-[33px] lg:w-[170px] lg:h-[170px]'>
                                <img src={bike} alt='bike' />
                            </div>
                            <h2 className='mb-[17px] font-medium text-[22px] text-[#0B0B0B]'>Full bike value</h2>
                            <p className='lg:w-[316px] text-center font-normal text-base text-[#292929]'>The value of your bike should remain just what you paid for it. That's why there's no depreciation and no excess in the plan.</p>
                        </div>
                        <div className='flex flex-col p-6 card rounded-2xl mx-7 mt-2 lg:mt-0'>
                            <h3 className='mb-5 font-semibold text-base text-black'>Insurance package</h3>
                            <div className='flex lg:gap-[90px] rounded-2xl card p-4 lg:pt-[19px] mb-4 justify-between'>
                                <div className='flex flex-col'>
                                    <h3 className='mb-[3px] font-semibold'>120,000</h3>
                                    <h3 className='font-normal'>Billed montly</h3>
                                </div>
                                <div className='flex items-center'>
                                    <div className='items-center flex w-[35px] h-[35px]'>
                                        <img src={ellipse} alt='ellipse' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex lg:gap-[90px] rounded-2xl card p-4 lg:pt-[19px] justify-between'>
                                <div className='flex flex-col'>
                                    <h3 className='mb-[3px] font-semibold'>120,000</h3>
                                    <h3>Billed montly</h3>
                                </div>
                                <div className='flex items-center'>
                                    <button className='bg-red text-white text-[9px] leading-[15px] py-[3px] px-[11px] rounded-[18px]'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[1220px] flex-col lg:mt-[100px] mx-7 '>
                        <h3 className='font-medium text-base text-nav_text'>Maintanance</h3>
                        <div className='flex lg:gap-[50px] flex-col lg:flex-row'>
                            <div className='bg-gray_background rounded-[7px] pt-[33px] pb-4 px-6 lg:px-0 flex flex-col items-center lg:mx-0'>
                                <div className='lg:mb-[33px] lg:w-[170px] lg:h-[170px]'>
                                    <img src={assist} alt='assist' />
                                </div>
                                <h2 className='mb-[17px] font-medium text-[22px] text-[#0B0B0B]'>24/7 assistance</h2>
                                <p className='lg:w-[316px] text-center font-normal text-base text-[#292929]'>The value of your bike should remain just what you paid for it. That's why there's no depreciation and no excess in the plan.</p>
                            </div>
                            <div className='flex items-center h-full mt-8 lg:mt-0'>
                                <div className='flex flex-col item p-6 card rounded-2xl h-fit'>
                                    <h3 className='mb-5 font-semibold text-base text-black'>Maintanance package</h3>
                                    <div className='flex lg:gap-[90px] rounded-2xl card p-4 lg:pt-[19px] justify-between'>
                                        <div className='flex flex-col'>
                                            <h3 className='mb-[3px] font-semibold'>120,000</h3>
                                            <h3>Billed montly</h3>
                                        </div>
                                        <div className='flex items-center'>
                                            <button className='bg-red text-white text-[9px] leading-[15px] py-[3px] px-[11px] rounded-[18px]'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </Section>
    )
}

const Section = styled.section`
    .card{
        box-shadow: 0px 0px 0.795967px rgba(12, 26, 75, 0.24), 0px 2.3879px 6.36774px -0.795967px rgba(50, 50, 71, 0.05);
    }

    .accessories{
        background: rgba(255, 69, 33, 0.12);
        box-shadow: 0px 0.948611px 1.89722px rgba(105, 81, 255, 0.05);
    }
`
export default PreOrder