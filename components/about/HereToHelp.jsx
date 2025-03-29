import React from 'react'



const HereToHelp = () => {


    const aboutUsPagaData = [
        {
            title: "Expert Diagnosis & Solutions",
            description:
                "Our highly trained professionals diagnose issues accurately the first time, saving you time and preventing recurring problems.",
        },
        {
            title: "Affordable Pricing",
            description:
                "We provide detailed upfront quotes with no hidden fees, ensuring you know exactly what you're paying for before work begins.",
        },
        {
            title: "24/7 Service Booking",
            description:
                "When urgent issues arise, our team is ready to respond day or night, providing peace of mind when home emergencies can't wait.",
        },
    ];



    return (
        <>
            <section className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-10">
                <h2 className='font-semibold text-teal-800 text-lg'>We're Here For You</h2>
                <h4 className='font-semibold text-3xl my-2'>Your Trusted Partner in Home Services</h4>
                <p className='text-lg text-gray-800'>We provide certified technicians for AC repair, electrical work, and plumbing services to keep your home running smoothly and comfortably.</p>

                <div className='flex items-center justify-center flex-wrap gap-10 mt-6'>


                    {aboutUsPagaData.map((service, i) => (
                        <div key={i} className="border hover:border-teal-200 rounded-xl shadow-sm p-4 flex itemscenter flex-col w-96  relative">

                            <h3 className='font-semibold my-3 pb-3 text-gray-800 text-xl border-b border-teal-800'>{service.title}</h3>

                            <p className='text-lg text-gray-600'>{service.description}</p>


                        </div>
                    ))
                    }



                </div>

            </section>


        </>
    )
}

export default HereToHelp