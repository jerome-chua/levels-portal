import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import FullJobSearch from './components/FullJobSearch.jsx';
import SignIn from './components/SignIn.jsx';

export default function App() {
  const [signingIn, setSigningIn] = useState(false);

  return (
    <div>
      <Navbar setSigningIn={setSigningIn} />
      <FullJobSearch />
      {signingIn && <SignIn />}
    </div>

  );
}
