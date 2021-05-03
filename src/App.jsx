import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import SearchForm from './components/SearchForm.jsx';
import SkillsModal from './components/SkillsModal.jsx';
import FullJobDescription from './components/FullJobDescription.jsx';
import UnfilteredJobCards from './components/UnfilteredJobCards.jsx';
import FilteredJobCards from './components/FilteredJobCards.jsx';

export default function App() {
  const [jobList, setJobList] = useState([]);
  const [jobSearched, setJobSearched] = useState(false);
  const [jobFiltered, setJobFiltered] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [jobSkills, setJobSkills] = useState([]);

  const setJobIdx = (jobIdx) => {
    setSelectedIdx(jobIdx);
  };

  const now = moment();
  const chosenJobListing = [jobList[selectedIdx]];
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

  console.log('chosenJobListing', chosenJobListing);

  return (
    <div>
      <Navbar />
      <div id="search-related" className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <ErrorBoundary>
              <SearchForm
                setJobSearched={setJobSearched}
                setJobList={(jobs) => setJobList(jobs)}
                setJobFiltered={setJobFiltered}
              />
            </ErrorBoundary>
          </div>
        </div>
        <div className="row my-4">
          <div className="col d-flex justify-content-center">
            {jobSearched
            && (
            <SkillsModal
              jobList={jobList}
              setJobFiltered={setJobFiltered}
              setJobList={(jobs) => setJobList(jobs)}
            />
            )}
          </div>
        </div>
        <div className="row mx-2">
          {jobFiltered
            ? (
              <FilteredJobCards
                jobList={filteredJobs}
                setJobIdx={setJobIdx}
                jobSearched={jobSearched}
              />
            )
            : (
              <UnfilteredJobCards
                jobList={jobList}
                setJobIdx={setJobIdx}
                jobSearched={jobSearched}
              />
            )}
          <div className="col-7">
            {jobList.length
              ? chosenJobListing.map((job) => (
                <ErrorBoundary>
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
                </ErrorBoundary>
              ))
              : <div />}
          </div>
        </div>
      </div>
    </div>

  );
}
