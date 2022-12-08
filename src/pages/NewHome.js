import React from 'react'
import styled from 'styled-components'
import apple from '../images/landing/apple.png'
import play from '../images/landing/play.png'
import bikeSharing from '../images/landing/bikeSharing.png'
import bikeDelivery from '../images/landing/bikeDelivery.png'
import helmet from '../images/landing/helmet.png'
import man from '../images/landing/man.png'
import lady from '../images/landing/lady.png'
import screens from '../images/landing/screens.png'
import map from '../images/landing/map.png'
import bikee from '../images/landing/bikee-ride.mp4'
import lifestyleBike from '../images/landing/lifestyleBike.png'
import mobileDelivery from '../images/landing/mobileDelivery.png'

function NewHome() {
  return (
    <Container>
      <div className="text-white bg-center flex flex-col items-center h-[460px] lg:h-[100vh] relative overflow-hidden">
        <video src={bikee}
            autoPlay loop muted
            className="absolute z-10 w-full object-cover lg:h-[100vh] h-[70vh]">
        </video>
        <div className='flex flex-col relative bg-dark_text bg-opacity-60 items-center justify-center lg:h-[100vh] h-full z-10 w-full'>
          <h1 className='font-semibold lg:bold lg:text-6xl lg:leading-[72px] text-[28px] w-[300px] lg:w-[1026px] text-center mb-[21px]'>Making Your First & Last Mile Daily Mobility Electric</h1>
          {/* <div className='flex justify-center gap-[15px]'>
            <button className='flex lg:gap-[22px] gap-[13px] lg:py-[18px] py-1 lg:px-6 px-[14px] bg-red rounded-[4px] items-center'>
              <div className=''>
                <img src={apple} alt='apple'/>
              </div>
              <div className='flex flex-col items-start'>
                <h4 className='font-medium lg:text-sm text-[8px] font-poppings'>Download on the</h4>
                <h3 className='font-bold lg:text-xl text-xs'>App Store</h3>
              </div>
            </button>
            <button className='flex lg:gap-[22px] gap-[13px] lg:py-[18px] py-1 lg:px-6 px-[14px] bg-white rounded-[4px] items-center'>
              <div className=''>
                <img src={play} alt='Google play'/>
              </div>
              <div className='flex flex-col items-start'>
                <h4 className='font-medium text-[#7C8087] lg:text-sm text-[8px] font-poppings'>Get it on</h4>
                <h3 className='font-bold lg:text-xl text-xs text-black'>Google Play</h3>
              </div>
            </button>
          </div> */}
        </div>
      </div>
      <div className='flex flex-col items-center lg:mt-12 px-[25px] lg:px-0 pt-[26px] lg:pt-0'>
        <h2 className='text-red font-normal lg:text-2xl text-sm'>Our Fleet</h2>
        <p className='font-normal lg:text-[27px] text-xs lg:leading-[40px] mt-1 mb-[26px]'>Time to improve first & last mile mobility for good.</p>
        <div className='flex flex-col lg:flex-row lg:gap-[77px] gap-6 lg:mt-[90px]'>
          <div className='hidden lg:flex py-[57px] card px-[54px] flex-col bg-[#FFFCFC] rounded-lg lg:w-[420px]'>
            <div className=''>
              <img src={bikeSharing} alt='bike sharing'/>
            </div>
            <h3 className='font-normal text-2xl text-center'>Ride sharing e-bike</h3>
          </div>
          <div className='lg:hidden lg:py-[57px] py-[50px] card lg:px-[54px] px-3 flex h-[188px] lg:h-auto items-center flex-row lg:flex-col bg-[#FFFCFC] rounded-lg lg:w-[420px]'>
            <div className='mr-5 lg:mr-0'>
              <img src={lifestyleBike} alt='lifestyle bike'/>
            </div>
            <h3 className='font-normal lg:text-2xl text-sm lg:text-center lg:mt-[60px]'>E-Bike for lifestyle</h3>
          </div>
          <div className='lg:py-[57px] py-[50px] card lg:px-[54px] px-3 flex items-center h-[188px] lg:h-auto flex-row lg:flex-col lg:justify-between bg-[#FFFCFC] rounded-lg lg:w-[420px]'>
            <div className='mr-5 lg:mr-0 lg:mt-14'>
              <img src={bikeDelivery} alt='bike delivery'  className='hidden lg:flex'/>
              <img src={mobileDelivery} alt='bike sharing' className='lg:hidden'/>
            </div>
            <h3 className='font-normal lg:text-2xl text-sm lg:text-center lg:mt-[60px]'>E-Bike for deliveries</h3>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center lg:mt-12 bg-[#FFFCFC] lg:pt-10 pt-16 lg:pb-20 pb-10 px-[25px] lg:px-0'>
        <h2 className='text-red font-normal text-2xl'>The App</h2>
        <p className='font-normal lg:text-[27px] lg:leading-[40px] mt-1'>How to Bikee</p>
        <div className='flex flex-col lg:flex-row lg:gap-[22px] gap-4 lg:mt-[80px] mt-8'>
          <div className='flex flex-col bg-white rounded-lg how'>
            <div className=''>
              <img src={helmet} alt='driver with helmet'/>
            </div>
            <div className='py-7 px-4 lg:gap-7 flex justify-between'>
              <h3 className='font-medium text-base text-red'>Locate</h3>
              <h4 className='font-norml text-sm lg:w-[160px] w-[180px]'>Download the Bikee app find an e-bike nearby.</h4>
            </div>
          </div>
          <div className='flex flex-col bg-white rounded-lg how'>
            <div className=''>
              <img src={lady} alt='lady riding a bike'/>
            </div>
            <div className='py-7 px-4 lg:gap-7 flex justify-between'>
              <h3 className='font-medium text-base text-red'>Scan</h3>
              <h4 className='font-norml text-sm lg:w-[160px] w-[180px]'>Scan the QR code on the e-bike to unlock. Learn how to ride safely in the app.</h4>
            </div>
          </div>
          <div className='flex flex-col bg-white rounded-lg how'>
            <div className=''>
              <img src={man} alt='man riding a bike'/>
            </div>
            <div className='py-7 px-4 lg:gap-7 flex justify-between'>
              <h3 className='font-medium text-base text-red'>Ride</h3>
              <h4 className='font-norml text-sm lg:w-[160px] w-[180px]'>Follow all traffic rules, stick to the streets and far end lanes on main roads.</h4>
            </div>
          </div>
          
        </div>
      </div>
      <div className='bg-[#280101] lg:pt-[90px] pt-10 pb-20 lg:pb-[25px] flex flex-col lg:flex-row lg:justify-center lg:gap-20 px-[30px] lg:px-0'>
        <div className='mb-20 lg:mb-0'>
          <img src={screens} alt='mobile app screen'/>
        </div>
        <div className='flex flex-col items-center'>
          <div className='mb-10'>
            <img src={map} alt='map'/>
          </div>
          {/* <h2 className='font-medium text-3xl text-white lg:mt-[70px] lg:mb-6 mb-[18px]'>Download the App</h2>
          <div className='flex gap-4'>
            <button className='flex lg:gap-[22px] gap-[13px] lg:py-[18px] py-1 lg:px-6 px-[14px] bg-red rounded-[4px] items-center'>
              <div className=''>
                <img src={apple} alt='apple'/>
              </div>
              <div className='flex flex-col items-start'>
                <h4 className='font-medium lg:text-sm text-[8px] font-poppings'>Download on the</h4>
                <h3 className='font-bold lg:text-xl text-xs'>App Store</h3>
              </div>
            </button>
            <button className='flex lg:gap-[22px] gap-[13px] lg:py-[18px] py-1 lg:px-6 px-[14px] bg-white rounded-[4px] items-center'>
              <div className=''>
                <img src={play} alt='Google play'/>
              </div>
              <div className='flex flex-col items-start'>
                <h4 className='font-medium text-[#7C8087] lg:text-sm text-[8px] font-poppings'>Get it on</h4>
                <h3 className='font-bold lg:text-xl text-xs text-black'>Google Play</h3>
              </div>
            </button>
          </div> */}
        </div>
      </div>
    </Container>
  )
}

const Container = styled.section`
  .card{
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.12);
  }

  .how{
    box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.06);
  }

`
export default NewHome