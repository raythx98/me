import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Container from "react-bootstrap/Container";

const Experience = ({ experiences }) => {
  return (
    <div id="experience" className="py-5 m-0" style={{
      backgroundColor: "#F6F1EC"
    }}>
      <Container className="py-5">
        <h2 className="display-4 mb-5 text-center" style={{ color: "#5E5946", fontWeight: "700" }}>
          {experiences.heading}
        </h2>
        <VerticalTimeline lineColor="#D9BFB1">
          {experiences.data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className={`vertical-timeline-element--${item.type}`}
              contentStyle={{ 
                background: '#ffffff', 
                color: '#5E5946',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                borderRadius: '16px',
                padding: '2rem'
              }}
              contentArrowStyle={{ borderRight: '7px solid  #ffffff' }}
              date={item.date}
              iconStyle={{ background: '#5E5946', color: '#ffffff', boxShadow: '0 0 0 4px #F6F1EC, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)' }}
              icon={item.type === 'school' ? <SchoolIcon /> : <WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title" style={{ fontWeight: "700", color: "#AE887B" }}>
                {item.role}
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-2" style={{ fontWeight: "600", fontSize: "1rem" }}>
                {item.company}
              </h4>
              <p style={{ fontWeight: "400", lineHeight: "1.6", color: "#7e7864" }}>
                {item.description}
              </p>
              
              {item.details && (
                <div className="experience-details">
                  <ul className="mt-0 ps-3 mb-0" style={{ color: "#5E5946", fontSize: "0.95rem" }}>
                    {item.details.map((detail, i) => (
                      <li key={i} className="mb-1">{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Container>
    </div>
  )
};

export default Experience;