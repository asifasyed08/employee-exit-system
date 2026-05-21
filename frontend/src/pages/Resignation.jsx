import { useState } from "react";

import API from "../services/api";

function Resignation() {

  const [formData, setFormData] = useState({
    employee_id: "",
    reason: "",
    resignation_date: "",
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
        "/resignations",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      alert("Submission Failed");
    }
  };

  return (
    <div>

      <h1>Submit Resignation</h1>

      <input
        type="number"
        name="employee_id"
        placeholder="Employee ID"
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="reason"
        placeholder="Reason"
        onChange={handleChange}
      />

      <br />

      <input
        type="date"
        name="resignation_date"
        onChange={handleChange}
      />

      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}

export default Resignation;