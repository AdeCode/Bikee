import React from 'react'
import styled from 'styled-components'
import signBic from '../../images/auth/signBic.png'
import Logo from '../../images/home/Logo.png'
import SignUpForm from '../../components/SignUpForm'

function SignUp() {
    return (
        <Container className='flex justify-center items-center bg-white h-[100vh]'>
            <div className='flex content lg:h-fit'>
                <div className='left flex items-center justify-center px-[100px] py-[66px]'>
                    <div className='lg:w-[356px] flex flex-col items-center'>
                        <img src={Logo} alt='logo' className='mb-[26px]'/>
                        <h2 className='text-dark_text font-bold text-[30px] mb-[10px]'>Create an account</h2>
                        <p className='text-[18px] text-secondary_text leading-[28px] mb-[22px]'>Your last mile delivery platform</p>
                        <div className='form w-full'>
                            <SignUpForm/>
                        </div>
                    </div>
                    
                    
                </div>
                <div className=''>
                    <img src={signBic} alt='bicycle'/>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`

    .content{
        background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%)
    }

    input{
        border: 1px solid #D5DAE1;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
    }
`
export default SignUp