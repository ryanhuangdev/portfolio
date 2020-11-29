import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";
const Projects = (props) => {
  console.log('props', props);

  return (
    <section className="section projects">
      <Title title={props.title} />
      <div className="section-center projects-center">
        {props.projects.map((project, index) => {
          return <Projects key={project.id} index={index} {...project} />
        })}
      </div>
      {props.showLink && (
        <Link to="/projects" className="btn center-btn">
          Projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
