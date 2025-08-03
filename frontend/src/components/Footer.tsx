import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto text-center w-full bottom-0 bg-[#1e2e38] backdrop-blur-sm shadow-sm z-50 py-4">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Exam Management. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;