import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/portfolio.css";

export function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("./data/Portfolio.json").then((res) => setProjects(res.data));
  }, [setProjects]);

  return (
    <div id="projects">
      <h2 className="title">Proyectos</h2>
      <div className="container-projects">
        {projects &&
          projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project__content">
                <div className="project__title">
                  <h3 className="project-name">{project.name}</h3>
                  <h5>{project.description}</h5>
                </div>

                <a
                  className="link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  className="link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
              <a
                href={project.link}
                className="link-photo"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={project.image}
                  alt="imago app pic"
                  className="photo-project"
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
