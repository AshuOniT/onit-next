'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import onitLogo from "@/public/onitLogo/onitLogo.png";

import { PiHandshakeFill } from "react-icons/pi";

const menuItems = [
  { title: 'Home', slug: '/' },
  { title: 'About Us', slug: '/about-us' },
  { title: 'Request Service', slug: '/service-form' },
  { title: 'Careers', slug: '/careers' },
]


export default function Header() {

  const [activeMenu, setActiveMenu] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }



  return (
    // <header className={`${isScrolled ? "bg-[#00214E]" : ""} ${isMobileMenuOpen && "bg-[#00214E]"} sticky top-0 left-0 w-full z-40`}>
    <header className={`${isScrolled ? "bg-gray-800" : ""} ${isMobileMenuOpen && "bg-[#00214E]"} fixed w-full top-0 left-0 z-40`}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between lg:px-10">
          <Link href="/" className="flex items-center py-2">
            <Image
              src={onitLogo}
              alt="Onit logo"
              width={125}
              priority
            />
          </Link>
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.title}>
                <Link href={item.slug}
                  className={`text-white px-3 py-8 rounded-md text-lg transition-colors duration-200 ${activeMenu && 'text-orange-500'
                    }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>


          <button className="hidden lg:flex items-center justify-center sm:justify-start ">
            <Link href="/service-form" className='flex items-center justify-center gap-1 border-2 p-1 pl-2 font-medium text-md rounded-full text-white'>
              <span className="px-2"> Let's Connect </span>
              <span className='bg-white rounded-full p-2 text-black vibrating-icon'>
                <PiHandshakeFill size="1.2em" />
              </span>
            </Link>
          </button>

          <div className="lg:hidden flex items-center justify-center">
            <button onClick={() => {
              toggleMobileMenu();
            }}
              className="text-white transition-colors duration-200">
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden h-screen sm:h-auto overflow-y-auto bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <Link href={item.slug} onClick={() => {
                    toggleMobileMenu();
                  }}
                    className="w-full block text-left text-black hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  >

                    {item.title}

                  </Link>

                </div>
              ))}
            </div>


            <div className="px-4 py-3 flex items-center justify-center">

              {/* <button className="bg-[#007968] text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors duration-300">
                Get in Touch
              </button> */}

              <button className="flex items-center justify-center sm:justify-start text-white">
                <Link href="tel:+91-8800502322" className='flex bg-[#007968] items-center justify-center gap-1 border-2 p-1 pl-2 font-medium text-md rounded-full'>
                  <span className="px-2"> Let's Connect </span>
                  <span className='bgwhite rounded-full p-2 text-[#007968] bg-white vibrating-icon'>
                    <PiHandshakeFill size="1.4em" />
                  </span>
                </Link>
              </button>


            </div>
          </div>

        </>


      )}

    </header>
  )
}














// import { SearchConsole } from "../search-console"

// export default function Page() {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center p-4">
//       <div className="w-full max-w-md space-y-4">
//         <h1 className="text-2xl font-bold text-center">Search Console</h1>
//         <p className="text-center text-muted-foreground">
//           Press <kbd className="px-1 py-0.5 text-xs border rounded-md">⌘K</kbd> to open the search console
//         </p>
//         <div className="flex justify-center">
//           <SearchConsole />
//         </div>
//       </div>
//     </div>
//   )
// }















