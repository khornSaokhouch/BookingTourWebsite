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
// import { useParams } from "react-router-dom";
// import { useAuthStore } from "@/store/authStore";

// export default function ResetPasswordPage() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const { token } = useParams();
//   const { resetPassword, message } = useAuthStore();

//   async function onSubmit(e) {
//     e.preventDefault();
//     if(password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//       await resetPassword(token, password);
//   }

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Reset Password</CardTitle>
//         <CardDescription>Enter your new password.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={onSubmit} className="space-y-6">
//           <Input
//             placeholder="Enter your password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <Input
//             placeholder="Confirm password"
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           {message && <p className="text-sm text-green-500">{message}</p>}
//           {error && <p className="text-sm text-red-500">{error}</p>}
//           <Button
//             type="submit"
//             className="w-full"
//             disabled={isLoading}
//           >
//             {isLoading ? "Resetting..." : "Reset Password"}
//           </Button>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-center">
//         {/* Back to Login button, now it correctly uses navigate */}
//         <Button variant="link" className="px-0" onClick={() => navigate("/LoginPage")}>
//           Back to Login
//         </Button>
//       </CardFooter>
//     </Card>
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
import { useParams } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const { resetPassword, message } = useAuthStore();

  async function onSubmit(e) {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
      await resetPassword(token, password);
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-6">
          <Input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
    {message && <p className="text-sm text-green-500">{message}</p>}
          <Button type="submit" className="w-full">
            Reset Password
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="link" className="px-0">
          Back to Login
        </Button>
      </CardFooter>
    </Card>
  );
}

