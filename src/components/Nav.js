import React from 'react'
import styled from 'styled-components'
import Logo from '../images/home/Logo.png'

function Nav() {
  return (
    <Navbar>
        <nav className='lg:h-[90px] lg:px-[100px] flex justify-between items-center bg-dark_text opacity-[0.9] font-poppings'>
            <div className='logo'>
                <img src={Logo} alt='Bikee'/>
            </div>
            <ul className='flex lg:flex-row lg:gap-[48px] text-white font-medium text-base'>
                <li className=''>
                    Home
                </li>
                <li className=''>
                    Solutions
                </li>
                <li>
                    Products
                </li>
                <li>
                    E-bikes
                </li>
            </ul>
            <div className='flex items-center lg:gap-6 font-medium text-white'>
                <h2 className='text-base'>Login</h2>
                <button className='bg-red py-2 px-4 text-sm rounded-md'>Sign up</button>
            </div>
        </nav>
    </Navbar>
  )
}

const Navbar = styled.div`

`
export default Nav