import React, { useState } from "react";

const AccountSetting = () => {
  const [isOpen, setIsOpen] = useState(false); // accordion state

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleAccordion}
        >
          Account Settings
        </button>
      </h2>

      {isOpen && (
        <div className="accordion-collapse collapse show">
          <div className="accordion-body">
            <div className="form-box">
              <h5 className="mb-3">Update Email Id</h5>
              <form>
                <div className="mb-4">
                  <label className="form-label">New Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value="akashchoudhary.xelogic@gmail.com"
                    readOnly
                  />
                </div>
                <div className="d-flex gap-3">
                  <button type="button" className="btn btn-cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-submit" disabled>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSetting;
