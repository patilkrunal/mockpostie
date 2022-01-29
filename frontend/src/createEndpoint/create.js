import CustomNavbar from '../components/CustomNavbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import './create.css';

function Create() {
  const createMockAPI = event => {
    event.preventDefault();
    const urlEndpoint = event.target.elements.urlEndpoint.value;
    const response = event.target.elements.response.value;
    console.log(urlEndpoint, response);
  }
  return (
    <div>
      <CustomNavbar/>
      <Container>
        <Form className='formStyles' onSubmit={createMockAPI}>
          <Form.Group controlId="UrlEndpoint" className='mb-3'>
            <Form.Label className="h4">URL Endpoint</Form.Label>
            <Form.Control type="text" name='urlEndpoint' placeholder="eg. /user, /profile etc" required/>
          </Form.Group>

          <Form.Group controlId="UrlEndpointResponse" className="mb-3">
            <Form.Label className="h4">Response</Form.Label>
            <textarea className="form-control" name="response" rows="3" placeholder='paste your endpoint response here.' required/>
          </Form.Group>

          <Button variant="success" type="submit" className = 'submitButtonStyles'>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Create;
