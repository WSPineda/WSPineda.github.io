import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import projects from './project-list.js';

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id));

  return (
    <div className="container my-5">
      <Link to="/portfolio" className="btn btn-outline-primary mb-4">Go Back</Link>
      
      <div className="card shadow-sm mb-5">
        <div className="card-body text-center">
          <h2 className="card-title">{project.title} Overview</h2>
          <img src={project.image} alt={project.title} className="img-fluid rounded mb-4 detail-image" />
          <p className="card-text">{project.description}</p>
          <a href={project.github} className="btn btn-primary">Github Page</a>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body text-center">
              <h4>Project Description</h4>
              <p className="text-center">{project.long_description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card mb-4 shadow-sm">
            <div className="card-body text-center">
              <h4>Technologies Used</h4>
              <p className="text-center">{project.technologies}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4>My Contributions</h4>
              <p className="text-center">{project.contributions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
