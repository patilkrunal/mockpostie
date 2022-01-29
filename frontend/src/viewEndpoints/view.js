import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomNavbar from "../components/CustomNavbar";
import EndPoint from "../components/EndPoint";
import Pagination from "../components/Pagination";
import CustomLoader from "../components/CustomLoader";

const API_URL = "http://localhost:8000";

function View() {
  const [endPoints, setEndPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEndPoints = async () => {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/`);
      setEndPoints(res.data);
      setLoading(false);
      console.log("res data: ", res.data);
    };
    fetchEndPoints();
  }, []);
  if (loading) {
    return <CustomLoader />;
  }
  return (
    <div>
      <CustomNavbar />
      <div>
        {endPoints.length > 0 ? (
          <>
            <Pagination
              data={endPoints}
              RenderComponent={EndPoint}
              title="EndPoints"
              pageLimit={4}
              dataLimit={8}
            />
          </>
        ) : (
          <h1>No Endpoints to display</h1>
        )}
      </div>
    </div>
  );
}

export default View;
