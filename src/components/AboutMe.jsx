import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <div id="about-me" className="container mt-3">
        <div className="row">
          <div className="col">
            <h5 className="m-3">Contact Information</h5>
            <div className="row">
              <div className="col-sm-6">
                <div className="card m-4">
                  <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Email</p>
                    <p className="card-text">Mobile</p>
                    <p className="card-text">Links</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
