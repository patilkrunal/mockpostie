import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import CustomLoader from '../../components/CustomLoader';
import axios from 'axios';
import './Modal.css';

function EditEndPointModal({data, setEdit}) {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEdit(false);
  }

  const editEndPoint = async (event) => {
    event.preventDefault();
    console.log('in edit');
    setLoading(true);
    await axios.get('https://jsonplaceholder.typicode.com/posts');
    await new Promise(resolve => setTimeout(resolve, 3000));
    setLoading(false);
    handleClose();
  }
  
  return (
    <>
      <Modal show={show} onHide={handleClose} className='modalBackground'>
        {loading && <CustomLoader/>}
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.body}</Modal.Body>
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