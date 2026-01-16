import React from "react";
import { TypeAnimation } from "react-type-animation";
import Container from "react-bootstrap/Container";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    
    const scrollToAbout = (e) => {
      e.preventDefault();
      const element = document.getElementById("aboutme");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <div
        id="home"
        style={{
          background: `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)`,
          position: "relative",
          overflow: "hidden"
        }}
        className="title bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center" style={{ zIndex: 2 }}>
          <h1 
            ref={ref} 
            className="display-1 mb-4" 
            style={{ 
              fontWeight: "800",
              letterSpacing: "-0.02em",
              background: `linear-gradient(to right, #F6F1EC, #AE887B)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {title}
          </h1>
          <div className="mb-5">
            <TypeAnimation
              sequence={[message, 1000]}
              speed={50}
              className="h3 mb-0"
              style={{ 
                fontWeight: "400", 
                color: "#D9BFB1",
                opacity: 0.9
              }}
              repeat={0}
              cursor={false}
            />
          </div>
          <div className="social-links mb-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                className="mx-3 social-icon-link"
                aria-label={`My ${icon.image.split("-")[1]}`}
                style={{
                  color: "#F6F1EC",
                  fontSize: "2rem",
                  transition: "all 0.3s ease"
                }}
              >
                <i className={`fab ${icon.image}`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg px-5 py-3"
            onClick={scrollToAbout}
            role="button"
            aria-label="Learn more about me"
            style={{
              borderRadius: "50px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontSize: "0.9rem",
              borderWidth: "2px",
              cursor: "pointer"
            }}
          >
            Explore My Work
          </a>
        </Container>
      </div>
    );
  }
);

export default MainBody;
