import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container">
      <h2>Contact Me</h2>
      <form>
        <div>
          <label className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div>
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="6"></textarea>
        </div>
        <Link to="/" className="btn btn-primary">Send</Link>
      </form>
    </div>
  );
}

export default Contact;
