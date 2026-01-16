import React from "react";

const AboutMe = ({ heading, paragraphs, link, imgSize, resume }) => {
  return (
    <div
      id="aboutme"
      className="py-5 m-0"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5 d-none d-lg-flex justify-content-center mb-5 mb-lg-0">
            {link && (
              <div style={{ position: "relative" }}>
                <div 
                  style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    width: "100%",
                    height: "100%",
                    border: "4px solid #F9F4EF",
                    borderRadius: "24px",
                    zIndex: 0
                  }}
                ></div>
                <img
                  className="shadow-lg"
                  src={link}
                  alt="profilepicture"
                  style={{ 
                    borderRadius: "24px",
                    width: imgSize,
                    height: imgSize,
                    objectFit: "cover",
                    position: "relative",
                    zIndex: 1
                  }}
                />
              </div>
            )}
          </div>

          <div className={`col-lg-${link ? "7" : "12"}`}>
            <div className="ps-lg-5">
              <h2
                className="display-4 mb-4"
                style={{ color: "#5E5946", fontWeight: "700" }}
              >
                {heading}
              </h2>
              <div style={{ width: "60px", height: "4px", backgroundColor: "#AE887B", marginBottom: "2.5rem", borderRadius: "2px" }}></div>
              
              {paragraphs && paragraphs.map((p, index) => (
                <p 
                  key={index} 
                  className="lead mb-4" 
                  style={{ color: "#5E5946", lineHeight: "1.8" }}
                >
                  {p}
                </p>
              ))}
                
              {resume && (
                <div className="d-flex gap-3 mt-5">
                  <a
                    className="btn btn-dark btn-lg px-5"
                    href={resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Resume/CV"
                    style={{ borderRadius: "12px", backgroundColor: "#5E5946", border: "none" }}
                  >
                    View Resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;