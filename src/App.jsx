import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import SearchForm from './components/SearchForm.jsx';
import JobCards from './components/JobCards.jsx';
import JobAlert from './components/JobAlert.jsx';

export default function App() {
  console.log('--------- App rendered! ---------');
  const [jobList, setJobList] = useState([]);
  const [jobSearched, setJobSearched] = useState(false);
  const now = moment();

  return (
    <div>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <SearchForm setJobSearched={setJobSearched} setJobList={(jobs) => setJobList(jobs)} />
          </div>
        </div>
        <div className="row my-4">
          <div className="col d-flex justify-content-center">
            <button className="btn btn-secondary px-4 rounded-pill" type="button">Skills</button>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-5">
            {jobSearched ? jobList.length ? jobList.map((job, index) => (
              <JobCards key={[job, index].join('')} title={job.title} years={job.yearsRequired} description={job.description} min={job.minSalary} max={job.maxSalary} createdAt={now.diff(new Date(job.createdAt.split(' ')[0]), 'days')} />
            )) : <JobAlert /> : <div />}
          </div>
          <div className="col-7">
            <div className="card border-secondary mb-3">
              <div className="card-header">Header</div>
              <div className="card-body text-secondary">
                <h5 className="card-title">Secondary card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
