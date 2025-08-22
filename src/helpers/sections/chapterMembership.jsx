import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
import Image from 'next/image';

const ChapterMembership = () => {
    return (
        <div className="my-10 py-10 border-t-[2.5rem] border-b-[2.5rem] border-black min-h-[40vh]">
            <CommonSection1>

                <div className='flex md:flex-row flex-col items-center justify-center gap-10'>
                    {/* content section */}
                    <div className='flex flex-col items-center justify-center'>
                        <div>
                            {/* logo */}
                            <Image
                                src="/images/htu-logoo.png"
                                alt="NSBE Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-red-700">Chapter Membership</h2>
                        <ul className="list-disc list-inside mt-4 space-y-2 font-bold">
                            <li className='text-xl'>Join a Community of like-minded individuals! </li>
                            <li className='text-xl'>Networking opportunities with professionals!</li>
                            <li className='text-xl'>Resources for academic and career development!</li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div>
                        <Image
                            src="/images/nsbepic3.jpg"
                            alt="Chapter Membership"
                            width={500}
                            height={300}
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Join Us Now Button */}
                <div className="mt-10 flex justify-center">
                    <a href="">
                        <button
                            type="button"
                            className="text-black hover:opacity-80 hover:shadow-sm hover:shadow-black bg-black font-bold rounded-full text-lg px-8 py-3 uppercase  transition duration-300"
                        >
                            Join Us Today!
                        </button>
                    </a>
                </div>


            </CommonSection1>
        </div>
    );
}

export default ChapterMembership;