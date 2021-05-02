import React, { useState } from 'react';
import axios from 'axios';

import JobsTypeAhead from './JobsTypeahead.jsx';
import SalarySearchBar from './SalarySearchBar.jsx';
import SearchIcon from './SearchIcon.jsx';

export default function SearchForm({ setJobSearched, setJobList, setJobFiltered }) {
  const [jobTitle, setJobTitle] = useState('');

  const getJobs = () => {
    axios.get(`/getjobs/${jobTitle}`)
      .then((res) => {
        console.log('Data coming back from getJobs controller:\n', res.data);

        setJobList(res.data);
        setJobSearched(true);
        setJobFiltered(false);
      })
      .catch((err) => {
        console.log('err with axios.get("/getjobs"):\n', err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 my-1">
          <JobsTypeAhead setJobTitle={(title) => setJobTitle(title)} />
          {/* <JobSearchBar setJobTitle={(title) => setJobTitle(title)} /> */}
        </div>
        <div className="col-12 col-md-4 my-1">
          <SalarySearchBar />
        </div>
        <div className="col-12 col-md-2 my-1 d-flex justify-content-center">
          <button id="search-btn" type="button" className="btn btn-secondary px-4 mx-1 " onClick={getJobs}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
