
import React, { useState } from "react";
import Header from '../Header';
import Footer from '../../Footer/Footer';

import NewMatches from './NewMatches';
import TodaysMatches from './TodaysMatches';
import MyMatches from './MyMatches';
import NearMeMatches from './NearMeMatches';
import MoreMatches from './MoreMatches';

// Tab component mapping
const tabComponents = {
  matches: NewMatches,
  todays: TodaysMatches,
  mymatches: MyMatches,
  nearme: NearMeMatches,
  morematches: MoreMatches,
};

// Tab headings
const tabHeadings = {
  matches: "New Matches",
  todays: "Today's Matches",
  mymatches: "My Matches",
  nearme: "Near Me",
  // morematches: "More Matches",
};

const Matches = () => {
  const [activeTab, setActiveTab] = useState("matches");
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div>
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

        <div className="tab-content">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Matches;
