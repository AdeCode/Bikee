import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import Logo from '../images/home/Logo.png'
import Logo from '../../images/home/Logo.png'

import menu from '../../images/home/menu.png'
import close from '../../images/nav/close.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../nav.css'
import {Link, useLocation} from 'react-router-dom'


function NewNav() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [bg, setBg] = useState('')
    const [navText, setNavText] = useState('')
    const location = useLocation()
    const currLocation = location.pathname
    // console.log(location.pathname)

    

    useEffect(() => {
    }, [currLocation])
    

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        // setActive(!active)
        console.log(mobileMenu)
    }

    const closeMenu = () => {
        setMobileMenu(false)
    }

    return (
        <Navbar className='z-50 w-full'>
            <nav className={`lg:h-[90px] lg:px-[100px] px-[25px] pt-[35px] lg:pt-0 flex justify-between items-center opacity-1 font-poppings nav-menu z-30 lg:text-white absolute w-full`}>
                <div className='logo'>
                    {
                        !mobileMenu &&
                        <Link to='/' className=''>
                            <img src={Logo} alt='Bikee' />
                        </Link>
                    }
                </div>
                <ul className={`${mobileMenu ? 'mobile' : 'hidden'} lg:flex lg:flex-row lg:gap-[48px] z-10 font-medium text-base opacity-100 font-mulish lg:font-poppings`}>
                    <div className='flex justify-end lg:hidden my-4' onClick={() => setMobileMenu(false)}>
                        <img src={close} alt='close' />
                    </div>
                    <li className='mb-9 lg:mb-0'>
                        <Link to='/'>
                            About us
                        </Link>
                    </li>
                    <li className='mb-9 lg:mb-0'>
                        <Link to='/'>
                            Why Bikee
                        </Link>
                    </li>
                   
                    <li className='mb-9 lg:mb-0'>
                        <Link to='/pre-order'>
                            E-bikes
                        </Link>
                    </li>
                </ul>
                <div className='lg:flex hidden items-center lg:gap-6 font-medium text-white'>
                    <button className='bg-red py-2 px-4 text-sm rounded-xl'>Download App</button>
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
export default NewNav