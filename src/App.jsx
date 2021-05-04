import React, { useState, useEffect } from 'react';

import GuestJobSearch from './components/GuestJobSearch.jsx';
import Navbar from './components/Navbar.jsx';
import UserNavbar from './components/UserNavbar.jsx';
import SignIn from './components/SignIn.jsx';

export default function App() {
  const [signInClicked, setSigningIn] = useState(false);
  const [view, setView] = useState('not-signedin');

  return (
    <div>
      {view === 'not-signedin'
        ? <Navbar setSigningIn={setSigningIn} />
        : <UserNavbar />}
      {!signInClicked && <GuestJobSearch />}
      {signInClicked && <SignIn setMode={(changeMode) => setView(changeMode)} />}
    </div>

  );
}
