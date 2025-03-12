"use client"
import Image from "next/image"
import Link from "next/link"

import cleaningServices from "@/public/services/cleaningService.jpg"
import plumbing from "@/public/services/plumbing.jpg"
import electrician from "@/public/services/electrician.jpg"
import carpenter from "@/public/services/carpenter.jpg"
import acService from "@/public/services/acService.jpg"

const services = [
    {
        id: "1",
        slug: "/service-form",
        title: "AC Services",
        description: "Expert AC repairs, maintenance and installations with 24/7 emergency service. We bring comfort back to your home when you need it most.",
        image: acService,
        benefits: ["24/7 emergency service", "Certified technicians", "Same-day appointments", "Transparent pricing", "All major brands serviced"]
    },
    {
        id: "2",
        slug: "/service-form",
        title: "Carpenter Services",
        description: "Transform your space with custom woodwork, from cabinetry to decks. Our craftsmen combine beauty with functionality for lasting home value.",
        image: carpenter,
        benefits: ["Custom woodworking", "Cabinet installations", "Furniture repair", "Deck construction", "Interior trim work"]
    },
    {
        id: "3",
        slug: "/service-form",
        title: "Electrician Services",
        description: "Licensed electricians for everything from flickering lights to complete rewiring. Safety-first approach with code-compliant solutions.",
        image: electrician,
        benefits: ["Licensed & insured professionals", "Emergency troubleshooting", "Smart home installations", "Panel upgrades", "Safety inspections"]
    },
    {
        id: "4",
        slug: "/service-form",
        title: "Plumber Services",
        description: "Fast, reliable plumbing solutions for leaks, installations and renovations. We deliver permanent fixes, not temporary patches.",
        image: plumbing,
        benefits: ["Emergency leak repair", "Fixture installations", "Drain cleaning", "Water heater services", "Bathroom remodels"]
    },
    {
        id: "5",
        slug: "/service-form",
        title: "Cleaning Services",
        description: "Detail-oriented cleaning that transforms your home with eco-friendly products and personalized plans to fit your specific needs.",
        image: cleaningServices,
        benefits: ["Regular maintenance cleaning", "Deep cleaning services", "Move-in/move-out specials", "Eco-friendly products", "Customizable cleaning plans"]
    }
]

export default function Services() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <span className='font-semibold text-teal-800 text-lg'>Home Services You Can Trust</span>
                <h3 className='font-semibold text-3xl my-2'>Professional Solutions for Every Home Challenge</h3>
                <p className='text-md text-gray-800'>Every home has unique needs. We listen, respond, and deliver expert services that perfectly match your requirements. Our approach goes beyond quick fixes—we're your trusted partner in maintaining the comfort and value of your home.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({ service }) {
    return (
        <Link href={service.slug}>
            <article className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
                <div className="relative h-60 w-full overflow-hidden">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>

                <div className="px-6 py-5 flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Benefits section */}
                    <div className="mt-auto">
                        <h3 className="text-sm font-medium text-teal-800 mb-2">Benefits</h3>
                        <ul className="grid grid-cols-1 gap-1">
                            {service.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-700">
                                    <span className="mr-2 text-teal-800">•</span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>
        </Link>
    )
}








// 'use client'
// import Link from 'next/link';
// import Lottie from "lottie-react";
// import education from "@/public/services/education.json";
// import healthCare from "@/public/services/healthCare.json";
// import finance from "@/public/services/finance.json";
// import { GiBroadheadArrow } from "react-icons/gi";


// const Services = () => {

//     const services = [
//         {
//             id: 1,
//             title: "AC Services",
//             description: "Learning reimagined through smart technology. We craft digital classrooms that break geographical barriers, personalize learning experiences, and make education an exciting, accessible journey for everyone.",
//             link: "ac-services",
//             animationIcon: education,
//         },
//         {
//             id: 2,
//             title: "Electrician Services",
//             description: "We transform financial complexity into simple, secure solutions. Our software acts as your digital shield, protecting assets, automating processes, and turning compliance challenges into competitive advantages.",
//             link: "contact-us",
//             animationIcon: finance,
//         },
//         {
//             id: 3,
//             title: "Carpenter Services",
//             description: "Healthcare solutions that put human connection first. Our applications bridge patients and professionals, simplify complex medical workflows, and turn data into life-changing insights.",
//             link: "contact-us",
//             animationIcon: healthCare,
//         },
//         {
//             id: 4,
//             title: "Plumber Services",
//             description: "Healthcare solutions that put human connection first. Our applications bridge patients and professionals, simplify complex medical workflows, and turn data into life-changing insights.",
//             link: "contact-us",
//             animationIcon: healthCare,
//         },
//         {
//             id: 5,
//             title: "Cleaning Services",
//             description: "Healthcare solutions that put human connection first. Our applications bridge patients and professionals, simplify complex medical workflows, and turn data into life-changing insights.",
//             link: "contact-us",
//             animationIcon: healthCare,
//         },

//     ];

//     return (
//         <>
//             <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
//                 <span className='font-semibold text-orange-500 text-lg'>Services We Serve</span>
//                 <h2 className='font-semibold text-3xl my-2'>Developing Perfectly Fitting Solutions for Every Industry</h2>
//                 <p className='text-md text-gray-800'>Every industry has a unique rhythm. We listen, understand, and craft software solutions that sync perfectly with your business pulse. Our approach goes beyond coding we&apos;re your strategic technology partner.</p>

//                 <div className='flex items-cente justify-center flex-wrap gap-10 mt-6'>
//                     {services.map(service => (
//                         <div key={service.id} className="border border-gray-200 rounded-xl shadow-lg p-4 flex items-center justify-between flex-col w-96 text-center relative">
//                             <div>

//                                 {service?.animationIcon && <div className='flex items-center justify-center'><Lottie style={{ height: 150 }} animationData={service.animationIcon} loop={true} /></div> }

//                                 <h3 className='font-semibold my-3 text-lg'>{service.title}</h3>
//                                 <p>{service.description}</p>
//                             </div>

//                             {service?.link &&
//                                 <Link
//                                     className='flex items-center justify-center gap-2 p-1 pl-3 font-medium text-sm bg-orange-500 rounded-full mt-4 text-white'
//                                     href={service?.link}
//                                 >
//                                     <span>Contact us</span>
//                                     <span className='bg-white rounded-full p-2 -rotate-45 text-black'>
//                                         <GiBroadheadArrow />
//                                     </span>
//                                 </Link>
//                             }
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Services;
