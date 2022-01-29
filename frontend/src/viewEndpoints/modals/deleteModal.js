import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
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

  const deleteEndPoint = async (event) => {
    event.preventDefault();
    console.log("in delete");
    setLoading(true);
    await axios.get("https://jsonplaceholder.typicode.com/posts");
    await new Promise((resolve) => setTimeout(resolve, 3000));
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
          <Button variant="danger" onClick={deleteEndPoint}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteEndPointModal;
