import axios from 'axios';
import React from 'react';

export default function FullJobDescription({
  title, companyName, years, description, min, max, jobSkills, createdAt,
}) {
  return (
    <div className="card border-secondary my-2 mb-3">
      <div className="card-body text-secondary">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-title lead">{companyName}</h6>
        <button className="btn brand-btn my-3"> Apply on Company Site</button>
        <hr className="mb-4" />
        <p className="card-text">{description}</p>
        <h6>Skills required</h6>
        <div className="skills-container">
          {jobSkills.map((skill) => (
            <span key={skill.name.toString()} className="badge badge-pill m-2">{skill.name}</span>
          ))}
        </div>

        <p className="card-text font-italic mt-5">
          Posted
          {' '}
          {createdAt}
          {' '}
          {createdAt > 1 ? 'days ago' : 'day ago'}
        </p>
      </div>
    </div>
  );
}
