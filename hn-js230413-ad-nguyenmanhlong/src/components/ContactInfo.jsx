import React from "react";
import Form from "react-bootstrap/Form";

export default function ContactInfo({ contact }) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={contact.name}
          className="text-info"
          readOnly
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          value={contact.email}
          className="text-info"
          readOnly
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={contact.phone}
          className="text-info"
          readOnly
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          value={contact.message}
          className="text-info"
          readOnly
        />
      </Form.Group>
      <div className="icons">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
    </Form>
  );
}
