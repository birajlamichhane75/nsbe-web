import React from 'react'
import CommonSection from '../ui/CommonSection'

const HomeBanner = ({ title }) => {
    return (
        <section className="relative h-[30vh] md:h-[40vh] flex items-center justify-center overflow-hidden pt-40">
            
            <div className="flex flex-col justify-center items-center">
                <p className="font-extrabold text-black text-[1.8rem] md:text-[2.2rem] leading-snug">
                    National Society of Black Engineers
                </p>
                <p className='italic text-black text-[1rem] md:text-[1.4rem]'>
                    Huston-Tillotson University
                </p>
            </div>
        </section>
    );
}



export default HomeBanner;