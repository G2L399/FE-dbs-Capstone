import { useState } from 'react';
import { Button } from '@shadcn/button';
import { FaHeart, FaBookmark } from 'react-icons/fa';
import { cn } from '../lib/utils';

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
    id: '1',
    name: 'Santorini, Greece',
    description: 'Beautiful sunsets and white architecture',
    image: 'santorini.jpg',
    price: 2500,
    rating: 4.8,
    isTrending: true,
    season: 'summer'
  },
  {
    id: '2',
    name: 'Swiss Alps',
    description: 'Winter wonderland and skiing paradise',
    image: 'swiss-alps.jpg',
    price: 3000,
    rating: 4.7,
    isTrending: true,
    season: 'winter'
  },
  {
    id: '3',
    name: 'Kyoto, Japan',
    description: 'Cherry blossoms and ancient temples',
    image: 'kyoto.jpg',
    price: 2800,
    rating: 4.9,
    isTrending: false,
    season: 'spring'
  }
];

function DestinationsPage() {
  const [savedDestinations, setSavedDestinations] = useState<Set<string>>(
    new Set(JSON.parse(localStorage.getItem('savedDestinations') || '[]'))
  );

  const handleSaveDestination = (destinationId: string) => {
    const newSaved = new Set(savedDestinations);
    if (newSaved.has(destinationId)) {
      newSaved.delete(destinationId);
    } else {
      newSaved.add(destinationId);
    }
    setSavedDestinations(newSaved);
    localStorage.setItem('savedDestinations', JSON.stringify([...newSaved]));

    // Track analytics
    console.log(
      `Destination ${destinationId} ${newSaved.has(destinationId) ? 'saved' : 'unsaved'}`
    );
  };

  const trendingDestinations = mockDestinations.filter((d) => d.isTrending);
  const seasonalDestinations = mockDestinations.filter(
    (d) => d.season === getCurrentSeason()
  );

  function getCurrentSeason(): string {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'autumn';
    return 'winter';
  }

  return (
    <div className='mx-auto max-w-7xl p-6'>
      {/* Trending Section */}
      <section className='mb-12'>
        <h2 className='mb-6 text-2xl font-bold'>Trending Destinations</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {trendingDestinations.map((destination) => (
            <div
              key={destination.id}
              className={cn(
                'overflow-hidden rounded-xl bg-purple-800/30 shadow-lg',
                'transition-all duration-300 hover:scale-105 hover:transform'
              )}
            >
              <div className='relative h-48 bg-gradient-to-r from-pink-500 to-purple-500'>
                <div className='absolute top-4 right-4 space-x-2'>
                  <Button
                    onClick={() => handleSaveDestination(destination.id)}
                    className={cn(
                      'rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20',
                      savedDestinations.has(destination.id) && 'text-pink-500'
                    )}
                  >
                    <FaHeart />
                  </Button>
                  <Button className='rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20'>
                    <FaBookmark />
                  </Button>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='mb-2 text-xl font-semibold'>
                  {destination.name}
                </h3>
                <p className='mb-4 text-gray-300'>{destination.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold'>
                    ${destination.price}
                  </span>
                  <div className='flex items-center'>
                    <span className='mr-1 text-yellow-400'>★</span>
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
        <h2 className='mb-6 text-2xl font-bold'>Seasonal Highlights</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {seasonalDestinations.map((destination) => (
            <div
              key={destination.id}
              className={cn(
                'overflow-hidden rounded-xl bg-purple-800/30 shadow-lg',
                'transition-all duration-300 hover:scale-105 hover:transform'
              )}
            >
              <div className='relative h-48 bg-gradient-to-r from-blue-500 to-purple-500'>
                <div className='absolute top-4 right-4 space-x-2'>
                  <Button
                    onClick={() => handleSaveDestination(destination.id)}
                    className={cn(
                      'rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20',
                      savedDestinations.has(destination.id) && 'text-pink-500'
                    )}
                  >
                    <FaHeart />
                  </Button>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='mb-2 text-xl font-semibold'>
                  {destination.name}
                </h3>
                <p className='mb-4 text-gray-300'>{destination.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-bold'>
                    ${destination.price}
                  </span>
                  <span className='text-sm text-purple-300 capitalize'>
                    {destination.season}
                  </span>
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
