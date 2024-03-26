import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiCss3,
    SiPostcss,
    SiBootstrap,
    SiMaterialdesign,
    SiTailwindcss,
    SiChakraui,
    SiLess,
    SiNextui,
} from "react-icons/si";

function CssFramework() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLess />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialdesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextui />
      </Col>
    </Row>
  );
}

export default CssFramework;
