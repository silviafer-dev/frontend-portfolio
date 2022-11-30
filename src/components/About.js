import axios from "axios";
import React, { useEffect, useState } from "react";
import photo from "../assets/photo.png";
import "../CSS/about.css";

export function About() {
  const [personalInfo, setPersonalInfo] = useState({});
  useEffect(() => {
    axios
      .get("https://back-sf-portfolio.herokuapp.com/about")
      .then((res) => setPersonalInfo(res.data));
  }, [setPersonalInfo]);

  return (
    <div className="about">
      <img src={photo} alt="silvia ferrai" className="photo" />
      <div>
        <div className="name-prof-block">
          <h1>Hello world!</h1>
          <h1 className="my-name">I'm {personalInfo.name}</h1>
          <h3>{personalInfo.profession}</h3>
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
