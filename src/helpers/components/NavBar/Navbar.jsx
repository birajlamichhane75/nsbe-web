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
                <div className='nav text-yellow-400 mx-auto hidden md:flex rounded-full bg-black w-full backdrop-blur-md transition-all duration-300'>
                    <div className='w-full h-[100%] flex flex-row justify-between items-center px-10 py-2'>
                        <Link href='/' className='flex flex-row gap-3 items-center justify-center'>
                            <Image src={logo} height={48} width={48} alt='HTU-NSBE Logo' className='rounded-full border border-yellow-100' />
                            <h4 className='font-extrabold text-lg tracking-wide text-yellow-400'>HTU-NSBE</h4>
                        </Link>
                        <div>
                            <ul className="menu flex gap-2 items-center">
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/about', label: 'About' },
                                    { href: '/events', label: 'Events' },
                                    { href: '/contact', label: 'Contact' },
                                ].map((item) => (
                                    <li key={item.href} className="relative group">
                                        <Link
                                            href={item.href}
                                            className="font-semibold text-yellow-400 transition-colors duration-300"
                                        >
                                            {item.label}
                                        </Link>
                                        {/* Yellow underline effect */}
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </CommonSection>
        </section>
    );
}

export default NavBar;