import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "@/components/ui/toaster";
import { useAuthStore } from "./store/authStore";
import DashboardPage from "./pages/DashboardPage";
import { Button } from "./components/ui/button";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    TopCard,
    TrendingCard,
    PopularCard,
    WeekendCard,
    TraditionalCard,
    Services,
    FeatureNewsCard,
    WhyChooseUs,
    TourSection,
    Attractions,
    BusinessSection,
    Supplier,
    SupplierSection,
    PartnerSection,
    HowItWorks,
    TeamSection,
    MissionVisionSection,
    ContactUs,
    FAQSection,
    PrivacyPolicy
} from "./components/Cards/index"; // Assuming all cards are exported from a single index file

const ProtectRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  return isAuthenticated && user ? children : <Navigate to="/login" replace />;
};

const AuthenticatedUserRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  return isAuthenticated && user ? <Navigate to="/dashboard" replace /> : children;
};

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  const { logout, user } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error); // Handle logout error
    }
  };

  return (
    <div>
      {user && <Button onClick={handleLogout}>Logout</Button>}
      <Routes>
        <Route path="/" element={<Layout><TopCard /><TrendingCard /><PopularCard /><WeekendCard /><TraditionalCard /><Services /></Layout>} />
        
        <Route path="/services" element={<Layout><Services /><FeatureNewsCard /><WhyChooseUs /></Layout>} />

        <Route path="/attractions" element={<Layout><TourSection /><Attractions /></Layout>} />

        <Route path="/become-a-supplier" element={<Layout><BusinessSection /><Supplier /><SupplierSection /><PartnerSection /><HowItWorks /></Layout>} />

        <Route path="/about" element={<Layout><TeamSection /><MissionVisionSection /><ContactUs /></Layout>} />

        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />

        <Route path="/faq" element={<Layout><FAQSection /></Layout>} />

        <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />

        <Route path="/signup" element={<AuthenticatedUserRoute><SignUpPage /></AuthenticatedUserRoute>} />
        <Route path="/login" element={<AuthenticatedUserRoute><LoginPage /></AuthenticatedUserRoute>} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/forgot-password" element={<AuthenticatedUserRoute><ForgotPasswordPage /></AuthenticatedUserRoute>} />
        <Route path="/dashboard" element={<ProtectRoute><DashboardPage /></ProtectRoute>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;