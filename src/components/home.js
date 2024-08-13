import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1>My Portfolio</h1>
        <h4>Hello World!</h4>
        <hr/>
        <p>See my projects</p>
        <Link className="btn btn-primary" to="/portfolio">View Portfolio</Link>
        <a className="btn btn-primary" href='https://github.com/'>Clone Code</a>
      </div>
    </div>
  );
}

export default Home;
