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
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default ({ eff, preview }) => {
    return (
        <CommonSection1>
            <Swiper
                // install Swiper modules
                modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectCards, EffectCoverflow, EffectCreative, EffectFlip]}
                spaceBetween={0}
                slidesPerView={preview}
                loop={true}
                navigation={{
                    nextEl: '.forward',
                    prevEl: '.back',

                }}
                autoplay={{ delay: 1800 }}
                effect={eff}
                keyboard={{ enabled: true }}
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
                <div className='w-full absolute z-50 flex justify-between bottom-[50%] px-3'>
                    <div className="back left slide-btn"><ChevronLeft /></div>
                    <div className="forward right slide-btn"><ChevronRight /></div>
                </div>
            </Swiper>


        </CommonSection1>
    );
};