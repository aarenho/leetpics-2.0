"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-[#24394d]">
            <div className="max-w-1xl mx-auto px-10">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-7">
                        <div className="flex items-center">
                            <Link href="/" className="text-xl font-bold">
                                <span className="text-white">Leet</span>
                                <span className="text-[#FFA015]">pics</span>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-1">
                            <Link 
                                href="/" 
                                className={`py-4 px-2 ${pathname === '/' 
                                    ? 'text-[#FFA015] border-b-2 border-[#FFA015] font-semibold' 
                                    : 'text-gray-300 font-medium hover:text-[#FFA015] transition duration-300'}`}
                            >
                                Home
                            </Link>
                            <Link 
                                href="/gallery" 
                                className={`py-4 px-2 ${pathname === '/gallery' 
                                    ? 'text-[#FFA015] border-b-2 border-[#FFA015] font-semibold' 
                                    : 'text-gray-300 font-medium hover:text-[#FFA015] transition duration-300'}`}
                            >
                                Gallery
                            </Link>
                            <Link 
                                href="/upload" 
                                className={`py-4 px-2 ${pathname === '/upload' 
                                    ? 'text-[#FFA015] border-b-2 border-[#FFA015] font-semibold' 
                                    : 'text-gray-300 font-medium hover:text-[#FFA015] transition duration-300'}`}
                            >
                                Upload
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;