import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import FullJobSearch from './components/FullJobSearch.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <FullJobSearch />
    </div>

  );
}
