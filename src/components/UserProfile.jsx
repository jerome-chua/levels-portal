import React, { useState } from 'react';

import SavedJobs from './SavedJobs.jsx';

export default function UserProfile({ setPageView }) {
  const [toggleView, setToggleView] = useState('ABOUT_ME');

  const toggleAboutMe = () => {

  };

  const toggleSavedJobs = () => {
    setToggleView('SAVED_JOBS');
  };

  return (
    <div id="profile-container" className="container w-100">
      <div className="row mt-5">
        <div className="col">
          <h3>User Profile</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary" onClick={toggleAboutMe}>About Me</button>
            <button type="button" className="btn btn-secondary" onClick={toggleSavedJobs}>Saved Jobs</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {toggleView === 'SAVED_JOBS' && <SavedJobs />}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col d-flex justify-content-end">
          <button type="button" className="btn btn-dark">Log out</button>
        </div>
      </div>
    </div>

  );
}
