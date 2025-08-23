import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
import Image from 'next/image';
import Link from 'next/link';

const NationalMembership = () => {
    return (
        <div className="my-10 py-10 min-h-[40vh]">
            <CommonSection1>

                <div className='flex md:flex-row flex-col items-center justify-center gap-10'>
                  
                  {/* Image Section */}
                <div>
                    <Image
                        src="/images/nsbepic4.jpg"
                        alt="National Membership"
                        width={500}
                        height={300}
                        className="object-cover rounded-lg shadow-lg"
                    />
                </div>
                    {/* content section */}
                <div className='flex flex-col items-center justify-center'>
                    <div>
                        {/* logo */} 
                        <Image
                            src="/images/logo1.png"
                            alt="NSBE Logo"
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-red-700">National Membership</h2>
                    <ul className="list-disc list-inside mt-4 space-y-2 font-bold text-center">
                        <li className='text-xl'>Attend the regional and national conference for internship and job opportunities!</li>
                        <li className='text-xl'>Qualify and earn national scholarship!</li>
                        <li className='text-xl'>Access to exclusive workshops and training sessions!</li>
                    </ul>
                </div>

                 

                
                </div>

                <div className="mt-10 flex justify-center">
                    <Link href="https://nsbe.org/collegiate/" target='_blank'>
                        <button
                            type="button"
                            className="text-black hover:opacity-80 hover:shadow-sm hover:shadow-black bg-black font-bold rounded-full text-lg px-8 py-3 uppercase  transition duration-300"
                        >
                            Join National NSBE Organization
                        </button>
                    </Link>
                </div>


            </CommonSection1>
        </div>
    );
}

export default NationalMembership;