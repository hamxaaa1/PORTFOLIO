import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import intergro from "../../Assets/Projects/intergro.png";
import spendApp from "../../Assets/Projects/spendapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I've built using the MERN stack.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Intergro */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intergro}
              isBlog={false}
              title="Intergro"
              description="A full-stack MERN collaboration platform featuring secure JWT authentication, real-time messaging with Socket.io, AI-powered chatbot integration, task management, file sharing, and a modern responsive UI built with React and Tailwind CSS."
              ghLink="https://github.com/hamxaaa1/Intergro"
              demoLink="https://intergro.vercel.app"
            />
          </Col>

          {/* Spend App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spendApp}
              isBlog={false}
              title="Spend App"
              description="A modern MERN expense tracking application that helps users manage income and expenses, visualize spending with charts, categorize transactions, and monitor financial activity through a clean and responsive interface."
              ghLink="https://github.com/hamxaaa1/spend-app"
              demoLink="YOUR_LOOM_VIDEO_LINK"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;