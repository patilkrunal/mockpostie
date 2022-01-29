import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

function PreviewEndPointModal({setPreview}) {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    setPreview(false);
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PreviewEndPointModal;