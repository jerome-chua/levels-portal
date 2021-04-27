import React, { useState, useEffect } from 'react';

export default function JobSearchBar() {
  const [jobText, setJobText] = useState('');

  const handleChange = (event) => {
    const userInput = event.target.value;
    setJobText(userInput);
    console.log(userInput);
  };

  return (
    <div className="mx-1">
      <input
        id="job-search"
        className="form-control"
        placeholder="Search Job by Title"
        value={jobText}
        onClick={() => {
          console.log('Input clicked');
        }}
        onChange={handleChange}
      />

    </div>
  );
}
