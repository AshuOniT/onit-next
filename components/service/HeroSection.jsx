"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import heroImage1 from "@/public/services/heroImage1.png"

const heroSection = [
    {
        "title": "Top AC Services in Noida – Stay Cool, Stay Comfortable!",
        "description": "Beat the Noida heat with expert AC repair, maintenance, and installation services. Whether it's a quick fix or a full upgrade, our professionals ensure your cooling never takes a break. Fast, reliable, and budget-friendly—because you deserve uninterrupted comfort!",
        "ctaText": "Book Your Service Now",
        "ctaRedirectUrl": "tel:+91-8800502322",
        "fetchOnSlug": "ac-services-noida",
        "imageUrl": heroImage1
    },
    {
        "title": "AC Services in Delhi – Reliable Cooling, Anytime, Anywhere!",
        "description": "Delhi summers are tough, but your AC shouldn’t be! From urgent repairs to seamless installations, our expert technicians keep your cooling systems running at peak performance. Fast response, quality service, and guaranteed satisfaction!",
        "ctaText": "Schedule a Service",
        "ctaRedirectUrl": "tel:+91-8800502322",
        "fetchOnSlug": "ac-services-delhi",
        "imageUrl": heroImage1
    },
    {
        "title": "Best AC Services in Ghaziabad – Cooling You Can Count On!",
        "description": "When your AC struggles, we step in! Get top-notch AC repair, servicing, and installation in Ghaziabad at unbeatable prices. Quick turnaround, expert solutions, and a commitment to keeping you cool—your comfort is our priority!",
        "ctaText": "Book Your Service Now",
        "ctaRedirectUrl": "tel:+91-8800502322",
        "fetchOnSlug": "ac-services-ghaziabad",
        "imageUrl": heroImage1
    }
];


const HeroSection = ({ serviceSlug }) => {

    const heroSectionObj = heroSection.find(section =>
        section.fetchOnSlug === serviceSlug
    );


    const heroSectionData = {
        title: heroSectionObj?.title,
        description: heroSectionObj?.description,
        imageUrl: heroSectionObj?.imageUrl,
        ctaText: heroSectionObj?.ctaText,
        ctaRedirectUrl: heroSectionObj?.ctaRedirectUrl,
    };

    const { title, description, imageUrl, ctaText, ctaRedirectUrl } = heroSectionData;


    return (<>

        <div>

            <div className="flex flex-wrap relative onit-service-HeroSection">

                <div className='w-full lg:w-[59%] lg:mt-10 mt-16'>
                    <div className='h-full relative text-gray-500 py-8 sm:py-20 px-7 lg:px-24'>

                        <div className='flex flex-wrap z-10 h-full'>
                            <div className='z-10 w-full'>
                                <span className='text-gray-200 text-base block lg:tracking-wide'>Your Comfort, Our Priority</span>
                                <h1 className='text-3xl text-white lg:text-5xl font-bold lg:tracking-wide lg:pr-10 lg:py-6 py-3 leading-tight'>
                                    {title}
                                </h1>
                                <p className='lg:text-lg text-md mb-6 text-gray-200 font-medium'>
                                    {description}
                                </p>
                                <button className="flex items-center justify-center sm:justify-start">
                                    <Link href={ctaRedirectUrl} className='flex items-center justify-center gap-1 border-2 p-1 pr-3 font-medium text-lg rounded-full mt-4 text-white'>
                                        <span className='bg-white rounded-full p-3 text-black vibrating-icon'>
                                            <FaPhoneAlt size="1.2em" />
                                        </span>
                                        <span className="px-2"> {ctaText} </span>
                                    </Link>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>


                {/* half */}


                <div className='md:w-[40%] w-full flex-shrink-0 flex-grow-0 flex justify-center items-center'>
                    {/* <div className='px-4 lg:py-10 z-10 py-2 xl:px-24 relative'> */}
                    <div className='z-10 relative lg:px-16'>


                        <div className="w-full flex pb-10 sm:pb-0  items-center justify-center">
                            <Image
                                src={imageUrl}
                                alt="Ac Services Vector Image"
                                width={500}
                                height={500}
                                className="w-full sm:h-[350px] object-cover"
                            />
                        </div>


                    </div>
                    {/* </div> */}
                </div>


            </div>
        </div>


    </>
    )
}

export default HeroSection