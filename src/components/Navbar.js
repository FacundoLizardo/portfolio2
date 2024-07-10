import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {CgFileDocument, CgGitFork} from "react-icons/cg";
import {ImBlog} from "react-icons/im";
import {AiFillStar, AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser,} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>

        <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={'navbar-content'} defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <div className={'nav-item-content'}>
                  <AiOutlineHome style={{marginBottom: "2px"}}/>
                  Home
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <div className={'nav-item-content'}>
                  <AiOutlineUser style={{marginBottom: "2px"}}/>
                  About
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <div className={'nav-item-content'}>
                  <AiOutlineFundProjectionScreen
                    style={{marginBottom: "2px"}}
                />{" "}
                  Projects
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <div className={'nav-item-content'}>
                  <CgFileDocument style={{marginBottom: "2px"}}/>
                  Resume
                </div>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={'fork-btn-inner-container'}>
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
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
