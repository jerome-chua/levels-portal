import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

import ErrorBoundary from './ErrorBoundary.jsx';
import SearchForm from './SearchForm.jsx';
import SkillsModal from './SkillsModal.jsx';
import FullJobDescription from './FullJobDescription.jsx';
import UnfilteredJobCards from './UnfilteredJobCards.jsx';
import FilteredJobCards from './FilteredJobCards.jsx';

export default function JobSearch({ status }) {
  const [jobList, setJobList] = useState([]);
  const [jobSearched, setJobSearched] = useState(false);
  const [jobFiltered, setJobFiltered] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [jobSkills, setJobSkills] = useState([]);
  const [savedJobId, setSavedJobId] = useState(null);
  const [jobSaved, setJobSaved] = useState(false);

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
          setSavedJobId(chosenJobListing.id);
        })
        .catch((err) => console.log('/jobskills error: ----', err));
    }
  }, [jobSearched, selectedIdx]);

  useEffect(() => {
    if (chosenJobListing) {
      axios.get('/getsavedjobs')
        .then((res) => {
          const savedJobIds = res.data.map((job) => job.id);
          if (savedJobIds.includes(chosenJobListing.id)) {
            console.log('DO WE GET HERE?');
            setJobSaved(true);
          } else {
            setJobSaved(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [selectedIdx]);

  const saveJob = () => {
    if (status === 'USER') {
      axios.post('/savejob', { savedJobId })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log('/savejob error: ----', err));
    } else if (status === 'GUEST') {
      console.log('Status: GUEST');
    }
  };

  return (
    <div>
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
                    jobId={chosenJobListing.id}
                    title={chosenJobListing.title}
                    companyName={chosenJobListing.company.name}
                    link={chosenJobListing.link}
                    years={chosenJobListing.yearsRequired}
                    description={chosenJobListing.description}
                    requirement={chosenJobListing.requirement}
                    min={chosenJobListing.minSalary}
                    max={chosenJobListing.maxSalary}
                    jobSkills={jobSkills}
                    createdAt={now.diff(new Date(chosenJobListing.createdAt.split(' ')[0]), 'days')}
                    saveJob={saveJob}
                    status={status}
                    jobSaved={jobSaved}
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
