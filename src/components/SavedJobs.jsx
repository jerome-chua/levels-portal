import React from 'react';
import moment from 'moment';

export default function SavedJobs({ savedJobs }) {
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
                    <div className="card-body">
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
