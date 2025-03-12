"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { toast } from "sonner";
import axios from "axios";

const Select = dynamic(() => import("react-select"), { ssr: false });

const services = [
  {
    label:
      "AIR CONDITIONER - Installation, Repair, and Maintenance, including Geysers.",
    value:
      "AIR CONDITIONER - Installation, Repair, and Maintenance, including Geysers.",
    id: "7",
  },
  {
    label:
      "ELECTRICIAN - Fan, Tube, Inverter, House Wiring, Mixer, Toaster, Grinder, etc.",
    value:
      "ELECTRICIAN - Fan, Tube, Inverter, House Wiring, Mixer, Toaster, Grinder, etc.",
    id: "2",
  },
  {
    label: "DRIVER (CAR, BIKE) - Pickup and Drop Service",
    value: "DRIVER (CAR, BIKE) - Pickup and Drop Service",
    id: "3",
  },
  {
    label: "CARPENTER - Assembly/Fittings, Door/Window, Furniture Repair, etc.",
    value: "CARPENTER - Assembly/Fittings, Door/Window, Furniture Repair, etc.",
    id: "4",
  },
  {
    label: "CLEANING SERVICES - Cleaning, Sweeping, Dusting, Utensils, etc.",
    value: "CLEANING SERVICES - Cleaning, Sweeping, Dusting, Utensils, etc.",
    id: "5",
  },
  {
    label:
      "PLUMBING - Shower, Tap, Mixer, Cistern and Seat, Overhead Tank Fitting, etc.",
    value:
      "PLUMBING - Shower, Tap, Mixer, Cistern and Seat, Overhead Tank Fitting, etc.",
    id: "6",
  },
  {
    label: "DIGITAL DEVICES - CCTV, Laptop, Printer, Mobiles, DTH, etc.",
    value: "DIGITAL DEVICES - CCTV, Laptop, Printer, Mobiles, DTH, etc.",
    id: "8",
  },
  {
    label:
      "HOME APPLIANCE - Washing Machine, Refrigerator, Microwave Oven, TV, etc.",
    value:
      "HOME APPLIANCE - Washing Machine, Refrigerator, Microwave Oven, TV, etc.",
    id: "9",
  },
  {
    label:
      "BEAUTY AND PERSONAL CARE - Spa, Massage, Facial, Hair Services, Makeup, Mehndi Art, etc.",
    value:
      "BEAUTY AND PERSONAL CARE - Spa, Massage, Facial, Hair Services, Makeup, Mehndi Art, etc.",
    id: "10",
  },
  {
    label:
      "KITCHEN APPLIANCE - Water Purifier, Chimney, Gas Stove Repair, etc.",
    value:
      "KITCHEN APPLIANCE - Water Purifier, Chimney, Gas Stove Repair, etc.",
    id: "11",
  },
  {
    label: "LIFT REPAIR AND MAINTENANCE",
    value: "LIFT REPAIR AND MAINTENANCE",
    id: "1",
  },
];

const timePreferences = [
  { label: "Immediately", value: "IMMEDIATELY" },
  { label: "Within 24 hours", value: "WITHIN_24_HOURS" },
  { label: "Specific Date and Time", value: "SPECIFIC_DATE_AND_TIME" },
];

const inputsData = [
  {
    label: "Service You Required",
    field: "service",
    type: "select",
    options: services,
    required: true,
  },
  { label: "Specific Requirements - it helps", field: "requirements" },
  { label: "Name (Contact Person)", field: "name" },
  { label: "WhatsApp Number", field: "whatsapp_number", required: true },
  { label: "Alternate Number", field: "alternate_number" },
  {
    label: "House Number / Street",
    field: "house_number",
    type: "textarea",
    required: true,
  },
  { label: "Locality", field: "locality" },
  { label: "Pincode", field: "pincode" },
  { label: "City", field: "city" },
  { label: "State", field: "state" },
  {
    label: "Time Preference",
    field: "time_preference",
    type: "select",
    options: timePreferences,
    required: true,
  },
  { label: "Country", field: "country" },
];

export default function ServiceRequest() {
  const [formData, setFormData] = useState({
    service: "",
    requirements: "",
    name: "",
    time_preference: "",
    specific_date_time: "",
    whatspp_number: "",
    alternate_number: "",
    house_number: "",
    locality: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
    if (id === "whatspp_number" || id === "alternate_number") {
      if (!/^\d*$/.test(value)) return; // Prevent non-digit input
      if (value.length > 10) return; // Limit to 10 digits
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    console.log("formData", formData);

    e.preventDefault();
    try {
      await axios.post(
        "https://api.onit.services/center/public-web-ticket-booking-paid",
        {
          service_provided_for: formData.service,
          specific_requirement: formData.requirements,
          personal_details: {
            primary_phone: {
              country_code: "+91",
              mobile_number: formData.whatspp_number,
            },
            alternate_phone: {
              country_code: "+91",
              mobile_number: formData.alternate_number,
            },
            name: formData.name,
          },
          time_preference: {
            time_preference_type: formData.time_preference,
            ...(formData.time_preference === "SPECIFIC_DATE_AND_TIME" && {
              specific_date_time: formData.specific_date_time,
            }),
          },
          address_details: {
            house_number: formData.house_number,
            locality: formData.locality,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
            country: formData.country,
          },
        }
      );
      toast.success("Service request submitted successfully!");
    } catch (error) {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
      // toast.error("Error submitting request. Please try again.");
    }
  };

  

  return (
    <Card className="w-full max-w-4xl lg:px-6 px-2 mb-20 mx-auto lg:relative lg:shadow-2xl -top-10 z-10 bg-white">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-center">
            Service Request
          </CardTitle>
          <CardDescription className="text-center text-lg mb-6">
            Please elaborate on your specific requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
            {inputsData.map(({ label, field, type, options, required }) => (
              <div key={field}>
                <Label className="mb-2 text-md" htmlFor={field}>
                  {label}{required && <span className="text-red-500">*</span>}
                </Label>
                {type === "select" ? (
                  <Select
                    className="mt-1"
                    options={options}
                    placeholder={`Select ${label}`}
                    value={
                      options.find(
                        (option) => option.value === formData[field]
                      ) || null
                    }
                    required={required}
                    onChange={(selectedOption) =>
                      setFormData((prev) => ({
                        ...prev,
                        [field]: selectedOption ? selectedOption.value : "",
                      }))
                    }
                  />
                ) : (
                  <Input
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Enter ${label}`}
                    required={required}
                    className="rounded-sm py-4"
                  />
                )}
              </div>
            ))}

            {formData.time_preference === "SPECIFIC_DATE_AND_TIME" && (
              <div className="md:colspan-2">
                <Label className="mb-2 text-md">Select Date & Time</Label>
                <Input
                  type="datetime-local"
                  id="specific_date_time"
                  value={formData.specific_date_time}
                  onChange={handleChange}
                    className="rounded-sm py-4"
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="mt-8 flex justify-center">
          <Button
            type="submit"
            className="px-10 py-6 cursor-pointer bg-teal-800 hover:bg-gray-700 rounded-full"
          >
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

//  : type === 'textarea' ? (
//   <textarea
//     id={field}
//     placeholder={`Enter your ${label}`}
//     value={formData[field]}
//     onChange={handleChange}
//     className="w-full rounded-md p-2 px-3 mt-1 bg-white"
//   />
// )
