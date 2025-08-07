import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Received from './Recieved';
import Accepted from './Accepted';
import Sent from './Sent';
import Requested from './Requested';
import Deleted from './Deleted';
import ChatBox from './ChatBox';

const tabComponents = [
  {
    key: 'received',
    title: 'Received',
    component: <Received />,
  },
  {
    key: 'accepted',
    title: 'Accepted',
    component: <Accepted />,
  },
  {
    key: 'request',
    title: 'Request',
    component: <Requested />,
  },
  // Uncomment to include "Sent"
  // {
  //   key: 'sent',
  //   title: 'Sent',
  //   component: <Sent />,
  // },
  {
    key: 'deleted',
    title: 'Deleted',
    component: <Deleted />,
  },
];

function MainTabs() {
  const [activeKey, setActiveKey] = useState('received');

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onSelect={handleSelect}
        id="main-tab"
        className="nav nav-tabs justify-content-center"
      >
        {tabComponents.map(({ key, title }) => (
          <Tab eventKey={key} title={title} key={key} />
        ))}
      </Tabs>

      {/* Only render one component, but don't remount others */}
      <div className="p-4">
        {tabComponents.map(({ key, component }) => (
          <div key={key} style={{ display: activeKey === key ? 'block' : 'none' }}>
            {component}
          </div>
        ))}
      </div>
      <ChatBox/>
    </div>
  );
}

export default MainTabs;
