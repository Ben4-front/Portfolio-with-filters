import React from 'react';
import PropTypes from 'prop-types';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;