import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { id } from 'date-fns/locale';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  // State to manage form inputs
  const [location, setLocation] = useState('Jakarta, IDN');
  const [checkIn, setCheckIn] = useState(today); // Default to today
  const [checkOut, setCheckOut] = useState(tomorrow); // Default to tomorrow
  const [guests, setGuests] = useState('2 adults, 1 children');
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

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

  // Data for Best Deal Hotels (static for now)
  const bestDeals = [
    {
      category: 'Luxury',
      name: 'Fairmont Resort, Dubai',
      location: 'Dubai, UAE',
      price: 148.25,
      discount: 25,
      image: 'https://via.placeholder.com/300x200' // Replace with actual image URL
    },
    {
      category: 'Family',
      name: 'Fairmont Resort, Dubai',
      location: 'Dubai, UAE',
      price: 148.25,
      discount: 28,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      category: 'Business',
      name: 'Fairmont Resort, Dubai',
      location: 'Dubai, UAE',
      price: 148.25,
      discount: 27,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      category: 'Standard',
      name: 'Fairmont Resort, Dubai',
      location: 'Dubai, UAE',
      price: 148.25,
      discount: 35,
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  // Data for Top Rated Hotels (static for now)
  const topRated = [
    {
      name: 'Ayana Midplaza',
      location: 'Jakarta, Indonesia',
      rating: 4.96,
      reviews: 672,
      price: 48.25,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'The Westin Jakarta',
      location: 'Jakarta, Indonesia',
      rating: 4.96,
      reviews: 672,
      price: 17.32,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'The Westin Resort Nusa Dua Bali',
      location: 'Bali, Indonesia',
      rating: 4.96,
      reviews: 672,
      price: 15.63,
      image: 'https://via.placeholder.com/300x200'
    },
    {
      name: 'Grand',
      location: 'Bali, Indonesia',
      rating: 4.96,
      reviews: 672,
      price: 48.25,
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // Function to ensure Check Out is after Check In
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
    <div className='min-h-screen bg-gray-100'>
      {/* Hero Section */}
      <motion.section
        className='relative flex h-[600px] items-center justify-center bg-cover bg-center text-white'
        style={{
          backgroundImage: 'url("")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          width: '100%'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 text-center'>
          <motion.h1
            className='mb-4 text-5xl font-bold'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
          >
            FIND YOUR NEXT STAY
          </motion.h1>
          <motion.p
            className='mb-8 text-lg'
            variants={fadeInUp}
            initial='hidden'
            animate='visible'
          >
            Search deals on hotels, homes, and much more...
          </motion.p>

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

            {/* Search Button */}
            <button className='rounded-md bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800'>
              Cari
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Best Deals Section */}
      <motion.section
        className='px-4 py-16'
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='mx-auto max-w-6xl'>
          <motion.h2 className='mb-4 text-3xl font-bold' variants={fadeInUp}>
            Best Deal Hotels
          </motion.h2>
          <motion.p className='mb-8 text-gray-600' variants={fadeInUp}>
            Quality as judged by customers. Book at the ideal price!
          </motion.p>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {bestDeals.map((deal, index) => (
              <motion.div
                key={index}
                className='overflow-hidden rounded-lg bg-white shadow-md'
                variants={fadeInUp}
              >
                <img
                  src={deal.image}
                  alt={deal.name}
                  className='h-40 w-full object-cover'
                />
                <div className='p-4'>
                  <span className='text-sm text-gray-500'>{deal.category}</span>
                  <h3 className='text-lg font-semibold'>{deal.name}</h3>
                  <p className='text-sm text-gray-600'>{deal.location}</p>
                  <div className='mt-2 flex items-center'>
                    <span className='text-yellow-500'>★★★★★</span>
                    <span className='ml-2 text-sm text-gray-600'>
                      {deal.discount}% off
                    </span>
                  </div>
                  <div className='mt-4 flex items-center justify-between'>
                    <span className='text-lg font-bold'>
                      ${deal.price}/night
                    </span>
                    <button className='rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800'>
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Top Rated Hotels Section with Slider */}
      <motion.section
        className='bg-gray-50 px-4 py-16'
        variants={staggerContainer}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='mx-auto max-w-6xl'>
          <motion.h2 className='mb-4 text-3xl font-bold' variants={fadeInUp}>
            Top Rated Hotels
          </motion.h2>
          <motion.p className='mb-8 text-gray-600' variants={fadeInUp}>
            Quality as judged by customers. Book at the ideal price!
          </motion.p>
          <Slider {...sliderSettings}>
            {topRated.map((hotel, index) => (
              <motion.div
                key={index}
                className='p-2'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className='overflow-hidden rounded-lg bg-white shadow-md'>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className='h-40 w-full object-cover'
                  />
                  <div className='p-4'>
                    <h3 className='text-lg font-semibold'>{hotel.name}</h3>
                    <p className='text-sm text-gray-600'>{hotel.location}</p>
                    <div className='mt-2 flex items-center'>
                      <span className='text-yellow-500'>★★★★★</span>
                      <span className='ml-2 text-sm text-gray-600'>
                        {hotel.rating} ({hotel.reviews} reviews)
                      </span>
                    </div>
                    <div className='mt-4 flex items-center justify-between'>
                      <span className='text-lg font-bold'>
                        ${hotel.price}/person
                      </span>
                      <button className='rounded-md bg-black px-4 py-2 text-white transition hover:bg-gray-800'>
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
