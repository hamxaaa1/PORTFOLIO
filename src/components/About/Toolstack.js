import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiGooglechrome,
  SiVercel,
  SiRender,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={32} color="#007ACC" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub size={32} color="#FFFFFF" />
        <div className="tech-icons-text">GitHub</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <SiGooglechrome size={32} color="#4285F4" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVercel size={32} color="#FFFFFF" />
        <div className="tech-icons-text">Vercel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiRender size={32} color="#46E3B7" />
        <div className="tech-icons-text">Render</div>
      </Col>

      
    </Row>
  );
}

export default Toolstack;