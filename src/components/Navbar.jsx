import React from 'react';

export default function Navbar() {
  console.log('Navbar called!');

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg justify-content-between">
        <a className="navbar-brand text-light px-3" href="#">
          <img src="./stairs.png" width="32" height="32" alt="Levels Portal Brand" />
        </a>
        <ul className="navbar-nav mr-auto">
          <button className="btn btn-sm btn-outline-light px-3 mx-3" type="button">Sign in</button>
        </ul>
      </nav>
    </div>
  );
}
