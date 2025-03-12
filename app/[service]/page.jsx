"use client"

import HeroSection from '@/components/service/HeroSection';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'

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
        </>
    )
}

export default OnitServices