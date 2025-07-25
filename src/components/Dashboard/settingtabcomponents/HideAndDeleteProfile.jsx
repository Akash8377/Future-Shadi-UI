import React, { useState } from 'react';

const HideAndDeleteProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileHidden, setIsProfileHidden] = useState(false);
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);

  const handleToggleHide = () => {
    setIsProfileHidden((prev) => !prev);
    if (isProfileDeleted) setIsProfileDeleted(false);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingEight">
        <button
          className="accordion-button collapsed"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Hide /Delete Profile
        </button>
      </h2>
      {isOpen && (
        <div id="collapseEight" className="accordion-collapse show">
          <div className="accordion-body">
            {/* Hide Section */}
            <div className="hide-profile-part">
              <div className="hide-profile-box">
                <h5>Hide Profile</h5>
                <p className="mb-1">
                  Your Profile is currently {isProfileHidden ? 'hidden' : 'visible'}
                  <span
                    className="float-end hide-link cursor-pointer text-primary"
                    onClick={handleToggleHide}
                  >
                    {isProfileHidden ? 'Unhide' : 'Hide'}
                  </span>
                </p>
                <small>
                  When you hide your Profile, you will not be visible on Shaadi.com. <br />
                  You will neither be able to send invitations or messages.
                </small>
              </div>
            </div>

            {/* Delete Section */}
            <div className="hide-profile-part mt-4">
              <div className="hide-profile-box">
                <h5>Delete Profile</h5>
                <p className="mb-1">
                  Your Profile is currently {isProfileDeleted ? 'deleted' : 'visible'}
                  <span
                    className="float-end hide-link cursor-pointer text-danger"
                    onClick={() =>{}}
                  >
                    Delete
                  </span>
                </p>
                <small>
                  When you Delete your Profile, you will not be visible on Shaadi.com. <br />
                  You will neither be able to send invitations or messages.
                </small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HideAndDeleteProfile;
