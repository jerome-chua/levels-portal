import React from 'react';

export default function JobCards() {
  return (
    <div className="card bg-light my-2">
      <div className="card-body">
        <h4 className="card-title">Job Title</h4>
        <h5 className="card-title lead">Company Name</h5>
        <p className="card-text font-italic font-weight-light">Salary range</p>
        <p className="card-text">Years required</p>
        <p className="card-text">Job Description</p>
        <span className="card-text font-italic">Posted x days ago</span>
      </div>
    </div>
  );
}
