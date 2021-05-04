import React, { useState, useEffect } from 'react';

import JobSearch from './components/JobSearch.jsx';
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
        : <UserNavbar />}

      {pageView === 'JOB_SEARCH' && <JobSearch />}
      {pageView === 'SIGN_IN' && (
      <SignIn
        setPageView={(newView) => setPageView(newView)}
        setStatus={(newStatus) => setStatus(newStatus)}
      />
      )}
    </div>

  );
}
