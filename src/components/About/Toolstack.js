import React from "react";
import {Col, Row} from "react-bootstrap";
import {SiDiscord, SiIntellijidea, SiSlack, SiVisualstudiocode, SiWindows,} from "react-icons/si";
import {BsGithub, BsTrello} from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <BsGithub/>
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <BsTrello/>
      </Col>
    </Row>
  );
}

export default Toolstack;
