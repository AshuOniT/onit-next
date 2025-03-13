"use client"

import React from 'react'
import GooglePlayStoreCta from "@/components/layout/GooglePlayStoreCta";
import HeroSection from '@/components/service/HeroSection';
import { useParams, useRouter } from 'next/navigation';
import ACServicePlans from '@/components/service/AcServicePlan';
import PlaneCta from '@/components/layout/PlaneCta';
import HowItWorks from '@/components/home/HowItWorks';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import NeedHelp from '@/components/layout/NeedHelp';

const OnitServices = () => {

    const params = useParams();
    const router = useRouter();
    const { service } = params;

    const activeSlugData = [
        { slug: "ac-services-noida" },
        { slug: "ac-services-delhi" },
        { slug: "ac-services-ghaziabad" }
    ];


    if (activeSlugData) {
        const isSlugActive = activeSlugData?.some((item) => `${item?.slug}` === service);

        // Redirect to 404 if no matching slug is found
        if (!isSlugActive) {
            router.replace("/404");
            return null
        }
    }

    return (
        <>
            <HeroSection serviceSlug={service} />

            <GooglePlayStoreCta />

            <ACServicePlans />

            <PlaneCta />

            <HowItWorks />

            <WhyChooseUs />

            <NeedHelp />

        </>
    )
}

export default OnitServices