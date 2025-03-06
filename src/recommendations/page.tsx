import { useState, useEffect } from "react";
import { Button } from "@shadcn/button";
import { cn } from "../lib/utils";

interface Destination {
  id: string;
  name: string;
  country: string;
  season: string;
  budget: number;
  travelType: string;
  image: string;
  rating: number;
}

const mockDestinations: Destination[] = [
  {
    id: "1",
    name: "Bali",
    country: "Indonesia",
    season: "summer",
    budget: 1500,
    travelType: "adventure",
    image: "bali.jpg",
    rating: 4.5
  },
  {
    id: "2",
    name: "Paris",
    country: "France",
    season: "spring",
    budget: 2500,
    travelType: "cultural",
    image: "paris.jpg",
    rating: 4.8
  },
  {
    id: "3",
    name: "Maldives",
    country: "Maldives",
    season: "winter",
    budget: 3500,
    travelType: "luxury",
    image: "maldives.jpg",
    rating: 4.9
  }
];

function RecommendationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>(mockDestinations);
  const [filters, setFilters] = useState({
    season: "all",
    budget: "all",
    travelType: "all"
  });

  const applyFilters = () => {
    let filtered = [...mockDestinations];

    if (filters.season !== "all") {
      filtered = filtered.filter(dest => dest.season === filters.season);
    }
    if (filters.budget !== "all") {
      filtered = filtered.filter(dest => {
        if (filters.budget === "low") return dest.budget <= 1500;
        if (filters.budget === "medium") return dest.budget > 1500 && dest.budget <= 3000;
        return dest.budget > 3000;
      });
    }
    if (filters.travelType !== "all") {
      filtered = filtered.filter(dest => dest.travelType === filters.travelType);
    }

    setDestinations(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleRefresh = () => {
    // Simulate API call
    setDestinations([...mockDestinations].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Recommended Destinations</h1>
        <Button
          onClick={handleRefresh}
          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
        >
          Refresh Suggestions
        </Button>
      </div>

      <div className="bg-purple-800/30 p-4 rounded-xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.season}
            onChange={(e) => setFilters(prev => ({ ...prev, season: e.target.value }))}
            className="bg-purple-700/30 border border-purple-600 rounded-lg p-2"
          >
            <option value="all">All Seasons</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
          </select>

          <select
            value={filters.budget}
            onChange={(e) => setFilters(prev => ({ ...prev, budget: e.target.value }))}
            className="bg-purple-700/30 border border-purple-600 rounded-lg p-2"
          >
            <option value="all">All Budgets</option>
            <option value="low">Budget ($0-$1500)</option>
            <option value="medium">Standard ($1500-$3000)</option>
            <option value="high">Luxury ($3000+)</option>
          </select>

          <select
            value={filters.travelType}
            onChange={(e) => setFilters(prev => ({ ...prev, travelType: e.target.value }))}
            className="bg-purple-700/30 border border-purple-600 rounded-lg p-2"
          >
            <option value="all">All Types</option>
            <option value="adventure">Adventure</option>
            <option value="cultural">Cultural</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(destination => (
          <div
            key={destination.id}
            className={cn(
              "bg-purple-800/30 rounded-xl overflow-hidden shadow-lg",
              "hover:transform hover:scale-105 transition-all duration-300"
            )}
          >
            <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-500" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-300 mb-2">{destination.country}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm bg-purple-700/50 px-2 py-1 rounded">
                  {destination.season}
                </span>
                <span className="text-sm bg-purple-700/50 px-2 py-1 rounded">
                  ${destination.budget}
                </span>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm">{destination.rating}</span>
                  </div>
                </div>
                <span className="text-sm text-purple-300">{destination.travelType}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendationsPage;