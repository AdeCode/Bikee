import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../images/home/Logo.png'
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
    let iconStyles = { color: "#556987", fontSize: "2.0em" };
  return (
    <Section>
         {/* <div className='flex flex-col items-center px-[30px] lg:px-0 lg:flex-row news pt-4 pb-11 lg:py-[83px] lg:gap-[165px] lg:justify-center bg-dark_blue'>
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
        </div> */}
       <footer className='lg:pt-[70px] py-11 lg:pb-[102px]'>
            <div className='flex justify-center lg:flex-col items-center lg:mb-9 mb-12'>
                <img src={Logo} alt="bikee" />
            </div>
            <div className='flex flex-col lg:items-center text-lg'>
                <ul className='font-medium text-light_blue flex lg:w-full flex-col lg:flex-row lg:gap-[45.5px] 
                    lg:mb-16 px-8 mb-12 text-sm lg:text-[19px] lg:px-[300px]'>
                    <div className='flex w-full mb-3'>
                        <li>
                            <a href='/'>Product</a>
                        </li>
                        <li>
                            <a href='/'>Solutions</a>
                        </li>
                        <li>
                            <a href='/'>E-bike</a>
                        </li>
                    </div>
                    <div className='flex w-full'>
                        <li>
                            <a href='/'>Request demo</a>
                        </li>
                        <li>
                            <a href='/' className='text-start'>Help</a>
                        </li>
                        <li>
                            <a href='/privacy-policy'>Privacy policy</a>
                        </li>
                    </div> 
                </ul>
            </div>
            {/* <hr className=''/> */}
            <div className='flex justify-center lg:gap-16 gap-4 social pt-[30px]'>
                <a href='https://www.facebook.com/hellobikee/' target='_blank' rel="noreferrer">
                    <MdOutlineFacebook
                        style={iconStyles}
                    />
                </a>
                <a href='https://www.instagram.com/hellobikee/' target='_blank' rel="noreferrer">
                    <FaInstagram
                        style={iconStyles}
                    />
                </a>
                <a href='https://www.twitter.com/hellobikee/' target='_blank' rel="noreferrer">
                    <FaTwitter                         
                        style={iconStyles}
                    />
                </a>
            </div>
            <p className='text-secondary_text text-center font-medium text-sm pt-[10px]'>© 2022 Motion Mobility Limited. All rights reserved.</p>
        </footer> 
    </Section>
  )
}

const Section = styled.section`
    footer{
        .social{
            border-top: 0.948611px solid #EEF0F3;
        }
        li{
            width: calc(100%/3);
        }
        
    }
`

export default Footer