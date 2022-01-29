import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import CustomNavbar from '../components/CustomNavbar';
import EndPoint from "../components/EndPoint";
import Pagination from "../components/Pagination";
import CustomLoader from "../components/CustomLoader";
import './view.css'

function View() {
  const endPointsRef = useRef();
  const [endPoints, setEndPoints] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEndPoints = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      endPointsRef.current = res.data;
      setEndPoints(res.data);
      setLoading(false);
    };
    fetchEndPoints();
  }, []);

  if(loading) {
    return (
      <CustomLoader/>
    )
  }
  const search = (query) => {
    const filteredEndPoints = endPointsRef.current.filter(function (endPoint) {
      return query === '' || endPoint['title'].includes(query);
    })
    setEndPoints(filteredEndPoints);
  }

  return (
    <div>
      <CustomNavbar/>
      <div>
        <input placeholder="enter endpoint to search" className="searchBox" onChange={event => {search(event.target.value);}}/> 
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
