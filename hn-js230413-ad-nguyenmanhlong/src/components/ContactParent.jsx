import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactParent.css";
import ContactInfo from "./ContactInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ContactParent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");

  const [contact, setContact] = useState({
    name: "?",
    email: "?",
    phone: "?",
    message: "?",
  });

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const phoneRegex = /^\d{10}$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "") {
      setNameError("Not Blank!");

      return;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Not Blank!");
      return;
    } else {
      if (!emailRegex.test(email)) {
        setEmailError("Invalid Email!");

        return;
      } else {
        setEmailError("");
      }
    }

    if (phone === "") {
      setPhoneError("Not Blank!");

      return;
    } else {
      if (!phoneRegex.test(phone)) {
        setPhoneError("Invalid Phone!");

        return;
      } else {
        setPhoneError("");
      }
    }

    if (message === "") {
      setMessageError("Not Blank!");

      return;
    } else {
      setMessageError("");
    }

    setContact({
      ...contact,
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  };

  console.log(nameError, emailError, phoneError, messageError);
  return (
    <Container className="form-box mt-5">
      <Row>
        <Col id="contact-info" className="p-3">
          <h2>Contact Info</h2> <ContactInfo contact={contact} />
        </Col>
        <Col id="contact-us" className="p-3" xs={8}>
          <h2>Contact Us</h2>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
              <p className="error-text">{nameError}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <p className="error-text">{emailError}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={phone}
                onChange={handleInputChange}
              />
              <p className="error-text">{phoneError}</p>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={message}
                onChange={handleInputChange}
              />
              <p className="error-text">{messageError}</p>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
