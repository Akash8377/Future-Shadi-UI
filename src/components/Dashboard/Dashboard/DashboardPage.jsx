
import React, { useState } from "react";
import './styles.css'
import Header from "./Header";
import DashboardTab from "./DashboardTab";
import ProfileTab from "./ProfileTab";
import PhotosTab from "./PhotosTab";
import PartnerTab from "./PartnerTab";
import SettingsTab from "./SettingsTab";
import MoreTab from "./MoreTab";
import Footer from "../../Footer/Footer";

// Component mapping
const tabComponents = {
  dash: DashboardTab,
  profile: ProfileTab,
  photos: PhotosTab,
  partner: PartnerTab,
  settings: SettingsTab,
  more: MoreTab,
};

// Headings mapping
const tabHeadings = {
  dash: "Dashboard",
  profile: "My Profile",
  photos: "My Photos",
  partner: "Partner Preferences",
  settings: "Settings",
  more: "More",
};

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("dash");
  const ActiveComponent = tabComponents[activeTab];


  return (
    <div>
      {/* Navbar/Header remains unchanged */}
      <Header />
      <div className="container mt-3">
        <ul className="nav nav-tabs" id="mainTab" role="tablist">
          {Object.keys(tabComponents).map((tabKey) => (
            <li className="nav-item" key={tabKey}>
              <button
                className={`nav-link ${activeTab === tabKey ? "active" : ""}`}
                onClick={() => setActiveTab(tabKey)}
              >
                {tabHeadings[tabKey]}
              </button>
            </li>
          ))}
        </ul>

        {/* Heading and Tab Content */}
        <div className="tab-content">
          {/* <h3 className="mb-3">{tabHeadings[activeTab]}</h3> */}
          {/* {ActiveComponent && <ActiveComponent />} */}
            {activeTab === "dash" ? (
            <DashboardTab onChangeTab={setActiveTab} />
          ) : activeTab === "profile" ? (
            <ProfileTab onChangeTab={setActiveTab} />
          ) :(
            ActiveComponent && <ActiveComponent />
          )}
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default DashboardPage;
