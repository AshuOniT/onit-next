import { MdVerified } from "react-icons/md";
import { MdHandyman } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <>
      <section className="container mx-auto max-w-screen-lg xl:max-w-screen-xl px-4 md:px-6 py-12">
        <div className='grid sm:grid-cols-2 gap-10 grid-cols-1'>
          <div className="rounded-xl px4">
            <h2 className='font-semibold text-teal-800 text-lg'>Why Choose Us</h2>
            <h4 className='font-semibold sm:text-3xl text-2xl my-2'>Your Home Deserves Our Best</h4>
            <p className='text-md text-gray-800'>
              From AC repairs to plumbing emergencies, we bring expertise to every corner of your home. Our certified technicians treat your space with respect, delivering solutions that last. One call connects you to our entire network of skilled professionals ready to make your home problems disappear.
            </p>
            <div className='grid sm:grid-cols-2 gap-10 mt-6 grid-cols-1 px-4'>
              <div className="">
                <span><MdVerified className='text-blue-500 text-xl' /></span>
                <h5 className='font-semibold my-1'>Certified Experts</h5>
                <p className='text-sm text-gray-500 font-normal'>Trained professionals for every home service.</p>
              </div>

              <div className="">
                <span><MdAccessTime className='text-purple-500 text-xl' /></span>
                <h5 className='font-semibold my-1'>Prompt Arrival</h5>
                <p className='text-sm text-gray-500 font-normal'>We respect your time with punctual service.</p>
              </div>

              <div className="">
                <span><MdHandyman className='text-yellow-500 text-xl' /></span>
                <h5 className='font-semibold my-1'>Transparent Pricing</h5>
                <p className='text-sm text-gray-500 font-normal'>No surprises or hidden fees ever.</p>
              </div>

              <div className="">
                <span><MdSecurity className='text-teal-700 text-xl' /></span>
                <h5 className='font-semibold my-1'>Guaranteed Results</h5>
                <p className='text-sm text-gray-500 font-normal'>
                  We stand behind every job with our satisfaction promise.
                </p>
              </div>
            </div>
          </div>

          <div className="borde rounded-xl p4 flex justify-center items-center flex-col text-center relative">
            <Image src="https://content.jdmagicbox.com/comp/service_catalogue/ac-repair-and-services-044pxx44.xx44.200804132355.r3b3-6boccdu.jpg" className='rounded-xl' alt="component image" width={500} height={400} />
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs