"use client";

import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";




const faqData = {
    "ac-services": [
        {
            "id": "faq-1",
            "question": "Why is regular AC maintenance important?",
            "answer": {
                "type": "list",
                "para": "Regular AC maintenance keeps your cooling system efficient, prevents breakdowns, and extends its lifespan. Here’s why it matters:",
                "content": [
                    "Improves energy efficiency, saving you money on electricity bills.",
                    "Prevents costly repairs by catching issues early.",
                    "Ensures better air quality and a healthier home environment.",
                    "Extends the lifespan of your AC unit, delaying the need for replacements."
                ]
            }
        },
        {
            "id": "faq-2",
            "question": "How often should I service my AC?",
            "answer": {
                "type": "text",
                "content": "It’s recommended to service your AC at least once a year before the peak summer season. If you use it frequently or notice performance issues, scheduling a tune-up every 6 months can help keep it running smoothly."
            }
        },
        {
            "id": "faq-3",
            "question": "What are the signs that my AC needs repair?",
            "answer": {
                "type": "list",
                "para": "If your AC isn’t cooling properly or making strange noises, it might be time for a repair. Watch out for these signs:",
                "content": [
                    "Weak or warm airflow from vents.",
                    "Unusual noises like buzzing, rattling, or grinding.",
                    "Frequent cycling on and off.",
                    "Unpleasant odors when the AC is running.",
                    "Higher-than-usual energy bills."
                ]
            }
        },
        {
            "id": "faq-4",
            "question": "How much does AC repair cost?",
            "answer": {
                "type": "text",
                "content": "The cost of AC repair depends on the issue, the type of AC unit, and the extent of the damage. Minor fixes like filter cleaning or refrigerant refills are more affordable, while major repairs like compressor replacement can be more expensive. Contact us for a free estimate!"
            }
        },
        {
            "id": "faq-5",
            "question": "Do you offer emergency AC repair services?",
            "answer": {
                "type": "text",
                "content": "Yes! We provide emergency AC repair services to get your cooling system back up and running quickly. Whether it's a sudden breakdown in the middle of summer or an unexpected issue, our team is ready to help 24/7."
            }
        },
        {
            "id": "faq-6",
            "question": "What happens during an AC maintenance service?",
            "answer": {
                "type": "list",
                "para": "Our AC maintenance service includes a thorough inspection and tune-up to keep your system in top shape. Here’s what we do:",
                "content": [
                    "Clean or replace air filters for better airflow.",
                    "Check and refill refrigerant levels if needed.",
                    "Inspect electrical connections and tighten any loose wiring.",
                    "Lubricate moving parts to prevent wear and tear.",
                    "Test thermostat settings for accurate temperature control."
                ]
            }
        },
        {
            "id": "faq-7",
            "question": "Can I troubleshoot AC issues myself before calling a technician?",
            "answer": {
                "type": "list",
                "para": "Before calling a technician, you can try these quick troubleshooting steps:",
                "content": [
                    "Check if the thermostat is set to 'cool' mode and at the right temperature.",
                    "Ensure the circuit breaker hasn't tripped.",
                    "Clean or replace the air filter if it’s clogged.",
                    "Inspect vents and ducts for blockages.",
                    "Make sure the outdoor unit is free from debris."
                ]
            }
        },
        {
            "id": "faq-8",
            "question": "Do you offer AC installation services?",
            "answer": {
                "type": "text",
                "content": "Yes, we provide professional AC installation services for all types of cooling systems, including split ACs, window units, and central air conditioning systems. Our experts ensure a hassle-free installation with proper sizing and placement for optimal efficiency."
            }
        }
    ]

};



const Faqs = () => {

    // const data = faqData[serviceDetailPageSlug] || faqData["ac-services"];
    const data = faqData["ac-services"];

    return (
        <section id="faqs" className="border-t container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-8">
            <section className="flex flex-wrap justify-center md:gap-10 gap-5 py-2 my-6">
                <div className="lg:w-[30%] w-full">
                    <h2 className="font-semibold text-orange-500 text-xl">FAQs</h2>
                    <h4 className="font-semibold text-3xl my-2">Ask what you want</h4>
                    <p className="text-lg text-gray-800">
                        Whether you require a complex enterprise software solution or
                        seamless software integration.
                    </p>
                </div>

                <div className="lg:w-[62%] w-full py-2">
                    <Accordion type="single" collapsible className="w-full">
                        {data.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="text-[17px] text-left cursor-pointer text-gray-800 hover:no-underline">
                                    {faq.question || "No question available"}
                                </AccordionTrigger>
                                <AccordionContent className="text-[16px] text-gray-700 my-6">

                                    {faq.answer?.type === "text" && faq.answer?.content && (
                                        <p>{faq?.answer?.content}</p>
                                    )}

                                    {faq.answer?.type === "paragraph" && Array.isArray(faq.answer.content) && (
                                        <>
                                            {faq.answer.headPara && (
                                                <p className="mb-3">{faq.answer.headPara}</p>
                                            )}

                                            {faq.answer.content.map((item, index) => (
                                                <div key={index} className="mb-4 flex">
                                                    {item.para && item.title && <p> <strong>{item.title}:</strong> {item.para}</p>}
                                                </div>
                                            ))}

                                        </>


                                    )}

                                    {faq.answer?.type === "list" && (
                                        <>
                                            {/* Optional paragraph before the list */}
                                            {faq.answer.para && (
                                                <p className="mb-3">{faq.answer.para}</p>
                                            )}
                                            {/* List content */}
                                            {Array.isArray(faq.answer.content) && (
                                                <ul className='list-disc mt-6 list-inside space-y-2'>
                                                    {faq.answer.content.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}

                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </section>
    );
};

export default Faqs;
