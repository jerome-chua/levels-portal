import React, { useState } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <p>Levels Portal</p>
          </div>
        </div>
      </div>
    </div>

  );
}
