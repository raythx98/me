import React  from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    languages,
    repo_url,
    demo_url,
  } = value;
  
  return (
    <Col md={6} className="mb-5">
      <Card 
        className="h-100 border-0 shadow-sm project-card-modern"
        style={{ 
          borderRadius: "24px",
          backgroundColor: "#ffffff",
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          border: "1px solid rgba(0,0,0,0.05) !important"
        }}
      >
        <Card.Body className="p-4 d-flex flex-column">
          <Card.Title as="h3" className="mb-3 fw-bold" style={{ color: "#2d2d2d", fontSize: "1.5rem" }}>
            {name || <Skeleton />}
          </Card.Title>
          <Card.Text className="mb-4 flex-grow-1" style={{ color: "#5a5a5a", fontSize: "1rem", lineHeight: "1.7" }}>
            {description || <Skeleton count={3} />}
          </Card.Text>

          <div className="mb-4 d-flex flex-wrap gap-2">
            {languages ? (
              languages.map((language) => (
                <span
                  key={language} 
                  className="px-3 py-1 fw-semibold"
                  style={{
                    fontSize: "0.75rem",
                    backgroundColor: "#f0f2f5",
                    color: "#5E5946",
                    borderRadius: "8px",
                    border: "1px solid rgba(0,0,0,0.05)",
                    letterSpacing: "0.02em"
                  }}
                >
                  {language}
                </span>
              ))
            ) : (
              <Skeleton width={50} count={3} inline={true} style={{ marginRight: '5px' }} />
            )}
          </div>

          <div className="d-flex gap-3 mt-auto">
            {repo_url && (
              <a 
                href={repo_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark flex-grow-1 py-2 fw-bold"
                style={{ borderRadius: "12px", fontSize: "0.9rem", border: "2px solid #5E5946" }}
              >
                <i className="fab fa-github me-2" /> Source
              </a>
            )}
            {demo_url && (
              <a 
                href={demo_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-dark flex-grow-1 py-2 fw-bold"
                style={{ borderRadius: "12px", fontSize: "0.9rem", backgroundColor: "#5E5946" }}
              >
                <i className="fas fa-external-link-alt me-2" /> Preview
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
