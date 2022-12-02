import React from 'react'
import styled from 'styled-components'
import signBic from '../images/auth/signBic.png'

function SignIn() {
    return (
        <Container className='flex justify-center items-center'>
            <div className=''>
                <div className=''>

                </div>
                <div className=''>
                    <img src={signBic} alt='bicycle'/>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background: radial-gradient(50% 50% at 50% 50%, rgba(247, 248, 249, 0) 0%, #F7F8F9 100%)
`
export default SignIn