import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
// import aboutpdf from '../../../public/pdfs/about.pdf'
import Swiper from '../components/swiperr/Swiper';

const AboutNsbe = () => {
    return (
        <div className="my-10 py-10 min-h-[40vh] flex items-center justify-center">
            <CommonSection1>
                <div className='flex flex-col gap-10'>
                    <div className="text-center px-6">
                        <h1 className="relative inline-block text-xl md:text-xl font-bold text-black mb-4 tracking-wide">
                            National Society of Black Engineers
                        </h1>
                        <p className="font-serif text-justify text-md md:text-lg mx-auto leading-relaxed mt-4 w-full ">
                            NSBE offers academic excellence programs, scholarships, leadership training, professional development, and access to career opportunities for thousands of members annually. With over 2000 elected leadership positions, 12 regional conferences, and an annual convention, NSBE provides opportunities for success that remain unmatched by any other organization. NSBE also publishes three national magazines; the NSBE Magazine, the Career Engineer, and the NSBE Bridge.
                        </p>
                    </div>

                    <div className='text-center px-6'>
                        <h1 className="relative inline-block underline text-xl md:text-xl font-bold text-black mb-4 tracking-wide">
                            Our Objectives
                        </h1>
                        <p className='font-serif text-justify text-md md:text-lg mx-auto leading-relaxed'>National Society of Black Engineers strives to accomplish the following objectives for our organization:</p>
                        <ul className='font-serif text-justify text-md md:text-lg mx-auto leading-relaxed list-disc mt-5'>
                            <li className='font-serif text-md md:text-lg'>Stimulate and develop student interest in the various engineering disciplines.</li>
                            <li className='font-serif text-md md:text-lg'>Strive to increase the number of minority students studying engineering at both the undergraduate and graduate levels.</li>
                            <li className='font-serif text-md md:text-lg'>Encourage members to seek advanced degrees in engineering or related fields and to obtain professional engineering registrations.</li>
                            <li className='font-serif text-md md:text-lg'>Promote public awareness of engineering and the opportunities for Blacks and other minorities in that profession.</li>
                            <li className='font-serif text-md md:text-lg'>Function as a representative body on issues and developments affecting Black Engineers' careers.</li>
                        </ul>
                    </div>
                </div>
            </CommonSection1 >
        </div >
    );
}

export default AboutNsbe;