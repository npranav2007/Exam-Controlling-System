import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

// Protected route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Redirect to sign in if not authenticated
    return <Navigate to="/signin" replace />;
  }
  
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
            <SignIn />
          </div>
        } />
        <Route path="/signup" element={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
            <SignUp />
          </div>
        } />
        <Route path="/forgot-password" element={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
            <ForgotPassword />
          </div>
        } />
        <Route path="/reset-password" element={
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-800 to-slate-900">
            <ResetPassword />
          </div>
        } />
        <Route path="/home" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;