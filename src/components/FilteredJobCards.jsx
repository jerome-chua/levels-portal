import React from 'react';
import moment from 'moment';

import JobCards from './JobCards.jsx';
import FilteredJobAlert from './FilteredJobAlert.jsx';

const now = moment();

export default function FilteredJobCards({ jobList, setJobIdx, jobSearched }) {
  return (
    <div className="col-5">
      {jobSearched
        ? jobList.length
          ? jobList.map((job, index) => (
            <JobCards
              key={[job.title, index].join('')}
              idx={index}
              title={job.title}
              companyName={job.company.name}
              years={job.yearsRequired}
              description={job.description}
              requirement={job.requirement}
              min={job.minSalary}
              max={job.maxSalary}
              createdAt={now.diff(new Date(job.createdAt.split(' ')[0]), 'days')}
              setJobIdx={setJobIdx}
            />
          )) : <FilteredJobAlert /> : <div />}
    </div>
  );
}
