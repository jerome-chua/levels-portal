import axios from 'axios';
import React from 'react';

const stringToPoints = (string) => {
  const randomInt = Math.floor(Math.random() * 5) + 2;
  const points = string.split('|', randomInt);
  const reactPoints = points.map((item) => <li>{item}</li>);

  return reactPoints;
};

export default function FullJobDescription({
  title, companyName, link, years, description, requirement, min, max, jobSkills, createdAt, saveJob, status,
}) {
  return (
    <div className="card border-secondary my-2 mb-3">
      <div className="card-body text-secondary">
        <h4 className="card-title">{ title }</h4>
        <h6 className="card-title lead">{companyName}</h6>
        <button className="btn brand-btn my-3"><a href={link} className="text-light">Apply on Company Site</a></button>
        {status === 'USER'
          ? (
            <button id="save-job" type="submit" className="ml-2 btn btn-light" onClick={saveJob}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </button>
          )
          : (
            <button type="submit" className="ml-2 btn btn-light" disabled>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </button>
          )}

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
