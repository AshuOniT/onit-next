import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

const PlaneCta = () => {

    // const CtaMain = [
    //     {
    //         span: "Solutions That Evolve as Your Business Grows!",
    //         head: "Frustrated with a lacklustre website design?",
    //         para: "Our expert Front-End Development team is here to help you captivate your visitors. Whether it’s sleek animations, navigation, or pixel-perfect design, we craft experiences that leave a lasting impact.",
    //         ctaText: "Let's Connect!",
    //         slug: "ac-services"
    //     },
    // ]


    // const ctaMainObj = CtaMain?.find((ctaMain) => ctaMain?.slug === serviceDetailPageSlug)
    
    const ctaMainObj = {
        span: `Reliable Services, Anytime You Need!`,
        head: `Expert AC Repair, Plumbing & Cleaning at Your Doorstep!`,
        para: `Is your AC not cooling? Facing plumbing issues? Need deep cleaning services? We've got you covered! Our skilled professionals ensure quick, efficient, and affordable solutions to keep your home and office in top shape.`,
        ctaText: "Book a Service Now!",
    };
    


    return (
        <>

            <section className='sm:py10 py2'>
                <div className="bg-teal-800 px-4 md:px-6">

                    <div className="container mx-auto max-w-screen-xl flex gap-8 items-center flex-wrap sm:justify-between justify-center sm:px-10 px-4 py-10 rounded-md borde border-gray-50">

                        {ctaMainObj && <div className='text-white flex gap-4 flex-col lg:items-start items-center xl:w-[58%] w-full'>
                            <span>{ctaMainObj.span}</span>
                            <h2 className='text-3xl font-semibold'>{ctaMainObj.head}</h2>
                            <p>{ctaMainObj.para}</p>
                        </div>
                        }


                        <div className='flex justify-center items-center'>

                            <Link href="contact-us" className='flex items-center justify-center gap-2 bg[#261E80] p-1 pr-3 font-medium text-md bg-orange500 bg-gray-800 rounded-full mt-4 text-white'> <span className='bg-white rounded-full p-3 text-xl text-black animatebounce vibrating-icon'> <FaPhoneAlt /> </span> <span> {ctaMainObj.ctaText} </span></Link>

                        </div>

                    </div>

                </div>
            </section>


        </>
    )
}

export default PlaneCta;













