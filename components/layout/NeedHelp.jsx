"use client"
import { Mail } from "lucide-react"
import Image from "next/image"
import needHelp from "@/public/needHelp/needHelp.png"
import acRepair from "@/public/needHelp/acRepair1.png"

const NeedHelp = () => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left side with illustration */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full max-w-[500px] mx-auto">
              
              {/* Plant illustration */}
              <div className="absolute bottom-0 z-10">
                <Image
                  src={acRepair}
                  alt="Ac Repair"
                  className="w-28 md:w-52"
                />
              </div>

              {/* Technician on ladder illustration */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/4 z-20">
                <Image
                  src={needHelp}
                  alt="Technician on ladder"
                  className="w-48 md:w-64"
                />
              </div>

              {/* Orange diamond accent */}
              <div className="absolute top-10 left-10 md:left-20 z-0">
                <div className="w-4 h-4 bg-orange-400 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need any kind of <span className="text-teal-800">Help?</span>
            </h2>

            <p className="text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
              We take utmost care in providing you the services seamlessly, still, if you have some special requirements
              or need any support for booking, service charges, or payments, please write to us on the Email ID
              mentioned below.
            </p>

            <a
              href="mailto:contact@onit.services"
              className="inline-flex items-center gap-2 bg-teal-800 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
              contact@onit.services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedHelp






// import React from 'react'

// const NeedHelp = () => {
//     return (
//         <>

//             <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">
//                 NeedHelp
//             </section>
//         </>
//     )
// }

// export default NeedHelp