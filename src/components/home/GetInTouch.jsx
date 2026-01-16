import React from "react";
import { Container } from "react-bootstrap";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <div className="min-vh-50 d-flex align-items-center py-5" style={{ backgroundColor: "transparent" }}>
      <Container className="text-center">
        <h2 className="display-4 mb-4 fw-bold text-light">
          {heading}
        </h2>
        <p className="lead mb-5 mx-auto text-light opacity-75" style={{ maxWidth: "800px", lineHeight: "1.8" }}>
          {message}
        </p>
        <a 
          className="btn btn-outline-light btn-lg px-5 py-3 shadow-sm" 
          href={`mailto:${email}`}
          style={{ 
            borderRadius: "50px", 
            fontWeight: "600",
            fontSize: "1.1rem",
            transition: "all 0.3s ease",
            borderWidth: "2px"
          }}
        >
          <i className="fas fa-paper-plane me-2" /> Start a Conversation
        </a>
      </Container>
    </div>
  );
};

export default GetInTouch;