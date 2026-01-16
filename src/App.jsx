import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "@/components/home/MainBody.jsx";
import AboutMe from "@/components/home/AboutMe.jsx";
import Project from "@/components/home/Project.jsx";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import Skills from "@/components/home/Skills.jsx";
import GetInTouch from "@/components/home/GetInTouch.jsx";
import Experience from "@/components/home/Experience.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          paragraphs={about.paragraphs}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {experiences.show && (
        <Experience experiences={experiences}/>
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          languages={skills.languages}
          databases={skills.databases}
          technologies={skills.technologies}
        />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
          projects={repos.projects}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/" element={<Home ref={titleRef} />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
