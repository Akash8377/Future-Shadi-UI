import React from 'react';

const ProfileDetails = ({ currentProfile, matchingRatio, renderPreferenceRow }) => {
  const calculateAge = (dobString) => {
    const dob = new Date(dobString);
    return Math.abs(new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970);
  };

  const age = calculateAge(currentProfile.dob);
  const partnerPreference = currentProfile.partner_preference ? JSON.parse(currentProfile.partner_preference) : null;

  // Format phone and email for privacy
  const formatPhone = (phone) => {
    if (!phone) return 'XXXXXX';
    return phone.length > 6 
      ? `${phone.substring(0, phone.length - 6)}XXXXXX` 
      : 'XXXXXX';
  };

  const formatEmail = (email) => {
    if (!email) return 'XXXXXX';
    const atIndex = email.indexOf('@');
    return atIndex > 0 
      ? `${'X'.repeat(atIndex)}${email.substring(atIndex)}`
      : 'XXXXXX';
  };

  return (
    <div className="timeline">
      {/* About */}
      <div className="mb-4 position-relative">
        <div className="timeline-icon"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
        <h5 className="section-title">About {currentProfile.first_name}</h5>
        <div className="card-box">
          <div className="d-flex justify-content-between mb-2">
            <span><strong>ID:</strong> SH{currentProfile.id?.toString().padStart(8, '0')}</span>
            <span className="badge bg-secondary">
              {currentProfile.person === 'myself' ? 'Self Managed' : 'Parent Managed'}
            </span>
          </div>
          <p>{currentProfile.profile_description || 'No description available.'}</p>
        </div>
      </div>

      {/* Contact */}
      <div className="mb-4 position-relative">
        <div className="timeline-icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
        <h5 className="section-title">Contact Details</h5>
        <div className="card-box">
          <p>
            <strong>Contact Number:</strong> +91 {formatPhone(currentProfile.phone)} 
            <i className="bi bi-lock-fill lock-icon"></i> 
            <span className="upgrade-text">Upgrade Now</span> to view details
          </p>
          <p><strong>Email ID:</strong> {formatEmail(currentProfile.email)}</p>
        </div>
      </div>

      {/* Lifestyle */}
      <div className="mb-4 position-relative">
        <div className="timeline-icon"><i className="fa fa-glass" aria-hidden="true"></i></div>
        <h5 className="section-title">Lifestyle</h5>
        <div className="card-box text-center">
          <img src="images/egg.png" alt="Egg" width="40" />
          <p className="mt-2 mb-0">{currentProfile.diet || 'Diet information not available'}</p>
        </div>
      </div>

      {/* Background */}
      <div className="mb-4 position-relative">
        <div className="timeline-icon"><i className="fa fa-book" aria-hidden="true"></i></div>
        <h5 className="section-title">Background</h5>
        <div className="card-box">
          <p><i className="fa fa-user" aria-hidden="true"></i> {currentProfile.religion}, {currentProfile.mother_tongue || currentProfile.community}</p>
          <p><i className="fa fa-user" aria-hidden="true"></i> {currentProfile.sub_community}</p>
          <p><i className="fa fa-map-marker" aria-hidden="true"></i> Lives in {currentProfile.city}, {currentProfile.country}</p>
        </div>
      </div>

      {/* Horoscope */}
      <div className="mb-4 position-relative">
        <div className="timeline-icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
        <h5 className="section-title">Horoscope Details</h5>
        <div className="astro-box">
          <div className="astro-icon">
            <i className="fa fa-folder-open-o" aria-hidden="true"></i>
          </div>
          <p className="astro-text">
            For the common interest of members,<br />
            quickly enter your Astro details & unhide her info.
          </p>
          <a href="#" className="astro-link">Add My Details <i
              className="fa fa-caret-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Family */}
      <div className="mb-4 position-relative">
        <div className="timeline-icon"><i className="fa fa-home" aria-hidden="true"></i></div>
        <h5 className="section-title">Family Details</h5>
        <div className="astro-box">
          <div className="astro-icon">
            <i className="fa fa-folder-open-o" aria-hidden="true"></i>
          </div>
          <p className="astro-text">
            For the common interest of members,<br />
            quickly enter your Astro details & unhide her info.
          </p>
          <a href="#" className="astro-link">Add My Details <i
              className="fa fa-caret-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4 position-relative">
        <div className="timeline-icon"><i className="fa fa-graduation-cap" aria-hidden="true"></i></div>
        <h5 className="section-title">Education</h5>
        <div className="card-box">
          <p><i className="fa fa-graduation-cap" aria-hidden="true"></i> {currentProfile.qualification}</p>
          <p><i className="fa fa-book" aria-hidden="true"></i> {currentProfile.education}</p>
          <p><i className="fa fa-address-book-o" aria-hidden="true"></i> {currentProfile.profession}</p>
          <p><i className="fa fa-home" aria-hidden="true"></i>
            <strong>Self</strong> Earns INR {currentProfile.income} {currentProfile.incomePer === 'yearly' ? 'Annualy' : 'Monthly'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;