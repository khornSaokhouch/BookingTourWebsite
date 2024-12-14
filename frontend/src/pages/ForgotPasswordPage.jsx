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
import { useParams, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();
  const { resetPassword, message } = useAuthStore();
  const navigate = useNavigate();
  const [successAlert, setSuccessAlert] = useState(false); // State for success alert

  async function onSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const result = await resetPassword(token, password);
    if (result) {
      // Assuming resetPassword returns a truthy value on success
      setSuccessAlert(true); // Show success alert
      setTimeout(() => {
        navigate("/login"); // Navigate to login after 2 seconds
      }, 2000);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md mx-auto shadow-lg rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-center">
            Reset Password
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            Enter your new password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {successAlert && (
            <div className="mb-4 p-4 text-green-700 bg-green-100 rounded">
              Password reset successfully! Redirecting to login...
            </div>
          )}
          <form onSubmit={onSubmit} className="space-y-6">
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Input
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {message && (
              <p className="text-sm text-green-500 text-center">{message}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Reset Password
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="link"
            className="px-0 text-blue-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
