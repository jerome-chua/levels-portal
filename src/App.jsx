import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import SearchForm from './components/SearchForm.jsx';
import JobCards from './components/JobCards.jsx';
import JobAlert from './components/JobAlert.jsx';
import FullJobDescription from './components/FullJobDescription.jsx';

export default function App() {
  console.log('--------- App rendered! ---------');
  const [jobList, setJobList] = useState([]);
  const [jobSearched, setJobSearched] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [jobSkills, setJobSkills] = useState([]);

  const now = moment();
  const chosenJobListing = [jobList[selectedIdx]];

  const setJobIdx = (jobIdx) => {
    setSelectedIdx(jobIdx);
  };

  const jobId = jobList[selectedIdx];

  useEffect(() => {
    if (jobId) {
      axios.get(`/getskills/${jobId.id}`)
        .then((res) => {
          const skills = res.data;

          setJobSkills([...skills]);
        })
        .catch((err) => console.log('/jobskills error: ----', err));
    }
  }, [jobSearched, selectedIdx]);

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
              <JobCards
                key={[job.title, index].join('')}
                idx={index}
                title={job.title}
                companyName={job.company.name}
                years={job.yearsRequired}
                description={job.description}
                min={job.minSalary}
                max={job.maxSalary}
                createdAt={now.diff(new Date(job.createdAt.split(' ')[0]), 'days')}
                setJobIdx={setJobIdx}
              />
            )) : <JobAlert /> : <div />}
          </div>
          <div className="col-7">
            {jobList.length
              ? chosenJobListing.map((job) => (
                <FullJobDescription
                  title={job.title}
                  companyName={job.company.name}
                  link={job.link}
                  years={job.yearsRequired}
                  description={job.description}
                  min={job.minSalary}
                  max={job.maxSalary}
                  jobSkills={jobSkills}
                  createdAt={now.diff(new Date(job.createdAt.split(' ')[0]), 'days')}
                />
              ))
              : <div />}
          </div>
        </div>
      </div>
    </div>

  );
}
