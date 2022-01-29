import { useState, useEffect } from "react";
import axios from 'axios';
import CustomNavbar from '../components/CustomNavbar';
import EndPoint from "../components/EndPoint";
import Pagination from "../components/Pagination";

function View() {
  const [endPoints, setEndPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEndPoints = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setEndPoints(res.data);
      setLoading(false);
    };
    fetchEndPoints();
  }, []);
  if(loading) {
    return (
      <h1>...loading</h1>
    )
  }
  return (
    <div>
      <CustomNavbar/>
      <div>
        {endPoints.length > 0 ? (
          <>
            <Pagination
              data={endPoints}
              RenderComponent={EndPoint}
              title="EndPoints"
              pageLimit={5}
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
