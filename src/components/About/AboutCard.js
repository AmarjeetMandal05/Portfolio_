import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amarjeet Mandal </span>
            from <span className="purple"> Gurugram, Haryana.</span>
            <br /> I am a meticulous Web Developer having a good sense of softwares and web technologies like <span className="purple">ReactJS, Javascript, Bootstrap, Redux.</span>
            <br />
            <br />
            Additionally, I am well-versed in <span className="purple">Git and Github,</span> allowing me to collaborate seamlessly with team members, track changes efficiently, and maintain clean code repositories.
            Juspay.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Arts and Creative Pursuits
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
