import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SkillCard from "./SkillCard";

const SkillCategory = ({ title, skills }) => (
  <div className="mb-5">
    <div className="d-flex flex-column align-items-center mb-4">
      <h3 className="h4 mb-2" style={{ color: "#AE887B", fontWeight: "600" }}>{title}</h3>
      <div style={{ width: "40px", height: "3px", backgroundColor: "#D9BFB1", borderRadius: "2px" }}></div>
    </div>
    <Row className="justify-content-center g-4">
      {skills.map((skill, index) => (
        <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-3">
          <SkillCard name={skill.name} icon={skill.icon} />
        </Col>
      ))}
    </Row>
  </div>
);

const Skills = ({ heading, languages, databases, technologies }) => {
  return (
    <div className="py-5 m-0" id="skills" style={{ backgroundColor: "#ffffff" }}>
      <Container>
        <h2 className="display-4 pb-5 text-center" style={{ color: "#5E5946" }}>
          {heading}
        </h2>
        
        <SkillCategory title="Programming Languages" skills={languages} />
        <SkillCategory title="Databases" skills={databases} />
        <SkillCategory title="Technologies" skills={technologies} />
      </Container>
    </div>
  );
};

export default Skills;
