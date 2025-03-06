import { useState } from "react";
import { Button } from "@shadcn/button";
import { cn } from "../lib/utils";
import { FaHeart, FaBookmark } from "react-icons/fa";

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  isTrending: boolean;
  season: string;
}

const mockDestinations: Destination[] = [
  {
    id: "1",
    name: "Santorini, Greece",
    description: "Beautiful sunsets and white architecture",
    image: "santorini.jpg",
    price: 2500,
    rating: 4.8,
    isTrending: true,
    season: "summer"
  },
  {
    id: "2",
    name: "Swiss Alps",
    description: "Winter wonderland and skiing paradise",
    image: "swiss-alps.jpg",
    price: 3000,
    rating: 4.7,
    isTrending: true,
    season: "winter"
  },
  {
    id: "3",
    name: "Kyoto, Japan",
    description: "Cherry blossoms and ancient temples",
    image: "kyoto.jpg",
    price: 2800,
    rating: 4.9,
    isTrending: false,
    season: "spring"
  }
];

function DestinationsPage() {
  const [savedDestinations, setSavedDestinations] = useState<Set<string>>(
    new Set(JSON.parse(localStorage.getItem("savedDestinations") || "[]"))
  );

  const handleSaveDestination = (destinationId: string) => {
    const newSaved = new Set(savedDestinations);
    if (newSaved.has(destinationId)) {
      newSaved.delete(destinationId);
    } else {
      newSaved.add(destinationId);
    }
    setSavedDestinations(newSaved);
    localStorage.setItem("savedDestinations", JSON.stringify([...newSaved]));

    // Track analytics
    console.log(`Destination ${destinationId} ${newSaved.has(destinationId) ? 'saved' : 'unsaved'}`);
  };

  const trendingDestinations = mockDestinations.filter(d => d.isTrending);
  const seasonalDestinations = mockDestinations.filter(d => d.season === getCurrentSeason());

  function getCurrentSeason(): string {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return "spring";
    if (month >= 5 && month <= 7) return "summer";
    if (month >= 8 && month <= 10) return "autumn";
    return "winter";
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Trending Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingDestinations.map(destination => (
            <div
              key={destination.id}
              className={cn(
                "bg-purple-800/30 rounded-xl overflow-hidden shadow-lg",
                "hover:transform hover:scale-105 transition-all duration-300"
              )}
            >
              <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-500 relative">
                <div className="absolute top-4 right-4 space-x-2">
                  <Button
                    onClick={() => handleSaveDestination(destination.id)}
                    className={cn(
                      "bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20",
                      savedDestinations.has(destination.id) && "text-pink-500"
                    )}
                  >
                    <FaHeart />
                  </Button>
                  <Button className="bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20">
                    <FaBookmark />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-300 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${destination.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{destination.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Highlights */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Seasonal Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasonalDestinations.map(destination => (
            <div
              key={destination.id}
              className={cn(
                "bg-purple-800/30 rounded-xl overflow-hidden shadow-lg",
                "hover:transform hover:scale-105 transition-all duration-300"
              )}
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative">
                <div className="absolute top-4 right-4 space-x-2">
                  <Button
                    onClick={() => handleSaveDestination(destination.id)}
                    className={cn(
                      "bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20",
                      savedDestinations.has(destination.id) && "text-pink-500"
                    )}
                  >
                    <FaHeart />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-300 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${destination.price}</span>
                  <span className="text-sm text-purple-300 capitalize">{destination.season}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DestinationsPage;