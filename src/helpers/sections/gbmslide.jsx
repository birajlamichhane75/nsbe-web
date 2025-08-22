import React from 'react'
import SwiperrBanner from '../components/swiperr/swiperrBanner';

const GBMSlide = () => {
    return (
        <section className='py-8 sm:py-12 px-4 sm:px-6 lg:px-6'>

            <div className="mx-auto w-[95%] max-w-7xl">
                <div className="mx-auto w-full">
                    <SwiperrBanner eff="cards" preview={1} images={[
                        '/images/nsbepic1.jpg',
                        '/images/nsbepic4.jpg',
                        '/images/nsbepic3.jpg',
                        '/images/nsbepic2.jpg',
                    ]} />

                </div>
            </div>
        </section>
    );
}

export default GBMSlide;