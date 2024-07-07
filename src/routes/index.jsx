import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import WaterPotability from "../pages/WaterPotability";
import Profile from "../pages/Profile";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/water-potability" element={<WaterPotability />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}