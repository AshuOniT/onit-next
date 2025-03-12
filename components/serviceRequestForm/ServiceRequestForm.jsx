"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { toast } from "sonner"


// const [personalDetails, setPersonalDetails] = useState({
//   service: productDetails,
//   name: '',
//   whatspp_number: '',
//   alternate_number: '',
//   house_number: '',
//   requirements: '',
//   locality: '',
//   city: '',
//   state: '',
//   country: 'India',
//   pincode: '',
//   time_preference: '',
//   offer_code: 'ONIT2025',
//   dropLocation: '',
//   vehicles: [],
//   offerPrice: null,
//   pickLocation: '',
// });


export default function OnBoardCom() {


  const [formData, setFormData] = useState({
    name: '', email: '', password: '', employeeId: '', designation: '', department: '', joiningDate: '', phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("OnBoardinging...");
    console.log("formData", formData);

    // try {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();
    //   console.log("data", data);
      

    //   if (response.ok) {
    //     toast.success('OnBoard Successful', { id: toastId });
    //     setFormData({ name: '', email: '', password: '', employeeId: '', designation: '', department: '', joiningDate: '', phone: '' });
    //     // router.push("/login");
    //   } else {
    //     toast.error(data.message || 'OnBoarding failed!', { id: toastId });
    //   }
    // } catch (error) {
    //   toast.error('An error occurred while onboarding', { id: toastId });
    //   console.error(error);
    // }
  };



  return (
      <Card className="w-full max-w-4xl lg:px-6 px-2 mb-20 mx-auto lg:relative shadow-2xl -top-10 z-10 bg-white">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-semibold text-center my-2">Service Request</CardTitle>
            <CardDescription className="text-center text-lg mb-6">
              Please elaborate your specific requirements
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(['name', 'email', "phone", 'password', 'employeeId', 'designation', 'department', "joiningDate"]).map((field) => (
                <div key={field}>
                  <Label className="mb-2 text-md" htmlFor={field}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Label>
                  <Input
                    id={field}
                    type={field === "joiningDate" ? "date" : "text"}
                    required
                    placeholder={`Enter your ${field}`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full mt-1 py-5"
                  />
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="mt-8 flex justify-center items-center">
            <Button type="submit" className="cursor-pointer hover:bg-teal-900 text-md px-10 py-6 bg-teal-800 rounded-full transition-colors">
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
  )
}


