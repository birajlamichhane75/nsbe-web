import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
import Swiper from '../components/swiperr/Swiper';

const FATSlider  = () => {
    return ( 
        <div>
            <CommonSection1>
                <Swiper eff='cards' preview={1}/>
            </CommonSection1>
        </div>
     );
}
 
export default FATSlider ;