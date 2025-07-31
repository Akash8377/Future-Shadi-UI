// src/components/ReceivedTab.js
import React, { useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import DetailedAllRequest from './DetailedAllRequest';
import DetailedFilteredOut from './DetailedFilteredOut';
import SidebarFilterSort from './SidebarFilterSort';
import { useSelector } from 'react-redux';
import config from '../../../../config';

function Received() {
  const user = useSelector((state) => state.user.userInfo);
    const [ receiverData, setReceiverData ] = useState([]);

    console.log("User Info:", user);
   const fetchReceiverData = async () => {
    try {
      const response = await fetch(`${config.baseURL}/api/inbox/receiver/${user.id}`);
      const data = await response.json();
      if (data.success) {
        setReceiverData(data.receivers);
      }
    } catch (error) {
      console.error("Failed to fetch receiver data:", error);
    }
  };

   useEffect(() => {
    if (user?.id) {
      fetchReceiverData();
    }
  }, [user]);

  return (
    <div className="all-request-part">
      <div className="row">
        {/* Shared Sidebar */}
        <div className="col-md-3">
          <SidebarFilterSort />
        </div>
        {/* Tab Section */}
        <div className="col-md-9">
          <div className="tab-container">
            <Tabs defaultActiveKey="detailed" id="profile-tabs" className="nav nav-tabs inbox-tab">
              <Tab eventKey="detailed" title="Detailed All Request">
                <DetailedAllRequest
                 receiverData={receiverData}
                 fetchReceiverData={fetchReceiverData}
                 />
              </Tab>
              <Tab eventKey="partner" title="Detailed Filtered Out">
                <DetailedFilteredOut />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Received;
