import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5 bg-light p-5 rounded">
        <h1 className="display-4 text-center">Welcome to My Portfolio</h1>
        <h4 className="text-center text-muted">Crafting code with passion</h4>
        <hr className="my-4"/>
        <p className="lead text-center">Explore my projects and get to know my work.</p>
        <div className="text-center">
          <Link className="btn btn-primary btn-lg mr-3" to="/portfolio">View Portfolio</Link>
          <a className="btn btn-outline-secondary btn-lg" href="https://github.com/">Clone Code</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
