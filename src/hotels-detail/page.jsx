// src/pages/HotelDetail.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sample data for rooms and amenities
const rooms = [
  {
    name: "Superior room - 1 double bed or 2 twin beds",
    price: 2450,
    image: "https://via.placeholder.com/100x60",
  },
  {
    name: "Superior room - City view - 1 double bed or 2 twin beds",
    price: 5280,
    image: "https://via.placeholder.com/100x60",
  },
  {
    name: "Superior room - City view - 1 double bed or 2 twin beds",
    price: 7323,
    image: "https://via.placeholder.com/100x60",
  },
  {
    name: "Superior room - City view - 1 double bed or 2 twin beds",
    price: 9043,
    image: "https://via.placeholder.com/100x60",
  },
];

const amenities = [
  { name: "Outdoor pool", icon: "🏊" },
  { name: "Indoor pool", icon: "🏊" },
  { name: "Spa and wellness center", icon: "🌿" },
  { name: "Restaurant", icon: "🍴" },
  { name: "Fitness center", icon: "🏋️" },
  { name: "Bar/Lounge", icon: "🍸" },
  { name: "Free Wi-Fi", icon: "📶" },
  { name: "Tea/coffee machine", icon: "☕" },
];

// Sample images for the gallery
const galleryImages = [
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
  "https://via.placeholder.com/300x200",
];

const HotelDetail = () => {
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

  // State for favorite toggle
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen text-black bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-[600px] flex items-center justify-center text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-gradient-to-r from-gray-100 to-yellow-100 opacity-90 absolute inset-0"></div>
        <div className="md:flex-row relative z-10 flex flex-col items-center max-w-6xl gap-8 px-4 mx-auto text-center">
          <div className="md:w-1/2 text-left">
            <button className="hover:bg-yellow-500 px-4 py-2 mb-4 text-black transition bg-yellow-400 rounded-full">
              Jelajahi Dunia
            </button>
            <motion.h1
              className="mb-4 text-5xl font-bold"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              Temukan Keindahan Dunia Setiap Hari
            </motion.h1>
            <motion.p
              className="mb-8 text-lg text-gray-600"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              Bepergian Tanpa Batas. Jelajahi, Pesan, Nikmati
            </motion.p>
          </div>
          <motion.div
            className="md:w-1/2"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <img
              src="https://via.placeholder.com/500x400"
              alt="Traveler"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-0 flex items-center gap-2 p-2 bg-white rounded-full shadow-md">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm font-semibold">5.0 Stars</span>
              <span className="text-sm text-gray-600">69k reviews</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Hotel Info Section */}
      <motion.section
        className="px-4 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center justify-between mb-6"
            variants={fadeInUp}
          >
            <div>
              <p className="text-sm text-gray-500">
                Indonesia &gt; Jakarta &gt; The Westin Jakarta
              </p>
              <h2 className="text-3xl font-bold text-black">
                The Westin Jakarta
              </h2>
              <p className="text-sm text-gray-600">
                Jl. H.R. Rasuna Said No Kav.C-22 Kota Jakarta Selatan, Daerah
                Khusus Ibukota Jakarta 12940
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="px-3 py-1 text-sm text-white bg-black rounded-full">
                  4.96 (672 reviews)
                </span>
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-600">5 Stars Hotel</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-teal-600">$2349/Night</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`text-2xl ${
                    isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {isFavorite ? "❤️" : "🤍"}
                </button>
                <button className="hover:bg-yellow-500 px-4 py-2 text-black transition bg-yellow-400 rounded-full">
                  -27%
                </button>
                <button className="hover:bg-teal-700 px-6 py-2 text-white transition bg-teal-600 rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>

          {/* Image Gallery */}
          <motion.div
            className="md:grid-cols-4 grid grid-cols-2 gap-4 mb-8"
            variants={staggerContainer}
          >
            {galleryImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="object-cover w-full h-48 rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>

          {/* Overview Section */}
          <motion.div variants={fadeInUp}>
            <h3 className="mb-4 text-2xl font-bold">Overview</h3>
            <p className="leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dolor nisi, malesuada eu quam quis, elementum tincidunt libero.
              Aliquam ac enim risus. Integer ullamcorper ornare molestie. Nullam
              varius leo eu nulla porta, eget fringilla mauris pharetra. In
              volutpat justo vitae eleifend pharetra. Donec ut condimentum nisi,
              vitae lacinia nunc. Nunc ut pellentesque dolore. Etiam mauris
              purus, porta et erat at, porttitor volutpat magna. Proin nec
              porttitor purus. Nullam lobortis, lectus et vehicula semper, diam
              lectus porta ante, nec pretium sem purus sit amet nisi. Sed non
              nunc tellus.
              <br />
              <br />
              Sed placerat, risus eu egestas sodales, eros tellus consequat
              erat, eget dictum neque lacus ullamcorper nisi. Vestibulum vitae
              molestie urna. Nulla in erat nisl pretium placerat quis sit amet
              metus. Cras efficitur sapien nisl, non viverra quam fermentum
              bibendum. Quisque laoreet aliquet sagittis. Praesent semper,
              mauris gravida sodales pharetra, felis enim commodo velit, nec
              malesuada nibh eros hendrerit dui. Donec eget lorem maximus, a
              euismod arcu id, ornare eros. Pellentesque ante orci, luctus ac
              condimentum eu, porta vitae leo. Nullam eget lectus imperdiet,
              mollis ante vitae, dictum purus. Duis accumsan lectus quis viverra
              posuere. Donec ornare fermentum augue dictum. Etiam ac tortor
              diam, eget accumsan nisi lacinia eget.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Available Rooms Section */}
      <motion.section
        className="bg-gray-50 px-4 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3 className="mb-6 text-2xl font-bold" variants={fadeInUp}>
            Available Rooms
          </motion.h3>
          <div className="space-y-4">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="object-cover w-20 h-12 rounded-md"
                  />
                  <span className="text-gray-700">{room.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-teal-600">
                    ${room.price}/night
                  </span>
                  <button className="hover:bg-teal-700 px-6 py-2 text-white transition bg-teal-600 rounded-full">
                    Book now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Amenities Section */}
      <motion.section
        className="px-4 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3 className="mb-6 text-2xl font-bold" variants={fadeInUp}>
            Amenities
          </motion.h3>
          <div className="md:grid-cols-4 grid grid-cols-2 gap-4">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-gray-700"
                variants={fadeInUp}
              >
                <span className="text-xl">{amenity.icon}</span>
                <span>{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HotelDetail;
