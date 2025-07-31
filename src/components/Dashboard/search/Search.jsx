import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import BasicSearchTab from './BasicSearchTab';
import AdvancedSearchTab from './AdvancedSearchTab';
import Header from "../Header";
import Footer from "../../Footer/Footer";

const Search = () => {
  const [key, setKey] = useState('basic');

  return (
    <>
      <Header />
      <div className="container mt-3">
        <Tabs
          id="search-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="nav nav-tabs justify-content-center"
        >
          <Tab eventKey="basic" title="Basic Search">
            <BasicSearchTab />
          </Tab>
          <Tab eventKey="advanced" title="Advanced Search" className='search-nav-link'>
            <AdvancedSearchTab />
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default Search;