import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import EndPoint from "../components/EndPoint";
import Pagination from "../components/Pagination";
import CustomLoader from "../components/CustomLoader";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/esm/Container";
import { authentication } from "../loginEndpoint/FirebaseConfig"


function View() {
  const endPointsRef = useRef();
  const [endPoints, setEndPoints] = useState([]);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const fetchEndPoints = async () => {
      setLoading(true);
      authentication.onAuthStateChanged( async (user)=>{
        if(user){
            let token = await user.getIdToken();
            fetch(`${process.env.REACT_APP_API_URL}/api/`,{
                headers:{
                    "Authorization":`Bearer ${token}`
                }
            })
            .then((response)=>response.json())
            .then((JsonResponse)=>{
                console.log(JsonResponse);
                endPointsRef.current = JsonResponse;
                setEndPoints(JsonResponse);

            })
        }
    })
      setLoading(false);
    };
    fetchEndPoints();
  }, []);

  if (loading) {
    return <CustomLoader />;
  }
  const search = (query) => {
    const filteredEndPoints = endPointsRef.current.filter(function (endPoint) {
      return query === "" || endPoint["customUrl"].includes(query);
    });
    setEndPoints(filteredEndPoints);
  };

  return (
    <Container>
      <InputGroup size="sm" className="mb-1">
        <FormControl 
        aria-label="Small" 
        aria-describedby="inputGroup-sizing-sm" 
        placeholder="enter endpoint to search"
        onChange={(event) => {
          search(event.target.value);
        }}/>
      </InputGroup>

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
    </Container>
  );
}

export default View;
