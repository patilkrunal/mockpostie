import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import './Modal.css';
import React from 'react';

function PreviewEndPointModal({data, setPreview}) {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    setPreview(false);
  }
  return (
    <Modal show={show} onHide={handleClose} className='modalBackground'>
      <Modal.Header closeButton>
        <Modal.Title>{data.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{data.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PreviewEndPointModal;