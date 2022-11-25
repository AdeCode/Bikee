import React, {useState} from 'react'
import styled from 'styled-components'
import order from '../images/home/order.png'
import handbook from '../images/home/handbook.png'
import jiggle from '../images/home/jiggle.png'
import symtric from '../images/home/symtric.png'
import wishelp from '../images/home/wishelp.png'
import resecurb from '../images/home/resecurb.png'
import welytics from '../images/home/welytics.png'
import bikeeBG from '../images/home/bikeeBG.png'
import redC from '../images/home/redC.png'
import blueC from '../images/home/blueC.png'
import blackC from '../images/home/blackC.png'
import Checkbox from '../images/home/Checkbox.png'
import lapDesk from '../images/home/lap-desk.png'
import lapMob from '../images/home/lap-mobile.png'
import iot from '../images/home/iot.png'
import cargo from '../images/home/cargo.png'
import batteries from '../images/home/batteries.png'
import speed from '../images/home/speed.png'
import lock from '../images/home/lock.png'
import payload from '../images/home/payload.png'
import Hero from '../images/home/Hero-full.png'
import arrow from '../images/home/arrow.png'
import up from '../images/home/up.png'
import down from '../images/home/down.png'
import macMobile from '../images/home/mac-mobile.png'
import mjiggle from '../images/home/Mjiggle.png'
import mresecurb from '../images/home/Mresecurb.png'
import Msymtric from '../images/home/Msymtric.png'
import Mwelytics from '../images/home/Mwelytics.png'
import Mwishelp from '../images/home/Mwishelp.png'

