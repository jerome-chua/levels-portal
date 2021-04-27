import React, { useState } from 'react';

import JobSearchBar from './JobSearchBar.jsx';
import SalarySearchBar from './SalarySearchBar.jsx';
import SearchBtn from './SearchBtn.jsx';

export default function SearchForm() {
  return (
    <div className="cotainer">
      <div className="row">
        <div className="col-10 col-md-6 my-1">
          <JobSearchBar />
        </div>
        <div className="col-10 col-md-4 my-1">
          <SalarySearchBar />
        </div>
        <div className="col-10 col-md-2 my-1">
          <SearchBtn />
        </div>
      </div>
    </div>
  );
}
