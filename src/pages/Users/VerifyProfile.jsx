import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const VerifyProfile = () => {
  const [verificationType, setVerificationType] = useState('PanCard');
  const [idNumber, setIdNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Reset ID number when verification type changes
    setIdNumber('');
    setVerificationStatus(null);
    setError('');
  }, [verificationType]);

  const handleVerification = async () => {
    if (!idNumber) {
      setError('Please enter a valid ID number');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      let endpoint = '';
      let payload = {};

      switch (verificationType) {
        case 'PanCard':
          endpoint = '/api/verify/pan';
          payload = { panNumber: idNumber };
          break;
        case 'Aadhaar':
          endpoint = '/api/verify/aadhaar';
          payload = { aadhaarNumber: idNumber };
          break;
        case 'DrivingLicense':
          endpoint = '/api/verify/dl';
          payload = { dlNumber: idNumber };
          break;
        default:
          throw new Error('Invalid verification type');
      }

      const response = await axios.post(endpoint, payload);
      
      if (response.data.success) {
        setVerificationStatus({
          success: true,
          message: `${verificationType} verified successfully`,
          data: response.data.data
        });
      } else {
        setError(response.data.message || 'Verification failed');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError(err.response?.data?.message || 'Failed to verify. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getPlaceholder = () => {
    switch (verificationType) {
      case 'PanCard': return 'Enter PAN Card Number (e.g., ABCDE1234F)';
      case 'Aadhaar': return 'Enter Aadhaar Number (12 digits)';
      case 'DrivingLicense': return 'Enter Driving License Number';
      default: return '';
    }
  };

  return (
    <>
        <Header/>
    <section className="verfiy-profile">
      <div className="verfiy-profile-new">
        <div className="icon-blk text-center">
          <img src="images/profile-icon.svg" alt="Profile" />
          <h4>Verify Your Profile</h4>
          <p>Verification Of Government ID</p>
        </div>
        
        <div className="profile-verication-part">   
          <div className="toggle-group">
            <label className="custom-radio">
              <input 
                type="radio" 
                name="Profileverfication" 
                value="PanCard" 
                checked={verificationType === 'PanCard'}
                onChange={() => setVerificationType('PanCard')}
              />
              <span className="switch-label">PAN Card</span>
            </label>
            <label className="custom-radio">
              <input 
                type="radio" 
                name="Profileverfication" 
                value="Aadhaar" 
                checked={verificationType === 'Aadhaar'}
                onChange={() => setVerificationType('Aadhaar')}
              />
              <span className="switch-label">Aadhaar Card</span>
            </label>
            <label className="custom-radio">
              <input 
                type="radio" 
                name="Profileverfication" 
                value="DrivingLicense" 
                checked={verificationType === 'DrivingLicense'}
                onChange={() => setVerificationType('DrivingLicense')}
              />
              <span className="switch-label">Driving License</span>
            </label>
          </div>

          <div className="id-input">
            <input
              type="text"
              className="form-control"
              placeholder={getPlaceholder()}
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>

          {error && (
            <div className="alert alert-danger mt-3">{error}</div>
          )}

          {verificationStatus?.success && (
            <div className="alert alert-success mt-3">
              <i className="fa fa-check-circle me-2"></i>
              {verificationStatus.message}
            </div>
          )}
        </div>

        <div className="verify-part">
          <button 
            type="button" 
            className="btn w-100 py-2 verify-btn"
            onClick={handleVerification}
            disabled={loading || !idNumber}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Verifying...
              </>
            ) : (
              'Verify'
            )}
          </button>
        </div>

        {/* <div className="mt-3 text-center">
          <small className="text-muted">
            We use Karza Technologies for secure verification. Your data is protected.
          </small>
        </div> */}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default VerifyProfile;