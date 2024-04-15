import Signin from "../../Users/Signin";
import Profile from "../../Users/Profile";
import Signup from "../../Users/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
export default function Account() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />
            </Routes>
        </div>
    );
}