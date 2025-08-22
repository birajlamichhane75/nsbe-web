import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
// import aboutpdf from '../../../public/pdfs/about.pdf'
import Swiper from '../components/swiperr/Swiper';

const Aboutpdf = () => {
    return (
        <div className='py-5'>
            <CommonSection1>
                <div>
                    <p>This is about pdf</p>
                    <a href="/pdfs/about.pdf" target="_blank" rel="noopener noreferrer">
                        {/* <img src="/icons/pdf-icon.png" alt="Open PDF" width={40} height={40} /> */}
                        <p>About NSBE HTU</p>
                    </a>
                </div>
            </CommonSection1>
        </div>
    );
}

export default Aboutpdf;