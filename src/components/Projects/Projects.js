import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import educaStream from "../../Assets/Projects/educaStream.jpg";
import flexwork from "../../Assets/Projects/flexwork.png";
import gip360 from "../../Assets/Projects/gip360.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={gip360}
                isBlog={false}
                title="GIP 360 (in progress)"
                description="This project aims to assist small and medium-sized business owners with stock control, sales, taxes, employee management, billing, taxes, and
                statistics to offer a clear vision of their business operations."
                ghLink="https://github.com/FacundoLizardo/Sistema-Ventas"
                demoLink="https://gip360.vercel.app//"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={gip360}
                isBlog={false}
                title="GIP 360 (in progress)"
                description="This project aims to assist small and medium-sized business owners with stock control, sales, taxes, employee management, billing, taxes, and
                statistics to offer a clear vision of their business operations."
                ghLink="https://github.com/FacundoLizardo/Sistema-Ventas"
                demoLink="https://gip360.vercel.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flexwork}
              isBlog={false}
              title="Flexwork LATAM (intership)"
              description="In this 2 month intership I contributed to a web platform that connects projects, professionals, and companies.
              I used React and Tailwind CSS for the development of views and components based on Figma designs.
              Additionally, I created several routes on the backend using Node.js and Express to implement various functionalities."
              ghLink="https://github.com/flexworkFullteam/server"
               demoLink="https://www.flexworklatam.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={educaStream}
                isBlog={false}
                title="Educastream (Educational experience)"
                description="In the last Henry Bootcamp project, I was part of a four-person team that developed a microlearning education site with React.
                We used CSS Module to style the page and developed a Back End in Node.js and Express. We implemented search, sorting,
                course details, payment gateway with Stripe, shopping cart and used Firebase to store data and manage login and logout."
                ghLink="https://github.com/FacundoLizardo/PF-Henry"
                demoLink="https://educastream.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
