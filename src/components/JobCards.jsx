import React from 'react';

export default function JobCards({
  idx, title, companyName, years, description, min, max, createdAt, setJobIdx,
}) {
  const selectJob = (e) => {
    const { target } = e;
    setJobIdx(idx);
    console.log('Job selected: ----', target, idx);
  };

  return (
    <div className="card bg-light my-2 jobcard" onClick={selectJob}>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <h5 className="card-title lead">{companyName}</h5>
        <p className="card-text font-italic font-weight-light">
          $
          {min}
          {' '}
          to $
          {max}
        </p>
        <p className="card-text">
          {years}
          {' '}
          years experience
        </p>
        <p className="card-text">{description}</p>
        <span className="card-text font-italic">
          Posted
          {' '}
          {createdAt}
          {' '}
          {createdAt > 1 ? 'days ago' : 'day ago'}
        </span>
      </div>
    </div>
  );
}
