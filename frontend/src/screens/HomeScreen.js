import React from "react";
import { Row } from "react-bootstrap";
import Hero from "../components/Hero";
function HomeScreen() {

  return (
    <div>
      <Row>
        <Hero />
      </Row>
      <Row>
        <div className="dividerGreen"></div>
      </Row>
      <Row>
        <h1>
          About Us
        </h1>
      </Row>
    </div>
  );
}

export default HomeScreen;
