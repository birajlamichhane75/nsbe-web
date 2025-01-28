import CommonSection from '@/helpers/ui/CommonSection';
import Image from 'next/image';
import React from 'react'
import logo from '../../../../public/images/logo.jpg'
import logo1 from '../../../../public/images/logo1.png'

const NavBar = () => {
    return (
        <section className='absolute w-full'>
            <CommonSection>
                <div className='nav text-white bg-black fixed z-50 w-[85%] flex mx-auto rounded-full'>
                    <div className='w-full h-[100%] flex flex-row justify-between items-center px-16'>
                        <div className='flex flex-row gap-2 items-center justify-center'>
                            <Image src={logo} height={50} width={50} alt='' className='h-1rem py-2' />

                            <h4 className='font-bold'>HTU-NSBE</h4>
                        </div>
                        <div>
                            <ul className='menu grid grid-flow-col h-full'>
                                <li className=''>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Events</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CommonSection>
        </section>
    );
}

export default NavBar;