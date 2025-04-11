// src/pages/Payment.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // State for payment form
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

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

  // Handle payment confirmation
  const handleConfirmPayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    alert("Pembayaran Berhasil! Pemesanan Anda telah dikonfirmasi.");
    navigate("/"); // Redirect to home page after payment
  };

  if (!state) {
    return (
      <div>
        Data pemesanan tidak ditemukan. Silakan kembali ke halaman pemesanan.
      </div>
    );
  }

  const { hotelName, rooms, checkIn, checkOut, totalPrice } = state;

  return (
    <div className="min-h-screen text-black bg-white">
      {/* Payment Section */}
      <motion.section
        className="px-4 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb Navigation */}
          <motion.div
            className="mb-4 text-sm text-gray-500"
            variants={fadeInUp}
          >
            <span>Indonesia</span> &gt; <span>Jakarta</span> &gt;{" "}
            <span>The Westin Jakarta</span> &gt; <span>Pembayaran</span>
          </motion.div>

          <div className="md:flex-row flex flex-col gap-8">
            {/* Payment Form */}
            <motion.div
              className="md:w-2/3 bg-gray-50 p-6 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h2 className="mb-6 text-3xl font-bold text-black">
                Detail Pembayaran
              </h2>
              <form onSubmit={handleConfirmPayment} className="space-y-4">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Nomor Kartu
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="1234 5678 9012 3456"
                    className="focus:outline-none focus:ring-2 focus:ring-teal-300 w-full p-3 text-gray-700 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Nama Pemegang Kartu
                  </label>
                  <input
                    type="text"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    placeholder="Nama Lengkap"
                    className="focus:outline-none focus:ring-2 focus:ring-teal-300 w-full p-3 text-gray-700 border rounded-md"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Tanggal Kadaluarsa
                    </label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      className="focus:outline-none focus:ring-2 focus:ring-teal-300 w-full p-3 text-gray-700 border rounded-md"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2 font-semibold text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      className="focus:outline-none focus:ring-2 focus:ring-teal-300 w-full p-3 text-gray-700 border rounded-md"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="hover:bg-teal-700 w-full px-6 py-3 text-white transition bg-teal-600 rounded-full"
                >
                  Konfirmasi Pembayaran
                </button>
              </form>
            </motion.div>

            {/* Booking Summary */}
            <motion.div
              className="md:w-1/3 p-6 bg-white border-t-4 border-teal-600 rounded-lg shadow-lg"
              variants={fadeInUp}
            >
              <h3 className="mb-4 text-2xl font-bold">Ringkasan Pemesanan</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Hotel:</span> {hotelName}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Kamar:</span>{" "}
                  {rooms
                    .map((room) => room.name + ` ($${room.price}/malam)`)
                    .join(", ")}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Check-In:</span>{" "}
                  {new Date(checkIn).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-700">
                  <span classNama="font-semibold">Check-Out:</span>{" "}
                  {new Date(checkOut).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Total Malam:</span>{" "}
                  {Math.ceil(
                    (new Date(checkOut) - new Date(checkIn)) /
                      (1000 * 60 * 60 * 24)
                  )}
                </p>
                <p className="text-lg font-bold text-teal-600">
                  <span className="font-semibold">Total Harga:</span> $
                  {totalPrice}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Payment;
