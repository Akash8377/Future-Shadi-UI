import React, { useState } from 'react';

const MyContactSetting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("premiumMembers");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleAccordion}
        >
          My Contact Settings
        </button>
      </h2>

      {isOpen && (
        <div className="accordion-collapse collapse show">
          <div className="accordion-body">
            <div className="card-setting">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
                    <div>
                      <div className="fw-semibold">Contact Number</div>
                      <div>
                        +91-9650682289
                        <span className="verified-badge ms-2">
                          <i className="fa fa-check-circle" aria-hidden="true"></i> Verified
                        </span>
                      </div>
                    </div>
                    <a href="#" className="text-primary">Edit</a>
                  </div>

                  <div>
                    <div className="fw-semibold mb-2">Contact display status</div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactStatus"
                        id="premiumMembers"
                        checked={contactStatus === "premiumMembers"}
                        onChange={() => setContactStatus("premiumMembers")}
                      />
                      <label className="form-check-label" htmlFor="premiumMembers">
                        Only Premium Members
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactStatus"
                        id="premiumLiked"
                        checked={contactStatus === "premiumLiked"}
                        onChange={() => setContactStatus("premiumLiked")}
                      />
                      <label className="form-check-label" htmlFor="premiumLiked">
                        Only Premium Members you like
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactStatus"
                        id="noOne"
                        checked={contactStatus === "noOne"}
                        onChange={() => setContactStatus("noOne")}
                      />
                      <label className="form-check-label" htmlFor="noOne">
                        No one (Matches won't be able to call you)
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="contactStatus"
                        id="allMatches"
                        checked={contactStatus === "allMatches"}
                        onChange={() => setContactStatus("allMatches")}
                      />
                      <label className="form-check-label" htmlFor="allMatches">
                        Only visible to all your Matches <small>(Expires with Membership)</small>
                      </label>
                      <span
                        className="ms-1 text-muted"
                        title="Visible only while membership is active"
                      >
                        ⓘ
                      </span>
                    </div>

                    <div className="submit-btn mt-3">
                      <button type="button" className="btn submit-btn1">Submit</button>
                    </div>
                  </div>

                  <div className="shadi-instruction mt-3">
                    <p><i className="fa fa-lock" aria-hidden="true"></i> Shadi.com does not share personal details / contact information with third parties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyContactSetting;
