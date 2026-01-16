import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { mainBody, about, skills, repos } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions || !ref || !ref.current) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom, ref]
  );

  React.useEffect(() => {
    if (!navbarDimensions || !ref || !ref.current) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`fixed-top transition-all duration-300 ${
        isTop ? "navbar-transparent py-4" : "navbar-white shadow-sm py-2"
      }`}
      expand="lg"
      variant={isTop ? "dark" : "light"}
    >
      <Container fluid className="px-3 px-lg-4">
        <Navbar.Brand 
          style={{ 
            fontWeight: "800", 
            letterSpacing: "-0.02em",
            fontSize: "1.5rem",
            color: isTop ? "#F6F1EC" : "#5E5946",
            cursor: "pointer"
          }} 
          onClick={(e) => scrollToSection(e, "home")}
        >
          {`<${mainBody.firstName} />`}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {about.show && (
              <Nav.Link 
                className="px-lg-3" 
                onClick={(e) => scrollToSection(e, "aboutme")}
                style={{ fontWeight: "600", fontSize: "0.95rem", cursor: "pointer" }}
              >
                About
              </Nav.Link>
            )}
            <Nav.Link 
              className="px-lg-3" 
              onClick={(e) => scrollToSection(e, "experience")}
              style={{ fontWeight: "600", fontSize: "0.95rem", cursor: "pointer" }}
            >
              Experience
            </Nav.Link>
            {skills.show && (
              <Nav.Link 
                className="px-lg-3" 
                onClick={(e) => scrollToSection(e, "skills")}
                style={{ fontWeight: "600", fontSize: "0.95rem", cursor: "pointer" }}
              >
                Skills
              </Nav.Link>
            )}
            {repos.show && (
              <Nav.Link 
                className="px-lg-3" 
                onClick={(e) => scrollToSection(e, "projects")}
                style={{ fontWeight: "600", fontSize: "0.95rem", cursor: "pointer" }}
              >
                Projects
              </Nav.Link>
            )}
            <Nav.Link 
              className="px-lg-3" 
              href={about.resume}
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontWeight: "600", fontSize: "0.95rem" }}
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Navigation;