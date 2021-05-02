import React, { useState } from 'react';
import Modal from 'react-modal';

import SkillsTypeahead from './SkillsTypeahead.jsx';

const skillsModal = document.getElementById('skills-modal');
Modal.setAppElement(skillsModal);

export default function SkillsModal({ jobList }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [totalSkills, setTotalSkills] = useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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
              <SkillsTypeahead
                setTotalSkills={(num) => setTotalSkills(num)}
                jobList={jobList}
              />
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
              <button type="button" className="btn btn-secondary btn-block" onClick={closeModal} aria-label="Close">
                Refine Search
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
