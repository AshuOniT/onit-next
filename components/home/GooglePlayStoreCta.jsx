// "use client"
// import React from 'react'
// import Lottie from "lottie-react";
// import GooglePlayStore from "@/public/googleplay/GooglePlayStore.json";
// import Link from 'next/link';


// const GooglePlayStoreCta = () => {
//     return (
//         <section className="w-full bg-teal-800">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                 <div className="py-4 flex items-center md:flex-row flex-col justify-around ap-24">

//                     <div className="py-4">
//                         <h3 className="text-3xl text-white font-bold mb-4">Skip the hassle. Book services in seconds.</h3>
//                         <p className="text-gray-300">Join over 10,000+ homeowners already enjoying on-demand home services with our app. Why struggle with phone calls when help is just a tap away?</p>
//                     </div>

//                     <Link href="https://play.google.com/store/apps/details?id=com.onit.consumer" className="flex justify-center items-center w-2/3">
//                         <Lottie style={{ height: 80 }} animationData={GooglePlayStore} loop={true} />
//                     </Link>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default GooglePlayStoreCta



'use client'
import React from 'react'
import Lottie from "lottie-react"
import GooglePlayStore from "@/public/googleplay/GooglePlayStore.json"
import Link from 'next/link'

const GooglePlayStoreCta = () => {
    return (
        <div className="bg-gray-100 py-12 rounded-xl">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">
                        Skip the hassle. Book services in seconds.
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Join over 10,000+ homeowners already enjoying on-demand home services with our app. Why struggle with phone calls when help is just a tap away?
                    </p>
                    <Link href="/" className="bg-teal-800 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-900 transition-colors">
                        Download our app
                    </Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="w-64">
                        <Lottie animationData={GooglePlayStore} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GooglePlayStoreCta