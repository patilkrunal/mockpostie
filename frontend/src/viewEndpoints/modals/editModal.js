import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CustomLoader from "../../components/CustomLoader";
import "./Modal.css";

const API_URL = "http://localhost:8000";

function EditEndPointModal({ data, setEdit }) {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleClose = () => {
    setShow(false);
    setEdit(false);
  };

  useEffect(() => {
    if (data) {
      setResponse(data["response"]);
    }
  }, [loading]);

  const updateResponse = (event) => {
    setResponse(event.target.value);
  };

  const save = () => {
    const customUrl = data["customUrl"];

    setLoading(true);
    axios
      .post(
        `${API_URL}/api/editLink/${customUrl}`,
        { response },
        {
          headers: {
            Authorization: "AUTHORIZATION_KEY",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.err(error));
    setLoading(false);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="modalBackground">
        {loading && <CustomLoader />}
        <Modal.Header closeButton>
          <Modal.Title>/{data.customUrl}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Updated Response: </Form.Label>
            <Form.Control
              type="text"
              onChange={(event) => updateResponse(event)}
              value={response}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEndPointModal;
