import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "./index.css";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = async () => {
    navigate("/Kanbas/Account/Signup");
  };
  return (
    <>
      <div className="account-signin-container">
        <h1>Signin</h1>
        <h3>Username</h3>
        <input value={credentials.username} onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })} /> <br />
        <h3>Password</h3>
        <input value={credentials.password} onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })} /> <br />
        <button className="btn btn-primary" onClick={signin}> Signin </button> <br />
        <button className="btn btn-warning" onClick={signup}> Signup </button>
      </div>
    </>
  );
}
