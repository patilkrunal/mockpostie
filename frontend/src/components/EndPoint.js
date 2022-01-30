import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import './EndPoint.css';
import { faPenSquare, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditEndPointModal from '../viewEndpoints/modals/editModal';
import DeleteEndPointModal from '../viewEndpoints/modals/deleteModal';
import PreviewEndPointModal from '../viewEndpoints/modals/previewModal';
import React from 'react';

function EndPoint(props) {
  const data = props.data;
  const [preview, setPreview] = useState(false);
  const [edit, setEdit] = useState(false);
  const [trash, setTrash] = useState(false);
  const previewEndPoint = event => {
    event.preventDefault();
    console.log('in preview');
    setPreview(true);
  }
  const editEndPoint = event => {
    event.preventDefault();
    console.log('in edit');
    setEdit(true);
  }
  const deleteEndPoint = event => {
    event.preventDefault();
    console.log('in delete');
    setTrash(true);
  }
  return (
    <Container>    
      <Card>
        <ListGroup variant="flush">
          <ListGroup.Item>{data.title}
            <Button className='btn-sm deleteButton' onClick={deleteEndPoint}>
              <FontAwesomeIcon icon={faTrash} name='delete'/>
            </Button>
            <Button className='btn-sm editButton' type='submit' onClick={editEndPoint}>
              <FontAwesomeIcon icon={faPenSquare} name='edit'/>
            </Button>
            <Button className='btn-sm previewButton' type='submit' onClick={previewEndPoint}>
              <FontAwesomeIcon icon={faEye} name='preview'/>
            </Button> 
          </ListGroup.Item>
        </ListGroup>
      </Card>
      {preview && <PreviewEndPointModal data = {data} setPreview = {setPreview}/>}
      {edit && <EditEndPointModal data = {data} setEdit = {setEdit}/>}
      {trash && <DeleteEndPointModal data={data} setTrash = {setTrash}/>}
    </Container>
  );
}

export default EndPoint;