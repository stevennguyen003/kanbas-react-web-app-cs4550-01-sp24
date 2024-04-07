import Signin from "../../Users/Signin";
import { Routes, Route, Navigate } from "react-router-dom";
export default function Account() {
    return (
        <div className="container-fluid">
            <Routes>
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                <Route path="Signin" element={<Signin />} />
            </Routes>
        </div>
    );
}