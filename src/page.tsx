import { useState } from "react";
import {
  FaPlane,
  FaBuilding,
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaHome,
  FaBookmark,
  FaBell,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import { Button } from "@shadcn/button";
import { Link } from "react-router-dom";
import { cn } from "./lib/utils";

function Page() {
  const [activeTab, setActiveTab] = useState("stays");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="flex bg-purple-800/30 p-2 rounded-xl">
          <Button
            className={`flex items-center bg-inherit size-full !px-4 space-x-2 py-3 rounded-lg transition-colors ${
              activeTab === "flights"
                ? "bg-gradient-to-r from-pink-600 to-purple-600 border border-pink-400"
                : "hover:bg-purple-800/50"
            }`}
            onClick={(e) => {
              setActiveTab("flights");
              console.log(e);
            }}
          >
            <FaPlane />
            <span>Flights</span>
          </Button>

          <Button
            className={`flex items-center bg-inherit size-full space-x-2 !px-4 py-3 rounded-lg transition-colors ${
              activeTab === "stays"
                ? "bg-gradient-to-r from-pink-600 to-purple-600 border border-pink-400"
                : "hover:bg-purple-800/50"
            }`}
            onClick={() => setActiveTab("stays")}
          >
            <FaBuilding />
            <span>Stays</span>
          </Button>

          <Button
            className={`flex items-center bg-inherit size-full space-x-2 !px-4 py-3 rounded-lg transition-colors ${
              activeTab === "cars"
                ? "bg-gradient-to-r from-pink-600 to-purple-600 border border-pink-400"
                : "hover:bg-purple-800/50"
            }`}
            onClick={() => setActiveTab("cars")}
          >
            <FaCar />
            <span>Cars</span>
          </Button>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-purple-800/20 p-8 rounded-2xl mb-10 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Location */}
          <div className="flex items-center bg-purple-800/30 rounded-xl p-4">
            <FaMapMarkerAlt className="text-gray-400 mr-3 text-xl" />
            <div className="flex flex-col">
              <label className="text-xs text-gray-300 mb-1">Destination</label>
              <input
                type="text"
                placeholder="Add location"
                className="bg-transparent text-white outline-none"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center bg-purple-800/30 rounded-xl p-4">
            <FaCalendarAlt className="text-gray-400 mr-3 text-xl" />
            <div className="flex flex-col">
              <label className="text-xs text-gray-300 mb-1">
                Check-in - Check-out
              </label>
              <span className="text-white">Wed, Feb 28 - Thu, March 1</span>
            </div>
          </div>

          {/* Guests */}
          <div className="flex items-center bg-purple-800/30 rounded-xl p-4">
            <FaUser className="text-gray-400 mr-3 text-xl" />
            <div className="flex flex-col">
              <label className="text-xs text-gray-300 mb-1">Guests</label>
              <span className="text-white">
                1 room - 2 adults - no children
              </span>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <Button className="flex items-center  bg-purple-600 hover:bg-purple-700 text-white font-medium text-base !py-6 !px-8 rounded-full shadow-lg transition-all">
            <FaSearch />
            <span>Search</span>
          </Button>
        </div>
      </div>

      {/* Ideas Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Ideas for your next trip</h2>
          <Button className="text-purple-300 bg-inherit shaow-none hover:text-purple-200 text-base">
            View all
          </Button>
        </div>

        {/* Destination Cards - Grid Layout */}
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ",
            "*:hover:scale-105 *:transition-all *:duration-200 *:ease-in-out",
            "*:rounded-xl *:overflow-hidden *:h-60 *:relative *:shadow-lg"
          )}
        >
          <Link
            to={"#"}
            className={cn("bg-gradient-to-r from-pink-500 to-purple-500")}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="bg-black/30 px-2 py-1 rounded text-xs w-fit mb-2">
                Popular
              </div>
              <h3 className="text-lg font-bold">Bali, Indonesia</h3>
              <p className="text-sm text-gray-200">Explore paradise islands</p>
            </div>
          </Link>

          <Link
            to={"#"}
            className={cn("bg-gradient-to-r from-blue-500 to-purple-500")}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="bg-black/30 px-2 py-1 rounded text-xs w-fit mb-2">
                Best Deals
              </div>
              <h3 className="text-lg font-bold">Paris, France</h3>
              <p className="text-sm text-gray-200">City of lights and love</p>
            </div>
          </Link>

          <Link
            to={"#"}
            className={cn("bg-gradient-to-r from-purple-500 to-indigo-500 ")}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="bg-black/30 px-2 py-1 rounded text-xs w-fit mb-2">
                Weekend Getaway
              </div>
              <h3 className="text-lg font-bold">New York City, USA</h3>
              <p className="text-sm text-gray-200">
                The city that never sleeps
              </p>
            </div>
          </Link>

          <Link
            to={"#"}
            className={cn("bg-gradient-to-r from-indigo-500 to-blue-500 ")}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <div className="bg-black/30 px-2 py-1 rounded text-xs w-fit mb-2">
                Family Friendly
              </div>
              <h3 className="text-lg font-bold">Tokyo, Japan</h3>
              <p className="text-sm text-gray-200">
                Blend of tradition and future
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Featured Deals Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Featured Deals</h2>
          <Button className="text-purple-300 hover:text-purple-200">
            See more
          </Button>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6",
            "*:hover:scale-105 *:transition-all *:duration-200 *:ease-in-out"
          )}
        >
          <Link
            to={"/#"}
            className="bg-purple-800/30 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="bg-purple-500 h-32"></div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Luxury Resort</h3>
              <p className="text-sm text-gray-300 mb-2">Maldives • 7 nights</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$1,299</span>
                <span className="text-sm text-green-400">20% OFF</span>
              </div>
            </div>
          </Link>

          <Link
            to={"/#"}
            className="bg-purple-800/30 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="bg-blue-500 h-32"></div>
            <div className="p-4">
              <h3 className="font-bold mb-1">City Break</h3>
              <p className="text-sm text-gray-300 mb-2">Barcelona • 3 nights</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$649</span>
                <span className="text-sm text-green-400">15% OFF</span>
              </div>
            </div>
          </Link>

          <Link
            to={"/#"}
            className="bg-purple-800/30 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="bg-pink-500 h-32"></div>
            <div className="p-4">
              <h3 className="font-bold mb-1">Beach Getaway</h3>
              <p className="text-sm text-gray-300 mb-2">Cancun • 5 nights</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$899</span>
                <span className="text-sm text-green-400">25% OFF</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page;
