import React, { useState } from 'react';
import RefineSearchSidebar from './components/RefineSearchSidebar';
import ProfileCard from './components/ProfileCard';
import Pagination from './components/Pagination';
import { profileData } from './components/profileData';


const NewMatches = () => {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [profiles, setProfiles] = useState(profileData);

  const handleConnectClick = (id) => {
    setProfiles(profiles.map(profile =>
      profile.id === id ? { ...profile, showContactOptions: true } : profile
    ));
  };

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-md-3">
          <RefineSearchSidebar />
        </div>
        <div className="col-md-9">
          <div className="profile-right">
            <h4>New Members Who Match Your Preferences</h4>
            <div className="card border-0 shadow-sm mb-3">
              {profiles.map(profile => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  handleConnectClick={handleConnectClick}
                  activeIndex={activeCarouselIndex}
                  setActiveIndex={setActiveCarouselIndex}
                />
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMatches;
