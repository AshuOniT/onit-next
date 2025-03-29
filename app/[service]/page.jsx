
import metaData from "@/staticMeta/meta.json";
import ServicesComponent from "./ServicesComponent";

export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const { service } = await params

    const meta = metaData[service] || {};

    return {
        title: meta.title || "Professional Home Services | AC Repair, Electrical & Cleaning | Onit",
        description: meta.description || "Trusted experts providing comprehensive home services including AC repair, electrical work, and cleaning. Fast response, quality workmanship, and satisfaction guaranteed across Delhi NCR.",
        robots: meta.robots,
        alternates: {
            canonical: service,
        },
    }
}


const OnitServices = () => {


    return (
        <>
            <ServicesComponent />

        </>
    )
}

export default OnitServices