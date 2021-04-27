import React, { useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';
import SearchForm from './components/SearchForm.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <SearchForm />
          </div>
        </div>
      </div>
    </div>

  );
}
