import { useState } from "react";

import API from "../services/api";

function Clearance() {

  const [taskId, setTaskId] = useState("");

  const [status, setStatus] = useState("");

  const [remarks, setRemarks] = useState("");

  const handleUpdate = async () => {

    try {

      const response = await API.put(
        `/clearance/${taskId}/status`,
        {
          status,
          remarks,
        }
      );

      alert(response.data.message);

    } catch (error) {

      alert("Update Failed");
    }
  };

  return (
    <div>

      <h1>Clearance Approval</h1>

      <input
        type="number"
        placeholder="Task ID"
        onChange={(e) =>
          setTaskId(e.target.value)
        }
      />

      <br />

      <select
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Pending</option>
        <option>Approved</option>
        <option>Rejected</option>
      </select>

      <br />

      <input
        type="text"
        placeholder="Remarks"
        onChange={(e) =>
          setRemarks(e.target.value)
        }
      />

      <br />

      <button onClick={handleUpdate}>
        Update Clearance
      </button>

    </div>
  );
}

export default Clearance;