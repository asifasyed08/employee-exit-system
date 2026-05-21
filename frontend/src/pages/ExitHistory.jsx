import { useEffect, useState } from "react";

import API from "../services/api";

function ExitHistory() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetchResignations();

  }, []);

  const fetchResignations = async () => {

    try {

      const response = await API.get(
        "/resignations"
      );

      setData(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div>

      <h1>Exit History</h1>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {data.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.employee_id}</td>

              <td>{item.reason}</td>

              <td>{item.status}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ExitHistory;