import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../images/home/Logo.png'


function Footer() {
  return (
    <Section>
       <footer className='lg:pt-[70px] py-11 lg:pb-[102px]'>
            <div className='flex justify-center lg:flex-col items-center lg:mb-9'>
                <img src={Logo} alt="bikee" />
            </div>
            <div className='flex flex-col lg:items-center text-lg'>
                <ul className='font-medium text-light_blue flex lg:gap-[45.5px] lg:mb-16'>
                    <li>
                        <a href='/'>Product</a>
                    </li>
                    <li>
                        <a href='/'>Solutions</a>
                    </li>
                    <li>
                        <a href='/'>E-bike</a>
                    </li>
                    <li>
                        <a href='/'>Request demo</a>
                    </li>
                    <li>
                        <a href='/'>Help</a>
                    </li>
                    <li>
                        <a href='/'>Privacy</a>
                    </li>
                </ul>
                <p className='text-secondary_text text-center'>© 2022 Bikee. All rights reserved.</p>
            </div>
        </footer> 
    </Section>
  )
}

const Section = styled.section`

`

export default Footer