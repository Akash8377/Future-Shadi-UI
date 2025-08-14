import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import NewMatches from './NewMatches';
import TodaysMatches from './TodaysMatches';
import MyMatches from './MyMatches';
import NearMeMatches from './NearMeMatches';
import MoreMatches from './MoreMatches';
import Shortlisted from "./Shortlisted";
import ChatBox from "../inbox/components/ChatBox";

// Tab component mapping
const tabComponents = {
  matches: NewMatches,
  todays: TodaysMatches,
  mymatches: MyMatches,
  nearme: NearMeMatches,
  shortlisted: Shortlisted,
  // morematches: MoreMatches,
};

// Tab headings
const tabHeadings = {
  matches: "New Matches",
  todays: "Today's Matches",
  mymatches: "My Matches",
  nearme: "Near Me",
  // morematches: "More Matches",
  shortlisted:"Shortlisted",
};

const Matches = () => {
  const [activeTab, setActiveTab] = useState("matches");
  const ActiveComponent = tabComponents[activeTab];
 const location = useLocation();
 useEffect(()=>{
   if(location.state?.activtab){
    setActiveTab(location.state?.activtab || "matches")
   }
 },[location.state?.activtab])
 const [showChatBox, setShowChatBox] = useState(false)
 const chatBoxOpen = () =>{
    setShowChatBox(true)
 }

  return (
    <div>
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
          {ActiveComponent && <ActiveComponent chatBoxOpen={chatBoxOpen}/>}
        </div>
      </div>
      <ChatBox showChatBox={showChatBox} setShowChatBox={()=>setShowChatBox(false)}/>
    </div>
  );
};

export default Matches;
