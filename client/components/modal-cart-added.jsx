import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function CartModal(props) {

  return (
    <>

      <Modal
        {...props}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Thank you</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This item has been added to your shopping cart!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onHide}>Got it</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
