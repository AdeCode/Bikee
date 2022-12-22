import React from 'react'
import styled from 'styled-components'
import bike from '../images/auth/signBic.png'


function SignUp() {
  return (
    <Div className='flex justify-center bg-white'>
        <div className='lg:w-[768px] flex'>
            <div className='left flex flex-col'>
                <h2 className='text-dark_text'>Sign in to your account</h2>
                <p>Your last mile delivery platform</p>
            </div>
            <div className='right'>
                <img src={bike} alt='bike'/>
            </div>
        </div>
    </Div>
  )
}

const Div = styled.div`

`
export default SignUp