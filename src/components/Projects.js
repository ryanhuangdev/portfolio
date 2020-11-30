import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Projects
        </Link>
      )}
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool.isRequired
};

export default Projects;
