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
import DashboardPage from './components/Dashboard/Dashboard/DashboardPage.jsx';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile-upload" element={<ProfileUpload />} />
        <Route path="/hobbies" element={<HobbiesInterests />} />
        <Route path="/verify-profile" element={<VerifyProfile />} />
        <Route path="/family-details" element={<FamilyDetailsForm />} />
        <Route path="/partner-preferences" element={<PartnerPreferences />} />
             <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
