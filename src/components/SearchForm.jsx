import React, { useState } from 'react';
import axios from 'axios';

import JobSearchBar from './JobSearchBar.jsx';
import SalarySearchBar from './SalarySearchBar.jsx';
import SearchIcon from './SearchIcon.jsx';

export default function SearchForm() {
  const [jobTitle, setJobTitle] = useState('');

  const getJobs = () => {
    console.log('my jobTitle:', jobTitle);

    axios.get(`/getjobs/${jobTitle}`)
      .then((res) => console.log('Jobs received from DB -----:\n', res.data))
      .catch((err) => console.log('err with axios.get("/getjobs"):\n', err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-6 my-1">
          <JobSearchBar setJobTitle={(title) => setJobTitle(title)} />
        </div>
        <div className="col-10 col-md-4 my-1">
          <SalarySearchBar />
        </div>
        <div className="col-10 col-md-2 my-1">
          <button type="button" className="btn btn-secondary px-4 mx-2" onClick={getJobs}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
