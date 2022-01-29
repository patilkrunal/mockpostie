import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

function EditEndPointModal({setEdit}) {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setEdit(false);
  }

  const editEndPoint = event => {
    event.preventDefault();
    console.log('in edit');
    // call api
    // add loader
    handleClose();
  }
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editEndPoint}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEndPointModal;