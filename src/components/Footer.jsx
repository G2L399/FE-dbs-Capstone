import React from 'react';

function Footer() {
  return (
    <footer className="pt-16 pb-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="footer-brand">
            <div className="logo mb-4">
              <img src="../assets/logo.png" alt="YuDeGo Logo" className="h-10" />
            </div>
            <p className="text-gray-700 mb-6">
              Dive into local recommendations for a truly authentic experience.
            </p>
            <div className="contact flex items-center">
              <div className="icon mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Need help? Call us</div>
                <div className="font-bold text-xl text-orange-500">123-123-123-123</div>
              </div>
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Community Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Jobs & Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Tour Guide</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Tour Booking</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Hotel Booking</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Ticket Booking</a></li>
            </ul>
          </div>
          
          <div className="footer-links grid grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Cookies Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Data Processing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Data Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Forum support</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Help Center</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">How it works</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800 transition">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="copyright text-gray-500 mb-4 md:mb-0">
              © 2025 YuDeGo Inc. All rights reserved.
            </div>
            <div className="flex items-center">
              <div className="pagination-controls mr-8">
                <div className="flex">
                  <button className="h-10 w-10 flex items-center justify-center bg-gray-800 text-white rounded-l-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button className="h-10 w-10 flex items-center justify-center bg-gray-800 text-white rounded-r-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="social">
                <p className="font-medium">Follow us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;