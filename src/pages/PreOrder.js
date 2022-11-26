import React from 'react'
import styled from 'styled-components'

function PreOrder() {
  return (
    <Section>
        <div className='bg-rider bg-cover bg-center'>
            <div className='lg:py-[161px] lg:px-[130px] text-white font-mulish'>
                <h2 className='lg:mb-[15px] lg:font-semibold lg:text-[53px] lg:leading-[67px]'>Ride all classy</h2>
                <h1 className='lg:mb-[15px] lg:font-bold lg:text-[54px] lg:leading-[67px]'>With HELLOBIKEE!</h1>
                <p className='lg:mb-[56px] font-medium lg:text-lg'>Introducing the safest electronic bike</p>
                <button className='border-2 border-white py-[6px] px-3'>PRE-ORDER NOW</button>
            </div>
            
        </div>
    </Section>
  )
}

const Section = styled.section`

`
export default PreOrder