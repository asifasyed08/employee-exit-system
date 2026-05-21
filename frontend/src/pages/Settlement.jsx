import { useState } from "react";

import API from "../services/api";

function Settlement() {

  const [formData, setFormData] = useState({
    employee_id: "",
    salary: "",
    bonus: "",
    deductions: "",
    final_amount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    try {

      const response = await API.post(
        "/settlements",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      alert("Settlement Failed");
    }
  };

  return (
    <div>

      <h1>Settlement</h1>

      <input
        type="number"
        name="employee_id"
        placeholder="Employee ID"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="bonus"
        placeholder="Bonus"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="deductions"
        placeholder="Deductions"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="final_amount"
        placeholder="Final Amount"
        onChange={handleChange}
      />

      <br />

      <button onClick={handleSubmit}>
        Submit Settlement
      </button>

    </div>
  );
}

export default Settlement;