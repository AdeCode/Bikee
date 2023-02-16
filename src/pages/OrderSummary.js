import React from 'react'
import styled from 'styled-components'
import SummaryOrder from '../components/@shared/SummaryOrder'
import { useLocation,Link } from 'react-router-dom';
import SubMenu from '../components/@shared/SubMenu';

function OrderSummary() {
    const location = useLocation()
    console.log(location.state.deliveryType)
    const {pathname} = location
    console.log(pathname)

  return (
    <Container className='lg:pt-[100px]'>
        {/* <SubMenu/> */}
        {/* <div className='lg:pt-[10px] lg:pb-[22px] lg:pl-[140px] hidden lg:flex'>
            <ul className='flex lg:gap-11 font-normal text-[13px] lg:leading-[22px] text-nav_text'>
                <li className=''>E-bike</li>
                <li className=''>Accessories </li>
                <li className=''>Maintanance and Insuransce</li>
            </ul>
        </div> */}
        <div className='lg:hidden flex pt-[100px]'>
            <ul className='flex justify-between w-full'>
                <li>
                    <Link to={`${pathname}/shipping-address`}>Shipping address</Link>
                </li>
                <li className=''>
                        <Link to={`${pathname}/payment`}>Payment</Link>
                    </li>
                    <li className=''>
                        <Link to={`${pathname}/summary`}>Summary</Link>
                    </li>
            </ul>
        </div>
        <div className='lg:flex flex-col lg:flex-row justify-center gap-[100px] px-7 lg:px-0'>
            <div className='flex flex-col font-mulish'>
                <h2 className='font-bold text-[#030919] text-[28px] lg:leading-[35px] mb-[29px]'>Checkout</h2>
                {
                    location.state.deliveryType === "doorstep" ? 
                    <>
                        <p className='font-bold text-base mb-[39px]'>Shipping address</p>
                        <div className=''>
                            <form className='flex flex-col'>
                                <div className='form-group lg:w-[465px] lg:mb-[39px] mb-[18px]'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Email address</h2>
                                    <input type='text' name='address' placeholder='' className='h-[46px] border w-full'/>
                                </div>
                                <div className='form-group lg:w-[465px] lg:mb-[39px]'>
                                    <h2 className='lg:font-normal font-bold text-base text-[#030919] lg:leading-[19px] mb-2'>Contact information</h2>
                                    <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px] w-full'>
                                        <div className='flex flex-col lg:w-[50%] w-full'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>First name</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full'/>
                                        </div>
                                        <div className='flex flex-col lg:w-[50%] w-full'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Last name</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full'/>
                                        </div>
                                    </div>
                                    <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                        <div className='flex flex-col lg:w-[50%]'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Company name (optional)</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full'/>
                                        </div>
                                        <div className='flex flex-col lg:w-[50%]'>
                                            <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Item quantity</h2>
                                            <input type='text' name='address' placeholder='' className='h-[46px] border w-full'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-group lg:w-[465px] lg:mb-[21px] mb-[18px]'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Street address</h2>
                                    <input type='text' name='address' placeholder='' className='h-[46px] border w-full'/>
                                </div>
                                <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-[18px] lg:mb-[21px] mb-[18px]'>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>State</h2>
                                        <input type='text' name='state' placeholder='' className='h-[46px] border w-full'/>
                                    </div>
                                    <div className='flex flex-col lg:w-[50%]'>
                                        <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>City</h2>
                                        <input type='text' name='city' placeholder='' className='h-[46px] border w-full'/>
                                    </div>
                                </div>
                                <div className='form-group lg:w-[465px] lg:mb-[50px] mb-8'>
                                    <h2 className='font-semibold lg:text-[15px] text-sm text-[#030919] lg:leading-[19px] mb-2'>Phone number</h2>
                                    <input type='number' name='phoneNumber' placeholder='' className='h-[46px] border w-full'/>
                                </div>
                                <button className='lg:w-full font-bold text-btn_text bg-red text-base py-[14px] rounded-[4px]'>Save</button>
                            </form>
                        </div>
                    </>
                    :
                    null
                }
                
            </div>
            <div>
                <SummaryOrder/>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.section`
    input{
        border: 0.871267px solid #EEF0F2
    }
`

export default OrderSummary