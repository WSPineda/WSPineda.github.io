import React from 'react';
import { Link } from 'react-router-dom';
import projects from './project-list.js';

function Portfolio() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h2 className="display-4">My Projects</h2>
        <p className="lead">A showcase of my latest work and accomplishments</p>
        <a className="btn btn-outline-primary btn-lg" href="https://github.com/">Clone Code</a>
      </div>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={project.image} className="card-img-top rounded" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title text-center">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-grid gap-2">
                  <Link to={`/project/${project.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
