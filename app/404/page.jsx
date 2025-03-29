'use client'

// import Lottie from "lottie-react"; 
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="bg-gray-900">
    <div className="container mx-auto max-w-screen-xl px-4 md:px-6 pb-16 flex flex-col gap-20 items-center justify-center min-h-screen">


      {/* Second 404 Section */}
      <div className="flex flex-col items-center text-center gap-6 p-6 w-full max-w-4xl">
        <div className="flex flex-col md:flexrow items-center gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-300">404</h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-300"> Page Not Found</h2>
            <p className="text-md text-gray-400 mt-2">We&apos; seem to find the page you&apos;re looking for...</p>
          </div>
          {/* <Lottie animationData={loaderJson1} style={{ maxWidth: "30rem" }} loop={true} /> */}
        </div>
        <Link href="/" passHref>
          <button className="cursor-pointer mt-4 px-6 py-2 bg-teal-700 text-white rounded-lg hover:bg-blue-600 transition">
            Go Home
          </button>
        </Link>
      </div>

      
    </div>
    </section>
  );
}
