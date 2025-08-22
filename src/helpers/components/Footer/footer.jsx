import React from 'react'
import logo from '../../../../public/images/logo.jpg'
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-black text-white py-8 md:px-4 mt-10'>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className="logo">
                    <Link href='/' className='flex flex-col items-center justify-center'>
                        <Image src={logo} height={50} width={50} alt='' className='h-1rem py-2' />
                        <h4 className='font-bold'>HTU-NSBE</h4>
                    </Link>
                </div>
                <div className="f-menu flex items-center justify-center gap-12">
                    <div className="side-line"></div>
                    <div className='flex items-center justify-center gap-8 md:text-xl text-4xl'>
                        <Link href="#">Home</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Contact</Link>
                        <Link href="#">Event</Link>
                    </div>
                    <div className="side-line"></div>
                </div>

                <div className="social-media ">

                    <div className='flex items-center justify-center gap-8 md:text-xl text-4xl'>
                        <Link href="#"><FaFacebook /></Link>
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaLinkedin /></Link>
                        <Link href="#"><FaTwitter /></Link>
                    </div>
                </div>

                <div>
                    <p>&copy; 2025 All Right Reserved , NSBE HTU</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;