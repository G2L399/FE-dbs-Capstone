import React, { useState, useEffect  } from 'react';
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
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Fairmont Resort, Dubai, United Arab Emirates',
    location: 'Dubai, UAE',
    rating: 4.96,
    reviews: 672,
    stars: 5,
    amenities: 20,
    price: 2349,
    image: 'https://via.placeholder.com/300x200',
  },
  {
    name: 'Fairmont Resort, Dubai, United Arab Emirates',
    location: 'Dubai, UAE',
    rating: 4.96,
    reviews: 672,
    stars: 5,
    amenities: 20,
    price: 2349,
    image: 'https://via.placeholder.com/300x200',
  },
];

const SearchResults = () => {
    const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        // State to manage form inputs
      const [location, setLocation] = useState('Jakarta, IDN');
      const [checkIn    , setCheckIn] = useState(today); // Default to today
      const [checkOut, setCheckOut] = useState(tomorrow); // Default to tomorrow
      const [guests, setGuests] = useState('2 adults, 1 children');
      const locationOptions = [
        'Jakarta, IDN',
        'Bali, IDN',
        'Yogyakarta, IDN',
        'Bandung, IDN',
        'Surabaya, IDN',
        'Medan, IDN',
      ];
    
      const guestOptions = [
        '1 adult',
        '2 adults',
        '2 adults, 1 child',
        '2 adults, 2 children',
        '3 adults',
        '3 adults, 1 child',
        '4 adults',
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Search Bar */}
      <motion.section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(https://via.placeholder.com/1920x400)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-70"></div>
        <div className="relative z-10 text-center">
          {/* Search Form */}
                  <motion.div
                     className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-2 max-w-5xl mx-auto"
                     variants={fadeInUp}
                     initial="hidden"
                     animate="visible"
                   >
                     {/* Location */}
                     <div className="flex-1 relative">
                       <select
                         value={location}
                         onChange={(e) => setLocation(e.target.value)}
                         className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                       >
                         {locationOptions.map((option, index) => (
                           <option key={index} value={option}>
                             {option}
                           </option>
                         ))}
                       </select>
                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                       </span>
                     </div>
         
                     {/* Check In */}
                     <div className="flex-1 relative">
                       <DatePicker
                         selected={checkIn}
                         onChange={(date) => setCheckIn(date)}
                         minDate={new Date()} // Prevent past dates
                         dateFormat="dd MMMM yyyy"
                         locale={id} // Set locale to Indonesian
                         className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                         placeholderText="Check In"
                       />
                       <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                         📅
                       </span>
                     </div>
         
                     {/* Check Out */}
                     <div className="flex-1 relative">
                       <DatePicker
                         selected={checkOut}
                         onChange={(date) => setCheckOut(date)}
                         minDate={
                           checkIn
                             ? new Date(checkIn).setDate(new Date(checkIn).getDate() + 1)
                             : new Date()
                         }
                         dateFormat="dd MMMM yyyy"
                         locale={id} // Set locale to Indonesian
                         className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                         placeholderText="Check Out"
                       />
                       <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                         📅
                       </span>
                     </div>
         
                     {/* Guests */}
                     <div className="flex-1 relative">
                       <select
                         value={guests}
                         onChange={(e) => setGuests(e.target.value)}
                         className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                       >
                         {guestOptions.map((option, index) => (
                           <option key={index} value={option}>
                             {option}
                           </option>
                         ))}
                       </select>
                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                         👤
                       </span>
                     </div>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition font-medium">
              Search
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-16 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            className="md:w-1/4 bg-white p-6 rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            <h2 className="text-xl font-bold mb-4 text-teal-600">Filters</h2>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Price</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                value={priceRange}
                onChange={handlePriceChange}
                className="w-full accent-teal-600"
              />
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Rating</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((star) => (
                  <label key={star} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={rating.includes(star)}
                      onChange={() => handleRatingChange(star)}
                      className="mr-2 accent-teal-600"
                    />
                    {star}+
                  </label>
                ))}
              </div>
            </div>

            {/* Freebies Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Freebies</h3>
              {[
                'Free breakfast',
                'Free parking',
                'Free internet',
                'Free airport shuttle',
                'Free cancellation',
              ].map((freebie) => (
                <label key={freebie} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={freebies.includes(freebie)}
                    onChange={() => handleFreebiesChange(freebie)}
                    className="mr-2 accent-teal-600"
                  />
                  {freebie}
                </label>
              ))}
            </div>

            {/* Amenities Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Amenities</h3>
              {['24-hour front desk', 'Air-conditioning', 'Fitness', 'Pool'].map(
                (amenity) => (
                  <label key={amenity} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      checked={amenities.includes(amenity)}
                      onChange={() => handleAmenitiesChange(amenity)}
                      className="mr-2 accent-teal-600"
                    />
                    {amenity}
                  </label>
                )
              )}
              <a href="#" className="text-teal-600 text-sm">
                +24 more
              </a>
            </div>
          </motion.div>

          {/* Hotel Listings */}
          <motion.div
            className="md:w-3/4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-700">
                Showing 4 of 257 places
              </h2>
              <select className="p-2 border rounded-md text-gray-700">
                <option>Sort by Recommended</option>
                <option>Sort by Price: Low to High</option>
                <option>Sort by Price: High to Low</option>
              </select>
            </div>

            {hotels.map((hotel, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg flex mb-6 overflow-hidden"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-1/3 h-48 object-cover"
                />
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-teal-700">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-gray-600">{hotel.location}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">
                      {'★'.repeat(hotel.stars)}
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                      {hotel.stars} Stars Hotel
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                      🛠 {hotel.amenities}+ Amenities
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                      {hotel.rating} ({hotel.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between items-end">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Starting From</p>
                    <p className="text-xl font-bold text-teal-600">
                      ${hotel.price}/Night
                    </p>
                    <p className="text-sm text-gray-500">excl. tax</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-red-500">
                      ❤️
                    </button>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                      View Place
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                ←
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 mx-1 rounded-md ${
                    currentPage === page
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 mx-1 bg-gray-200 rounded-md">...</button>
              <button
                onClick={() => setCurrentPage(257)}
                className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                257
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 257))}
                className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                →
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full mb-4 hover:bg-yellow-500 transition">
              Join Our Newsletter
            </button>
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to See Secret Deals Prices Drop the Moment You Sign Up!
            </h2>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4">No ads. No trails. No commitments</p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Newsletter"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SearchResults;