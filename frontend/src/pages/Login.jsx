import { useState } from "react";

import API from "../services/api";

import "../App.css";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await API.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      alert("Login Successful");

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>Employee Exit System</h1>

        <p className="project-title">
          HR Exit & Clearance Portal
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;