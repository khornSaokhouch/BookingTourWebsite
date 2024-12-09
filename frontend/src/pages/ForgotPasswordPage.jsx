// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { useAuthStore } from "@/store/authStore";

// export default function ForgotPasswordPage() {
//   const [email, setEmail] = useState("");
//   const { forgotPassword, message } = useAuthStore();
//   async function onSubmit(e) {
//     e.preventDefault();
//     await forgotPassword(email);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg">
//         <CardHeader className="text-center">
//           <CardTitle className="text-2xl font-bold text-gray-800">
//             Forgot Password
//           </CardTitle>
//           <CardDescription className="text-sm text-gray-600 mt-2">
//             Enter your email to receive a password reset link.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={onSubmit} className="space-y-4">
//             <div>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} // Update email state on change
//                 className="border-gray-300 focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
//               Reset Password
//             </Button>
//           </form>
//         </CardContent>
//         <CardFooter className="flex flex-col items-center mt-4">
//           {message && (
//             <p className="text-sm text-green-500 font-medium mb-2">{message}</p>
//           )}
//           <Button
//             variant="link"
//             className="text-blue-500 hover:underline text-sm"
//             onClick={goBackToLogin} // When clicked, go back to the login page
//           >
//             Back to Login
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuthStore } from "@/store/authStore";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const { forgotPassword, message } = useAuthStore();
  async function onSubmit(e) {
    e.preventDefault();
    await forgotPassword(email);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Forgot Password</CardTitle>
        <CardDescription>
          Enter your email to reset your password.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        {message && <p className="text-sm text-green-500">{message}</p>}
        <Button variant="link" className="px-0">
          Back to Login
        </Button>
      </CardFooter>
    </Card>
  );
}

