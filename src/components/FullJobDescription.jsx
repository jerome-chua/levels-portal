import React from 'react';

export default function FullJobDescription({
  title, companyName, link, years, description, min, max, jobSkills, createdAt,
}) {
  return (
    <div className="card border-secondary my-2 mb-3">
      <div className="card-body text-secondary">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-title lead">{companyName}</h6>
        <button className="btn brand-btn my-3"><a href={link} className="text-light">Apply on Company Site</a></button>
        <hr className="mb-4" />
        <p className="card-text">{description}</p>
        <h6 className="mb-3">Required Skills</h6>
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
