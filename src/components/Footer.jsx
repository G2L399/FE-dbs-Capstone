import React from 'react';

function Footer() {
  return (
    <footer className='bg-white pt-16 pb-6'>
      <div className='container mx-auto px-4'>
        <div className='footer-content mb-16 grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div className='footer-brand'>
            <div className='logo mb-4'>
              <img
                src='../assets/logo.png'
                alt='YuDeGo Logo'
                className='h-10'
              />
            </div>
            <p className='mb-6 text-gray-700'>
              Dive into local recommendations for a truly authentic experience.
            </p>
            <div className='contact flex items-center'>
              <div className='icon mr-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                </svg>
              </div>
              <div>
                <div className='text-sm text-gray-500'>Need help? Call us</div>
                <div className='text-xl font-bold text-orange-500'>
                  123-123-123-123
                </div>
              </div>
            </div>
          </div>

          <div className='footer-links'>
            <h3 className='mb-4 text-lg font-semibold'>Company</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  Community Blog
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  Jobs & Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-links'>
            <h3 className='mb-4 text-lg font-semibold'>Services</h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  Tour Guide
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  Tour Booking
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  Hotel Booking
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-500 transition hover:text-gray-800'
                >
                  Ticket Booking
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-links grid grid-cols-2'>
            <div>
              <h3 className='mb-4 text-lg font-semibold'>Legal</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Data Processing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Data Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='mb-4 text-lg font-semibold'>Support</h3>
              <ul className='space-y-3'>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Forum support
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='text-gray-500 transition hover:text-gray-800'
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-200 pt-6'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <div className='copyright mb-4 text-gray-500 md:mb-0'>
              © 2025 YuDeGo Inc. All rights reserved.
            </div>
            <div className='flex items-center'>
              <div className='pagination-controls mr-8'>
                <div className='flex'>
                  <button className='flex h-10 w-10 items-center justify-center rounded-l-md bg-gray-800 text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <polyline points='15 18 9 12 15 6'></polyline>
                    </svg>
                  </button>
                  <button className='flex h-10 w-10 items-center justify-center rounded-r-md bg-gray-800 text-white'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <polyline points='9 18 15 12 9 6'></polyline>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='social'>
                <p className='font-medium'>Follow us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
