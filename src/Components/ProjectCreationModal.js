import React from 'react';
import {Modal, Button, Form} from 'react-bootstrap';


function ProjectCreationModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCreateProject">
              <Form.Label>Project Name:</Form.Label>
              <Form.Control type="text" onChange={props.onChange}></Form.Control>
              <Form.Label>Project Description</Form.Label>
              <Form.Control as="textarea"></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onAdd}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectCreationModal;