import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isAuthenticated?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Redirect to landing page
    navigate('/');
  };

  return (
    <header className="fixed w-full top-0 bg-[#1e2e38] backdrop-blur-sm shadow-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl transition-colors cursor-pointer">
          <Link to={isAuthenticated ? '/home' : '/'}>
            Exam Management
          </Link>
        </div>
        
        {isAuthenticated ? (
          <div className="relative">
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-white">My Profile</span>
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-[#1e2e38] font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link 
                  to="/profile" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View Profile
                </Link>
                <Link 
                  to="/settings" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Settings
                </Link>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/signin"
              className="px-6 py-2 bg-[#ff9900] hover:bg-[#eb5e07] text-[#16191f] rounded-md font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-[#ff9900] hover:bg-[#eb5e07] border border-[#FCA311] text-[#16191f] rounded-md font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;