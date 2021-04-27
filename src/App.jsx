import React, { useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import SearchForm from './components/SearchForm.jsx';
import JobCards from './components/JobCards.jsx';

export default function App() {
  console.log('--------- App called! ---------');
  const [jobList, setJobList] = useState([]);

  console.log('jobList: ------\n', jobList);
  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <SearchForm setJobList={(jobs) => setJobList(jobs)} />
          </div>
        </div>
        <div className="row my-4">
          <div className="col d-flex justify-content-center">
            <button className="btn btn-secondary px-4 rounded-pill" type="button">Skills</button>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-5">
            {jobList.map((job, index) => (
              <JobCards key={[job, index].join('')} title={job.title} years={job.yearsRequired} description={job.description} min={job.minSalary} max={job.maxSalary} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}
