import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  return (
    <footer className="mt-auto py-5 text-center footer" style={{ backgroundColor: "#1a1a1a", color: "#F6F1EC" }}>
      <Container>
        {/* This contains the GetInTouch section */}
        <div className="py-5">
          {props.children}
        </div>
        
        {/* Credits Portion - Beautified with consistent spacing */}
        <div className="pt-5 pb-4 d-flex flex-column align-items-center">
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3" style={{ opacity: 0.9 }}>
            <i className="fas fa-code" style={{ color: "#AE887B", fontSize: "0.9rem" }} /> 
            <span style={{ fontSize: "0.95rem", fontWeight: "300" }}>Crafted with</span>
            <i className="fas fa-heart" style={{ color: "#ff7f7f", fontSize: "0.8rem" }} /> 
            <span style={{ fontSize: "0.95rem", fontWeight: "300" }}>by</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/raythx98"
              aria-label="My GitHub"
              className="footer-name-link"
              style={{ fontSize: "1rem" }}
            >
              Ray Toh
            </a>
          </div>
          
          <div className="mb-4" style={{ opacity: 0.35 }}>
            <small style={{ fontWeight: "300", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
              ORIGINAL TEMPLATE BY <a href="https://github.com/hashirshoaeb/home" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "underline" }}>HASHIR SHOAIB</a>
            </small>
          </div>
          
          <div style={{ opacity: 0.5 }}>
            <p className="mb-0">
              <small style={{ fontWeight: "300", fontSize: "0.75rem", letterSpacing: "0.02em" }}>
                © {new Date().getFullYear()} RAY TOH. ALL RIGHTS RESERVED.
              </small>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
