import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="account-container">
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <p>Username</p>
      <input value={user.username} onChange={(e) => setUser({
        ...user, username: e.target.value
      })} /> <br />
      <p>Password</p>
      <input value={user.password} onChange={(e) => setUser({
        ...user, password: e.target.value
      })} /> <br />
      <button className="btn btn-warning" onClick={signup}> Signup </button> <br />
    </div>
  );
}
