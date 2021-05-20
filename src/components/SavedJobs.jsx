import React from 'react';
import moment from 'moment';
import axios from 'axios';

export default function SavedJobs({ savedJobs }) {
  const deleteSavedJob = (jobId) => {
    console.log('jobid', jobId);

    axios.delete(`/deletejob/${jobId}`)
      .then((res) => console.log(res))
      .catch((err) => console.log('err in delete job route:', err));
  };

  return (
    <div>
      <div id="saved-jobs" className="container mt-4">
        <div className="row">
          <div className="col">
            <h5 className="m-3">Jobs Saved:</h5>
            <div className="row">
              <div className="col">
                {savedJobs.map((job) => (
                  <div className="card m-4">
                    <div className="container card-body">
                      <div className="row">
                        <div className="col-10">
                          <h5 className="card-title">{job.title}</h5>
                          <p className="card-text">
                            $
                            {job.minSalary}
                            {' '}
                            -  $
                            {job.maxSalary}
                            {' '}
                            / month
                          </p>
                          <a href={job.link} className="btn brand-btn mt-3">Apply Now</a>
                          <p className="card-text text-muted font-weight-light font-italic mt-3">
                            Closing Date:
                            {' '}
                            {moment(new Date(job.closingAt.slice(0, 10))).format('d MMMM YYYY')}
                          </p>
                        </div>
                        <div className="col-2 px-3 text-right">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => {
                              deleteSavedJob(job.id);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
