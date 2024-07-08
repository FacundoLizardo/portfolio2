import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {BsGithub,} from "react-icons/bs";
import {HiExternalLink} from "react-icons/hi";
import {BiLinkExternal} from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
        <div className="project-card-container">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
        </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BiLinkExternal />&nbsp;
            {"Go to site"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
