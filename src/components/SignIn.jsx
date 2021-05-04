import axios from 'axios';
import React, { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(evt) {
    const text = evt.target.value;
    console.log(text);
    setEmail(text);
  }

  function handlePasswordChange(evt) {
    const text = evt.target.value;
    console.log(text);
    setPassword(text);
  }

  function getUser() {
    // const userData = {
    //   email,
    //   password,
    // };

    axios.post('/signin', { email, password })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log('Trouble logging user in'));
  }

  return (
    <div>
      <div className="container w-75">
        <div className="row mt-5">
          <div className="col">
            <h3>Sign In</h3>
            <div>
              <label className="mt-3">Email address</label>
              <input
                id="email-input"
                type="email"
                value={email}
                className="form-control"
                onChange={handleEmailChange}
              />
              <label className="mt-2">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                className="form-control"
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                className="btn btn-dark btn-block mt-3"
                onClick={getUser}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
