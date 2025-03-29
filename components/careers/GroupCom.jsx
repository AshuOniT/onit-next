"use client"

import { useState, useEffect } from "react"




const GroupCom = () => {
    const [formHeight, setFormHeight] = useState(1000)

    // This is the correct format for embedding Google Forms
    // Replace with your actual working Google Form URL
    //   const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScHV3SeLSiIL-oZn3jMN2Fsgwz9c4t8gAumzFjUmvV1hgtdYg/viewform"
    const googleFormUrl = "https://forms.gle/r4AFVSWkr34hyxrL8"

    // Adjust iframe height based on window size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setFormHeight(800)
            } else {
                setFormHeight(1000)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <>
            <div>
                <div className="flex flex-wrap relative onit-careers-HeroSection">
                    <div className="w-full lg:mt-10 mt-16">
                        <div className="h-full relative py-8 sm:py-20 px-7 lg:px-24">
                            <div className="flex flex-wrap z-10 h-full">
                                <div className="z-10 w-full text-center">
                                    <h1 className="text-3xl text-white lg:text-5xl font-bold lg:tracking-wide lg:pr-10 lg:py-6 py-3 leading-tight">
                                        OniT Careers
                                    </h1>
                                    <p className="lg:text-lg text-md text-gray-200 font-medium">
                                        Join our team of skilled professionals at OniT Services. We're looking for talented AC technicians,
                                        plumbers, and electricians who are passionate about delivering quality home services. Build your
                                        career with us and enjoy competitive pay, ongoing training, and a supportive work environment that
                                        values your expertise and growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Opportunities Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Current Opportunities</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We're always looking for talented individuals to join our team. Fill out the application form below to get
                        started.
                    </p>
                </div>

                {/* Job Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-teal-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">AC Technicians</h3>
                        <p className="text-gray-600">
                            Keeping homes and businesses cool, our expert AC technicians handle everything from installations to repairs
                            with precision and care. Whether it’s a quick fix or a full system upgrade, they ensure comfort in every season.
                        </p>

                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-teal-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>

                        <h3 className="text-xl font-semibold mb-2">Business Development Executive</h3>
                        <p className="text-gray-600">
                            Dynamic professionals responsible for identifying new business opportunities, building client relationships,
                            and driving company growth through strategic planning and sales initiatives.
                        </p>


                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-teal-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Operations</h3>

                        <p className="text-gray-600">
                            Ensuring seamless business processes, our operations team manages logistics, workflow optimization, and efficiency
                            improvements to drive organizational success and customer satisfaction.
                        </p>

                    </div>
                </div>

            </div>

            {/* Google Form Integration */}
            <div className="bg-white rounded-lg mb-8">
                <h3 className="text-4xl font-bold text-center mb-6">Apply Now</h3>
                <div className="w-full overflow-hidden rounded-lg">
                    <iframe
                        src={googleFormUrl}
                        width="100%"
                        height={formHeight}
                        className="mx-auto block"
                        title="OniT Careers Application Form"
                    >
                        Loading form...
                    </iframe>
                </div>
            </div>


        </>
    )
}

export default GroupCom;


