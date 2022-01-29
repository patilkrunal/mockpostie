import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

function DeleteEndPointModal({setTrash}) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setTrash(false);
  }

  const deleteEndPoint = event => {
    event.preventDefault();
    console.log('in delete');
    // call api
    // add a loader
    handleClose();
  }
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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