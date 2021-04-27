import React, { useState } from 'react';
import axios from 'axios';

export default function JobSearchBar({ setJobTitle }) {
  const [jobText, setJobText] = useState('');

  const handleChange = (event) => {
    const userInput = event.target.value;
    setJobText(userInput);
    setJobTitle(userInput);
  };

  return (
    <div className="mx-1">
      <input
        id="job-search"
        className="form-control"
        placeholder="Search Job by Title"
        value={jobText}
        onClick={() => {
          console.log('Job Search input clicked');
        }}
        onChange={handleChange}
      />

    </div>
  );
}
