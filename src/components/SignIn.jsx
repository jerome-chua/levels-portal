import axios from 'axios';
import React, { useState } from 'react';

export default function SignIn({ setPageView, setStatus }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputWrong, setInputWrong] = useState(false);

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
    axios.post('/signin', { email, password })
      .then((res) => {
        console.log('LOOK AT RES:', res);
        if (res.data === 'SIGNIN_SUCCESS') {
          setPageView('JOB_SEARCH');
          setStatus('USER');
        } else if (res.data === 'SIGNIN_FAILURE') {
          setInputWrong(true);
        }
      })
      .catch((err) => console.log('Trouble logging user in', err));
  }

  return (
    <div>
      <div id="signin-container" className="container w-75">
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
                className="btn btn-dark mt-4 py-2 px-5"
                onClick={getUser}
              >
                Sign in
              </button>
              {inputWrong && (
              <div className="alert alert-danger mt-3 text-center" role="alert">
                Email or password entered wrongly. Please try again.
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
