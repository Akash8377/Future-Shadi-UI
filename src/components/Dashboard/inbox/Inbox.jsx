import React from 'react'
import Header from '../Header';
import Footer from '../../Footer/Footer';
import MainTabs from './components/MainTabs';

const Inbox = () => {
  return (
    <div>
      <div id="top"></div>
      <Header />
      <div className="container mt-3">
        <MainTabs />
      </div>
      <Footer />
    </div>
  )
}

export default Inbox
