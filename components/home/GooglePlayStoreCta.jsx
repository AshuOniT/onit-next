"use client"
import React from 'react'
import Lottie from "lottie-react";
import GooglePlayStore from "@/public/googleplay/GooglePlayStore.json";
import Link from 'next/link';


const GooglePlayStoreCta = () => {
    return (
        <section className="w-full bg-teal-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-4 flex items-center md:flex-row flex-col justify-around ap-24">

                    <div className="py-4">
                        <h3 className="text-3xl text-white font-bold mb-4">Skip the hassle. Book services in seconds.</h3>
                        <p className="text-gray-300">Join over 10,000+ homeowners already enjoying on-demand home services with our app. Why struggle with phone calls when help is just a tap away?</p>
                    </div>

                    <Link href="https://play.google.com/store/apps/details?id=com.onit.consumer" className="flex justify-center items-center w-2/3">
                        <Lottie style={{ height: 80 }} animationData={GooglePlayStore} loop={true} />
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default GooglePlayStoreCta


