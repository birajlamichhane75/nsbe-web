"use client"
import CommonSection from '@/helpers/ui/CommonSection';
import Image from 'next/image';
import React, { useState } from 'react'
import logo from '../../../../public/images/logo.jpg'
import logo1 from '../../../../public/images/logo1.png'
import { Cross, CrossIcon, Menu, X } from 'lucide-react';

const NavBar1 = () => {
    const [openMenu, setopenMenu] = useState(false);


    return (
        <section className='absolute w-full'>
            <CommonSection>
                <div className={`${openMenu ? 'h-fit rounded-xl items-start pt-2 pb-8 ' : 'h-auto items-center'} nav justify-between text-white bg-black fixed z-50 w-[85%] mx-auto rounded-full flex px-10 md:hidden`}>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-row gap-2 items-center justify-center'>
                                <Image src={logo} height={30} width={30} alt='' className='h-1rem py-2' />
                                <h4 className='font-bold'>HTU-NSBE</h4>
                            </div>
                            <div className={`${openMenu ? 'flex ' : 'hidden'} small-menu`}>
                                <ul className='flex flex-col gap-6'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Events</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div onClick={() => setopenMenu(!openMenu)}>
                            {
                                openMenu ?<X /> :  <Menu /> 
                            }
                        </div>
                </div>
            </CommonSection>
        </section>
    );
}

export default NavBar1;