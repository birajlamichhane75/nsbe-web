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
    const images = [
        '/images/nsbepic4.jpg',
        '/images/nsbepic1.jpg',
        '/images/nsbepic3.jpg',
        '/images/nsbepic2.jpg',
    ]

    return (
        <Swiper
            modules={[Keyboard, Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectCards, EffectCoverflow, EffectCreative, EffectFlip]}
            spaceBetween={0}
            slidesPerView={preview}
            loop={true}
            navigation={{
                nextEl: '.forward',
                prevEl: '.back',
            }}
            autoplay={{ delay: 3000 }}
            effect={eff}
            keyboard={{ enabled: true }}
            className="h-[30rem] md:h-[35rem]"
        >
            {images.map((imgsrc, index) => (
                <SwiperSlide key={index} className="h-full">
                    <Image
                        src={imgsrc}
                        fill
                        alt=''
                        className="object-cover h-full w-full"
                    />
                </SwiperSlide>
            ))}

            <div className="w-full absolute z-50 flex justify-between bottom-[50%] px-3">
                <div className="back left slide-btn"><ChevronLeft /></div>
                <div className="forward right slide-btn"><ChevronRight /></div>
            </div>
        </Swiper>

    );
};