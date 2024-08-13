import React from 'react';
import { Link } from 'react-router-dom';
import projects from './project-list.js'; 

function Portfolio() {
    return (
        <div className="container">
            <h2>My Projects</h2>
            <a className="btn btn-primary" href='https://github.com/'>Clone Code</a>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                <Link to={`/project/${project.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;