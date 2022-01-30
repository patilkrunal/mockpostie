import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import CustomLoader from "../../components/CustomLoader";
import "./Modal.css";

function EditEndPointModal({ data, setEdit }) {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEdit(false);
  };

  const editEndPoint = (event) => {
    event.preventDefault();
    const customUrl = event.target.elements.urlEndpoint.value;
    const response = event.target.elements.response.value;
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/editLink`,
        { response, customUrl },
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
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <Form onSubmit={editEndPoint}>
            <Form.Group controlId="UrlEndpoint" className="mb-3">
              <Form.Label className="h4">URL Endpoint</Form.Label>
              <Form.Control
                type="text"
                name="urlEndpoint"
                defaultValue={data.customUrl}
                required
              />
            </Form.Group>

            <Form.Group controlId="UrlEndpointResponse" className="mb-3">
              <Form.Label className="h4">Response</Form.Label>
              <textarea
                className="form-control"
                name="response"
                rows="3"
                defaultValue={data.response}
                required
              />
            </Form.Group>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>    
      </Modal>
    </>
  );
}

export default EditEndPointModal;
