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
  const chosenJobListing = jobList[selectedIdx];

  useEffect(() => {
    if (chosenJobListing) {
      axios.get(`/getskills/${chosenJobListing.id}`)
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
                jobList={jobList}
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
            {(jobList.length && chosenJobListing)
              ? (
                <ErrorBoundary>
                  <FullJobDescription
                    title={chosenJobListing.title}
                    companyName={chosenJobListing.company.name}
                    link={chosenJobListing.link}
                    years={chosenJobListing.yearsRequired}
                    description={chosenJobListing.description}
                    min={chosenJobListing.minSalary}
                    max={chosenJobListing.maxSalary}
                    jobSkills={jobSkills}
                    createdAt={now.diff(new Date(chosenJobListing.createdAt.split(' ')[0]), 'days')}
                  />
                </ErrorBoundary>
              )
              : <div />}
          </div>
        </div>
      </div>
    </div>

  );
}
