import React from "react";
import { Card } from "react-bootstrap";

const SkillCard = ({ name, icon }) => {
  const isUrl = icon && (icon.startsWith('http') || icon.startsWith('/'));

  return (
    <Card 
      className="h-100 shadow-sm border-0 text-center skill-card-modern"
      style={{ 
        backgroundColor: "#F6F1EC",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: "16px",
        overflow: "hidden"
      }}
    >
      <Card.Body className="d-flex flex-column align-items-center justify-content-center py-4 px-2">
        <div 
          className="mb-3 d-flex align-items-center justify-content-center"
          style={{
            width: "48px",
            height: "48px",
            backgroundColor: "transparent",
            borderRadius: "12px",
          }}
        >
          {isUrl ? (
            <img src={icon} alt={name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          ) : (
            <i className={`${icon} fa-3x`}></i>
          )}
        </div>
        <Card.Title 
          className="mb-0 h6" 
          style={{ 
            color: "#5E5946",
            fontWeight: "600",
            fontSize: "0.9rem",
            letterSpacing: "0.02em"
          }}
        >
          {name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
