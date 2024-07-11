import React from "react";
import {Col, Row} from "react-bootstrap";
import {DiCss3, DiGit, DiHtml5, DiJavascript1, DiNodejs, DiReact,} from "react-icons/di";
import {SiExpress, SiNextdotjs, SiPostgresql, SiRedux, SiTailwindcss, SiTypescript,} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
        <DiCss3/>
          <p className="tech-icons-text">CSS</p>
      </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <DiJavascript1/>
            <p className="tech-icons-text">JavaScript</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiTypescript/>
            <p className="tech-icons-text">TypeScript</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <FaNodeJs/>
            <p className="tech-icons-text">Node.js</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <DiReact/>
            <p className="tech-icons-text">React.js</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <DiHtml5/>
            <p className="tech-icons-text">HTML</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiPostgresql/>
            <p className="tech-icons-text">PostgreSQL</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiNextdotjs/>
            <p className="tech-icons-text">Next.js</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <DiGit/>
            <p className="tech-icons-text">GIT</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiTailwindcss/>
            <p className="tech-icons-text">Tailwind</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiRedux/>
            <p className="tech-icons-text">Redux</p>
        </Col>
        <Col xs={8} sm={4} md={4} lg={4} xl={2} className="tech-icons">
            <SiExpress/>
            <p className="tech-icons-text">Experss.js</p>
        </Col>
    </Row>
  );
}

export default Techstack;
