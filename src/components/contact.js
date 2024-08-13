import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="6" placeholder="Write your message here"></textarea>
          </div>
          <div className="text-center">
            <Link to="/" className="btn btn-primary btn-lg">Send</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
