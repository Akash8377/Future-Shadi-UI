import React, { useEffect, useState } from 'react';
import './styles.css'
import DashProfile from './dashtabcomponents/DashProfile';
import Advertise from './dashtabcomponents/Advertise';
import RecentVisitors from './dashtabcomponents/RecentVisitors';
import MatchesSection from './dashtabcomponents/MatchesSection';

const DashboardTab = () => {
   

  return (
     <div className="tab-content" id="mainTabContent">
    <div className="tab-pane fade show active p-4" id="dash" role="tabpanel" aria-labelledby="dash-tab">
      <div className="container-xl py-4">
        {/* Row 1 */}
        <DashProfile/>
        <Advertise/>
        <RecentVisitors/>
        <MatchesSection/>
            
          </div>
      </div>
    </div>
  );
};

export default DashboardTab;
