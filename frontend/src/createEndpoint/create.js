import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import CustomNavbar from "../components/CustomNavbar";
import "./create.css";

const Create = () => {
  const navigate = useNavigate();

  const createMockAPI = (event) => {
    const customUrl = event.target.elements.urlEndpoint.value;
    const response = event.target.elements.response.value;

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/create/`,
        {
          customUrl,
          response,
        },
        {
          headers: {
            Authorization: "AUTHORIZATION_KEY",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.err(error));
    navigate("/");
  };

  return (
    <div>
      <CustomNavbar />
      <Container>
        <Form className="formStyles" onSubmit={createMockAPI}>
          <Form.Group controlId="UrlEndpoint" className="mb-3">
            <Form.Label className="h4">URL Endpoint</Form.Label>
            <Form.Control
              type="text"
              name="urlEndpoint"
              placeholder="eg. /user, /profile etc"
              required
            />
          </Form.Group>

          <Form.Group controlId="UrlEndpointResponse" className="mb-3">
            <Form.Label className="h4">Response</Form.Label>
            <textarea
              className="form-control"
              name="response"
              rows="3"
              placeholder="paste your endpoint response here."
              required
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="submitButtonStyles"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Create;
