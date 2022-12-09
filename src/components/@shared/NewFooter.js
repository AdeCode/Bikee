import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../../images/home/Logo.png'
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function NewFooter() {
    let iconStyles = { color: "#556987", fontSize: "2.0em" };

  return (
    <Section>
       <footer className='lg:pt-[70px] py-11 lg:pb-[102px] bg-[#0F0000]'>
            <div className='flex justify-center lg:flex-col items-center lg:mb-9 mb-12'>
                <img src={Logo} alt="bikee" />
            </div>
            <div className='flex flex-col lg:items-center text-lg'>
                {/* <ul className='font-medium text-light_blue flex lg:w-full flex-col lg:flex-row 
                    lg:mb-16 px-8 mb-12 text-sm lg:text-[19px] lg:px-[200px]'>
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
                        <li className='text-center'>
                            <a href='/'>Request demo</a>
                        </li>
                        <li>
                            <a href='/'>Help</a>
                        </li>
                        <li>
                            <a href='/'>Privacy</a>
                        </li>
                    </div> 
                </ul> */}
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
            <p className='text-secondary_text text-center font-medium text-sm pt-[10px]'>© 2022 Bikee. All rights reserved.</p>
        </footer> 
    </Section>
  )
}

const Section = styled.section`
    footer{
        .social{
            border-top: 0.8px solid #556987;
        }
        li{
            width: calc(100%/3);
        }
        hr{
            /* border: 1px solid #EEF0F3; */
            height: 1px;
            background: #EEF0F3;
        }
    }
`

export default NewFooter