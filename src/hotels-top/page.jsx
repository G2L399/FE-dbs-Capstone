import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { id } from 'date-fns/locale';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for hotels (you can replace this with API data)
const hotels = [
  {
    name: 'Fairmont Resort, Dubai, United Arab Emirates',
    location: 'Dubai, UAE',
    rating: 4.96,
    reviews: 672,
    stars: 5,
    amenities: 20,
    price: 2349,
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Fairmont Resort, Dubai, United Arab Emirates',
    location: 'Dubai, UAE',
    rating: 4.96,
    reviews: 672,
    stars: 5,
    amenities: 20,
    price: 2349,
    image: 'https://via.placeholder.com/300x200'
  },
  {
    name: 'Fairmont Resort, Dubai, United Arab Emirates',
    location: 'Dubai, UAE',
    rating: 4.96,
    reviews: 672,
    stars: 5,
    amenities: 20,
    price: 2349,
    image: 'https://via.placeholder.com/300x200'
  }
];

const SearchResults = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  // State to manage form inputs
  const [location, setLocation] = useState('Jakarta, IDN');
  const [checkIn, setCheckIn] = useState(today); // Default to today
  const [checkOut, setCheckOut] = useState(tomorrow); // Default to tomorrow
  const [guests, setGuests] = useState('2 adults, 1 children');
  const locationOptions = [
    'Jakarta, IDN',
    'Bali, IDN',
    'Yogyakarta, IDN',
    'Bandung, IDN',
    'Surabaya, IDN',
    'Medan, IDN'
  ];

  const guestOptions = [
    '1 adult',
    '2 adults',
    '2 adults, 1 child',
    '2 adults, 2 children',
    '3 adults',
    '3 adults, 1 child',
    '4 adults'
  ];
  // State for filters and pagination
  const [priceRange, setPriceRange] = useState([100, 1000]);
  const [rating, setRating] = useState([]);
  const [freebies, setFreebies] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [currentPage, setCurrentPage] = useState(4);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Handle filter changes
  const handlePriceChange = (e) => {
    setPriceRange([e.target.value[0], e.target.value[1]]);
  };

  const handleRatingChange = (value) => {
    setRating((prev) =>
      prev.includes(value) ? prev.filter((r) => r !== value) : [...prev, value]
    );
  };

  const handleFreebiesChange = (value) => {
    setFreebies((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  const handleAmenitiesChange = (value) => {
    setAmenities((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      // If Check Out is before Check In, adjust Check Out to be one day after Check In
      if (checkOutDate <= checkInDate) {
        const newCheckOutDate = new Date(checkInDate);
        newCheckOutDate.setDate(checkInDate.getDate() + 1);
        setCheckOut(newCheckOutDate);
      }
    }
  }, [checkIn, checkOut]);
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Hero Section with Search Bar */}
      <motion.section
        className='relative flex h-[400px] items-center justify-center bg-cover bg-center text-white'
        style={{ backgroundImage: 'url(https://via.placeholder.com/1920x400)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-70'></div>
        <div className='relative z-10 text-center'>
          {/* Search Form */}
          <motion.div
            className='mx-auto flex max-w-5xl flex-col gap-2 rounded-lg bg-white p-4 shadow-lg md:flex-row'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
          >
            {/* Location */}
            <div className='relative flex-1'>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='w-full rounded-md border p-3 text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none'
              >
                {locationOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className='absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400'></span>
            </div>

            {/* Check In */}
            <div className='relative flex-1'>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()} // Prevent past dates
                dateFormat='dd MMMM yyyy'
                locale={id} // Set locale to Indonesian
                className='w-full rounded-md border p-3 text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none'
                placeholderText='Check In'
              />
              <span className='absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400'>
                📅
              </span>
            </div>

            {/* Check Out */}
            <div className='relative flex-1'>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                minDate={
                  checkIn
                    ? new Date(checkIn).setDate(new Date(checkIn).getDate() + 1)
                    : new Date()
                }
                dateFormat='dd MMMM yyyy'
                locale={id} // Set locale to Indonesian
                className='w-full rounded-md border p-3 text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none'
                placeholderText='Check Out'
              />
              <span className='absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400'>
                📅
              </span>
            </div>

            {/* Guests */}
            <div className='relative flex-1'>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className='w-full rounded-md border p-3 text-gray-700 focus:ring-2 focus:ring-gray-300 focus:outline-none'
              >
                {guestOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span className='absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400'>
                👤
              </span>
            </div>
            <button className='rounded-md bg-teal-600 px-6 py-3 font-medium text-white transition hover:bg-teal-700'>
              Search
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className='px-4 py-16'
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='mx-auto flex max-w-7xl flex-col gap-8 md:flex-row'>
          {/* Filters Sidebar */}
          <motion.div
            className='rounded-lg bg-white p-6 shadow-lg md:w-1/4'
            variants={fadeInUp}
          >
            <h2 className='mb-4 text-xl font-bold text-teal-600'>Filters</h2>

            {/* Price Filter */}
            <div className='mb-6'>
              <h3 className='mb-2 text-lg font-semibold'>Price</h3>
              <div className='flex justify-between text-sm text-gray-600'>
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type='range'
                min='100'
                max='1000'
                value={priceRange}
                onChange={handlePriceChange}
                className='w-full accent-teal-600'
              />
            </div>

            {/* Rating Filter */}
            <div className='mb-6'>
              <h3 className='mb-2 text-lg font-semibold'>Rating</h3>
              <div className='flex gap-2'>
                {[1, 2, 3, 4].map((star) => (
                  <label key={star} className='flex items-center'>
                    <input
                      type='checkbox'
                      checked={rating.includes(star)}
                      onChange={() => handleRatingChange(star)}
                      className='mr-2 accent-teal-600'
                    />
                    {star}+
                  </label>
                ))}
              </div>
            </div>

            {/* Freebies Filter */}
            <div className='mb-6'>
              <h3 className='mb-2 text-lg font-semibold'>Freebies</h3>
              {[
                'Free breakfast',
                'Free parking',
                'Free internet',
                'Free airport shuttle',
                'Free cancellation'
              ].map((freebie) => (
                <label key={freebie} className='mb-2 flex items-center'>
                  <input
                    type='checkbox'
                    checked={freebies.includes(freebie)}
                    onChange={() => handleFreebiesChange(freebie)}
                    className='mr-2 accent-teal-600'
                  />
                  {freebie}
                </label>
              ))}
            </div>

            {/* Amenities Filter */}
            <div>
              <h3 className='mb-2 text-lg font-semibold'>Amenities</h3>
              {[
                '24-hour front desk',
                'Air-conditioning',
                'Fitness',
                'Pool'
              ].map((amenity) => (
                <label key={amenity} className='mb-2 flex items-center'>
                  <input
                    type='checkbox'
                    checked={amenities.includes(amenity)}
                    onChange={() => handleAmenitiesChange(amenity)}
                    className='mr-2 accent-teal-600'
                  />
                  {amenity}
                </label>
              ))}
              <a href='#' className='text-sm text-teal-600'>
                +24 more
              </a>
            </div>
          </motion.div>

          {/* Hotel Listings */}
          <motion.div
            className='md:w-3/4'
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-gray-700'>
                Showing 4 of 257 places
              </h2>
              <select className='rounded-md border p-2 text-gray-700'>
                <option>Sort by Recommended</option>
                <option>Sort by Price: Low to High</option>
                <option>Sort by Price: High to Low</option>
              </select>
            </div>

            {hotels.map((hotel, index) => (
              <motion.div
                key={index}
                className='mb-6 flex overflow-hidden rounded-lg bg-white shadow-lg'
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className='h-48 w-1/3 object-cover'
                />
                <div className='flex-1 p-4'>
                  <h3 className='text-lg font-semibold text-teal-700'>
                    {hotel.name}
                  </h3>
                  <p className='text-sm text-gray-600'>{hotel.location}</p>
                  <div className='mt-2 flex items-center'>
                    <span className='text-yellow-500'>
                      {'★'.repeat(hotel.stars)}
                    </span>
                    <span className='ml-2 text-sm text-gray-600'>
                      {hotel.stars} Stars Hotel
                    </span>
                    <span className='ml-2 text-sm text-gray-600'>
                      🛠 {hotel.amenities}+ Amenities
                    </span>
                  </div>
                  <div className='mt-2 flex items-center'>
                    <span className='rounded-full bg-teal-600 px-3 py-1 text-sm text-white'>
                      {hotel.rating} ({hotel.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className='flex flex-col items-end justify-between p-4'>
                  <div className='text-right'>
                    <p className='text-sm text-gray-600'>Starting From</p>
                    <p className='text-xl font-bold text-teal-600'>
                      ${hotel.price}/Night
                    </p>
                    <p className='text-sm text-gray-500'>excl. tax</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <button className='text-gray-400 hover:text-red-500'>
                      ❤️
                    </button>
                    <button className='rounded-full bg-teal-600 px-4 py-2 text-white transition hover:bg-teal-700'>
                      View Place
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Pagination */}
            <div className='mt-6 flex justify-center'>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className='mx-1 rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300'
              >
                ←
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`mx-1 rounded-md px-4 py-2 ${
                    currentPage === page
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className='mx-1 rounded-md bg-gray-200 px-4 py-2'>
                ...
              </button>
              <button
                onClick={() => setCurrentPage(257)}
                className='mx-1 rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300'
              >
                257
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, 257))
                }
                className='mx-1 rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300'
              >
                →
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className='bg-gradient-to-r from-teal-500 to-blue-500 px-4 py-16 text-white'
        variants={fadeInUp}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='mx-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row'>
          <div className='md:w-1/2'>
            <button className='mb-4 rounded-full bg-yellow-400 px-4 py-2 text-black transition hover:bg-yellow-500'>
              Join Our Newsletter
            </button>
            <h2 className='mb-4 text-3xl font-bold'>
              Subscribe to See Secret Deals Prices Drop the Moment You Sign Up!
            </h2>
            <div className='flex gap-4'>
              <input
                type='email'
                placeholder='Your Email'
                className='flex-1 rounded-md p-3 text-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none'
              />
              <button className='rounded-md bg-black px-6 py-3 text-white transition hover:bg-gray-800'>
                Subscribe
              </button>
            </div>
            <p className='mt-4 text-sm'>No ads. No trails. No commitments</p>
          </div>
          <div className='md:w-1/2'>
            <img
              src='https://via.placeholder.com/500x300'
              alt='Newsletter'
              className='w-full rounded-lg shadow-lg'
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default SearchResults;
