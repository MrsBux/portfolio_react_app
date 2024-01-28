import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function SuccessToast({ show, onClose }) {
  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={onClose} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Succès</strong>
          </Toast.Header>
          <Toast.Body>
            Bravo votre message a bien été envoyé ! Je reviens vite vers vous.!
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default SuccessToast;
