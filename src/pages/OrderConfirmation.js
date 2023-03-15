import React from 'react'
import { Link } from 'react-router-dom'

function OrderConfirmation() {
    return (
        <div className='flex flex-col items-center justify-center h-[100vh] px-4'>
            <div className='w-[800px] px-10 py-10 text-white bg-[#FF0000] rounded-lg'>
                <h2 className='font-bold text-2xl mt-6'>Thank you for your order!</h2>
                <div className=''>
                    {/* <h3 className='font-normal text-base'>Order No. #809320, #249320, and #809320.</h3> */}
                    <h4 className='font-normal text-sm'>We’ll email you an order confirmation with details of your order. Please note that bikee will not send any rider to request for an extra delivery fee.</h4>
                    <p className='font-normal text-sm mt-9'>Thanks for patronizing...</p>
                    <p className='font-normal text-sm'>Motion Mobility.</p>
                </div>
            </div>
            <div className='w-full text-dark_blue mt-3 flex justify-center'>
                <Link to='/profile'>Go home</Link>
            </div>
        </div>
    )
}

export default OrderConfirmation