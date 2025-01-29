import CommonSection from '@/helpers/ui/CommonSection';
import Image from 'next/image';
import React from 'react'
import logo from '../../../../public/images/logo.jpg'
import logo1 from '../../../../public/images/logo1.png'
import Link from 'next/link';

const NavBar = () => {
    return (
        <section className='fixed left-[50%] translate-x-[-50%] z-50 w-[85%]'>
            <CommonSection>
                <div className='nav text-white  mx-auto hidden md:flex rounded-full bg-black w-full'>
                    <div className='w-full h-[100%] flex flex-row justify-between items-center px-16'>
                        <Link href = '/' className='flex flex-row gap-2 items-center justify-center'>
                            <Image src={logo} height={50} width={50} alt='' className='h-1rem py-2' />

                            <h4 className='font-bold'>HTU-NSBE</h4>
                        </Link>
                        <div>
                            <ul className='menu grid grid-flow-col h-full'>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/about' >About</Link></li>
                                <li><Link href='/events' >Events</Link></li>
                                <li><Link href='/contact' >Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CommonSection>
        </section>
    );
}

export default NavBar;