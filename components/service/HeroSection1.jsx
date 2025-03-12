"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaLocationArrow } from "react-icons/fa";

const heroSection = [
  {
    "title": "Top AC Services in Noida – Stay Cool, Stay Comfortable!",
    "description": "Beat the Noida heat with expert AC repair, maintenance, and installation services. Whether it's a quick fix or a full upgrade, our professionals ensure your cooling never takes a break. Fast, reliable, and budget-friendly—because you deserve uninterrupted comfort!",
    "ctaText": "Book Your Service Now",
    "ctaRedirectUrl": "contact-us",
    "fetchOnSlug": "ac-services-noida",
    "imageUrl": ""
  },
  {
    "title": "AC Services in Delhi – Reliable Cooling, Anytime, Anywhere!",
    "description": "Delhi summers are tough, but your AC shouldn’t be! From urgent repairs to seamless installations, our expert technicians keep your cooling systems running at peak performance. Fast response, quality service, and guaranteed satisfaction!",
    "ctaText": "Schedule a Service",
    "ctaRedirectUrl": "contact-us",
    "fetchOnSlug": "ac-services-delhi",
    "imageUrl": ""
  },
  {
    "title": "Best AC Services in Ghaziabad – Cooling You Can Count On!",
    "description": "When your AC struggles, we step in! Get top-notch AC repair, servicing, and installation in Ghaziabad at unbeatable prices. Quick turnaround, expert solutions, and a commitment to keeping you cool—your comfort is our priority!",
    "ctaText": "Get Expert Assistance",
    "ctaRedirectUrl": "contact-us",
    "fetchOnSlug": "ac-services-ghaziabad",
    "imageUrl": ""
  }
];


const HeroSection1 = ({ serviceSlug }) => {

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


  return (
    <>
      <section className="p-16 bg-gray800 bg-black text-white">
        <div className="flex justify-center flex-wrap container mx-auto sm:w-11/12 w-full">

          <div className="w-full lg:w-[58%] py-10 px-4 flex justify-center gap-20 flex-col sm:pt-18">
            <div>
              <h1 className="lg:text-5xl text-3xl my-2 font-semibold responsive-heading">{title}</h1>
              <p className="lg:text-xl text-lg my-6 font-medium">{description}</p>

              <button className="flex items-center justify-center sm:justify-start">
                <Link href={ctaRedirectUrl || "/"} className='flex items-center justify-center gap-2 bg[#261E80] p-1 pl-3 font-medium text-lg bg-orange-500 rounded-full mt-4 text-white'><span className="px-2"> {ctaText || "Launch Your Project"} </span> <span className='bg-white rounded-full p-3 text-black rotate-45'> <FaLocationArrow /> </span></Link>
              </button>

            </div>
          </div>

          {/* <div className="md:w-[41%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={imageUrl}
              alt="Digital Brain Visualization"
              className="w-full h-auto"
            />
          </div> */}

          <div className="md:w-[41%] w-full flex sm:p-10 p-4 items-center justify-center">
            <Image
              src={imageUrl || "https://www.bunnx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FdevelopmentServices.2e3e920f.jpg&w=3840&q=75"}
              alt="Digital Brain Visualization"
              width={500}
              height={500}
              className="w-full h-[300px] object-cover"
            />
          </div>


        </div>
      </section>
    </>
  )
}

export default HeroSection1;



