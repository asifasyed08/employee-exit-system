import { useState } from "react";

import API from "../services/api";

function AssetReturn() {

  const [formData, setFormData] = useState({
    employee_id: "",
    laptop_returned: "",
    id_card_returned: "",
    charger_returned: "",
    remarks: "",
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
        "/assets/return",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      alert("Failed");
    }
  };

  return (
    <div>

      <h1>Asset Return</h1>

      <input
        type="number"
        name="employee_id"
        placeholder="Employee ID"
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="laptop_returned"
        placeholder="Laptop Returned"
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="id_card_returned"
        placeholder="ID Card Returned"
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="charger_returned"
        placeholder="Charger Returned"
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="remarks"
        placeholder="Remarks"
        onChange={handleChange}
      />

      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  );
}

export default AssetReturn;