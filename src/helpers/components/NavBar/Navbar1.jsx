"use client"
import CommonSection from '@/helpers/ui/CommonSection';
import Image from 'next/image';
import React, { useState } from 'react'
import logo from '../../../../public/images/logo.jpg'
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const NavBar1 = () => {
    const [openMenu, setopenMenu] = useState(false);

    return (
        <section className='fixed w-full z-50'>
            <CommonSection>
                {/* Blurred background overlay */}
                {openMenu && (
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 transition-opacity duration-500"></div>
                )}
                <div className='nav flex items-center justify-between bg-black rounded-full px-6 py-2 md:hidden w-[90%] mx-auto relative z-20'>
                    {/* Logo and Title */}
                    <div className='flex flex-row gap-3 items-center'>
                        <Image src={logo} height={36} width={36} alt='HTU-NSBE Logo' className='rounded-full border border-yellow-200' />
                        <h4 className='font-extrabold text-lg tracking-wide text-yellow-400'>HTU-NSBE</h4>
                    </div>
                    {/* Menu Icon */}
                    <div className="cursor-pointer hover:opacity-80" onClick={() => setopenMenu(!openMenu)}>
                        {openMenu ? <X size={32} /> : <Menu size={32} />}
                    </div>
                </div>
                {/* Animated Dropdown Menu */}
                <div
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[90%] md:hidden rounded-3xl bg-black shadow-md shadow-gray-800 backdrop-blur-lg overflow-hidden z-20 transition-all duration-500 ease-in-out`}
                    style={{
                        top: '64px', // Adjust if your navbar height changes
                        height: openMenu ? '50vh' : '0',
                        opacity: openMenu ? 1 : 0,
                    }}
                >
                    <div className="flex flex-col justify-between h-full">
                        <ul className={`flex flex-col gap-4 px-8 py-8 transition-opacity duration-500 ${openMenu ? 'opacity-100' : 'opacity-0'}`}>
                            <li>
                                <Link href='/' onClick={() => setopenMenu(false)} className='block text-yellow-400 font-bold text-[1.7rem] px-4 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-200 shadow-md'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' onClick={() => setopenMenu(false)} className='block text-yellow-400 font-bold text-[1.7rem] px-4 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-200 shadow-md'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href='/events' onClick={() => setopenMenu(false)} className='block text-yellow-400 font-bold text-[1.7rem] px-4 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-200 shadow-md'>
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href='/contact' onClick={() => setopenMenu(false)} className='block text-yellow-400 font-bold text-[1.7rem] px-4 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-200 shadow-md'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        {/* Logo and Title at Bottom */}
                        <div className="flex flex-col items-center pb-6">
                            <Image src={logo} height={40} width={40} alt='HTU-NSBE Logo' className='rounded-full border border-yellow-200 mb-2' />
                            <h4 className='font-extrabold text-lg tracking-wide text-yellow-400'>HTU-NSBE</h4>
                        </div>
                    </div>
                </div>
            </CommonSection>
        </section>
    );
}

export default NavBar1;