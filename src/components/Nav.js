import React, {useState} from 'react'
import styled from 'styled-components'
import Logo from '../images/home/Logo.png'
import menu from '../images/home/menu.png'

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
        <nav className='lg:h-[90px] lg:px-[100px] px-[25px] pt-[35px] lg:pt-0 flex justify-between items-center bg-dark_text opacity-[0.9] font-poppings'>
            <div className='logo'>
                <img src={Logo} alt='Bikee'/>
            </div>
            <ul className={`${mobileMenu ? 'mobile' : 'hidden'} lg:flex lg:flex-row lg:gap-[48px] text-white font-medium text-base`}>
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
    .mobile{
        display: flex;
    }

`
export default Nav