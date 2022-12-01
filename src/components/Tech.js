import React from "react";
import "../CSS/tech.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoSass, IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReact,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiJest,
  SiCypress,
  SiTrello,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export function Tech() {
  return (
    <div className="stack" id="stack">
      <h2 className="title-stack">Stack Tecnológico </h2>
      <div className="container-stack">
        <div className="tech bounce">
          <SiJavascript />
          <h4>Javascript</h4>
        </div>
        <div className="tech bounce">
          <SiTypescript />
          <h4>Typescript</h4>
        </div>
        <div className="tech bounce">
          <AiOutlineHtml5 />
          <h4>HTML</h4>
        </div>
        <div className="tech bounce">
          <TbBrandCss3 />
          <h4>CSS</h4>
        </div>
        <div className="tech bounce">
          <IoLogoSass />
          <h4>Sass</h4>
          <h4>Bem</h4>
        </div>
        <div className="tech bounce">
          <SiReact />
          <h4>React</h4>
        </div>
        <div className="tech bounce">
          <SiRedux />
          <h4>Redux</h4>
        </div>
        <div className="tech bounce">
          <IoLogoNodejs />
          <h4>NodeJS</h4>
        </div>
        <div className="tech bounce">
          <SiExpress />
          <h4> Express</h4>
        </div>
        <div className="tech bounce">
          <SiMysql />
          <h4>MySql</h4>
        </div>
        <div className="tech bounce">
          <SiMongodb />
          <h4>MongoDB</h4>
          <h4>Mongoose</h4>
        </div>
        <div className="tech bounce">
          <SiJest />
          <h4>Jest</h4>
        </div>
        <div className="tech bounce">
          <SiCypress />
          <h4>Cypress</h4>
        </div>
        <div className="tech bounce">
          <FaGitAlt />
          <h4>Git</h4>
        </div>
        <div className="tech bounce">
          <SiTrello />
          <h4>Trello</h4>
        </div>
      </div>
    </div>
  );
}
