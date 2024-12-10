// import { useState } from "react"
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp"
// import { Button } from "@/components/ui/button";
// import { useAuthStore } from "@/store/authStore";
// import { useToast } from "@/hooks/use-toast"
// export function VerificationEmailPage() {
//   const [value, setValue] = useState("");
//   const { verifyEmail, isLoading, error, user } = useAuthStore();
//   console.log("user", user);
//   const { toast } = useToast();

//   const handleSubmit = async () => {
//      await verifyEmail(value);
//      if(!error && !isLoading) {
//         toast({
//             title: "Email Verified",
//             description: "Your email has been verified successfully", 
//         })
//     }
//   };


//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
//       {/* Illustration */}

//       {/* Form Container */}
//       <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">
//           OTP VERIFICATION
//         </h2>
//         <p className="text-sm text-gray-600 mb-6">
//           Enter the OTP sent to <span className="font-medium text-gray-800">+91-8976500001</span>
//         </p>

//         {/* OTP Input Centered */}
//         <div className="flex justify-center">
//           <InputOTP
//             maxLength={6}
//             value={value}
//             onChange={(value) => setValue(value)}
//           >
//             <InputOTPGroup className="flex space-x-3">
//               {[...Array(6)].map((_, index) => (
//                 <InputOTPSlot
//                   key={index}
//                   index={index}
//                   className="w-12 h-14 text-lg text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none"
//                 />
//               ))}
//             </InputOTPGroup>
//           </InputOTP>
//         </div>

//         {/* Resend Code */}
//         <div className="mt-4 text-sm text-gray-600">
//           Don’t receive code?{" "}
//           <button
//             onClick={handleResendCode}
//             className="text-purple-600 font-medium hover:underline"
//           >
//             Re-send
//           </button>
//         </div>

//         {/* Submit Button */}
//         <Button
//           onClick={handleSubmit}
//           className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg"
//           disabled={isLoading || value.length < 6}
//         >
//           {isLoading ? "Verifying..." : "Submit"}
//         </Button>

//         {/* Error Message */}
//         {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
//       </div>
//     </div>
//   );
// }



import { useState } from "react"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast"
export function VerificationEmailPage() {
  const [value, setValue] = useState("");
  const { verifyEmail, isLoading, error, user } = useAuthStore();
  console.log("user", user);
  const { toast } = useToast();

  const handleSubmit = async () => {
     await verifyEmail(value);
     if(!error && !isLoading) {
        toast({
            title: "Email Verified",
            description: "Your email has been verified successfully", 
        })
    }
  };

  return (
    <div className="space-y-2 flex flex-col w-full mx-auto justify-center">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup className="mx-auto">
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-sm">
        {value === "" ? (
          <>Enter your verification email code.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
      <Button onClick={handleSubmit}>Verify Email Now</Button>
    </div>
  )
}
