import axios from "axios";
import React, { useEffect, useState } from "react";
import photo from "../assets/photo.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import "../CSS/about.css";

export function About() {
  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    axios
      .get("https://back-portfolio-sf.herokuapp.com/about")
      .then((res) => setPersonalInfo(res.data));
  }, [setPersonalInfo]);

  return (
    <div className="about" id="bio">
      <img src={photo} alt="silvia ferrai" className="photo" />
      <div>
        <div className="name-prof-block">
          <h1>Hello world!</h1>
          <h1 className="my-name">I'm {personalInfo.name}</h1>
          <h2>{personalInfo.profession}</h2>
        </div>
        <div className="icons-links">
          <a
            href="https://www.linkedin.com/in/silvia-ferrai/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/silviafer-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>

        <p className="about-me">{personalInfo.about_me}</p>
        <div className="container-cv">
          <a
            href="https://drive.google.com/file/d/192TYZpLHySF9vqcddjhxWdwiDm1kB6P0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="cv-download"
          >
            DESCARGAR CV
          </a>
        </div>
      </div>
    </div>
  );
}
