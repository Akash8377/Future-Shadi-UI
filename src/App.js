import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Users/Register.jsx';
import Login from './pages/Users/Login.jsx';
import ProfileUpload from './pages/Users/ProfileUpload.jsx';
import VerifyProfile from './pages/Users/VerifyProfile.jsx';
import { Toast } from './components/Common/Toast';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Toast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile-upload" element={<ProfileUpload />} />
        <Route path="/verify-profile" element={<VerifyProfile />} />
      </Routes>
    </Suspense>
  );
}

export default App;
