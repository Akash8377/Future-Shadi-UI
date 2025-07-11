// Step4.jsx
import React from "react";

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="step4">
      <div className="left-icon1">
        <button type="button" className="backbutton" onClick={prevStep}>
          <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </button>
      </div>
      <div className="icon-blk text-center">
        <img src="images/profile-icon.svg" alt="Profile" />
      </div>
      <div className="form-basic">
        <p className="text-center">
          An active email ID &amp; phone no.
          <br />
          are required to secure your Profile
        </p>

        <h5 className="modal-title">Email ID</h5>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
          />
        </div>
        <h5 className="modal-title">Mobile no.</h5>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Mobile number"
          />
        </div>
        <div className="modal-footer border-0 justify-content-center p-0 footer-modal mt-4">
          <button
            type="button"
            className="btn w-100 py-2 btn-filled"
            onClick={nextStep}
            disabled={!formData.email || !formData.phone}
          >
            Continue
          </button>
        </div>

        <div className="form-terms">
          By creating account, you agree to our{" "}
          <a tabIndex="-1" href="/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a tabIndex="-1" href="/" target="_blank" rel="noopener noreferrer">
            T&amp;C.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step4;