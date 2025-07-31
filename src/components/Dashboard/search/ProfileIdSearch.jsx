import React from 'react';

const ProfileIdSearch = ({ isAdvanced }) => {
  return (
    <div className="basic-search-part">
      <h2 className="mt-4">Profile ID Search</h2>
      <div className="search-box">
        <div className="d-flex align-items-center justify-content-center">
          <input 
            type="text" 
            className="form-control me-2" 
            placeholder="Enter Profile ID"
            style={{maxWidth: '250px'}}
            name={isAdvanced ? "advanceProfileId" : "profileId"}
          />
          <button className="btn custom-btn">Go</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileIdSearch;