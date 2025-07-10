import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Users/Register.jsx';
import Login from './pages/Users/Login.jsx';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </Suspense>
  );
}

export default App;
