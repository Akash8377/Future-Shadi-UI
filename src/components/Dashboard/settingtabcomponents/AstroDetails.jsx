import React, { useState } from "react";
import { Modal } from "react-bootstrap";
const AstroDetails = ({userInfo, token}) => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAstroOpen, setIsAstroOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className={`accordion-button ${isMainOpen ? "" : "collapsed"}`}
            type="button"
            onClick={() => setIsMainOpen(!isMainOpen)}
          >
            Astro Details
          </button>
        </h2>

        <div
          id="collapseFour"
          className={`accordion-collapse collapse ${isMainOpen ? "show" : ""}`}
        >
          <div className="accordion-body">
            <div className="astro-details-part">
              <div className="accordion-container">
                {/* Astro Privacy Settings */}
                <div
                  className="accordion-header"
                  onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                >
                  <span>
                    Astro Privacy Settings{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </span>
                </div>
                <div
                  className="accordion-content"
                  style={{ display: isPrivacyOpen ? "block" : "none" }}
                >
                  <div>
                    <div className="fw-semibold mb-2">
                      Contact display status
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactStatus"
                        id="premiumMembers"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="premiumMembers"
                      >
                        Visible to all Members
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactStatus"
                        id="premiumLiked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="premiumLiked"
                      >
                        Visible to Contacted and accepted Members
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactStatus"
                        id="noOne"
                      />
                      <label className="form-check-label" htmlFor="noOne">
                        Hide From All
                      </label>
                    </div>

                    <div className="buttons astro-btn">
                      <button className="btn-submit">Save</button>
                      <button className="btn-cancel">Cancel</button>
                    </div>
                  </div>
                </div>

                {/* Astro Details Section */}
                <div
                  className="accordion-header"
                  onClick={() => setIsAstroOpen(!isAstroOpen)}
                >
                  <span>
                    Astro Details{" "}
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  </span>
                  <button
                    className="edit-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent accordion toggle
                      setShowModal(true); // Show modal
                    }}
                  >
                    EDIT
                  </button>
                </div>
                <div
                  className="accordion-content"
                  style={{ display: isAstroOpen ? "block" : "none" }}
                >
                  <div className="astro-item">
                    <div>
                      <span>Time of Birth</span>
                      <small>{userInfo?.birth_time}</small>
                    </div>
                  </div>
                  <div className="astro-item">
                    <div>
                      <span>Place of Birth</span>
                      <small>{userInfo?.birth_city}</small>
                    </div>
                  </div>
                  <div className="astro-item">
                    <div>
                      <span>Manglik</span>
                      <small>{userInfo?.manglik}</small>
                    </div>
                  </div>
                  <div className="astro-item">
                    <div>
                      <span>Nakshatra</span>
                      <small>{userInfo?.nakshatra || "----"}</small>
                    </div>
                  </div>
                  <div className="astro-item">
                    <div>
                      <span>Rashi</span>
                      <small>{userInfo?.rashi || "----"}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={!showModal}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        className="letsbeginmodal"
      >
        <Modal.Header>
          <h5 className="modal-title" id="editModalLabel">
            Edit Astro Details
          </h5>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="btn-close"
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="astro-detail-form p-2">
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="timeOfBirth" className="form-label">
                  Time of Birth
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="timeOfBirth"
                  defaultValue="08:00"
                />
              </div>
              <div className="col">
                <label htmlFor="placeOfBirth" className="form-label">
                  Place of Birth
                </label>
                <select className="form-select" id="placeOfBirth">
                  <option>Faridabad, Haryana, India</option>
                  <option>Delhi, India</option>
                  <option>Mumbai, India</option>
                  <option>Bangalore, India</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <div className="">
                <h5 className="modal-title">Manglik Dosh</h5>
                <div className="toggle-group">
                  <label className="custom-radio">
                    <input type="radio" name="manglik" defaultChecked />
                    <span className="switch-label">Don't Know</span>
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="manglik" />
                    <span className="switch-label">Yes</span>
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="manglik" />
                    <span className="switch-label">No</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="raashi" className="form-label">
                Raashi
              </label>
              <small className="d-block text-muted">
                This is based on lunar star sign.
              </small>
              <select className="form-select" id="raashi">
                <option>Capricorn (Makar)</option>
                <option>Aquarius (Kumbh)</option>
                <option>Pisces (Meen)</option>
              </select>
            </div>

            <div className="mb-3">
              <div className="">
                <h5 className="modal-title">Nakshtra</h5>
                <div className="toggle-group">
                  <label className="custom-radio">
                    <input type="radio" name="nakshtra" />
                    <span className="switch-label">Uttra Ashadha</span>
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="nakshtra" defaultChecked />
                    <span className="switch-label">Shravana</span>
                  </label>
                  <label className="custom-radio">
                    <input type="radio" name="nakshtra" />
                    <span className="switch-label">Dhanistha</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          <Modal.Footer>
            <button type="button" className="btn w-100 py-2 btn-filled">
              Continue
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AstroDetails;
