import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
// import aboutpdf from '../../../public/pdfs/about.pdf'
import Swiper from '../components/swiperr/Swiper';

const OurVision = () => {
    return (
        <div className="my-10 py-10 bg-black min-h-[40vh] flex items-center justify-center">
            <CommonSection1>
                <div className="text-center px-6">
                    <h1 className="relative inline-block text-4xl md:text-4xl font-bold text-black mb-4 tracking-wide">
                        <span className="highlight-animate px-4 text-yellow-400">Our Vision</span>
                    </h1>
                    <p className=" font-serif italic text-justify text-lg md:text-2xl text-yellow-400 font-medium mx-auto leading-relaxed mt-4 w-full md:w-[60%]">
                        To be the premier organization for Black engineering students, fostering academic excellence, professional growth, and community service. We strive to empower our members with the skills, support, and opportunities to lead in engineering and technology while making a lasting impact in their communities.                    </p>
                </div>
            </CommonSection1>
        </div>
    );
}

export default OurVision;