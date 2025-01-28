"use client"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube, EffectCards, EffectCoverflow, EffectCreative, EffectFlip, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import photo from '@/../public/images/no-image.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-creative';
import CommonSection1 from '@/helpers/ui/CommonSection1';
import Image from 'next/image';

export default ({eff,preview}) => {
    return (
        <CommonSection1>
            <Swiper
                // install Swiper modules
                modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube,EffectCards, EffectCoverflow, EffectCreative, EffectFlip]}
                spaceBetween={50}
                slidesPerView={preview}
                navigation
                loop={true}
                autoplay={{delay:2500}}
                effect={eff}
                keyboard={{enabled:true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <Image src={photo} height={500} width={500} alt='' className='w-full h-[25rem] object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={photo} height={500} width={500} alt='' className='w-full h-[25rem] object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={photo} height={500} width={500} alt='' className='w-full h-[25rem] object-cover' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={photo} height={500} width={500} alt='' className='w-full h-[25rem] object-cover' />
                </SwiperSlide>
            </Swiper>
        </CommonSection1>
    );
};