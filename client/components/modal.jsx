import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function WarningModal(props) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>NOTICE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please note that this website is for demonstration purposes only. By clicking the following button, I understand that no real purchases will be made and that personal information such as names, addresses, and real credit card numbers should not be used.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
