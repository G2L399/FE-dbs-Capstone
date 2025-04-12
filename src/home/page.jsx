import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Tours');
  const [language, setLanguage] = useState('EN');
  const [currency, setCurrency] = useState('USD');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  // Popular destinations data
  const destinations = [
    {
      id: 1,
      name: 'Bali',
      image: '/api/placeholder/400/300',
      stats: '356 Tours, 248 Activities'
    },
    {
      id: 2,
      name: 'Raja Ampat',
      image: '/api/placeholder/400/300',
      stats: '356 Tours, 248 Activities'
    },
    {
      id: 3,
      name: 'Danau Toba',
      image: '/api/placeholder/400/300',
      stats: '356 Tours, 248 Activities'
    },
    {
      id: 4,
      name: 'Gunung Bromo',
      image: '/api/placeholder/400/300',
      stats: '356 Tours, 248 Activities'
    },
    {
      id: 5,
      name: 'Candi Borobudur',
      image: '/api/placeholder/400/300',
      stats: '356 Tours, 248 Activities'
    },
    {
      id: 6,
      name: 'Gunung Rinjani',
      image: '/api/placeholder/400/300',
      stats: '356 Tours, 248 Activities'
    },
    {
      id: 7,
      name: 'Nusa Penida',
      image: '/api/placeholder/400/300',
      stats: '356 Tours, 248 Activities'
    }
  ];

  // Top rated hotels data
  const hotels = [
    {
      id: 1,
      name: 'AYANA Midplaza',
      image: '/api/placeholder/400/300',
      location: 'Jakarta, Indonesia',
      price: '$48.25',
      rating: 4.96,
      reviews: 672
    },
    {
      id: 2,
      name: 'The Westin Jakarta',
      image: '/api/placeholder/400/300',
      location: 'Jakarta, Indonesia',
      price: '$17.32',
      rating: 4.96,
      reviews: 672
    },
    {
      id: 3,
      name: 'The Westin Resort Nusa Dua Bali',
      image: '/api/placeholder/400/300',
      location: 'Bali, Indonesia',
      price: '$15.63',
      rating: 4.96,
      reviews: 672
    }
  ];

  // Flight deals data
  const flightDeals = [
    {
      id: 1,
      from: 'Denmark',
      to: 'New York',
      image: '/api/placeholder/400/300',
      departDate: '09 Jun 2025',
      returnDate: '16 Jun 2025',
      price: '$288.15',
      class: 'Business',
      seatsLeft: 18
    },
    {
      id: 2,
      from: 'Denmark',
      to: 'New York',
      image: '/api/placeholder/400/300',
      departDate: '09 Jun 2025',
      returnDate: '16 Jun 2025',
      price: '$288.15',
      class: 'Business',
      seatsLeft: 18
    },
    {
      id: 3,
      from: 'Denmark',
      to: 'New York',
      image: '/api/placeholder/400/300',
      departDate: '09 Jun 2025',
      returnDate: '16 Jun 2025',
      price: '$288.15',
      class: 'Business',
      seatsLeft: 18
    },
    {
      id: 4,
      from: 'Denmark',
      to: 'New York',
      image: '/api/placeholder/400/300',
      departDate: '09 Jun 2025',
      returnDate: '16 Jun 2025',
      price: '$288.15',
      class: 'Business',
      seatsLeft: 18
    }
  ];

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Search Section */}
      <section className='search-section py-8'>
        <div className='container mx-auto px-4'>
          <div className='search-box mx-auto flex max-w-4xl items-center rounded-full bg-gray-100 p-2 px-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-3'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
            </svg>
            <input
              type='text'
              placeholder='What are you looking for?'
              className='flex-grow border-none bg-transparent py-2 outline-none'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className='search-tabs mt-4 flex justify-center'>
            <button
              className={`tab-btn rounded-full px-8 py-2 ${
                activeTab === 'Tours' ? 'bg-black text-white' : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('Tours')}
            >
              Tours
            </button>
            <button
              className={`tab-btn rounded-full px-8 py-2 ${
                activeTab === 'Hotels'
                  ? 'bg-black text-white'
                  : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('Hotels')}
            >
              Hotels
            </button>
            <button
              className={`tab-btn rounded-full px-8 py-2 ${
                activeTab === 'Tickets'
                  ? 'bg-black text-white'
                  : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('Tickets')}
            >
              Tickets
            </button>
          </div>

          <div className='filter-section mt-6 flex flex-wrap justify-between'>
            <div className='filters flex flex-wrap gap-3'>
              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Categories</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Duration</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Review / Rating</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Price range</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>
            </div>

            <div className='sort-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Sort from High to Low</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='ml-2'
              >
                <polyline points='6 15 12 9 18 15'></polyline>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className='popular-destinations py-12'>
        <div className='container mx-auto px-4'>
          <div className='section-header mb-6 flex items-end justify-between'>
            <div>
              <h2 className='mb-2 text-4xl font-bold'>Popular Destinations</h2>
              <p className='text-gray-500'>
                Favorite destinations based on customer reviews
              </p>
            </div>

            <div className='filters hidden gap-3 md:flex'>
              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Categories</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Duration</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Review / Rating</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Price range</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-2'
                >
                  <polyline points='6 9 12 15 18 9'></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className='destinations-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {destinations.slice(0, 7).map((destination) => (
              <div
                key={destination.id}
                className='destination-card overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md'
              >
                <div className='destination-image relative'>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className='h-48 w-full object-cover'
                  />
                </div>
                <div className='p-4'>
                  <h3 className='mb-2 text-xl font-semibold'>
                    {destination.name}
                  </h3>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500'>
                      {destination.stats}
                    </span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                      <polyline points='12 5 19 12 12 19'></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}

            <div className='crafting-card flex flex-col justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm'>
              <h3 className='mb-2 text-2xl font-semibold'>
                Crafting Your Perfect Travel Experience
              </h3>
              <div className='mt-6'>
                <button className='browse-btn flex items-center justify-between rounded-full bg-black px-6 py-3 text-white'>
                  <span>Browse All destinations</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='ml-2'
                  >
                    <circle cx='12' cy='12' r='10'></circle>
                    <polyline points='12 16 16 12 12 8'></polyline>
                    <line x1='8' y1='12' x2='16' y2='12'></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Hotels Section */}
      <section className='top-rated-hotels bg-pink-50 py-12'>
        <div className='container mx-auto px-4'>
          <div className='section-header mb-6 flex items-end justify-between'>
            <div>
              <h2 className='mb-2 text-4xl font-bold'>Top Rated Hotels</h2>
              <p className='text-gray-500'>
                Quality as judged by customers. Book at the ideal price!
              </p>
            </div>

            <button className='view-more-btn flex items-center rounded-full bg-black px-4 py-2 text-white'>
              <span className='mr-2'>View More</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='5' y1='12' x2='19' y2='12'></line>
                <polyline points='12 5 19 12 12 19'></polyline>
              </svg>
            </button>
          </div>

          <div className='hotels-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className='hotel-card overflow-hidden rounded-lg bg-white shadow-sm'
              >
                <div className='hotel-image relative'>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className='h-48 w-full object-cover'
                  />
                  <button className='wishlist-btn absolute top-3 right-3 rounded-full bg-white p-2 shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                    </svg>
                  </button>
                  <div className='rating-badge absolute bottom-3 left-3 flex items-center rounded-full bg-white px-2 py-1 shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='yellow'
                      stroke='orange'
                      strokeWidth='1'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='mr-1'
                    >
                      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                    </svg>
                    <span className='text-sm font-medium'>
                      {hotel.rating} ({hotel.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className='p-4'>
                  <h3 className='mb-2 text-xl font-semibold'>{hotel.name}</h3>
                  <div className='mb-4 flex items-center text-gray-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='mr-1'
                    >
                      <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                      <circle cx='12' cy='10' r='3'></circle>
                    </svg>
                    <span className='text-sm'>{hotel.location}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='price'>
                      <span className='text-xl font-bold'>{hotel.price}</span>
                      <span className='text-sm text-gray-500'> / person</span>
                    </div>
                    <button className='book-now-btn rounded-md bg-gray-100 px-4 py-2 transition hover:bg-gray-200'>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Offers Section */}
      <section className='flight-offers py-12'>
        <div className='container mx-auto px-4'>
          <div className='section-header mb-6 flex items-end justify-between'>
            <div>
              <h2 className='mb-2 text-4xl font-bold'>Flight Offer Deals</h2>
              <p className='text-gray-500'>
                Competitive fares for your route-specific searches.
              </p>
            </div>
            <div className='navigation-btns flex gap-2'>
              <button className='nav-btn rounded-full bg-gray-200 p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
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
              <button className='nav-btn rounded-full bg-gray-200 p-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
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

          <div className='flight-deals-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2'>
            {/* Flight Card 1 - Denmark to New York */}
            <div className='flight-card flex overflow-hidden rounded-lg bg-white shadow-sm'>
              <div className='flight-image w-1/3'>
                <div className='relative h-full'>
                  <img
                    src='/api/placeholder/400/320'
                    alt='New York Statue of Liberty'
                    className='h-full w-full object-cover'
                  />
                  <button className='wishlist-btn absolute top-3 left-3 rounded-full bg-white p-2 shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='flight-details w-2/3 p-4'>
                <div className='mb-4 flex justify-between'>
                  <div className='date flex items-center text-sm text-gray-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='mr-1'
                    >
                      <rect
                        x='3'
                        y='4'
                        width='18'
                        height='18'
                        rx='2'
                        ry='2'
                      ></rect>
                      <line x1='16' y1='2' x2='16' y2='6'></line>
                      <line x1='8' y1='2' x2='8' y2='6'></line>
                      <line x1='3' y1='10' x2='21' y2='10'></line>
                    </svg>
                    09 Jun 2025
                  </div>
                  <div className='date flex items-center text-sm text-gray-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='mr-1'
                    >
                      <rect
                        x='3'
                        y='4'
                        width='18'
                        height='18'
                        rx='2'
                        ry='2'
                      ></rect>
                      <line x1='16' y1='2' x2='16' y2='6'></line>
                      <line x1='8' y1='2' x2='8' y2='6'></line>
                      <line x1='3' y1='10' x2='21' y2='10'></line>
                    </svg>
                    16 Jun 2025
                  </div>
                </div>

                <div className='route mb-4 flex items-center justify-between'>
                  <div className='text-lg font-semibold'>Denmark</div>
                  <div className='exchange-icon mx-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M7 10H3V6'></path>
                      <path d='M21 14h-4v4'></path>
                      <path d='M3 10l5-5m8 14l5-5'></path>
                    </svg>
                  </div>
                  <div className='text-lg font-semibold'>New York</div>
                </div>

                <div className='mb-4 flex justify-between'>
                  <div>
                    <div className='text-sm text-gray-500'>Business</div>
                    <div className='text-xl font-bold'>$288.15</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-500'>Business</div>
                    <div className='text-xl font-bold'>$288.15</div>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='seats-left text-sm text-gray-500'>
                    18 Seats left
                  </div>
                  <button className='book-now rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-800 transition duration-300 hover:bg-gray-200'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Flight Card 2 - Denmark to New York with different image */}
            <div className='flight-card flex overflow-hidden rounded-lg bg-white shadow-sm'>
              <div className='flight-image w-1/3'>
                <div className='relative h-full'>
                  <img
                    src='/api/placeholder/400/320'
                    alt='European town view'
                    className='h-full w-full object-cover'
                  />
                  <button className='wishlist-btn absolute top-3 left-3 rounded-full bg-white p-2 shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className='flight-details w-2/3 p-4'>
                <div className='mb-4 flex justify-between'>
                  <div className='date flex items-center text-sm text-gray-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='mr-1'
                    >
                      <rect
                        x='3'
                        y='4'
                        width='18'
                        height='18'
                        rx='2'
                        ry='2'
                      ></rect>
                      <line x1='16' y1='2' x2='16' y2='6'></line>
                      <line x1='8' y1='2' x2='8' y2='6'></line>
                      <line x1='3' y1='10' x2='21' y2='10'></line>
                    </svg>
                    09 Jun 2025
                  </div>
                  <div className='date flex items-center text-sm text-gray-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='14'
                      height='14'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='mr-1'
                    >
                      <rect
                        x='3'
                        y='4'
                        width='18'
                        height='18'
                        rx='2'
                        ry='2'
                      ></rect>
                      <line x1='16' y1='2' x2='16' y2='6'></line>
                      <line x1='8' y1='2' x2='8' y2='6'></line>
                      <line x1='3' y1='10' x2='21' y2='10'></line>
                    </svg>
                    16 Jun 2025
                  </div>
                </div>

                <div className='route mb-4 flex items-center justify-between'>
                  <div className='text-lg font-semibold'>Denmark</div>
                  <div className='exchange-icon mx-2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M7 10H3V6'></path>
                      <path d='M21 14h-4v4'></path>
                      <path d='M3 10l5-5m8 14l5-5'></path>
                    </svg>
                  </div>
                  <div className='text-lg font-semibold'>New York</div>
                </div>

                <div className='mb-4 flex justify-between'>
                  <div>
                    <div className='text-sm text-gray-500'>Business</div>
                    <div className='text-xl font-bold'>$288.15</div>
                  </div>
                  <div>
                    <div className='text-sm text-gray-500'>Business</div>
                    <div className='text-xl font-bold'>$288.15</div>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='seats-left text-sm text-gray-500'>
                    18 Seats left
                  </div>
                  <button className='book-now rounded-lg bg-gray-100 px-4 py-2 font-medium text-gray-800 transition duration-300 hover:bg-gray-200'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='newsletter bg-blue-50 py-12'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col overflow-hidden rounded-xl md:flex-row'>
            <div className='flex flex-col justify-center bg-blue-50 p-8 md:w-1/2'>
              <div className='mb-6'>
                <button className='rounded-full bg-yellow-300 px-6 py-2 font-medium text-black'>
                  Join our newsletter
                </button>
              </div>
              <h2 className='mb-4 text-3xl font-bold'>
                Subscribe to see secret deals prices drop the moment you sign
                up!
              </h2>
              <div className='mb-4 flex flex-col gap-4 sm:flex-row'>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='flex-grow rounded-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                />
                <button className='rounded-full bg-black px-8 py-3 font-medium text-white transition duration-300 hover:bg-gray-800'>
                  Subscribe
                </button>
              </div>
              <p className='text-sm text-gray-500'>
                No ads. No trails. No commitments
              </p>
            </div>
            <div className='md:w-1/2'>
              <img
                src='/api/placeholder/600/400'
                alt='Resort with swimming pool and water slide'
                className='h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='travel-gallery mt-8 grid grid-cols-2 gap-4 md:grid-cols-5'>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='Person at beach'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='Mountain view'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='People by the sea'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='People in car'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='People with luggage'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
