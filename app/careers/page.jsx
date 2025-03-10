"use client"

import { useState, useEffect } from "react"

const Careers = () => {
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
                            Skilled professionals who can install, maintain, and repair air conditioning systems for residential and
                            commercial clients.
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Plumbers</h3>
                        <p className="text-gray-600">
                            Experienced plumbers who can handle installations, repairs, and maintenance of plumbing systems in homes
                            and businesses.
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
                        <h3 className="text-xl font-semibold mb-2">Electricians</h3>
                        <p className="text-gray-600">
                            Licensed electricians who can safely install, maintain, and repair electrical systems and components.
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

            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                {/* Benefits Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Work With Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Competitive Pay</h3>
                            <p className="text-gray-600">
                                We offer industry-leading compensation packages based on experience and skills.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                            <p className="text-gray-600">Clear career paths with opportunities for advancement and specialization.</p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Ongoing Training</h3>
                            <p className="text-gray-600">
                                Regular training sessions to keep your skills up-to-date with the latest technologies.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-teal-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Supportive Team</h3>
                            <p className="text-gray-600">
                                Work with a collaborative team that values your expertise and supports your success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Careers





// const Careers = () => {


//     return (<>

//         {/*
//         <div>

//             <div className="flex flex-wrap relative onit-careers-HeroSection">
//                 <div className='w-full text-center lg:mt-16 mt-20'>
//                     <h1 className='h-full relative text-white font-semibold z-10 w-full py-8 sm:py-20 px-7 text-4xl lg:text-6xl lg:px-24'>
//                         OniT Careers
//                     </h1>

//                     <p className='text-white relative text-lg z-10 md:text-xl px-5 md:px-20 max-w-4xl mx-auto pb-10'>
//                         Join our team of skilled professionals at OniT Services. We're looking for talented AC technicians, plumbers, and electricians who are passionate about delivering quality home services. Build your career with us and enjoy competitive pay, ongoing training, and a supportive work environment that values your expertise and growth.
//                     </p>
//                 </div>
//             </div>

//         </div> */}


//         <div>
//             <div className="flex flex-wrap relative onit-careers-HeroSection">
//                 <div className='w-full lg:mt-10 mt-16'>
//                     <div className='h-full relative text-gray-500 py-8 sm:py-20 px-7 lg:px-24'>


//                         <div className='flex flex-wrap z-10 h-full'>
//                             <div className='z-10 w-full text-center'>
//                                 {/* <span className='text-white text-base block lg:tracking-wide'>Your Comfort, Our Priority</span> */}
//                                 <h1 className='text-3xl text-white lg:text-5xl font-bold lg:tracking-wide lg:pr-10 lg:py-6 py-3 leading-tight'>
//                                     OniT Careers
//                                 </h1>
//                                 <p className='lg:text-lg text-md text-white font-medium'>
//                                     Join our team of skilled professionals at OniT Services. We're looking for talented AC technicians, plumbers, and electricians who are passionate about delivering quality home services. Build your career with us and enjoy competitive pay, ongoing training, and a supportive work environment that values your expertise and growth.
//                                 </p>

//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </div>


//     </>
//     )
// }

// export default Careers