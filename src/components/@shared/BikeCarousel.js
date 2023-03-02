import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import revv1 from '../../images/preorder/revv1-bg.png'
import revv2 from '../../images/preorder/revv2-bg.png'
import revv3 from '../../images/preorder/revv3-bg.png'
import revv4 from '../../images/preorder/revv4-bg.png'


function BikeCarousel() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
            <div>
                <img src={revv1} alt='bikee' />
            </div>
            <div>
                <img src={revv2} alt='bikee'/>
            </div>
            <div>
                <img src={revv3} alt='bikee'/>
            </div>
            <div>
                <img src={revv4} alt='bikee'/>
            </div>
        </Carousel>
    )
}

export default BikeCarousel