import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import homeLogo from "../../Assets/avatar1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{display:'flex', flexDirection:'column', margin:'auto'}}>
                <h1 style={{paddingBottom: 15, width:'100%'}} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> FACUNDO LIZARDO</strong>
                </h1>

                <div style={{padding: 50, textAlign: "left"}}>
                  <Type/>
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom:20}}>

              <div style={{display:'flex', margin:'auto'}}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className={'main-image-avatar1'}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
