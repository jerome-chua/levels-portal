import React from 'react';

export default function SignIn() {
  function SearchInput() {
    return (
      <input type="text" />
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Welcome back.</h1>
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
}
