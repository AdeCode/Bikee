import React from 'react'

function SubMenu() {
    return (
        <div className='lg:pt-[90px] lg:pb-[42px] lg:pl-[140px] hidden lg:flex'>
            <ul className='flex lg:gap-11 font-normal text-[13px] lg:leading-[22px] text-nav_text'>
                <li className=''>E-bike</li>
                <li className=''>Accessories </li>
                <li className=''>Maintanance and Insuransce</li>
            </ul>
        </div>
    )
}

export default SubMenu