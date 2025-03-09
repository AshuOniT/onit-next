import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import onitLogo from "@/public/onitLogo/onitLogo.png";
import playstore from "@/public/onitLogo/playstore.webp";
import appstore from "@/public/onitLogo/Appstore.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" bg-gray-800">
        <div className="mx-auto md:mx-6 xl:mx-10 px-4 md:py-4">
          <div className="flex flex-col items-stretch justify-center md:flex-row md:items-start md:justify-around md:gap-y-4">
            <div className="md:w-[30%] self-center md:self-auto">
              <div className="my-4">
                <Image src={onitLogo} alt="onitLog" className="h-16 object-contain" />
              </div>
              <div className="text-gray-300">
                <p>OniT services
                  Aspen Heights Vaibhav Khand,
                  Indirapuram, Gaziabad ( UP )
                  201014</p>
                <p>Ph. 8800502322</p>
              </div>
            </div>

            <div className="w-full md:w-[70%] my-4">
              <div className="px-4">
                <h3 className="text-gray-300 text-center my-4 md:my-0 text-xl font-bold  md:text-left">
                  Quick Links
                </h3>
                <ul className="mx-auto w-fit md:w-full text-sm columns-2 gap-x-6 md:gap-x-0 gap-y-2 md:flex md:flex-wrap md:flex-row md:items-center justify-start md:divide-x-2 divide-gray-400 my-4">
                  <li className="py-1 md:py-0 leading-4 md:px-2 text-gray-300 hover:text-teal-700 ">
                    <Link href="/">Terms of Service</Link>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 text-gray-300 hover:text-teal-700 ">
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 text-gray-300 hover:text-teal-700 ">
                    <Link href="/">Refund Policy</Link>
                  </li>
                  <li className="py-1 md:py-0 leading-4 md:px-2 text-gray-300 hover:text-teal-700 ">
                    <Link href="/contact-us">Help &amp; Contact </Link>
                  </li>
                </ul>
              </div>
              <hr className="mx-4 border-0.5 border-gray-400" />
              <div className="px-4 flex items-center flex-col-reverse md:flex-row md:items-start justify-between gap-y-4 gap-x-4 my-4 w-full ">


                <div className="w-full md:m-0">
                  <ul className="flex items-center justify-center md:justify-start gap-x-4">
                    <li className="w-fit flex justify-center">
                      <Image
                        src={playstore}
                        className="object-contain h-9 w-auto"
                        alt="Playstore"
                      />
                    </li>
                    <li className="w-fit flex justify-center">
                      <Image
                        src={appstore}
                        className="object-contain h-9 w-auto"
                        alt="Appstore"
                      />
                    </li>
                  </ul>
                </div>


                <div className="w-full">
                  <ul className="flex items-center justify-center md:justify-end gap-x-4">
                    <li
                      title="Facebook Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-300 hover:text-[#3B5998]"
                    >
                      <Link href="https://www.facebook.com/profile.php?id=100083150591316" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF fontSize={25} />
                      </Link>
                    </li>
                    <li
                      title="Instagram Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-300 hover:text-[#C13584] "
                    >
                      <Link href="https://www.instagram.com/onitservices/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram fontSize={25} />
                      </Link>
                    </li>
                    <li
                      title="Linked Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-300 hover:text-[#3B5998]"
                    >
                      <Link href="/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn fontSize={25} />
                      </Link>
                    </li>
                    <li
                      title="Youtube Account"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-300 hover:text-[#FF0000]"
                    >
                      <Link href="https://www.youtube.com/channel/UCuhzqj34gLM10HFT8BUXQGg" target="_blank" rel="noopener noreferrer">
                        <FaYoutube fontSize={25} />
                      </Link>
                    </li>
                    <li
                      title="Twitter Page"
                      className="transition-all duration-200 ease-in-out delay-75 hover:cursor-pointer text-gray-300 hover:text-[#1DA1F2]"
                    >
                      <Link href="https://x.com/services_onit?t=SquaGUwKq6gK6wi1PisNKQ&s=08" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter fontSize={25} />
                      </Link>
                    </li>
                  </ul>
                </div>


              </div>
            </div>

          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row items-center justify-between bg-black text-white h-full py-4 px-10">
          <p className="text-xs font-medium text-gray-300">Designed & Developed by <span className="font-semibold text-white"> OniT Services </span></p>
          <p className="text-sm font-semibold text-gray-300">
            <span> &copy; {new Date().getFullYear()}.</span>
            <span> All right reserved. &nbsp;</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
