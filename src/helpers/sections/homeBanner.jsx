import React from 'react'
import CommonSection from '../ui/CommonSection'
import Image from 'next/image';
import Banner from '../../../public/images/homebanner.jpg'

const HomeBanner = ({title}) => {
    return (
        <section className='relative  h-[70vh] md:h-[100vh]'>
            <div className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[50%] text-center w-[90%]'>
                <p className='home-title uppercase font-bold text-[4rem] leading-snug text-amber-50'>{title}</p>
            </div>
            <Image className='relative h-full w-full object-cover object-center' src={Banner} objectFit='cover' alt=''></Image>
        </section>
    );
}

export default HomeBanner;