
import React, { useState } from 'react';

const ShadiLive = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [preferences, setPreferences] = useState({
    pushNotification: true,
    email: true,
    sms: true,
    whatsapp: true,
    call: true,
  });

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggle = (field) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleReset = () => {
    setPreferences({
      pushNotification: true,
      email: true,
      sms: true,
      whatsapp: true,
      call: true,
    });
  };

  const handleUpdate = () => {
    console.log('Preferences updated:', preferences);
    // You can add API call here to save preferences
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingSeven">
        <button
          className={`accordion-button ${isExpanded ? '' : 'collapsed'}`}
          type="button"
          onClick={toggleSection}
        >
          Shadi Live
        </button>
      </h2>
      <div
        id="collapseSeven"
        className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}
        data-bs-parent="#settingsAccordion"
      >
        <div className="accordion-body">
          <div className="shadi-live">
            <div className="form-section">
              <h5>Edit your Communication Preferences</h5>
              <p>
                Please select the communication channels on which you would want to receive updates about Shaadi Live
                events.
              </p>

              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="pushNotification">
                  Push Notification
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pushNotification"
                  checked={preferences.pushNotification}
                  onChange={() => handleToggle('pushNotification')}
                />
              </div>

              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="email"
                  checked={preferences.email}
                  onChange={() => handleToggle('email')}
                />
              </div>

              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="sms">
                  SMS
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="sms"
                  checked={preferences.sms}
                  onChange={() => handleToggle('sms')}
                />
              </div>

              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="whatsapp"
                  checked={preferences.whatsapp}
                  onChange={() => handleToggle('whatsapp')}
                />
              </div>

              <div className="form-check form-switch">
                <label className="form-check-label" htmlFor="call">
                  Call
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="call"
                  checked={preferences.call}
                  onChange={() => handleToggle('call')}
                />
              </div>

              <div className="d-flex gap-2 button-privacy">
                <button className="btn btn-cancel px-4" type="button" onClick={handleReset}>
                  Reset
                </button>
                <button className="btn btn-submit px-4" type="button" onClick={handleUpdate}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadiLive;
