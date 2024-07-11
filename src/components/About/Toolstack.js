import React from "react";
import {Col, Row} from "react-bootstrap";
import {SiDiscord, SiIntellijidea, SiSlack, SiVisualstudiocode, SiWindows,} from "react-icons/si";
import {BsGithub, BsTrello} from "react-icons/bs";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiWindows/>
            <p className="tech-icons-text">Windows</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiVisualstudiocode/>
            <p className="tech-icons-text">VS Code</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiIntellijidea/>
            <p className="tech-icons-text">Intellij IDEA</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiSlack/>
            <p className="tech-icons-text">Slack</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiDiscord/>
            <p className="tech-icons-text">Discord</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <BsGithub/>
            <p className="tech-icons-text">GitHub</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <BsTrello/>
            <p className="tech-icons-text">Trello</p>
        </Col>
    </Row>
  );
}

export default Toolstack;
