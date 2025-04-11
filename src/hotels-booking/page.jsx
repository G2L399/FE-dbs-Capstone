// src/pages/Booking.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { id } from 'date-fns/locale'; // Import locale untuk bahasa Indonesia
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sample data for rooms
const rooms = [
  {
    name: 'Superior room - 1 double bed or 2 twin beds',
    price: 2450,
    image: 'https://via.placeholder.com/100x60',
  },
  {
    name: 'Superior room - City view - 1 double bed or 2 twin beds',
    price: 5280,
    image: 'https://via.placeholder.com/100x60',
  },
  {
    name: 'Superior room - City view - 1 double bed or 2 twin beds',
    price: 7323,
    image: 'https://via.placeholder.com/100x60',
  },
  {
    name: 'Superior room - City view - 2 double bed or 2 twin beds',
    price: 9043,
    image: 'https://via.placeholder.com/100x60',
  },
];

const Booking = () => {
  const navigate = useNavigate();

  // Set checkIn to today
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // State for booking form
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(tomorrow);
  const [selectedRooms, setSelectedRooms] = useState([rooms[0]]); // Now an array to support multiple selections
  const [totalPrice, setTotalPrice] = useState(0);

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

  // Calculate total price based on check-in and check-out dates
  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      const price = selectedRooms.reduce((total, room) => total + room.price, 0) * nights;
      setTotalPrice(price);
    }
  }, [checkIn, checkOut, selectedRooms]);

  // Ensure check-out is after check-in
  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      if (checkOutDate <= checkInDate) {
        const newCheckOutDate = new Date(checkInDate);
        newCheckOutDate.setDate(checkInDate.getDate() + 1);
        setCheckOut(newCheckOutDate);
      }
    }
  }, [checkIn, checkOut]);

  // Handle room selection
  const handleRoomSelect = (room, index) => {
    if (room.name === 'Superior room - City view - 1 double bed or 2 twin beds') {
      // If the selected room is a "Superior room - City view", select all rooms with the same name
      const cityViewRooms = rooms.filter(
        (r) => r.name === 'Superior room - City view - 1 double bed or 2 twin beds'
      );
      setSelectedRooms(cityViewRooms);
    } else {
      // Otherwise, select only the clicked room
      setSelectedRooms([room]);
    }
  };

  // Handle proceeding to payment
  const handleProceedToPayment = () => {
    navigate('/hotels-payment', {
      state: {
        hotelName: 'The Westin Jakarta',
        rooms: selectedRooms,
        checkIn,
        checkOut,
        totalPrice,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Booking Section */}
      <motion.section
        className="py-16 px-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <motion.div
            className="text-sm text-gray-500 mb-4"
            variants={fadeInUp}
          >
            <span>Indonesia</span> &gt; <span>Jakarta</span> &gt; <span>The Westin Jakarta</span>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold mb-6 text-black"
            variants={fadeInUp}
          >
            Pesan Kamar di The Westin Jakarta
          </motion.h2>

          {/* Check-in and Check-out Dates */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 mb-8"
            variants={fadeInUp}
          >
            <div className="flex-1 relative">
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()}
                dateFormat="dd MMMM yyyy"
                locale={id}
                className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholderText="Check In"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                📅
              </span>
            </div>
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
                locale={id}
                className="w-full p-3 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
                placeholderText="Check Out"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                📅
              </span>
            </div>
          </motion.div>

          {/* Room Selection */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-4">Pilih Kamar</h3>
            <div className="space-y-4">
              {rooms.map((room, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md cursor-pointer ${
                    selectedRooms.some((r) => r.name === room.name && r.price === room.price)
                      ? 'border-2 border-teal-600'
                      : ''
                  }`}
                  onClick={() => handleRoomSelect(room, index)}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-20 h-12 object-cover rounded-md"
                    />
                    <span className="text-gray-700">{room.name}</span>
                  </div>
                  <span className="text-lg font-bold text-teal-600">
                    ${room.price}/malam
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Booking Summary */}
          <motion.div
            className="mt-8 p-6 bg-white rounded-lg shadow-lg border-t-4 border-teal-600"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">Ringkasan Pemesanan</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Hotel:</span> The Westin Jakarta
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Kamar:</span>{' '}
                {selectedRooms.map((room) => room.name + ` ($${room.price}/malam)`).join(', ')}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Check-In:</span>{' '}
                {checkIn.toLocaleDateString('id-ID', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Check-Out:</span>{' '}
                {checkOut.toLocaleDateString('id-ID', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Total Malam:</span>{' '}
                {Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))}
              </p>
              <p className="text-lg font-bold text-teal-600">
                <span className="font-semibold">Total Harga:</span> ${totalPrice}
              </p>
            </div>
            <button
              onClick={handleProceedToPayment}
              className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition w-full"
            >
              Lanjutkan ke Pembayaran
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Booking;