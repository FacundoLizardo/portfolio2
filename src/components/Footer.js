import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {CgGitFork} from "react-icons/cg";
import Button from "react-bootstrap/Button";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Facundo Lizardo</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} FL</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/FacundoLizardo"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/facundolizardo/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/faculizardo640/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>

            <li>
              <div className="fork-btn">
                <Button
                  href="https://github.com/FacundoLizardo/Portfolio2"
                  target="_blank"
                  className="fork-btn-inner"
                >
                   <div style={{display: 'flex', flexDirection: 'row', gap: '5px', fontSize: '1.2em'}}>
                        <CgGitFork style={{fontSize: "1.2em"}}/>
                        <p className="tech-icons-text" style={{fontSize: '2em'}}>This repository</p>
                  </div>
                </Button>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