function TopSection() {
    const [open, setOpen] = useState(true)
    const [selectedId, setSelectedId] = useState(1)
    const [FAQ, setFAQ] = useState([
        {
            id:0,
            title:'How long does it take to delivery an order?',
            content:'Orders are usually picked up by riders upon confirmation that it ready ',
            open:true
        },
        {
            id:1,
            title:'What payment methods do you accept?',
            content:'2 Orders are usually picked up by riders upon confirmation that it ready ',
            open:false
        },
        {
            id:2,
            title:'Whats the payments disbursemnet plan',
            content:'3 Orders are usually picked up by riders upon confirmation that it ready ',
            open:false
        },
        {
            id:3,
            title:'Whats the payments disbursemnet plan?',
            content:'Orders are usually picked up by riders upon confirmation that it ready ',
            open:false
        },
        {
            id:4,
            title:'When will a customer order be notified ',
            content:'Orders are usually picked up by riders upon confirmation that it ready ',
            open:false
        }
    ])

    const toggle = id => {
        setSelectedId(id)
        let selected = FAQ.filter(question => question.id === id)
        // let update = {...selected, open: open ? 'yes' : 'no' }
        let val = selected.open
        let updatedVal = val ? false : true
        // setFAQ({...FAQ, selected.open : !selected.open})
        console.log(setFAQ[id])
    }

  return (
    <Section className='flex flex-col'>
        {/* <div className='text-white bg-no-repeat bg-center z-[-1]'>
            <div className='flex flex-col items-center w-full banner bg-dark_text pt-[127px] lg:pt-0 lg:pb-[50px] opacity-[0.9] h-[100vh] lg:h-[fit] z-[-1]'>
                <h1 className='lg:font-bold font-semibold lg:text-6xl text-[28px] lg:leading-[72px] lg:w-[1156px] text-center lg:mb-[21px] mb-[18px] lg:mt-[150px]'>BIKEE Smart Eco-friendly Last-Mile Electric Delivery Service.</h1>
                <p className='font-medium text-xl mb-8 lg:mb-[65px]'>The future of mobility is electric.</p>
                <div className='px-6 lg:mx-0 w-full lg:flex lg:justify-center'>
                    <button className='bg-red lg:w-fit w-full font-medium text-lg text-btn_text 
                    px-[89px] lg:py-[14px] lg:px-7 py-[9px] rounded-md'>Request a Demo</button>
                </div>
                <div className='text-white flex lg:mt-[120px] mt-8 justify-start lg:w-full gap-7 lg:gap-[38px] lg:pl-[350px]'>
                    <div className='flex flex-col lg:gap-[10px] font-normal'>
                        <h4 className='text-sm'>Bike Speed</h4>
                        <p className='text-lg'>40KM/h</p>
                    </div>
                    <div className='flex flex-col lg:gap-[10px] font-normal'>
                        <h4 className='text-sm'>Bike Range</h4>
                        <p className='text-lg'>90KM</p>
                    </div>
                </div>
                <video src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                    autoPlay="{true}" loop muted
                    className="absolute z-10 w-auto lg:w-[100vw] lg:h-[100vh]">
                </video>
            </div>
        </div> */}
        <div className='h-[100vh] w-full'>
            <video src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
                autoPlay loop muted
                className="absolute z-10 w-full object-cover h-[100vh]">
            </video>
            <div className='flex flex-col absolute justify-center items-center text-white w-full h-[100vh] z-10'>
                <h1 className='lg:font-bold font-semibold lg:text-6xl text-[28px] lg:leading-[72px] lg:w-[1156px] text-center lg:mb-[21px] mb-[18px] lg:mt-[150px]'>BIKEE Smart Eco-friendly Last-Mile Electric Delivery Service.</h1>
                <p className='font-medium text-xl mb-8 lg:mb-[65px]'>The future of mobility is electric.</p>
                <div className='px-6 lg:mx-0 w-full lg:flex lg:justify-center'>
                    <button className='bg-red lg:w-fit w-full font-medium text-lg text-btn_text 
                    px-[89px] lg:py-[14px] lg:px-7 py-[9px] rounded-md'>Request a Demo</button>
                </div>
                <div className='text-white flex lg:mt-[120px] mt-8 justify-start lg:w-full gap-7 lg:gap-[38px] lg:pl-[350px]'>
                    <div className='flex flex-col lg:gap-[10px] font-normal'>
                        <h4 className='text-sm'>Bike Speed</h4>
                        <p className='text-lg'>40KM/h</p>
                    </div>
                    <div className='flex flex-col lg:gap-[10px] font-normal'>
                        <h4 className='text-sm'>Bike Range</h4>
                        <p className='text-lg'>90KM</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full flex lg:justify-center lg:pt-[113px] py-6 lg:pb-[113px] order'>
            <div className='flex px-[30px] lg:px-0 flex-col lg:flex-row lg:gap-[123px]'>
                <div className=''>
                    <img src={handbook} alt='order' className='hidden lg:block'/>
                    <img src={order} alt='order' className='lg:hidden'/>
                </div>
                <div className='flex items-center mt-[41px] lg:mt-0'>
                    <div className='flex flex-col'>
                        <span className='odm text-red font-medium text-xs py-[1.4px] px-[7.6px] w-fit mb-[15px]'>ODM</span>
                        <h1 className='text-dark_text font-bold text-2xl lg:text-[45px] leading-[36px] lg:leading-[57px] 
                        w-[271px] lg:w-[464px] mb-[14px] lg:mb-[30px]'>Order Delivery Mangement System & Delivery App.</h1>
                        <p className='font-medium text-sm  lg:text-lg text-light_blue w-full lg:w-[433px] mb-[24px]'>
                            We currently fulfil last mile deliveries for groceries, medicines, food, e-commerce packages from point A to point B through our fully automated IoT delivery e-bikes.</p>
                        <button className='bg-red text-btn_text text-base lg:w-fit lg:py-[10px] py-[11px] lg:px-[17px] rounded-md'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center bg-white pt-5 pb-9 lg:pt-[83px] lg:pb-[83px] px-[50px] lg:px-0'>
            <h4 className='text-gray font-medium text-xs lg:text-base mb-[30px]'> Trusted by the top restaurants in Africa</h4>
            <div className='lg:flex hidden flex-wrap lg:gap-[61.5px]'>
                <img src={jiggle} alt='jiggle'/>
                <img src={symtric} alt='symtric'/>
                <img src={wishelp} alt='wishelp'/>
                <img src={resecurb} alt='resecurb'/>
                <img src={welytics} alt='welytics'/>
            </div>
            <div className='flex lg:hidden flex-wrap gap-6 lg:gap-[61.5px]'>
                <img src={mjiggle} alt='jiggle'/>
                <img src={Msymtric} alt='symtric'/>
                <img src={Mwishelp} alt='wishelp'/>
                <img src={mresecurb} alt='resecurb'/>
                <img src={Mwelytics} alt='welytics'/>
            </div>

        </div>
        <div className='w-full flex lg:justify-center lg:pt-[113px] lg:pb-[113px] pb-6 order'>
            <div className='flex px-[30px] lg:px-0 flex-col lg:flex-row-reverse lg:gap-[123px]'>
                <div className=''>
                    <img src={handbook} alt='order' className='hidden lg:block'/>
                    <img src={order} alt='order' className='lg:hidden'/>
                </div>
                <div className='flex items-center mt-[41px] lg:mt-0'>
                    <div className='flex flex-col'>
                        <span className='odm text-red font-medium text-xs py-[1.4px] px-[7.6px] w-fit mb-[15px]'>eMaaS</span>
                        <h1 className='text-dark_text font-bold text-2xl lg:text-[45px] leading-[36px] lg:leading-[57px] 
                        w-[271px] lg:w-[464px] mb-[14px] lg:mb-[30px]'>Nigeria’s First Tech Enabled EM-as-a-Service Platform.</h1>
                        <p className='font-medium text-sm  lg:text-lg text-light_blue w-full lg:w-[433px] mb-[24px]'>
                        We are building a full stack asset light, tech enabled Electric Mobility as a service (eMaaS), which makes last mile logistics sustainable and emission free.   </p>
                        <button className='bg-red text-btn_text text-base lg:w-fit lg:py-[10px] py-[11px] lg:px-[17px] rounded-md'>Sign up</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-bikeBg bg-no-repeat bg-cover'>
            <div className='bike pb-[173px] lg:pt-[112px] '>
                <h1 className='text-milk font-normal lg:text-[35px] leading-[53px] lg:tracking-[0.9em] flex justify-center lg:mb-3'>Say Hello</h1>
                <div className='flex justify-center'>
                    <img src={bikeeBG} alt='bikee large logo' width='359px'/>
                </div>
                <div className='flex lg:justify-center'>
                    <div className='w-[20%] hidden lg:flex'></div>
                    <div className='w-full lg:w-[80%] flex px-[30px] lg:px-0'>
                        <div className='w-[75%] lg:w-[60%] flex lg:justify-center'>
                            <div className='flex lg:gap-[141px] gap-11 lg:mt-20 mt-12'>
                                <div className='flex flex-col gap-[54px]'>
                                    <div className='flex flex-col gap-1'>
                                        <h5 className='speed font-bold text-sm'>SPEED</h5>
                                        <p className='text-white'>40KM/h</p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h5 className='speed font-bold text-sm'>TYPE</h5>
                                        <p className='text-white'>100% Electric</p>
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                        <h5 className='speed font-bold text-sm'>SPEED</h5>
                                        <p className='text-white'>40KM/h</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[54px]'>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <h5 className='speed font-bold text-sm'>BIKE RANGE</h5>
                                        <p className='text-white'>90KM</p>
                                    </div>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <h5 className='speed font-bold text-sm'>BATTERY RANGE</h5>
                                        <p className='text-white'>70/80km</p>
                                    </div>
                                    <div className='flex flex-col gap-1 items-end'>
                                        <h5 className='speed font-bold text-sm'>BIKE RANGE</h5>
                                        <p className='text-white'>90KM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:w-[20%] w-[25%] mt-12 lg:mt-0'>
                            <div className='flex justify-end'>
                                <div className='lg:float-right'>
                                    <h3 className='text-white font-medium text-[10px] lg:text-base leading-[15px] lg:leading-[11px] mb-[13.7px] lg:mb-[41px]'>Available colors</h3>
                                    <div className='flex flex-col gap-3.5 items-end'>
                                        <img src={redC} alt='red' width='31px' height='32.7px'/>
                                        <img src={blueC} alt='blue' width='31px' height='32.7px'/>
                                        <img src={blackC} alt='black' width='31px' height='32.7px'/>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>

        </div>
        <div className='flex save flex-col lg:flex-row lg:gap-[130px] justify-center mt-6 lg:mt-0 py-6 lg:py-[120px]'>
            <div className='flex justify-center lg:justify-start'>
                <img src={lapDesk} alt='laptop' className='hidden lg:flex lg:h-[395px]'/>
                <img src={lapMob} alt='laptop' className='lg:hidden'/>
            </div>
            <div className='flex flex-col px-[42px]'>
                <h2 className='lg:font-bold lg:w-[650px] text-2xl font-semibold lg:text-[46px] lg:leading-[57px] text-dark_text'>Goodbye to unsustainable  fuel prices & scarcity, Say HELLOBIKEE.</h2>
                <ul className='list-none lg:mt-[30px] mt-6 flex flex-col gap-6'>
                    <li className='flex gap-3 lg:mb-[14.6px]'>
                        <div className=''>
                            <img src={Checkbox} alt='checkbox'/> 
                        </div>
                        <span className='font-medium lg:text-lg text-base text-light_blue'>Save Petrol Cost</span>
                    </li>
                    <li className='flex gap-3 lg:mb-[14.6px]'>
                        <div className=''>
                            <img src={Checkbox} alt='checkbox'/> 
                        </div>                        
                        <span className='font-medium lg:text-lg text-light_blue text-base'>No more worries on fuel scarcity</span>
                    </li>
                    <li className='flex gap-3 lg:mb-[14.6px]'>
                        <div className=''>
                            <img src={Checkbox} alt='checkbox'/> 
                        </div> 
                        <span className='font-medium lg:text-lg text-light_blue text-base'>High Performance Swappable Battery</span>
                    </li>
                    <li className='flex gap-3 lg:mb-[14.6px]'>
                        <div className=''>
                            <img src={Checkbox} alt='checkbox'/> 
                        </div> 
                        <span className='font-medium lg:text-lg text-light_blue text-base'>24/7 Support</span>
                    </li>
                    <li className='flex gap-3 lg:mb-[14.6px]'>
                        <div className=''>
                            <img src={Checkbox} alt='checkbox'/> 
                        </div> 
                        <span className='font-medium lg:text-lg text-light_blue text-base'>90 - 100km Range</span>
                    </li>
                    <li className='flex gap-3 lg:mb-[14.6px]'>
                        <div className=''>
                            <img src={Checkbox} alt='checkbox'/> 
                        </div> 
                        <span className='font-medium lg:text-lg text-light_blue text-base'>Available delivery app</span>
                    </li>
                    <li className='flex gap-3 lg:mb-[14.6px]'>
                        <div className=''>
                            <img src={Checkbox} alt='checkbox'/> 
                        </div> 
                        <span className='font-medium lg:text-lg text-light_blue text-base'>8 Hour battery</span>
                    </li>
                </ul>
                <div className='flex flex-col lg:flex-row lg:gap-[11px] font-medium text-lg lg:mt-[35px] mt-6'>
                    <button className='text-btn lg:w-fit demo mb-5 lg:mb-0 bg-white font-medium text-lg py-[13px] px-[26px] rounded-md'>Request demo</button>
                    <button className='bg-red text-btn_text py-[13px] px-7 lg:w-fit rounded-md'>Sign up</button>
                </div>
                
            </div>
        </div>
        <div className='flex justify-center items-center flex-col bg-white lg:pt-[196px] lg:pb-[235px] px-6 lg:px-0 py-8'>
            <h3 className='text-btn_text bg-btn font-medium text-xs py-[1.4px] px-[7.6px] lg:w-fit 
                mb-[16.6px] rounded-[34px]'>FEATURES</h3>
            <h2 className='text-dark_text lg:font-bold text-[21px] text-center lg:text-4xl mb-[15px]'>Features of the smartest and most reliable electric bike.</h2>
            <p className='text-light_blue text-[13px] text-lg lg:w-[871px] text-center'>We are building a full stack asset light, tech enabled Electric Mobility as a service (eMaaS), 
                which makes last mile logistics sustainable and emission free.</p>
            <div className='flex flex-col lg:flex-row mt-[54px] lg:mt-[76px] gap-[60px] lg:gap-[82px] justify-center lg:mb-[60px]'>
                <div className='flex flex-col items-center lg:w-[390px]'>
                    <div className='lg:mb-7'>
                        <img src={batteries} alt='batteries'/>
                    </div>
                    <h2 className='text-[22px] font-semibold text-dark_text lg:leading-[30px] lg:mb-4'>Swappable batteries</h2>
                    <p className='font-medium text-base text-center text-light_blue lg:w-[279px]'>We are building a full stack asset light, tech enabled Electric Mobility as a service .</p>
                </div>
                <div className='flex flex-col items-center lg:w-[390px]'>
                    <div className='lg:mb-7'>
                        <img src={lock} alt='lock'/>
                    </div>
                    <h2 className='text-[22px] font-semibold text-dark_text lg:leading-[30px] lg:mb-4'>In-built light & smart lock</h2>
                    <p className='font-medium text-base text-center text-light_blue lg:w-[279px]'>We are building a full stack asset light, tech enabled Electric Mobility as a service .</p>
                </div>
                <div className='flex flex-col items-center lg:w-[390px]'>
                    <div className='lg:mb-7'>
                        <img src={speed} alt='speed'/>
                    </div>
                    <h2 className='text-[22px] font-semibold text-dark_text lg:leading-[30px] lg:mb-4'>Max speed 40 km/h</h2>
                    <p className='font-medium text-base text-center text-light_blue lg:w-[279px]'>We are building a full stack asset light, tech enabled Electric Mobility as a service .</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-[82px] justify-center'>
                <div className='flex flex-col items-center lg:w-[390px]'>
                    <div className='lg:mb-7'>
                        <img src={cargo} alt='cargo'/>
                    </div>
                    <h2 className='text-[22px] font-semibold text-dark_text lg:leading-[30px] lg:mb-4'>Cargo volume (standard)</h2>
                    <p className='font-medium text-base text-center text-light_blue lg:w-[279px]'>We are building a full stack asset light, tech enabled Electric Mobility as a service .</p>
                </div>
                <div className='flex flex-col items-center lg:w-[390px]'>
                    <div className='lg:mb-7'>
                        <img src={payload} alt='payload'/>
                    </div>
                    <h2 className='text-[22px] font-semibold text-dark_text lg:leading-[30px] lg:mb-4'>Payload (standard) 120 kg</h2>
                    <p className='font-medium text-base text-center text-light_blue lg:w-[279px]'>We are building a full stack asset light, tech enabled Electric Mobility as a service .</p>
                </div>
                <div className='flex flex-col items-center lg:w-[390px]'>
                    <div className='lg:mb-7'>
                        <img src={iot} alt='iot'/>
                    </div>
                    <h2 className='text-[22px] text-center font-semibold text-dark_text lg:leading-[30px] lg:mb-4'>Powerful motor, IoT & App control</h2>
                    <p className='font-medium text-base text-center text-light_blue lg:w-[279px]'>We are building a full stack asset light, tech enabled Electric Mobility as a service .</p>
                </div>
            </div>
        </div>
        <div className='bg-dark_text flex flex-col-reverse lg:flex-row justify-center pt-[29px] pb-[60px] lg:pt-[65px] lg:pb-[80px] lg:px-0 px-[26px]'>
            <div className='flex flex-col justify-center'>
                <h1 className='lg:font-bold font-semibold text-white text-2xl lg:text-[56px] mt-[51.3px] lg:mt-0 lg:leading-[68px] mb-[14px] lg:mb-[22px] w-[296px] lg:w-[486px]'>Lorem ipsum dolor sit amet. </h1>
                <p className='mb-[23px] font-medium lg:text-lg text-sm text-secondary_text lg:w-[486px]'>We are building a full stack asset light, tech enabled Electric Mobility as a service .</p>
                <button className='bg-red text-lg font-medium text-btn_text py-[13px] px-[27px] lg:w-fit rounded-md'>Request a Demo</button>
            </div>
            <div className='relative flex flex-col justify-center'>
                <img src={Hero} alt='hero' className='hidden lg:flex'/>
                <img src={macMobile} alt='hero' className='lg:hidden'/>
                <button className='btn lg:absolute lg:right-[40%] lg:bottom-[-5%] bg-dark_gray flex w-fit items-center gap-3 lg:py-[11.5px] px-[9.3px] py-[10px] lg:px-[15.2px]'>SIgn-up now<img src={arrow} alt="arrow"/></button>
            </div>

        </div>
        <div className='flex flex-col lg:flex-row lg:gap-[123px] lg:justify-center lg:py-[90px] px-[26px] lg:px-0 py-6'>
            <div className=''>
                <span className='font-medium text-red text-xs faq rounded-[34px] lg:py-[1.5px] px-2 mb-6'>FAQ</span>
                <h2 className='lg:w-[432px] font-semibold text-2xl lg:font-bold text-dark_blue lg:text-[46px] lg:leading-[57px] lg:mb-[17px]'>Frequently Asked Questions</h2>
                <p className='mb-[23px] font-medium text-lg text-secondary_text lg:w-[432px]'>BIKEE digitizes and optimizes your daily delivery operations for end-to-end visibility and control. </p>
            </div>
            <div className=''>
                <ul className='list-none lg:w-[500px]'>
                    {
                        FAQ.map(question => {
                            return (
                                <li className='lg:mb-[37px] mb-[18px]' key={question.id} onClick={()=>toggle(question.id)}>
                                    <h2 className='flex lg:justify-between lg:items-center font-semibold lg:font-bold text-base lg:text-lg text-dark_text mb-[9px] lg:mb-[14px]'>
                                        {question.title}
                                        <span className=''>
                                            {open ?
                                                <img src={down} alt='opened'/>
                                                :
                                                <img src={up} alt='closed'/>
                                            }
                                        </span>
                                    </h2>
                                    <p className='font-normal text-sm lg:text-base text-light_blue lg:w-[442px]'>{question.content}</p>
                                </li>
                            )
                        })
                    }
                    <li></li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col items-center px-[30px] lg:px-0 lg:flex-row news pt-4 pb-11 lg:py-[83px] lg:gap-[165px] lg:justify-center bg-dark_blue'>
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
        </div>
        
    </Section>
  )
}

const Section = styled.section`

.order{
    background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%);
}
.odm{
    background: rgba(255, 0, 0, 0.08);
    box-shadow: 0px 0.948611px 1.89722px rgba(105, 81, 255, 0.05);
    border-radius: 34.15px;
}
.bike{
    background: rgba(45, 43, 43, 0.71);
    /* opacity: 0.2; */
}
.speed{
    color: rgba(255, 255, 255, 0.4);
}
.save{
    background:radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%);
}
.demo{
    border: 0.948611px solid #D5DAE1;
    box-shadow: 0px 0.948611px 1.89722px rgba(105, 81, 255, 0.05);
}
.btn{
    border: 0.950249px solid #FAFAFA;
}
.news{
    /* background: radial-gradient(50% 50% at 50% 50%, rgba(42, 51, 66, 0) 0%, #2A3342 100%) */
}
.faq{
    background: rgba(255, 69, 33, 0.12);
    box-shadow: 0px 0.949091px 1.89818px rgba(105, 81, 255, 0.05);
}
`
export default TopSection