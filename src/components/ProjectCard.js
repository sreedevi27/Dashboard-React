// components/ProjectCard.js
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>Status: {project.status}</p>
    </div>
  );
};

export default ProjectCard;
