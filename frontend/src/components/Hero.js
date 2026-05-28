import React, { useState } from "react";
// import "./Hero.css";
import { Row, Col, Button, Image, Container, Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import EnterAddressApi from "./EnterAddressApi";
import imgSrc from "./Hero_pic.jpg";
import { register } from "../actions/userActions";
import Message from "../components/Message";
import Loader from "../components/Loader";

function Hero() {
  const [message, setMessage] = useState("");

  const user = useSelector((state) => state.user);
  const { error, loading, userInfo, address } = user;

  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(register(email, address));
    console.log(address);
    console.log(email);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Row>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center flex-column"
        >
          <div>
            <div>
              <h1>Telecom and power broker</h1>
              <p>
                Enter your address and we will email you the best deals for your
                address
              </p>
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader />}
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <div className="hero-address-api-gap">
                  <EnterAddressApi />
                  <p>{address.physicalAddress}</p>
                </div>
                {Object.keys(address).length === 0 || email === "" ? (
                  <div></div>
                ) : (
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      className="btn-block mt-2"
                    >
                      Register
                    </Button>
                  </div>
                )}
              </Form>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <Image src={imgSrc} alt="Example Image" fluid />
        </Col>
      </Row>
    </Container>
  );
}
export default Hero;
