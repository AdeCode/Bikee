import React, { useState } from 'react'
import up from '../../images/home/up.png'
import down from '../../images/home/down.png'

function Accordion({title,content}) {
    const [isActive, setIsActive] = useState(false)

    return (
        <>
            <li className='lg:mb-[37px] mb-[18px]' onClick={() => setIsActive(!isActive)}>
                <div className='flex justify-between items-center'>
                    <h2 className='flex lg:justify-between lg:items-center font-semibold lg:font-bold text-base lg:text-lg text-dark_text mb-[9px] lg:mb-[14px]'>
                        {title}  
                    </h2>
                    <span className=''>
                        {isActive ?
                            <img src={up} alt='closed' />
                            :
                            <img src={down} alt='opened' />
                        }
                    </span>
                </div>
                
                {isActive && <p className='font-normal text-sm lg:text-base text-light_blue lg:w-[442px]'>{content}</p>}
            </li>
        </>
    )
}

export default Accordion