import { useEffect, useState } from "react";

import API from "../services/api";

function Analytics() {

  const [data, setData] = useState({});

  useEffect(() => {

    fetchAnalytics();

  }, []);

  const fetchAnalytics = async () => {

    try {

      const response = await API.get(
        "/dashboard/exits"
      );

      setData(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div>

      <h1>Analytics Dashboard</h1>

      <h2>
        Total Exits:
        {data.total_exits}
      </h2>

    </div>
  );
}

export default Analytics;