import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Facundo Lizardo </span>
            from <span className="purple"> Cordoba, Argentina.</span>
            <br />
            I am currently working as a software developer at Easy Ticket.
            <br />
            I am studying to obtain a higher degree in software development at the University of Buenos Aires remotely.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Personal training
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only way to do great work is to love what you do!"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
