import React from 'react'
import styled from 'styled-components'
import signBic from '../images/auth/signBic.png'
import Logo from '../images/home/Logo.png'
import SigInForm from '../components/SignInForm'

function SignIn() {
    return (
        <Container className='flex justify-center items-center bg-white h-[100vh]'>
            <div className='lg:w-[768px] flex content lg:h-fit'>
                <div className='left flex items-center justify-center px-[50px] py-[126px]'>
                    <div className='lg:w-[356px] flex flex-col items-center'>
                        <img src={Logo} alt='logo' className='mb-[46px]'/>
                        <h2 className='text-dark_text font-bold text-[30px] mb-[16px]'>Sign in to your account</h2>
                        <p className='text-[18px] text-secondary_text leading-[28px] mb-[26px]'>Your last mile delivery platform</p>
                        <div className='form w-full'>
                            {/* <form>
                                <div className='form-group flex flex-col mb-[24px]'>
                                    <label for='email' className='text-btn text-[16px] mb-[6px]'>
                                        Email
                                    </label>
                                    <input type='text' name='email' className='bg-white h-[46px] py-[11px] px-[14px]'/>
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label for='password' className='text-btn text-[16px] mb-[6px]'>
                                        Password
                                    </label>
                                    <input type='text' name='password' className='bg-white h-[46px] py-[11px] px-[14px]'/>
                                </div>
                                <button type='submit' className='w-full py-[11px] text-white bg-red rounded-[6px] text-[16px] mt-[23px]'>Sign in</button>
                            </form> */}
                            <SigInForm/>
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
export default SignIn