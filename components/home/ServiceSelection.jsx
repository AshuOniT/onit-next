"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"



export default function ServiceSelection() {
  const [hoveredService, setHoveredService] = useState(null)
  // Services data with SVG icons
  const services = [
    {
      id: "ac-services",
      name: "AC services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M12 17v3" />
          <path d="M8 17v3" />
          <path d="M16 17v3" />
          <path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
          <path d="m7 13 3-3 4 4 3-3" />
        </svg>
      ),
    },
    {
      id: "carpenter",
      name: "Carpenter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1" />
          <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        </svg>
      ),
    },
    {
      id: "electrician",
      name: "Electrician",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4h-5L7 9h4l-1 6 6-7h-4l1-4z" />
          <path d="M5 18h14" />
          <path d="M7 18v2" />
          <path d="M17 18v2" />
        </svg>
      ),
    },
    {
      id: "kitchen-appliances",
      name: "Kitchen appliances",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12H5V8Z" />
          <path d="M5 15a7 7 0 0 1 14 0" />
          <path d="M19 8h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
          <path d="M5 8h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1" />
        </svg>
      ),
    },
    {
      id: "pick-and-drop",
      name: "Pick and drop",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <path d="M9 17h6" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      ),
    },
    {
      id: "plumber",
      name: "Plumber",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v5" />
          <path d="M6 7h12" />
          <path d="M12 17v-5" />
          <path d="M8 21h8" />
          <path d="M6 7v10a4 4 0 0 0 4 4" />
          <path d="M18 7v10a4 4 0 0 1-4 4" />
        </svg>
      ),
    },
    {
      id: "home-appliances",
      name: "Home Appliances",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8v.01" />
          <path d="M10 8v.01" />
          <path d="M14 8v.01" />
          <path d="M18 8v.01" />
          <path d="M8 12v.01" />
          <path d="M12 12v.01" />
          <path d="M16 12v.01" />
          <path d="M7 16v.01" />
          <path d="M12 16v.01" />
          <path d="M17 16v.01" />
        </svg>
      ),
    },
    {
      id: "digital-devices",
      name: "Digital Devices",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="6" width="14" height="10" rx="1" />
          <path d="M12 16v4" />
          <path d="M8 20h8" />
        </svg>
      ),
    },
    {
      id: "cleaning",
      name: "Cleaning",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 22v-3h3" />
          <path d="M3 7V4h3" />
          <path d="M21 22v-3h-3" />
          <path d="M21 7V4h-3" />
          <path d="M8 22h8" />
          <path d="M12 17v5" />
          <path d="M5 11h14" />
          <path d="M5 6h14" />
          <path d="M8 2h8" />
        </svg>
      ),
    },
  ]


  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="grid grid-cols-3 gap-4 max-w-[360px]">
        {services.map((service, index) => {
          const isHovered = hoveredService === service.id

          return (
            <Link href="service-form"
              key={service.id}>
              <motion.div
                className="flex flex-col items-center cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.3,
                }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <motion.div
                  className={`
                  bg-white/10 backdrop-blur-sm rounded-full w-[70px] h-[70px] 
                  flex items-center justify-center cursor-pointer
                  border border-white/20 shadow-lg
                `}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div className={`text-white ${isHovered ? "text-cyan-300" : ""}`}>{service.icon}</motion.div>
                </motion.div>
                <motion.p
                  className={`
                  mt-2 text-center text-xs font-medium
                  ${isHovered ? "text-cyan-300" : "text-white/90"}
                `}
                >
                  {service.name}
                </motion.p>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

