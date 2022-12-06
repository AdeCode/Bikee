import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../../images/home/Logo.png'

function NewFooter() {
  return (
    <Section>
       <footer className='lg:pt-[70px] py-11 lg:pb-[102px] bg-[#0F0000]'>
            <div className='flex justify-center lg:flex-col items-center lg:mb-9 mb-12'>
                <img src={Logo} alt="bikee" />
            </div>
            <div className='flex flex-col lg:items-center text-lg'>
                <ul className='font-medium text-light_blue flex lg:w-full flex-col lg:flex-row 
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
                </ul>
            </div>
            <hr className=''/>
            <p className='text-secondary_text text-center font-medium text-sm pt-[30px]'>© 2022 Bikee. All rights reserved.</p>
        </footer> 
    </Section>
  )
}

const Section = styled.section`
    footer{
        p{
            border-top: 0.948611px solid #EEF0F3;
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