import React from 'react'
import CommonSection1 from '../ui/CommonSection1';
import Image from 'next/image';
import photo from '../../../public/images/no-image.jpg'

const HelpFund = () => {
    return ( 
        <div className='py-5'>
            <CommonSection1>
                <div className='flex flex-col gap-7'>
                    <div>
                        <p className='text-xl text-justify'>The mission of the National Society of Black Engineers is “to increase the number of culturally responsible Black Engineers who excel academically, succeed professionally and positively impact the community.”</p>
                    </div>
                    <div>
                        <Image src={photo} height={500} width={500} alt='' className='w-full h-[25rem] object-cover' />
                    </div>
                    <div className='flex justify-center'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 uppercase">Help find our mission!</button>
                    </div>
                </div>
            </CommonSection1>
        </div>
     );
}
 
export default HelpFund;