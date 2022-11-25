import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../images/home/Logo.png'
import menu from '../images/home/menu.png'
import close from '../images/nav/close.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './nav.css'
import {Link} from 'react-router-dom'


function Nav() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        // setActive(!active)
        console.log(mobileMenu)
    }

    const closeMenu = () => {
        setMobileMenu(false)
    }

    return (
        <Navbar>
            <nav className='lg:h-[90px] lg:px-[100px] px-[25px] pt-[35px] lg:pt-0 flex justify-between items-center bg-dark_text opacity-[0.9] font-poppings lg:text-white nav-menu'>
                <div className='logo'>
                    {
                        !mobileMenu &&
                        <img src={Logo} alt='Bikee' />
                    }
                </div>
                <ul className={`${mobileMenu ? 'mobile' : 'hidden'} lg:flex lg:flex-row lg:gap-[48px] z-10 font-medium text-base opacity-100 font-mulish lg:font-poppings`}>
                    <div className='flex justify-end lg:hidden my-4' onClick={() => setMobileMenu(false)}>
                        <img src={close} alt='close' />
                    </div>
                    <li className='mb-9 lg:mb-0'>
                        Home
                    </li>
                    <li className='mb-9 lg:mb-0'>
                        <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold lg:m-0 lg:p-0'>
                            Solutions
                            <MdOutlineKeyboardArrowRight className='lg:hidden' />
                        </span>
                        <ul className='sub-menu absolute z-[1] lg:flex-col min-w-[200px] bg-white text-sub_menu_text py-3 px-6 h-fit top-14'>
                            <li className='lg:text-sm text-red'><span className='text-red'>
                                <Link to='/restaurant'>Restaurants</Link>
                                </span>
                            </li>
                            <li className='lg:text-sm'>QSRs - <span className='text-red'> coming soon</span></li>
                            <li className='lg:text-sm'>SMEs - <span className='text-red'> coming soon</span></li>
                            <li className='lg:text-sm'>Retailers - <span className='text-red'> coming soon</span></li>
                        </ul>
                    </li>
                    <li className='mb-9 lg:mb-0'>
                        <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold lg:m-0 lg:p-0'>
                            Products
                            <h3 className='flex new font-normal text-sm py-1 px-3 rounded-2xl lg:hidden'>New</h3>
                            <MdOutlineKeyboardArrowRight className='lg:hidden' />
                        </span>
                        <ul className='sub-menu absolute z-[1] lg:flex-col min-w-[200px] bg-white text-sub_menu_text py-3 px-6 h-fit top-14'>
                            <li className='lg:text-sm text-red'><span className='text-red'>Last-mile</span></li>
                            <li className='lg:text-sm'>APIs</li>
                            <li className='lg:text-sm'>Rider App</li>
                        </ul>
                    </li>
                    <li className='mb-9 lg:mb-0'>
                        E-bikes
                    </li>
                </ul>
                <div className='lg:flex hidden items-center lg:gap-6 font-medium text-white'>
                    <h2 className='text-base'>Login</h2>
                    <button className='bg-red py-2 px-4 text-sm rounded-md'>Sign up</button>
                </div>
                <button className='lg:hidden flex' onClick={toggleMobileMenu}>
                    <img src={menu} alt='menu' />
                </button>
            </nav>
        </Navbar>
    )
}

const Navbar = styled.div`
    /* .mobile{
        display: flex;
        position: absolute;
        left: 0;
        z-index: 10 !important;
        top: 5%;
        background: white;
        width: 100%;
        height: 100vh;
    } */

`
export default Nav