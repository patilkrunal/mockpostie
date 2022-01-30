import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";
import "./Modal.css";
import CustomLoader from "../../components/CustomLoader";
import axios from "axios";

function DeleteEndPointModal({ data, setTrash }) {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setTrash(false);
  };

  const deleteLink = () => {
    const customUrl = data["customUrl"];
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/deleteLink`,
      {customUrl},
      {
        headers: {
          Authorization: "AUTHORIZATION_KEY",
          "Content-Type": "application/json",
        },
      })
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
          <Modal.Title>Are you sure you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.customUrl}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteLink}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteEndPointModal;
