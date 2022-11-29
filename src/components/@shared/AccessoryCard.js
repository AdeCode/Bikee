import React from 'react'
import styled from 'styled-components'

function AccessoryCard({image, title, price}) {
  return (
    <Card className='flex flex-col font-inter lg:gap-5 lg:p-2 rounded-xl'>
        <div className=''>
            <img src={image} alt={title}/>
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-[7px]'>
                <h3 className='text-accessory_text font-semibold text-xs'>{title}</h3>
                <h3 className='text-accessory_price font-semibold text-base'>N{price}</h3>
            </div>
            <div className='flex items-center'>
              <button className='text-white bg-red py-[4px] px-[11px] rounded-[18px] font-normal text-[9px] leading-[15px]'>Add to cart</button>
            </div>
        </div>
    </Card>
  )
}

const Card = styled.div`
    box-shadow: 0px 0px 0.795967px rgba(12, 26, 75, 0.24), 0px 2.3879px 6.36774px -0.795967px rgba(50, 50, 71, 0.05);
  /* .card{
    box-shadow: 0px 0px 0.795967px rgba(12, 26, 75, 0.24), 0px 2.3879px 6.36774px -0.795967px rgba(50, 50, 71, 0.05);

  } */
`

export default AccessoryCard