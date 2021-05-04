import React from 'react';

const stringToPoints = (string) => {
  const randomInt = Math.floor(Math.random() * 5) + 2;
  const points = string.split('|', randomInt);
  const reactPoints = points.map((item) => <li>{item}</li>);

  return reactPoints;
};

export default function FullJobDescription({
  title, companyName, link, years, description, requirement, min, max, jobSkills, createdAt,
}) {
  return (
    <div className="card border-secondary my-2 mb-3">
      <div className="card-body text-secondary">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-title lead">{companyName}</h6>
        <button className="btn brand-btn my-3"><a href={link} className="text-light">Apply on Company Site</a></button>
        <hr className="mb-4" />
        <h5 className="mb-3">Description</h5>
        <ul>
          {stringToPoints(description)}
        </ul>
        <h5 className="mt-5 mb-3">Requirements</h5>
        <ul>
          {stringToPoints(requirement)}
        </ul>
        <h6 className="mt-5 mb-3">Required Skills</h6>
        <div className="skills-container p-2">
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
