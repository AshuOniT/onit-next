'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

import booking from "@/public/howItWorks/booking.png";
import checkMark from "@/public/howItWorks/checkMark.png";
import instrument from "@/public/howItWorks/instrument.png";
import rate from "@/public/howItWorks/rate.png";

export default function HowItWorks() {

    const content = {
        h2: "How It Works",
        h4: "Four Simple Steps to Hassle-Free Home Services",
        // p: "We've streamlined the entire process to get qualified professionals to your doorstep with minimal effort. Our straightforward booking system puts you in control while we handle the complexities behind the scenes.",
        p: "Book a Service anytime and from anywhere and leave the rest on us. We will send the nearest skilled personnel to serve you most economically Rest Assured, you will get speedy service, a competitive price and 30 days warranty period We will give refund of booking amount if service is not availed (it will take 7 days).",
        steps: [
            {
                title: "Book Service",
                description: "Choose your service, select a convenient time slot, and tell us what needs fixing. No lengthy phone calls or complicated forms—just a few taps and you're done.",
                icon: booking,
            },
            {
                title: "Intimation of service provider",
                description: "Our center quickly matches you with the ideal professional based on your requirements and location.",
                icon: checkMark,
            },
            {
                title: "Work Completion",
                description: "Your assigned professional arrives on time, diagnoses the issue, explains the solution, and completes the work to your satisfaction—no surprises, just results.",
                icon: instrument,
            },
            {
                title: "Rating",
                description: "Share your experience to help us maintain our high standards. Your feedback directly impacts which professionals get assigned to future service calls.",
                icon: rate,
            }
        ]
    }
    
    
    // Fallback to a default slug
    const { h2, h4, p, steps } = content;

    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev < 5 ? prev + 1 : prev))
            }, 1000)
            return () => clearInterval(interval)
        }
    }, [isInView])






    return (
        <section className='bg-gray-50'>
            <div className='container mx-auto max-w-screen-xl px-4 md:px-6 sm:py-10 py-5'>

                <h2 className='font-semibold text-teal-800 text-lg'>{h2}</h2>
                <h4 className='font-semibold sm:text-4xl text-2xl my-2'>{h4}</h4>
                <p className='text-md text-gray-800'>{p}</p>

                <div ref={containerRef} className="relative mt-8 my-4">

                    <div className="grid gap-5 grid-col-1 sm:grid-cols-2 md:grid-cols-4">
                        {steps.map((step, index) => (


                            <motion.div
                                key={index}
                                className="relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: isInView ? 1 : 0,
                                    y: isInView ? 0 : 20,
                                }}
                                transition={{ delay: index * 0.2 }}
                            >


                                <motion.div className={`relativ flex items-start flex-col rounded-2xl p-6 bg-white border border-blue-100 hover:shadow-md cursor-pointer h-full shadow-sm`}>


                                    <motion.div
                                        className={`rounded-full p-3 transition-colors ${index <= activeIndex ? 'bg-teal-50' : 'bg-background'
                                            }`}
                                        // animate={{
                                        //     backgroundColor: index <= activeIndex ? 'rgb(255 251 235)' : 'rgb(255 255 255)',
                                        // }}
                                        animate={{
                                            backgroundColor: index <= activeIndex ? 'rgb(230 255 240)' : 'rgb(245 255 250)',
                                        }}
                                        
                                        
                                        transition={{ duration: 0.3 }}
                                    >


                                        <Image src={step.icon} className='h-12 w-auto' alt={step.title} />


                                    </motion.div>

                                    <h3 className="text-lg my-4 font-semibold">{step.title}</h3>

                                    <p className="text-md text-muted-foreground">{step.description}</p>
                                </motion.div>
                            </motion.div>


                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}