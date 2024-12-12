import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { User } from "lucide-react"; // Assuming you're using Lucide icons

const DashboardPage = () => {
  const { user, isCheckingAuth, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Logged out successfully");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700">User not authenticated. Please log in.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
          <ul>
            <li className="mb-4">
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-lg"
              >
                <User className="text-white" size={20} />
                <span>Profile</span>
              </Link>
            </li>
            {/* Add more sidebar items as needed */}
          </ul>
          {/* Logout Button inside Sidebar */}
          <Button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 w-full mt-6"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          {/* Top Navbar */}
          <div className="text-lg font-semibold">
            Welcome to your Dashboard, {user.name || "User"}!
          </div>
          <div className="flex items-center space-x-4">
            {/* Burger Menu for Small Screens */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Stats */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-4">User Stats</h3>
            <p>Number of users: 150</p>
            <p>Active users: 120</p>
          </div>

          {/* Sales Stats */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Sales Stats</h3>
            <p>Total Sales: $12,000</p>
            <p>Last Week Sales: $2,000</p>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Recent Activity</h3>
            <ul>
              <li>John Doe logged in</li>
              <li>New sale made by Alice</li>
              <li>Product X has been restocked</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;



// import { useAuthStore } from "@/store/authStore"
// const DashboardPage = () => {
//   const { user, isCheckingAuth } = useAuthStore();
//  console.log(user)
//   if(isCheckingAuth) {
//     return <div>Loading...</div>
//   }
//   return (
//     <div>
//       <h1>Dashboard Page</h1>
//       <p>Welcome {user.name}!</p>
//       <p>Your email is {user.email}!</p>
//     </div>
//   )
// }

// export default DashboardPage ;
