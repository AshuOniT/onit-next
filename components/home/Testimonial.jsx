"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// import Image from "next/image"


const testimonials = [
    {
        id: 1,
        content:
            "Very good AC repair service! My AC was not cooling properly, and they fixed it the same day. The technician was polite and explained everything clearly. Price was also reasonable. Highly recommended!",
        author: "Rajesh Kumar",
        role: "Homeowner",
        avatarSrc: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 2,
        content:
            "I booked their plumbing service for a pipe leakage in my kitchen. They came on time and fixed it quickly. No unnecessary extra charges, and the work was neat. Very professional service!",
        author: "Pooja Sharma",
        role: "Apartment Resident",
        avatarSrc: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 3,
        content:
            "Took their deep cleaning service for my house before a family function. The team did an excellent job—everything was spotless! Worth the money, and I will surely call them again.",
        author: "Amit Verma",
        role: "Business Owner",
        avatarSrc: "/placeholder.svg?height=200&width=200",
    },
    {
        id: 4,
        content:
            "Had an electrical issue at home, and their electrician came within an hour. He found the problem quickly and fixed it without any hassle. Very satisfied with the service!",
        author: "Neha Iyer",
        role: "Working Professional",
        avatarSrc: "/placeholder.svg?height=200&width=200",
    },
];



const Testimonial = ({ autoPlayInterval = 5000 }) => {


    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [direction, setDirection] = useState(0)

    const nextTestimonial = useCallback(() => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, [testimonials.length])

    const prevTestimonial = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }, [testimonials.length])

    const togglePlayPause = useCallback(() => {
        setIsPlaying((prev) => !prev)
    }, [])

    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            nextTestimonial()
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [isPlaying, nextTestimonial, autoPlayInterval])

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    }






    return (
        <>

            <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12   relative isolate overflow-hidden bg-white lg:px-8">
                <span className='font-semibold text-teal-800 text-lg'>What Our Clients Say</span>
                <h3 className='font-semibold text-3xl my-2'>Real Experiences from Satisfied Homeowners</h3>
                <p className='text-md text-gray-800'>Our reputation is built on consistent quality and reliability. From emergency repairs to scheduled maintenance, our customers appreciate our prompt service, fair pricing, and skilled professionals. Don't just take our word for it—read what our community has to say about their experiences with our team.</p>

                <div className={cn("relative w-full max-w-4xl mx-auto mt-10 border bgamber-50 overflow-hidden rounded-xl p-6 shadow-lg isolate")}>

                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                 

                    <div className="min-h-[300px] px-8 flex justify-center items-center">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <div className="mb-6 text-lg font-medium leading-relaxed text-foreground md:text-xl">
                                    {testimonials[currentIndex].content}
                                </div>

                                <Avatar className="h-16 w-16 border-2 border-primary/10">
                                    <AvatarImage src="https://github.com/shadcn.png" alt={testimonials[currentIndex].author} />
                                    {/* <AvatarImage src={testimonials[currentIndex].avatarSrc} alt={testimonials[currentIndex].author} /> */}
                                    <AvatarFallback className="bg-primary/5 text-primary">
                                        {testimonials[currentIndex].avatarFallback || testimonials[currentIndex].author.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>

                                <div className="mt-4 font-semibold text-foreground">{testimonials[currentIndex].author}</div>
                                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex mt-5 items-center justify-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>

                        <div className="flex items-center gap-1">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1)
                                        setCurrentIndex(index)
                                    }}
                                    className={cn(
                                        "h-2 w-2 rounded-full transition-all",
                                        index === currentIndex ? "bg-primary" : "bg-primary/20",
                                    )}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="ml-2 h-8 w-8 rounded-full"
                            onClick={togglePlayPause}
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>


                {/* <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                </section> */}


            </section>

        </>
    )
}

export default Testimonial