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
import {useLocation} from "react-router-dom";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const location = useLocation()
  console.log(location)

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Designed and developed by Facundo Lizardo</h3>
        </Col>
        {location.pathname !== '/' &&
            <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                  href="https://github.com/FacundoLizardo"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <AiFillGithub/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.linkedin.com/in/facundolizardo/"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaLinkedinIn/>
              </a>
            </li>
            <li className="social-icons">
              <a
                  href="https://www.instagram.com/faculizardo640/"
                  style={{color: "white"}}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <AiFillInstagram/>
              </a>
            </li>

          </ul>
        </Col>}
      </Row>
    </Container>
  );
}

export default Footer;
