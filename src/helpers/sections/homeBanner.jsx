import React from 'react'
import CommonSection from '../ui/CommonSection'
import Image from 'next/image';
import Banner from '../../../public/images/no-image.jpg'

const HomeBanner = ({title}) => {
    return (
        <section className=''>
            <div className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[50%] text-center w-[90%]'>
                <p className='uppercase font-bold text-[4rem] leading-snug'>{title}</p>
            </div>
            <Image className='h-[70vh] w-full object-cover' src={Banner} height={500} width={500} alt=''></Image>
            <CommonSection>
                <div className='w-full'>
                </div>
            </CommonSection>
        </section>
    );
}

export default HomeBanner;