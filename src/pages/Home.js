import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Aryan Dave</h2>
        <div className="prompt">
          <p>A Front-end developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com"><LinkedInIcon /></a>
          <a href="https://www.gmail.com"><EmailIcon /></a>
          <a href="https://www.github.com"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, JavaScript, React.js
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
              Node.js
            </span>
          </li>
          
          <li className="item">
            <h2>Soft Skills</h2>
            <span>Leadership Quality, Communication Skills, Team Work, Problem Solving, Creativity </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
