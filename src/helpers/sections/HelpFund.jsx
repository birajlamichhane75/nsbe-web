import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
import Image from 'next/image';
import photo from '../../../public/images/no-image.jpg'
import Swiper from '../components/swiperr/Swiper';

const HelpFund = () => {
    return (
        <div className=" bg-black rounded-3xl mx-4">
            <CommonSection1>
                <div className="flex flex-col gap-10">
                    <div>
                        <p className="text-2xl md:text-3xl text-yellow-400 font-semibold text-center mb-4">
                            The mission of the National Society of Black Engineers is
                        </p>
                        <p className="text-lg md:text-xl text-yellow-200 text-center italic">
                            “to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.”
                        </p>
                    </div>
                    <div className="mx-auto w-full rounded-xl overflow-hidden shadow-lg border-4 border-yellow-400">
                        <Swiper eff="cube" preview={1} images={[
                            '/images/homeimage/img1.jpeg',
                            '/images/homeimage/img4.jpeg',
                            '/images/homeimage/img3.jpeg',
                            '/images/homeimage/img2.jpeg',
                        ]} />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="text-black bg-yellow-400 hover:bg-yellow-500 font-bold rounded-full text-lg px-8 py-3 uppercase shadow-lg transition duration-300"
                        >
                            Help fund our mission!
                        </button>
                    </div>
                </div>
            </CommonSection1>
        </div>
    );
}

export default HelpFund;