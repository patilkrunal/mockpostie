import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import './Modal.css';

function PreviewEndPointModal({data, setPreview}) {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    setPreview(false);
  }
  return (
    <Modal show={show} onHide={handleClose} className='modalBackground'>
      <Modal.Header closeButton>
        <Modal.Title>{data.customUrl}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data.response}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PreviewEndPointModal;