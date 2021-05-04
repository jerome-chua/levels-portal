import React from 'react';

export default function SavedJobs() {
  return (
    <div>
      <div id="saved-jobs" className="container mt-3">
        <div className="row">
          <div className="col">
            <h5 className="m-3">Jobs Saved:</h5>
            <div className="row">
              <div className="col-sm-6">
                <div className="card m-4">
                  <div className="card-body">
                    <h5 className="card-title">Job Title</h5>
                    <p className="card-text">Company Name</p>
                    <p className="card-text">Salary</p>
                    <a href="#" className="btn btn-primary">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
