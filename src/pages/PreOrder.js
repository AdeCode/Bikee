import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import bikeYellow from '../images/preorder/bikeYellow.png'
import theft from '../images/preorder/theft.png'
import assist from '../images/preorder/assist.png'
import ellipse from '../images/preorder/Ellipse.png'
import bike from '../images/preorder/bike.png'
import arrow from '../images/preorder/right-arrow.png'
import redBike from '../images/preorder/redBike.png'
import AccessoryCard from '../components/@shared/AccessoryCard'
import inventory from '../components/@shared/inventory'

function PreOrder() {
    const [bikeColor, setBikeColor] = useState('')

    const bikeColorChange = (event) => {
        setBikeColor(event.target.value)
    }

    const changeBikeColor = (bikeColor) => {
        if(bikeColor === 'red'){
            return redBike
        }else if(bikeColor === 'yellow'){
            return bikeYellow
        }else{
            return bikeYellow
        }
    }

    return (
        <Section>
            <div className='lg:pt-[90px] lg:pb-[42px] lg:pl-[140px] hidden lg:flex'>
                <ul className='flex lg:gap-11 font-normal text-[13px] lg:leading-[22px] text-nav_text'>
                    <li className=''>E-bike</li>
                    <li className=''>Accessories </li>
                    <li className=''>Maintanance and Insuransce</li>
                </ul>
            </div>
            <div className='lg:bg-orderBg bg-mobileRider bg-cover bg-center lg:h-[70vh]'>
                <div className='lg:py-[161px] lg:px-[130px] text-white font-mulish px-8 flex items-center h-[477px]'>
                    <div className='h-fit'>
                        <h2 className='lg:mb-[15px] mt-[6px] font-semibold text-xl lg:text-[53px] lg:leading-[67px]'>Ride all classy</h2>
                        <h1 className='lg:mb-[15px] mb-2 font-bold text-2xl lg:text-[54px] lg:leading-[67px]'>With BIKEE!</h1>
                        <p className='lg:mb-[56px] mb-9 font-medium text-sm lg:text-lg'>Introducing the safest and smartest pedal assist e-bike</p>
                        <button className='border-2 border-white py-[6px] font-semibold text-[15px] px-3 mb-7 lg:mb-0 flex items-center'>
                            PRE-ORDER NOW
                            <span className='ml-4'>
                                <img src={arrow} alt='right arrow'/>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:justify-center lg:flex-row font-mulish lg:py-24 bg-bg_brown lg:gap-[14px]'>
                <div className='flex flex-col lg:gap-6 px-[33px] lg:px-0'>
                    <h2 className='lg:font-bold font-semibold text-2xl text-black_text mb-2 lg:mb-0'>Bikee</h2>
                    <p className='lg:w-[296px] w-[231px] font-normal text-sm text-brown mb-4 lg:mb-0'>Uniquely designed for this environment.</p>
                    <h3 className='font-bold lg:text-lg text-base text-black_text mb-[17px] lg:mb-0'>N600,000.00</h3>
                    <button className='w-fit lg:font-semibold font-bold text-btn_text text-xs py-3 lg:py-[7px] px-[38px] bg-red lg:rounded-xl rounded-[10px]'>PRE-ORDER</button>
                    <div className='flex gap-[34px] lg:gap-4 lg:flex-col mb-10 lg:mb-0'>
                        <div className=''>
                            <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Optimized for</h4>
                            <p className='text-pre_brown font-normal text-sm'>150-185 cm tall</p>
                        </div>
                        <div className=''>
                            <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Max total weight</h4>
                            <p className='text-pre_brown font-normal text-sm'>42kg</p>
                        </div>
                    </div>
                    <div className='flex gap-[34px] lg:gap-4 lg:flex-col mb-10 lg:mb-0'>
                        <div className=''>
                            <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Weight</h4>
                            <p className='text-pre_brown font-normal text-sm'>36kg</p>
                        </div>
                        <div className=''>
                            <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Battery range</h4>
                            <p className='text-pre_brown font-normal text-sm'>500W</p>
                        </div>
                    </div>
                    <div className='flex gap-[34px] lg:gap-4 lg:flex-col mb-10 lg:mb-0'>
                        <div className=''>
                            <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Charging time </h4>
                            <p className='text-pre_brown font-normal text-sm'>4hrs</p>
                        </div>
                        <div className=''>
                            <h4 className='text-black_text font-bold text-base lg:mb-0 mb-2'>Assist speed</h4>
                            <p className='text-pre_brown font-normal text-sm'>40km/hr</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-[33px] mb-[50px] lg:mb-0'>
                    <div className='lg:w-[557px] lg:h-[490px] mt-4 lg:mt-0'>
                        <img src={changeBikeColor(bikeColor)} alt="bike" />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='flex lg:justify-end lg:mb-6 mb-4 font-medium text-[13px] text-[#3E3E3E] leading-3 lg:text-base'>Available colors</h3>
                        <div className='flex lg:justify-end gap-6'>
                            <input type='radio' name='bikeColor' 
                                checked={bikeColor === "red"}
                                onChange={bikeColorChange} value='red'
                                className="w-6 h-6 accent-red text-red"
                            />
                            <input type='radio' name='bikeColor' 
                                checked={bikeColor === "blue"}
                                onChange={bikeColorChange} value='blue'
                                className="w-6 h-6 accent-blue border-blue"
                            />
                            <input type='radio' name='bikeColor' 
                                checked={bikeColor === "yellow"}
                                onChange={bikeColorChange} value='yellow'
                                className="w-6 h-6 accent-yellow-500"
                            />
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
            <div className='flex flex-col items-center justify-center lg:pt-[57px] lg:pb-[67px]'>
                <div className='flex justify-start lg:w-[1220px] w-full px-2'>
                    <span className='text-red accessories pickup font-medium rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-4'>Accessories</span>
                </div>
                <div className="flex lg:flex-wrap lg:w-[1220px] w-full overflow-auto lg:gap-7 lg:px-[auto]">
                    {
                        inventory.map(accessory => {
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
                <div className='lg:w-[1200px] flex-col'>
                    <div className='flex flex-col lg:flex-row lg:gap-[33px]'>
                        <div className='bg-gray_background rounded-[7px] pt-[33px] pb-4 px-6 flex flex-col items-center mx-7 lg:mx-0'>
                            <div className='lg:mb-[33px] lg:w-[170px] lg:h-[170px]'>
                                <img src={theft} alt='theft' />
                            </div>
                            <h2 className='mb-[17px] font-medium text-[22px] text-[#0B0B0B]'>Theft Notification</h2>
                            <p className='lg:w-[316px] text-center font-normal text-base text-[#292929]'>Be alerted when someone attempts to take your e-bike. We'll send you real-time tracking notifications via the app or email.</p>
                        </div>
                        <div className='flex w-full lg:hidden rounded-lg justify-between bg-nav_text py-4 px-[30px] font-mulish font-semibold text-base text-light_gray'>
                            <h3 className=''>6 items</h3>
                            <h3 className='font-normal'>View order</h3>
                            <h3 className='font-bold'>N120,890.00</h3>
                        </div>
                        <div className='bg-gray_background rounded-[7px] pt-[33px] pb-4 px-6 flex flex-col items-center mx-7 lg:mx-0'>
                            <div className='lg:mb-[33px] lg:w-[170px] lg:h-[170px]'>
                                <img src={bike} alt='bike' />
                            </div>
                            <h2 className='mb-[17px] font-medium text-[22px] text-[#0B0B0B]'>Bike value</h2>
                            <p className='lg:w-[316px] text-center font-normal text-base text-[#292929]'>Your e-bike value should remain just what you paid for it. </p>
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
                    <div className='lg:w-[1200px] flex-col lg:mt-[100px] mx-7 lg:mx-0 mt-5'>
                        {/* <h3 className='font-medium text-base text-nav_text lg:mb-8 mb-4'>Maintanance</h3> */}
                        <span className='text-red accessories pickup font-medium rounded-[34px] text-xs py-[1.5px] px-[7.6px] w-fit mb-4 lg:mb-8'>Maintanance</span>
                        <div className='flex lg:gap-[50px] flex-col lg:flex-row'>
                            <div className='bg-gray_background rounded-[7px] pt-[33px] pb-4 px-6 flex flex-col items-center lg:mx-0'>
                                <div className='lg:mb-[33px] lg:w-[170px] lg:h-[170px]'>
                                    <img src={assist} alt='assist' />
                                </div>
                                <h2 className='mb-[17px] font-medium text-[22px] text-[#0B0B0B]'>Assistance</h2>
                                <p className='lg:w-[316px] text-center font-normal text-base text-[#292929]'>In case of weekly or monthly services, we'll always assist you any time.</p>
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

    input[type="radio"]:hover{
        transform: scale(1.2);
        
    }

    
    /* input[type="radio"]:checked{
        color: #1F9D55 !important;
        accent-color: red;
    } */

   
`
export default PreOrder