import React from 'react';

export default function GuestNavbar({ setPageView }) {
  function renderJobSearch() {
    const signIn = document.getElementById('signin-container');
    if (signIn) signIn.remove();

    setPageView('JOB_SEARCH');
  }

  function renderSignIn() {
    const searchComp = document.getElementById('search-related');
    if (searchComp) searchComp.remove();

    setPageView('SIGN_IN');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg justify-content-between">
        <a className="navbar-brand text-light px-3" href="#">
          <img src="./stairs.png" width="32" height="32" alt="Levels Portal Brand" />
        </a>
        <ul className="navbar-nav mr-auto">
          <button className="btn btn-sm btn-outline-light px-3 mx-3" type="button" onClick={renderJobSearch}>Find jobs</button>
        </ul>
        <ul className="align-middle m-2 text-light">
          <a
            id="sign-in"
            onClick={renderSignIn}
          >
            Sign in
          </a>
        </ul>
      </nav>
    </div>
  );
}
