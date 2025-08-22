import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
// import aboutpdf from '../../../public/pdfs/about.pdf'
import Swiper from '../components/swiperr/Swiper';

const OurVision = () => {
    return (
        <div className="my-10 py-10 bg-black min-h-[40vh] flex items-center justify-center">
            <CommonSection1>
                <div className="text-center px-6">
                    <h1 className="relative inline-block text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-wide">
                        <span className="highlight-animate px-4 text-yellow-400">Our Vision</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-yellow-400 font-medium mx-auto leading-relaxed mt-4 w-[60%]">
                        To be the premier organization for Black engineering students, fostering academic excellence, professional development, and a commitment to community service.
                    </p>
                </div>
            </CommonSection1>
        </div>
    );
}

export default OurVision;