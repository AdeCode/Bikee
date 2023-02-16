import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import Logo from '../images/home/Logo.png'
import menu from '../images/home/menu.png'
import close from '../images/nav/close.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './nav.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { AuthContext } from '../contexts/AuthContext'
import { BiUser } from "react-icons/bi";


function Nav() {
    const [mobileMenu, setMobileMenu] = useState(false)
    const [bg, setBg] = useState('')
    const [navText, setNavText] = useState('')
    const location = useLocation()
    const currLocation = location.pathname
    const navigate = useNavigate()
    // console.log(location.pathname)
    const { state: cartState, dispatch } = useContext(CartContext)

    const { state:user, dispatch:authDispatch } = useContext(AuthContext)
    user&&console.log(user)


    cartState && console.log(cartState)


    const navBg = () => {
        if(currLocation.includes('/restaurant') || currLocation.includes('/sme') || currLocation.includes('/pre') || currLocation.includes('/checkout') || currLocation.includes('/order-summary') ){
            setBg('lg:bg-white')
            setNavText('nav_text')
        }else{
            setBg('lg:bg-dark_text')
            setNavText('text-white')
        }
    }

    useEffect(() => {
      navBg()
    }, [currLocation])
    

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        // setActive(!active)
        console.log(mobileMenu)
    }

    const closeMenu = () => {
        setMobileMenu(false)
    }

    const logout = () => {
        authDispatch({type:'LOGOUT'})
        // navigate('/signin')
    }

    return (
        <Navbar className='z-50 w-full lg:mb-[50px] fixed'>
            <nav className={`lg:h-[90px] lg:px-[100px] px-[25px] pt-[25px] lg:pt-0 flex justify-between items-center ${bg} opacity-1 font-poppings lg:${navText} nav-menu z-30`}>
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
                            Home
                        </Link>
                    </li>
                    <li className='mb-9 lg:mb-0'>
                        <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold lg:m-0 lg:p-0'>
                            Solutions
                            <MdOutlineKeyboardArrowRight className='lg:hidden' />
                        </span>
                        <ul className='sub-menu absolute z-[1] lg:flex-col min-w-[200px] bg-white hover:text-red text-sub_menu_text py-3 px-6 h-fit top-14'>
                            <li className='lg:text-sm'><span className='hover:text-red'>
                                <Link to='/restaurant'>QSRs (Quality Service Restaurants)</Link>
                                </span>
                            </li>
                            <li className='lg:text-sm hover:text-red'>
                                <Link to='/bike-sharing'>E-Bike Ride Sharing</Link> 
                            </li>
                            {/* <li className='lg:text-sm hover:text-red'>SMEs - <span className='text-red'> coming soon</span></li>
                            <li className='lg:text-sm hover:text-red'>Retailers - <span className='text-red'> coming soon</span></li> */}
                        </ul>
                    </li>
                    <li className='mb-9 lg:mb-0'>
                        <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold lg:m-0 lg:p-0'>
                            Products
                            <h3 className='flex new font-normal text-sm py-1 px-3 rounded-2xl lg:hidden'>New</h3>
                            <MdOutlineKeyboardArrowRight className='lg:hidden' />
                        </span>
                        <ul className='sub-menu absolute z-[1] lg:flex-col min-w-[200px] bg-white hover:text-red text-sub_menu_text py-3 px-6 h-fit top-14'>
                            <li className='lg:text-sm hover:text-red'>First & Last Mile</li>
                            <li className='lg:text-sm hover:text-red'>APIs</li>
                            <li className='lg:text-sm hover:text-red'>Rider App</li>
                            <li className='lg:text-sm hover:text-red'>Banking-as-a-Service</li>
                        </ul>
                    </li>
                    <li className='mb-9 lg:mb-0'>
                        {/* <Link to='/pre-order'>
                            E-bikes
                        </Link> */}
                        <span className='menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold lg:m-0 lg:p-0'>
                            E-bikes
                            <MdOutlineKeyboardArrowRight className='lg:hidden' />
                        </span>
                        <ul className='sub-menu absolute z-[1] lg:flex-col min-w-[200px] bg-white hover:text-red text-sub_menu_text py-3 px-6 h-fit top-14'>
                            {/* <li className='lg:text-sm hover:text-red'>Businesses</li>
                            <li className='lg:text-sm hover:text-red'>Gig Workers</li> */}
                            <li className='lg:text-sm hover:text-red'>
                                <Link to='/pre-order'>Pre-Order</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                { (cartState.length > 0 || user.isAuthenticated) && 
                    
                    <ul className="flex gap-5">
                        {
                            user.isAuthenticated && 
                            <li className={`flex gap-2 items-center font-normal text-sm text-[#333F51] cursor-pointer lg:${navText}`}>
                                <BiUser/>Account
                                <ul className='sub-menu absolute z-[1] lg:flex-col min-w-[200px] bg-white hover:text-red text-sub_menu_text py-3 px-6 h-fit top-14'>
                                    <li className={`lg:text-sm lg:${navText} hover:text-red`}>
                                        <Link to='/profile'>
                                            Profile
                                        </Link>
                                    </li>
                                    <li className={`lg:text-sm lg:${navText} hover:text-red`} onClick={logout}>
                                        Logout
                                    </li>
                                </ul>
                            </li>
                        }
                        {cartState.length > 0 &&
                            <li className='relative'>
                                <Link to='/checkout' className='flex items-center'>
                                    🛒 
                                    <span className='lg:absolute text-white lg:top-[-15px] lg:left-3 bg-[#FF0000] rounded-[50%] font-medium text-xs h-5 w-5 flex justify-center items-center'>{cartState.length}</span> 
                                    <h3 className={`text-sm text-[#333F51] lg:${navText} font-normal`}>Shopping</h3>
                                </Link>
                            </li>
                        }
                    </ul>
                }
                
                {
                    !user.isAuthenticated &&
                    <div className='lg:flex hidden items-center lg:gap-6 font-medium'>
                        <div className='mb-9 lg:mb-0'>
                            <Link to='/signin' className={`menu flex items-center gap-[3px] lg:gap-[6px] cursor-pointer font-semibold lg:m-0 lg:p-0`}>
                                Login
                            </Link>
                            <ul className='sub-menu absolute z-[1] lg:flex-col min-w-[200px] bg-white hover:text-red text-sub_menu_text py-3 px-6 h-fit top-14'>
                                <li className='lg:text-sm hover:text-red'>Last-mile</li>
                                <li className='lg:text-sm hover:text-red'>APIs</li>
                                <li className='lg:text-sm hover:text-red'>Rider App</li>
                            </ul>
                        </div>
                        {/* <Link to='/signup' className='bg-red py-2 px-4 text-sm rounded-md'>
                            Sign up
                        </Link> */}
                    </div>
                }
                
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