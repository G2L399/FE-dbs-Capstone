import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('USD');
  const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="logo flex items-center mr-12">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none"><path fill="url(#fluentColorLocationRipple242)" d="M21 19c0 2.5-4.03 4-9 4s-9-1.5-9-4c0-2.406 4.03-4 9-4s9 1.5 9 4"></path><path fill="url(#fluentColorLocationRipple240)" d="M12 2a7.5 7.5 0 0 0-7.5 7.5c0 1.932 1.064 3.8 2.268 5.316c1.22 1.537 2.678 2.829 3.655 3.622c.926.75 2.228.75 3.154 0c.977-.793 2.435-2.085 3.655-3.622C18.436 13.301 19.5 11.432 19.5 9.5A7.5 7.5 0 0 0 12 2"></path><path fill="url(#fluentColorLocationRipple241)" d="M14.5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path><defs><linearGradient id="fluentColorLocationRipple240" x1={1.219} x2={13.202} y1={-2.857} y2={16.549} gradientUnits="userSpaceOnUse"><stop stopColor="#f97dbd"></stop><stop offset={1} stopColor="#d7257d"></stop></linearGradient><linearGradient id="fluentColorLocationRipple241" x1={9.79} x2={12.394} y1={9.721} y2={12.428} gradientUnits="userSpaceOnUse"><stop stopColor="#fdfdfd"></stop><stop offset={1} stopColor="#fecbe6"></stop></linearGradient><radialGradient id="fluentColorLocationRipple242" cx={0} cy={0} r={1} gradientTransform="rotate(-10.678 100.2 -51.93)scale(14.3921 6.38107)" gradientUnits="userSpaceOnUse"><stop stopColor="#7b7bff"></stop><stop offset={0.502} stopColor="#a3a3ff"></stop><stop offset={1} stopColor="#ceb0ff"></stop></radialGradient></defs></g></svg>
            </div>
            <h1 className="text-2xl font-bold ml-2">YuDeGo</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="font-medium hover:text-blue-600">Home</a>
            <a href="#" className="font-medium hover:text-blue-600">Tours</a>
            <a href="#" className="font-medium hover:text-blue-600">Hotel</a>
            <a href="#" className="font-medium hover:text-blue-600">Tickets</a>
            <a href="#" className="font-medium hover:text-blue-600">Contact</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="language-selector flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span className="mr-1">EN</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          <div className="currency-selector flex items-center ml-4">
            <span className="mr-1">USD</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="theme-toggle ml-4"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        
          <button
            onClick={() => navigate("/sign")}
            className="signin-btn ml-4 px-4 py-2 font-medium hover:bg-gray-100 rounded-md"
          >
            Sign in
          </button>
          
          <button className="menu-btn ml-4 bg-yellow-400 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;