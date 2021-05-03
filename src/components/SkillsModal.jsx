import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

import SkillsTypeahead from './SkillsTypeahead.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const skillsModal = document.getElementById('skills-modal');
Modal.setAppElement(skillsModal);

export default function SkillsModal({
  jobList, setJobFiltered, setJobList,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [totalSkills, setTotalSkills] = useState(0);
  const [selected, sendSelected] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleRefineSearch() {
    setJobFiltered(true);
    closeModal();

    const params = {
      skills: selected.map((skill) => skill.label),
      jobs: jobList.map((job) => job.title),
    };

    // Send request to DB upon getting params from MultiTypeAhead.
    axios.get('/filterjobs', { params })
      .then((res) => {
        setJobList(res.data);
        console.log('Peek res.data', res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="skills-modal">
      <button type="button" className="btn btn-secondary px-4 rounded-pill" onClick={openModal}>Filter by Skills</button>
      <Modal
        id="skills-div"
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="overlay"
      >
        <div className="container">
          <div className="row my-2">
            <div className="col-9">
              <ErrorBoundary>
                <SkillsTypeahead
                  setTotalSkills={(num) => setTotalSkills(num)}
                  sendSelected={sendSelected}
                />
              </ErrorBoundary>
            </div>
            <div className="col-3 float-right">
              <button type="button" className="btn btn-secondary close rounded-circle p-2" onClick={closeModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
              <h1 className="lead">
                Total skills filtered for:
                {'  '}
                {totalSkills}
              </h1>
              <button type="button" className="btn btn-secondary btn-block" onClick={handleRefineSearch} aria-label="Close">
                Refine Search
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
