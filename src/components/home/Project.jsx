import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Project = ({ heading, username, length, specfic, projects }) => {
  return (
    <div id="projects" className="py-5 m-0" style={{ backgroundColor: "#F6F1EC" }}>
      <Container className="py-5">
        <h2 className="display-4 pb-5 text-center fw-bold" style={{ color: "#2d2d2d" }}>{heading}</h2>
        <Row>
          {projects && projects.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;