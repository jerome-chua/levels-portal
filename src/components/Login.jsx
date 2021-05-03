import React from 'react';

import Navbar from './Navbar.jsx';

export default function Login() {
  function searchInput() {
    return (
      <input type="text" />
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <searchInput />
          </div>
        </div>
      </div>
    </div>
  );
}
