import React from 'react'
import styled from 'styled-components'


function PaymentModal({closeModal, children}) {
    return (
        <ModalContainer className='pt-16 lg:py-[60px] fixed'>
            <div className='modal bg-white flex w-full px-8 lg:w-[50%] fixed z-10 bg-background h-fit lg:h-[600px] flex-col items-center lg:px-[20px] lg:pb-10 py-[20px] rounded-lg'>
                <div className='flex justify-end w-full'>
                    <button className='flex font-bold py-1' onClick={closeModal}>X</button>
                </div>
                <div className='lg:w-full justify-center flex'>  
                    {children}
                </div>
            </div>
        </ModalContainer>
    )
}


export default PaymentModal

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    /* background: rgba(75, 70, 69, 0.65); */
    background: #ffffff;
    position: absolute;
    top:0;
    left:0;
    display: flex;
    justify-content: center;

    .title{
        h3{
            color: rgba(38, 50, 56, 0.76);
        }        
    }
    .body{

        
    }

`