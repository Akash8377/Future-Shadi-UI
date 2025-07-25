import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toast } from './components/Common/Toast';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Users/Register.jsx';
import Login from './pages/Users/Login.jsx';
import ProfileUpload from './pages/Users/ProfileUpload.jsx';
import VerifyProfile from './pages/Users/VerifyProfile.jsx';
import HobbiesInterests from './pages/Users/HobbiesInterests.jsx';
import FamilyDetailsForm from './pages/Users/FamilyDetailsForm.jsx';
import PartnerPreferences from './pages/Users/PartnerPreferences.jsx';
import DashboardPage from './components/Dashboard/DashboardPage.jsx';
import ForgotPasswordOTP from './pages/Users/forget-password/ForgotPasswordOTP.jsx';
import Matches from './components/Dashboard/Matches/Matches.jsx';
import Search from './components/Dashboard/search/Search.jsx';
import MessageInbox from './components/Dashboard/imboxmessage/MessageInbox.jsx';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/sign-up" element={<Register />} /> */}
        <Route path="/profile-upload" element={<ProfileUpload />} />
        <Route path="/hobbies" element={<HobbiesInterests />} />
        <Route path="/verify-profile" element={<VerifyProfile />} />
        <Route path="/family-details" element={<FamilyDetailsForm />} />
        <Route path="/partner-preferences" element={<PartnerPreferences />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/forget-password" element={<ForgotPasswordOTP />} />
        <Route path="/message-inbox" element={<MessageInbox />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/search-profile" element={<Search />} />
      </Routes>
    </Suspense>
  );
}

export default App;
