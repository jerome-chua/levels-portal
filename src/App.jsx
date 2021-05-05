import React, { useState } from 'react';

import JobSearch from './components/JobSearch.jsx';
import UserProfile from './components/UserProfile.jsx';
import GuestNavbar from './components/GuestNavbar.jsx';
import UserNavbar from './components/UserNavbar.jsx';
import SignIn from './components/SignIn.jsx';

export default function App() {
  const [status, setStatus] = useState('GUEST');
  const [pageView, setPageView] = useState('JOB_SEARCH');

  console.log(pageView);

  return (
    <div>
      {status === 'GUEST'
        ? (
          <GuestNavbar
            setPageView={(newView) => setPageView(newView)}
          />
        )
        : (
          <UserNavbar
            setPageView={(newView) => setPageView(newView)}
          />
        )}

      {pageView === 'JOB_SEARCH' && <JobSearch status={status} />}
      {pageView === 'SIGN_IN' && (
      <SignIn
        setPageView={(newView) => setPageView(newView)}
        setStatus={(newStatus) => setStatus(newStatus)}
      />
      )}
      {pageView === 'PROFILE' && (
      <UserProfile
        setStatus={(newStatus) => setStatus(newStatus)}
      />
      )}
    </div>

  );
}
