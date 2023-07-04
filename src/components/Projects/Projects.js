import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snakeGame from "../../Assets/Projects/pro5.png";
import movieApp from "../../Assets/Projects/project5.webp";
import newsApp from "../../Assets/Projects/project2.png";
import textEditor from "../../Assets/Projects/project3.png";
import college from "../../Assets/Projects/college.png";
import restaurantWebsite from "../../Assets/Projects/project4.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some Of My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textEditor}
              isBlog={false}
              title="Text Analyzer"
              description="Text Editor is a web application with features of converting the texts into Lowercase and Uppercase . Its special feature include a toggle button with light and dark theme page. Can preview the long texts and sentences and also gives the time a person would take to read out his entire line of texts ."
              ghLink="https://github.com/AmarjeetMandal05/Text_Analyzer"
              demoLink="https://text-analyzer-amarjeet2210.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurantWebsite}
              isBlog={false}
              title="Restaurant Website"
              description="Responsive and user friendly restaurant website design with different dining options. The application is build using React JS , JavaScript , HTML, CSS.  User can select the menu options and after selecting the desired option the user will get the various food and beverage options."
              ghLink="https://github.com/AmarjeetMandal05/Restaurant_Site"
              demoLink="http://restaurant-website07.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsApp}
              isBlog={false}
              title="News App"
              description="The Dino News is a minimal news blog boilerplate powered by React and the News API. Pages and articles are stored remotely and displayed on the blog as the user scroll down. Different news sections like sports,technology and many more can be loaded with one click"
              ghLink="https://github.com/AmarjeetMandal05"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakeGame}
              isBlog={false}
              title="Snake Game"
              description="Slither through a new competitive version of Snake and survive as long as you can! Tried to recreate and develop an old Blockade game , Snake . Mainly the application is based on JavaScript , HTML and CSS and used Request Animation Frames for constant rendering. You can play as long as you survive and the rules are pretty simple and can also get your scores."
              ghLink="https://github.com/AmarjeetMandal05/Snake_Game"
              demoLink="https://amarjeet-snakechamp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="College Website"
              description="The website is built using React and JavaScript, incorporating modern web development technologies to provide an exceptional user experience. With a sleek and intuitive design, the website offers a seamless navigation system and a wide range of features to meet the needs of students, faculty, and visitors."
              ghLink="https://github.com/AmarjeetMandal05/College_website_"
              demoLink="https://college-websitee.netlify.app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieApp}
              isBlog={false}
              title="Movie_Website"
              description="This page is a movie web application that displays all trending or high-rated movies and series in detail and has the ability to search for all movies. This page is fully responsive and has the ability to change the theme. React router DOM bend is used and the application also shows IMDB ratings, release year, genre etc."
              ghLink="https://github.com/AmarjeetMandal05/Moviee_Website"
              demoLink="https://movie-searchh-engine.netlify.app"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
