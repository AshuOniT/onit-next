"use client";
import { useState, useEffect } from "react";
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

import useRazorpay from 'react-razorpay';


const Select = dynamic(() => import("react-select"), { ssr: false });


const timePreferences = [
  { label: "Immediately", value: "IMMEDIATELY" },
  { label: "Within 24 hours", value: "WITHIN_24_HOURS" },
  { label: "Specific Date and Time", value: "SPECIFIC_DATE_AND_TIME" },
];



export default function ServiceRequest() {
  const [formData, setFormData] = useState({
    service: "",
    requirements: "",
    name: "",
    time_preference: "",
    specific_date_time: "",
    whatsapp_number: "",
    alternate_number: "",
    house_number: "",
    locality: "",
    pincode: "",
    city: "",
    state: "",
    country: "India",
  });

  const [categoryList, setCategoryList] = useState([]);
  const [ticketId, setTicketId] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [otpSend, setOtpSend] = useState(false);
  const [otp, setOtp] = useState('');



  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        let { data } = await axios.get("https://api.onit.services/admin/get-all-active-services");
        setCategoryList(
          data.data.map((item) => ({
            label: item.service_name,
            value: item._id,
          }))
        );
      } catch (error) {
        console.error("Error fetching category list:", error);
      }
    };

    fetchCategoryList();
  }, []);



  const handleSendOtp = async (values) => {
    try {
      setResendDisabled(true);
      setCountdown(60);

      const _data = {
        country_code: "+91",
        mobile_number: values?.whatsapp_number || formData.whatsapp_number,
        name: values?.name,
        address_details_permanent: { pincode: values?.pincode || formData.pincode,  },
      };

      await axios.post(
        "https://api.onit.services/consumerAppAppRoute/sent-otp-by-web",
        _data
      );

      setOtpSend(true);
      toast.success("OTP sent successfully!");

      // Countdown Timer
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(interval);
            setResendDisabled(false);
          }
          return prevCountdown - 1;
        });
      }, 1000);
    } catch (error) {
      console.error(error);
      setOtpSend(false);
      toast.error("Failed to send OTP. Try again.");
    }
  };



  const inputsData = [
    {
      label: "Service You Required",
      field: "service",
      type: "select",
      options: categoryList,
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


  const handleChange = (e) => {
    const { id, value } = e.target;

    // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
    if (id === "whatsapp_number" || id === "alternate_number") {
      if (!/^\d*$/.test(value)) return; // Prevent non-digit input
      if (value.length > 10) return; // Limit to 10 digits
    }
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    // console.log("formData", formData);

    e.preventDefault();
    try {
      const result = await axios.post(
        "https://api.onit.services/center/public-web-ticket-booking-paid",
        {
          service_provided_for: formData.service,
          specific_requirement: formData.requirements,
          personal_details: {
            primary_phone: {
              country_code: "+91",
              mobile_number: formData.whatsapp_number,
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

      if (result?.data?.data?.ticket_id) {
        setTicketId(result?.data?.data?.ticket_id);
        handleSendOtp(formData);
      } else {
        setLoading(false);
      }

      console.log(result, "result service form submission");
      toast.success("Service request submitted successfully!");
    } catch (error) {

      setLoading(false);
      console.log(error.message, "error service form submission");
      toast.error(error.message);
    }
  };


  const handleCheckUserExist = async () => {
    setLoading(true); // Start loading before the request

    try {
      if (!formData?.whatsapp_number || !formData?.name || !formData?.pincode) {
        console.error('Missing required fields in formData');
        setLoading(false);
        return;
      }

      const response = await axios.post(
        'https://api.onit.services/consumerAppAppRoute/register-consumer-by-web',
        {
          personal_details: {
            phone: {
              country_code: '+91',
              mobile_number: formData.whatsapp_number,
            },
            name: formData.name,
          },
          address_details_permanent: {
            pincode: formData.pincode,
          },
        }
      );

      const resData = response?.data;

      if (resData?.status === 200 && resData?.data?.consumerDetails?._id) {
        const { token, consumerDetails } = resData.data;
        setAccessToken(token);
        setUserId(consumerDetails._id);

        // await handleInitiatePayment(consumerDetails._id, token);
        await handleInitiatePayment();
      } else {
        console.warn('User registration failed or user not found:', resData);
      }
    } catch (error) {
      console.error('Error during user check:', error.response?.data || error.message);
    } finally {
      setLoading(false); // Stop loading in all cases
    }
  };


  // const handleCheckUserExist = async () => {
  //   try {
  //     let res1 = await axios.post(
  //       'https://api.onit.services/consumerAppAppRoute/register-consumer-by-web',
  //       {
  //         personal_details: {
  //           phone: {
  //             country_code: '+91',
  //             mobile_number: formData?.whatsapp_number,
  //           },
  //           name: formData.name,
  //         },
  //         address_details_permanent: {
  //           pincode: formData.pincode,
  //         },
  //       }
  //     );

  //     if (res1?.data?.status === 200) {
  //       // console.log(res1.data.data?.consumerDetails?._id, 'Transaction');
  //       setAccessToken(res1?.data?.data?.token);
  //       setUserId(res1?.data?.data?.consumerDetails?._id);
  //         handleInitiatePayment();
  //       // handleInitiatePayment(
  //         // res1?.data?.data?.consumerDetails?._id,
  //         // res1?.data?.data?.token
  //       // );
  //     } else {
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log('Error', error);
  //     setLoading(false);
  //   }
  // };



  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const _data = {
        country_code: "+91",
        mobile_number: formData?.whatsapp_number,
        otp: parseInt(otp),
      };

      const res2 = await axios.post(
        "https://api.onit.services/consumerAppAppRoute/verify-otp-by-web",
        _data
      );

      if (res2?.data?.status === 200) {
        setOtpSend(false);
        setOtp(""); // Clear OTP input
        toast.success("OTP verified successfully!");
        handleCheckUserExist();
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error) {
      console.error(error);
      setOtpSend(true);
      toast.error("Incorrect OTP, please try again.");
    }
  };



  const handleInitiatePayment = async () => {
    try {
      await axios({
        method: 'get',
        url: `https://api.onit.services/center/get-razorpay-key`,
      }).then((res) => {
        const options = {
          key: res?.data?.data?.key_id,
          amount:
            personalDetails?.service?.value === '64462802f77b1ff1d68890fd'
              ? platformCharge * 100
              : 99 * 100,
          currency: 'INR',
          name: 'OnIt Services',
          description: 'Request Booking',
          image: 'https://onit.services/static/media/main_logo.406f2fdc.png',
          // order_id: ticketId,
          handler: (res1) => {
            if (
              personalDetails?.service?.value === '64462802f77b1ff1d68890fd'
            ) {
              if (res1.razorpay_payment_id.trim()) {
                handleUpdatePickDropStatus(
                  res1.razorpay_payment_id.trim(),
                  'success'
                );
              } else {
                handleUpdatePickDropStatus(
                  res1.razorpay_payment_id.trim(),
                  'failed'
                );
                setLoading(false);
              }
            } else {
              if (res1.razorpay_payment_id.trim()) {
                handleUpdateTicketStatus(
                  res1.razorpay_payment_id.trim(),
                  'success'
                );
              } else {
                handleUpdateTicketStatus(
                  res1.razorpay_payment_id.trim(),
                  'failed'
                );
                setLoading(false);
              }
            }
          },
          prefill: {
            name: ticketId,
            email: 'email.com',
            contact: formData.whatsapp_number,
          },
          theme: {
            color: '#3399cc',
          },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
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



            {otpSend && (
              <div className="mb-4">
                {/* OTP Input Field */}
                <div className="mb-2">
                  <Label className="mb-2 text-md block" htmlFor="otp">
                    OTP
                  </Label>
                  <Input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="border border-gray-300 rounded-sm w-full p-2"
                    placeholder="Enter OTP"
                  />
                </div>

                {/* Resend OTP and Verify OTP Buttons */}
                <div className="flex justify-between items-center">
                  {resendDisabled && (
                    <div className="text-sm text-gray-600">
                      Resend OTP in ({countdown}s)
                    </div>
                  )}
                  <button
                    onClick={handleSendOtp}
                    className={`text-white text-sm px-3 py-1 rounded ${resendDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                      }`}
                    disabled={resendDisabled}
                  >
                    Resend OTP
                  </button>
                  <button
                    onClick={handleVerifyOtp}
                    className="bg-green-500 text-white text-sm px-3 py-1 rounded"
                  >
                    Verify OTP
                  </button>
                </div>
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
