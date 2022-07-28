import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function ModalScreen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='modal-popup'>
    <>
      <Button variant='primary' className='btn-one' onClick={handleShow}>
        Create New Blog Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className='modal-header'>
        <Modal.Header closeButton>
      </Modal.Header>
      </div>
      <div className='modal-body'>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='form.ControlInput1'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                autoFocus
              />
              </Form.Group>
              <Form.Group className='mb-3' controlId='form.ControlInput2'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder=''
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='form.ControlTextarea1'
              autoFocus
            >

              <Form.Label>Post</Form.Label>
              <Form.Control as='textarea' rows={10} />
            </Form.Group>
          </Form>
        </Modal.Body>
        </div>
        <div className='modal-footer'>
        <Modal.Footer>
          <Button variant='secondary' className='btn-two' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' className='btn-three' onClick={handleClose}>
            Save Changes
          </Button>
          
        </Modal.Footer>
        </div>
      </Modal>
    </>
    </div>
    
  );
}

