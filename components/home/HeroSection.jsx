"use client"

// import dynamic from 'next/dynamic';
// const Select = dynamic(() => import("react-select"), { ssr: false });
import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import ServiceSelection from './ServiceSelection';

// import rickshaw from '../../images/rickshaw.png';
// import ac from '../../images/13-SM636852.png';
// import ca from '../../images/19-SM828398.png';
// import ki from '../../images/chimney.jpeg';
// import pl from '../../images/Group631.jpeg';
// import el from '../../images/elec.jpeg';
// import cl from '../../images/clean.avif';
// import fr from '../../images/frrr.png';
// import di from '../../images/di.webp';

// import { useSubmitContactFormMutation } from '#/store/api/myApi';

// const services = [
//     {
//         label: 'AIR CONDITIONER - Installation, Repair, and Maintenance, including Geysers.',
//         id: "7",
//     },
//     {
//         label: 'CLEANING SERVICES - Cleaning, Sweeping, Dusting, Utensils, etc.',
//         id: "5",
//     },
//     {
//         label: 'PLUMBING - Shower, Tap, Mixer, Cistern and Seat, Overhead Tank Fitting, etc.',
//         id: "6",
//     },
//     {
//         label: 'ELECTRICIAN - Fan, Tube, Inverter, House Wiring, Mixer, Toaster, Grinder, etc.',
//         id: "2",
//     },
//     {
//         label: 'DRIVER (CAR, BIKE) - Pickup and Drop Service',
//         id: "3",
//     },
//     {
//         label: 'CARPENTER - Assembly/Fittings, Door/Window, Furniture Repair, etc.',
//         id: "4",
//     },
//     {
//         label: 'DIGITAL DEVICES - CCTV, Laptop, Printer, Mobiles, DTH, etc.',
//         id: "8",
//     },
//     {
//         label: 'HOME APPLIANCE - Washing Machine, Refrigerator, Microwave Oven, TV, etc.',
//         id: "9",
//     },
//     {
//         label: 'BEAUTY AND PERSONAL CARE - Spa, Massage, Facial, Hair Services, Makeup, Mehndi Art, etc.',
//         id: "10",
//     },
//     {
//         label: 'KITCHEN APPLIANCE - Water Purifier, Chimney, Gas Stove Repair, etc.',
//         id: "11",
//     },
//     {
//         label: 'LIFT REPAIR AND MAINTENANCE',
//         id: "1",
//     },
// ];




const HeroSection = () => {

    const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '', activeLead: true });
    // const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();


    const handleChange = (e) => {
        const { id, value } = e.target;

        // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
        if (id === 'phone') {
            if (!/^\d*$/.test(value)) return; // Prevent non-digit input
            if (value.length > 10) return; // Limit to 10 digits
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Additional validation to ensure phone number has exactly 10 digits
        if (formData.phone.length !== 10) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

        try {
            // await submitContactForm(formData).unwrap();
            console.log("formData", formData);

            alert('Form submitted successfully!');
            setFormData({ name: '', phone: '', service: '', message: '' });
        } catch (err) {
            console.log(err);
            alert('Error submitting form: ' + err.data.error);
        }
    };


    return (<>

        <div>

            <div className="flex flex-wrap relative onit-HeroSection">

                <div className='lg:w-[60%] w-full lg:mt-10 mt-16'>
                    <div className='h-full relative text-gray-500 py-8 sm:py-20 px-7 lg:px-24'>


                        <div className='flex flex-wrap z-10 h-full'>
                            <div className='z-10 w-full'>
                                <span className='text-gray-200 text-base block lg:tracking-wide'>Your Comfort, Our Priority</span>
                                <h1 className='text-3xl text-white lg:text-5xl font-bold lg:tracking-wide lg:pr-10 lg:py-6 py-3 leading-tight'>
                                    Expert AC Repair & Maintenance Services
                                </h1>
                                <p className='lg:text-lg text-md mb-6 text-gray-200 font-medium'>
                                    At Onit Services, we understand the importance of a comfortable home. That's why we offer top-notch AC services, along with expert electricians, cleaners, carpenters, and plumbers. Whether you need a quick fix or a complete overhaul, our team is here to ensure your home runs smoothly and efficiently. Let us take care of your home, so you can focus on what matters most.
                                </p>
                                <button className="flex items-center justify-center sm:justify-start">
                                    <Link href="tel:+91-8800502322" className='flex items-center justify-center gap-1 border-2 p-1 pr-3 font-medium text-lg rounded-full mt-4 text-white'>
                                        <span className='bg-white rounded-full p-3 text-black vibrating-icon'>
                                            <FaPhoneAlt size="1.2em" />
                                        </span>
                                        <span className="px-2"> Book Your Service Now </span>
                                    </Link>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>


                {/* half */}


                <div className='lg:w-[39%] w-full flex justify-center items-center flex-shrink-0 flex-grow-0 relative lg:mt-10'>
                    <div className='px-4 lg:py-10 py-2 xl:px-18 relative'>

                        <div className='z-10 relative'>
                            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl">
                                <h3 className="text-white text-xl font-medium mb-6 text-center">Our Services</h3>
                                <ServiceSelection />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>


    </>
    )
}

export default HeroSection;












{/*
<span className='text-white text-2xl block lg:tracking-wide mt-2 ml-4 font-medium'>Let&apos;s Talk</span>


<form onSubmit={handleSubmit} className="flex gap-4 flex-col max-w-md mx-auto p-4 rounded-lg">
    {['name', 'phone', 'service', 'message'].map((field) => (
        <div key={field}>
            <label className="text-white" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            {field === 'message' ? (
                <textarea
                    id={field}
                    placeholder={`Enter your ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full rounded-md p-2 px-3 mt-1 bg-white"
                />
            ) : field === 'service' && services?.length > 0 ? (
                <Select
                    className="bg-white text-sm rounded-xl mt-1"
                    placeholder="Select an option"
                    options={services?.map((service) => ({
                        value: service.label,
                        label: service.label
                    }))}
                    value={services.find((service) => service.label === formData.service) || null}
                    onChange={(selectedOption) =>
                        setFormData((prev) => ({ ...prev, service: selectedOption ? selectedOption.value : "" }))
                    }
                    isClearable
                    isSearchable
                />

            )
                : (
                    <input
                        id={field}
                        type="text"
                        placeholder={`Enter ${field}`}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full rounded-md p-2 px-3 mt-1 bg-white"
                    />
                )}
        </div>
    ))}

    <div className='flex justify-center flex-col'>
        // {isSuccess && <p className="text-white">Form submitted successfully!</p>}
        // {isError && <p className="text-white">Error: {error?.data?.error || 'Something went wrong'}</p>}

        <button
            type="submit"
            className="text-base mt-4 cursor-pointer lg:text-lg tracking-widest border-2 px-6 lg:px-8 py-2 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-emerald-700"
        // disabled={isLoading}
        >
            Submit
        // {isLoading ? 'Submitting...' : 'Submit'} 
        </button>

    </div>
</form>

*/}