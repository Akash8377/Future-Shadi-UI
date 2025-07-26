import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../../features/user/userSlice';

const MyContactSetting = ({ userInfo,token, updateUserPhone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("premiumMembers");
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phone || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
    const dispatch = useDispatch()

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handlePhoneChange = (e) => {
    // Allow only numbers and limit to 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(value);
  };

  const handleSavePhone = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    try {
      setLoading(true);
      setError('');
      setSuccess('');

      const res = await submitContactSettings({
        phone: phoneNumber,
        contactStatus
      });

      setSuccess('Contact settings updated successfully!');
      // updateUserPhone(phoneNumber);
      console.log("Phone Update",res)
      const updatedUser = {
        ...userInfo,
        phone: phoneNumber,
      };
      dispatch(setUser({
        userInfo: updatedUser,
        token: token, // ← do NOT change token
      }));
      setIsEditing(false);
      setTimeout(()=>{
        setSuccess('');
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update contact settings');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setPhoneNumber(userInfo?.phone || '');
    setIsEditing(false);
    setError('');
  };

  const submitContactSettings = async (data) => {
    try {
      const response = await axios.put(
        `${config.baseURL}/api/profile/profile-settings`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmitSettings = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');

      await submitContactSettings({
        phone: userInfo?.phone,
        contactStatus
      });

      setSuccess('Contact settings updated successfully!');
      setTimeout(()=>{
        setSuccess('');
      },2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update contact settings');
    } finally {
      setLoading(false);
    }
  };

   useEffect(() => {
    const loadContactSettings = async () => {
      try {
        const response = await axios.get(
          `${config.baseURL}/api/profile/profile-settings`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log("response.data.settings?.display_contact_status",response.data.settings)
        if (response.data.settings?.display_contact_status) {
          setContactStatus(response.data.settings.display_contact_status);
        }
      } catch (error) {
        console.error('Failed to load contact settings:', error);
      }
    };

    if (isOpen) {
      loadContactSettings();
    }
  }, [isOpen]);

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
                      {isEditing ? (
                        <div className="mt-2  d-flex">
                          <input
                            type="text"
                            className="form-control"
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Enter 10-digit phone number"
                            maxLength={10}
                          />
                          <div className="d-flex gap-2 mt-2">
                            <button 
                              className="btn btn-sm submit-btn1"
                              onClick={handleSavePhone}
                              disabled={loading}
                            >
                              {loading ? 'Saving...' : 'Save'}
                            </button>
                            <button 
                              className="btn btn-sm btn-outline-secondary"
                              onClick={handleCancelEdit}
                              disabled={loading}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          +91 {userInfo?.phone}
                          <span className="verified-badge ms-2">
                            <i className="fa fa-check-circle" aria-hidden="true"></i> Verified
                          </span>
                        </div>
                      )}
                    </div>
                    {!isEditing && (
                      <button 
                        className="btn btn-link text-primary p-0"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
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

                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    {success && <div className="alert alert-success mt-3">{success}</div>}

                    <div className="submit-btn mt-3">
                      <button 
                        type="button" 
                        className="btn submit-btn1"
                        onClick={handleSubmitSettings}
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Submit'}
                      </button>
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