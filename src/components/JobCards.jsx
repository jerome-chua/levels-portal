import React from 'react';

const stringToPoints = (string) => {
  const points = string.split('|', 2);
  const reactPoints = points.map((item) => (
    <li className="mt-2">
      {item.substring(0, 120)}
      ...
    </li>
  ));

  return reactPoints;
};

export default function JobCards({
  idx, title, companyName, link, years, description, requirement, min, max, createdAt, setJobIdx,
}) {
  const selectJob = (e) => {
    const { target } = e;
    window.scrollTo(0, 100);
    setJobIdx(idx);
    console.log('Job selected: ----', target, idx);
  };

  return (
    <div className="card bg-light my-2 jobcard" onClick={selectJob}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-title mt-1 font-weight-light">{companyName}</h5>
        <p className="card-text font-italic font-weight-bolder">
          $
          {min}
          {' '}
          - $
          {max}
          {' '}
          / month
        </p>
        <p className="card-text">
          {years}
          {' '}
          years experience
        </p>
        <span className="card-text font-italic">
          <h5 className="mb-3">Description</h5>
          <ul>
            {stringToPoints(description)}
          </ul>
        </span>
        <p className="card-text font-italic mt-4">
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
