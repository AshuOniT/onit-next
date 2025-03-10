import Image from 'next/image'
import React from 'react'

import HereToHelp from "@/components/about/HereToHelp";
import NeedHelp from "@/components/layout/NeedHelp";

const AboutUs = () => {
    return (
        <>
            <div>
                <div className="flex flex-wrap relative onit-aboutUs-HeroSection">
                    <div className="w-full lg:mt-10 mt-16">
                        <div className="h-full relative py-8 sm:py-20 px-7 lg:px-24">
                            <div className="flex flex-wrap z-10 h-full">
                                <div className="z-10 w-full text-center">
                                    <h1 className="text-3xl text-white lg:text-5xl font-bold lg:tracking-wide lg:pr-10 lg:py-6 py-3 leading-tight">
                                        About Us
                                    </h1>
                                    <p className="lg:text-lg text-md text-gray-200 font-medium">
                                        Welcome to OniT Services, where every home challenge meets its solution. Founded with a simple belief that quality home services should be accessible to everyone, we've grown from a small team of dedicated professionals to a family of expert technicians serving thousands of homeowners. Our journey is built on trust, reliability, and the smiles we bring to families when we turn house troubles into peace of mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">


                <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>

                    <div className="rounded-xl px4">

                        <h2 className='font-semibold text-teal-800 text-lg'>About Us</h2>
                        <h4 className='font-semibold sm:text-3xl text-2xl my-2'>Home Services with Heart and Expertise</h4>


                        <p className='text-md mt-4 text-gray-800'>
                            This journey was started in 2022 and today, ADA Enterprises is working in 17 states with more than 3000 professionals spread across 600 pincodes and growing.
                        </p>


                        <p className='text-md my-6 text-gray-800'>
                            OniT Services is your one-stop solution for a wide range of services designed to simplify your life. Whether you need pick-and-drop assistance or home repair and maintenance, OniT Services has you covered. With just a few taps, you can access reliable, efficient, and convenient services—all at your fingertips. At OniT, we’re committed to making everyday tasks effortless for the home makers, so you can focus on what truly matters.
                        </p>



                    </div>

                    <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">

                        <Image src={"/aboutUs/about.png"} className='rounded-xl' alt="component image" width={500} height={400} />

                    </div>

                </div>

                <p className='mt-6 text-gray-800'>ADA is recognized under the MSME (Micro, Small, and Medium Enterprises) category of the Government of India. It has established itself in the consumer market as an organization dedicated to making services affordable, reliable, and safe for customers, society, and service providers. Through the power of technology and a commitment to data integrity, ADA continues to set benchmarks in service excellence.
                </p>


            </section>


            <NeedHelp />

            <HereToHelp />

        </>
    )
}

export default AboutUs