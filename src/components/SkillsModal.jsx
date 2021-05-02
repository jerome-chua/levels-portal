import React, { useState } from 'react';
import Modal from 'react-modal';

import SkillsTypeahead from './SkillsTypeahead.jsx';

Modal.setAppElement(document.getElementById('skills-modal'));

export default function SkillsModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="skills-modal">
      <button type="button" className="btn btn-secondary px-4 rounded-pill" onClick={openModal}>Skills</button>
      <Modal
        id="skills-div"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="overlay"
      >
        <div className="container">
          <div className="row">
            <div className="col-9">
              <SkillsTypeahead />
            </div>
            <div className="col-3 float-right">
              <button type="button" className="btn btn-secondary close rounded-circle p-2" onClick={closeModal} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
