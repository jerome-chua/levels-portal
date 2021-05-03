import React from 'react';

export default function Navbar() {
  const signedIn = false;

  function renderJobSearch() {
    // searchComp.add();
  }

  function renderSignIn() {
    const searchComp = document.getElementById('search-related');
    if (searchComp) searchComp.remove();
  }

  function renderProfile() {
    const searchComp = document.getElementById('search-related');
    if (searchComp) searchComp.remove();
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
        {signedIn
          ? (
            <ul className="navbar-nav ml-auto">
              <a
                className="btn btn-small"
                onClick={renderProfile}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </a>
            </ul>
          )
          : (
            <ul className="align-middle m-2 text-light">
              <a
                id="sign-in"
                onClick={renderSignIn}
              >
                Sign in
              </a>
            </ul>
          )}

      </nav>
    </div>
  );
}
