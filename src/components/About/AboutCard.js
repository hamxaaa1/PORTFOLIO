import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Hamza Ashfaq</span> from{" "}
            <span className="purple">Faisalabad, Pakistan</span>.
            <br />
            <br />
            I have completed my{" "}
            <span className="purple">BS Computer Science</span> from{" "}
            <span className="purple">
              Government College University Faisalabad (GCUF)
            </span>
            .
            <br />
            <br />
            I'm a passionate{" "}
            <span className="purple">MERN Stack Developer</span> who enjoys
            building modern, responsive, and scalable web applications. I love
            turning ideas into real-world projects and continuously improving my
            development skills.
            <br />
            <br />
            Outside of development, I enjoy sharpening my problem-solving skills
            by practicing{" "}
            <span className="purple">LeetCode</span> and exploring new
            technologies in the JavaScript ecosystem.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Full-Stack Web Applications 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Problems on LeetCode 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Web Technologies 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, learn with consistency."
          </p>
          <footer className="blockquote-footer">Hamza Ashfaq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;