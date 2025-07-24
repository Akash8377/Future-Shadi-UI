import React, { useState } from 'react';

const AstroDetails = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isAstroOpen, setIsAstroOpen] = useState(false);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button
          className={`accordion-button ${isMainOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setIsMainOpen(!isMainOpen)}
        >
          Astro Details
        </button>
      </h2>

      <div
        id="collapseFour"
        className={`accordion-collapse collapse ${isMainOpen ? 'show' : ''}`}
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
                  Astro Privacy Settings <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
              <div
                className="accordion-content"
                style={{ display: isPrivacyOpen ? 'block' : 'none' }}
              >
                <div>
                  <div className="fw-semibold mb-2">Contact display status</div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="contactStatus"
                      id="premiumMembers"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="premiumMembers">
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
                    <label className="form-check-label" htmlFor="premiumLiked">
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
                  Astro Details <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
                <button
                  className="edit-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  onClick={(e) => e.stopPropagation()}
                >
                  EDIT
                </button>
              </div>
              <div
                className="accordion-content"
                style={{ display: isAstroOpen ? 'block' : 'none' }}
              >
                <div className="astro-item">
                  <div>
                    <span>Time of Birth</span>
                    <small>08:00 AM</small>
                  </div>
                </div>
                <div className="astro-item">
                  <div>
                    <span>Place of Birth</span>
                    <small>Faridabad</small>
                  </div>
                </div>
                <div className="astro-item">
                  <div>
                    <span>Manglik</span>
                    <small>Don't Know</small>
                  </div>
                </div>
                <div className="astro-item">
                  <div>
                    <span>Nakshatra</span>
                    <small>Shravana</small>
                  </div>
                </div>
                <div className="astro-item">
                  <div>
                    <span>Rashi</span>
                    <small>Capricorn (Makar)</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstroDetails;
