import { useState } from "react";
import API from "../services/api";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {

    try {

      const response = await API.post(
        "/auth/register",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      alert("Registration Failed");
    }
  };

  return (
    <div>

      <h1>Register</h1>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <br />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <br />

      <select
        name="role"
        onChange={handleChange}
      >
        <option value="employee">
          Employee
        </option>

        <option value="manager">
          Manager
        </option>

        <option value="hr">
          HR
        </option>

      </select>

      <br />

      <button onClick={handleRegister}>
        Register
      </button>

    </div>
  );
}

export default Register;