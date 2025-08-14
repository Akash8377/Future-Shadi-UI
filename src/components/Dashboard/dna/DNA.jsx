import React, { useEffect, useState } from "react";
import DNATest from "./components/DNATest";
import DNAMatches from "./components/DNAMatches";
import { Tab, Tabs } from "react-bootstrap";
import ChatBox from "../inbox/components/ChatBox";
import { useLocation } from "react-router-dom";
const DNA = () => {
  const [key, setKey] = useState("");
  const location = useLocation()
  useEffect(()=>{
    console.log("Active key: ", location?.state?.activeKey)
    if(location?.state?.activeKey === "dna-matches"){
      setKey(location?.state?.activeKey)
      location.state.activeKey = "test"
    }else{
      setKey("test")
    }
  },[location])

  return (
    <>
      <div className="container mt-3">
        <Tabs
          id="search-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="nav nav-tabs justify-content-center"
        >
          <Tab eventKey="test" title="DNA Test">
            <DNATest />
          </Tab>
          <Tab
            eventKey="dna-matches"
            title="DNA Matches"
            className="search-nav-link"
          >
            <DNAMatches />
          </Tab>
        </Tabs>
      </div>
      <ChatBox />
    </>
  );
};

export default DNA;
