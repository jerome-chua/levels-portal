import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SavedJobs from './SavedJobs.jsx';
import AboutMe from './AboutMe.jsx';

export default function UserProfile({ setPageView }) {
  const [toggleView, setToggleView] = useState('ABOUT_ME');
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleAboutMe = () => {
    setToggleView('ABOUT_ME');
    console.log(toggleView);
  };

  const toggleSavedJobs = () => {
    setToggleView('SAVED_JOBS');
    console.log(toggleView);
  };

  useEffect(() => {
    axios.get('/getsavedjobs')
      .then((res) => {
        console.log('Saved Jobs:\n', res.data);
        setSavedJobs([...res.data]);
      })
      .catch((err) => console.log(err));
  }, [toggleView]);

  return (
    <div>
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
            {toggleView === 'ABOUT_ME' ? <AboutMe /> : <SavedJobs savedJobs={savedJobs} />}
          </div>
        </div>
        <div className="row my-5">
          <div className="col d-flex justify-content-end">
            <button type="button" className="btn btn-dark">Log out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
