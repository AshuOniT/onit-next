"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"


export default function ACServicePlans() {
  const [acType, setAcType] = useState("split")
  const [expandedCard, setExpandedCard] = useState(null)

  // Different plans for Split AC and Window AC
  const splitACPlans = [
    {
      "title": "AC Jet Service",
      "description": "Cleaning of AC with water jet by an expert engineer for better cooling and lower power consumption.",
      "isAvailable": true,
      "price": "₹599",
      "points": [
        "Deep cleaning of indoor and outdoor AC unit",
        "Removes dust and debris buildup",
        "Improves cooling efficiency",
        "Reduces power consumption",
        "Extends AC lifespan"
      ]
    },
    {
      "title": "AC Repair",
      "description": "Thorough inspection and repairs of AC problems like less cooling, water leakage etc. by an expert engineer.",
      "isAvailable": true,
      "price": "₹499",
      "points": [
        "Diagnosis of AC issues",
        "Fixing water leakage problems",
        "Repairing minor electrical faults",
        "Thermostat and sensor checks",
        "Ensuring optimal performance"
      ]
    },
    {
      "title": "AC Gas Refilling",
      "description": "Gas charging for your AC including repairs for minor leakages.",
      "isAvailable": true,
      "price": "₹2,499",
      "points": [
        "Refilling refrigerant gas",
        "Fixing minor leakages",
        "Ensuring proper cooling efficiency",
        "Checking gas pressure levels",
        "Leakage detection for long-term performance"
      ]
    }
  ];


  const windowACPlans = [

    {
      "title": "AC Jet Service",
      "description": "Cleaning of AC with water jet by an expert engineer for better cooling and lower power consumption.",
      "isAvailable": true,
      "price": "₹599",
      "points": [
        "Deep cleaning of indoor and outdoor AC unit",
        "Removes dust and debris buildup",
        "Improves cooling efficiency",
        "Reduces power consumption",
        "Extends AC lifespan"
      ]
    },
    {
      "title": "AC Repair",
      "description": "Thorough inspection and repairs of AC problems like less cooling, water leakage etc. by an expert engineer.",
      "isAvailable": true,
      "price": "₹499",
      "points": [
        "Diagnosis of AC issues",
        "Fixing water leakage problems",
        "Repairing minor electrical faults",
        "Thermostat and sensor checks",
        "Ensuring optimal performance"
      ]
    },
    {
      "title": "AC Gas Refilling",
      "description": "Gas charging for your AC including repairs for minor leakages.",
      "isAvailable": true,
      "price": "₹2,499",
      "points": [
        "Refilling refrigerant gas",
        "Fixing minor leakages",
        "Ensuring proper cooling efficiency",
        "Checking gas pressure levels",
        "Leakage detection for long-term performance"
      ]
    }
  ];

  // Select plans based on AC type
  const currentPlans = acType === "split" ? splitACPlans : windowACPlans

  return (
    <div className="w-full bg-teal-600 overflow-hidden">
      <div className="max-w-7xl mx-auto md:p-6 lg:py-20">
        <div className="flex flex-col lg:flex-row bg-white md:rounded-lg overflow-hidden">
          {/* Left Section - Benefits */}
          <div className="lg:w-6/12 p-6 lg:p-8 order-2 lg:order-1">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Regular AC Maintenance Helps To</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Improve Cooling</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Reduce Electricity Bills</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Increase AC's Lifespan</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Minimize Breakdowns</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">AC Repairs & Maintenance Service</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>High-Quality AC Repairs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Experienced AC Service Engineers</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>90-day warranty on spare parts</span>
                </li>
               
                <li className="flex items-start">
                  <div className="mr-2 bg-teal-500 rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>30-day warranty on service</span>
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-600">
              <p>
                We offer Air Conditioner services in{" "}
                <Link href="ac-repair-services-in-delhi" className="text-teal-600 font-medium">
                  Delhi
                </Link>{", "}
                <Link href="ac-repair-services-in-delhi" className="text-teal-600 font-medium">
                  Indirapuram
                </Link>{", "}
                <Link href="ac-repair-services-in-noida" className="text-teal-600 font-medium">
                  Noida
                </Link>{" and "}
                <Link href="ac-repair-services-in-ghaziabad" className="text-teal-600 font-medium">
                  Ghaziabad{"."}
                </Link>
              </p>
              <p className="mt-4">
                Have questions on your mind?{" "}
                <Link href="#faqs" className="text-teal-600 font-medium">
                  Read The FAQs
                </Link>
              </p>
            </div>
          </div>

          {/* Right Section - Plans */}
          <div className="lg:w-6/12 p-6 lg:p-8 bg-gray-50 order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-center mb-4">AC Service & Maintenance Plans</h2>
            <p className="text-center mb-4">Select the type of Air Conditioner</p>

            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant="outline"
                onClick={() => setAcType("split")}
                className={cn(
                  "min-w-[120px] border-2 rounded-none px-10 py-5 cursor-pointer",
                  acType === "split" ? "bg-teal-50 border-teal-300 hover:bg-white" : "hover:bg-white border-gray-300 bg-gray-50",
                )}
              >
                Split AC
              </Button>
              <Button
                variant="outline"
                onClick={() => setAcType("window")}
                className={cn(
                  "min-w-[120px] border-2 rounded-none px-10 py-5 cursor-pointer",
                  acType === "window" ? "bg-teal-50 border-teal-300 hover:bg-white" : "hover:bg-white border-gray-300 bg-gray-50",
                )}
              >
                Window AC
              </Button>
            </div>

            <div className="space-y-4">
              {currentPlans.map((plan, index) => (
                <Card key={index} className="border-gray-200 rounded-none py-0 shadow-sm">
                  <div className="p-3">
                    {/* Card Header */}
                    <div className="flex justify-between flex-col lg:flex-row items-center gap-8 m-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{plan.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
                      </div>

                      <div className="flex lg:flex-col justify-center items-center gap-10 lg:gap-6">

                        <div className="flex items-center gap-4">
                         <Link href="/service-form"> <Button variant="default" className="border-teal-600 hover:bg-white border bg-white rounded-sm text-teal-700 whitespace-nowrap cursor-pointer">
                            Request Service
                          </Button>
                          </Link>
                        </div>

                        <div>
                          <button
                            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                            className="text-gray-500 hover:text-gray-700 p-2 cursor-pointer border rounded-lg"
                          >
                            {expandedCard === index ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>

                      </div>


                    </div>

                    {/* Expandable Content */}
                    {expandedCard === index && (
                      <div className="m-4 space-y-3 border-t pt-4">
                        {plan.points.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start gap-2">
                            <div className="mt1">
                              <div className="rounded-full bg-teal-500 p-1">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            </div>
                            <span className="text-sm text-gray-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Availability Warning */}
                    {!plan.isAvailable && (
                      <div className="mt-4 flex items-center">
                        <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                        <span className="text-xs text-amber-600">Sorry, this service is temporarily not available</span>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

