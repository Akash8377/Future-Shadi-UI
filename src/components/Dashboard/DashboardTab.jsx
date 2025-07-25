import React, { useEffect, useState } from 'react';
import DashProfile from './dashtabcomponents/DashProfile';
import Advertise from './dashtabcomponents/Advertise';
import RecentVisitors from './dashtabcomponents/RecentVisitors';
import MatchesSection from './dashtabcomponents/MatchesSection';

const DashboardTab = ({onChangeTab}) => {
   

  return (
     <div className="tab-content" id="mainTabContent">
    <div className="tab-pane fade show active p-4" id="dash" role="tabpanel" aria-labelledby="dash-tab">
      <div className="container-xl py-4">
        {/* Row 1 */}
        <DashProfile onEditClick={() =>onChangeTab("profile")}/>
        <Advertise/>
        <RecentVisitors/>
        <MatchesSection/>
            
          </div>
      </div>
    </div>
  );
};

export default DashboardTab;
