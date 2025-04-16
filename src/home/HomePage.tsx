import { useState } from 'react';
import {
  ChevronDown,
  ArrowRight,
  ArrowRightCircle,
  Heart,
  Star,
  MapPin,
  Search
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { dashboardData } from '@/types/dashboard';
import { travelDestination, travelTicket } from '@/types/destination';
import { reviews } from '@/types/review';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function App({
  data,
  recommendation
}: {
  data: dashboardData;
  recommendation: travelDestination<{
    reviews: reviews[];
    categories: string[];
    travelTickets: travelTicket<{}>[];
  }>[];
}) {
  console.log(recommendation);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Tours');

  return (
    <>
      {/* Search Section */}
      <section className='py-8'>
        <div className='container mx-auto px-4'>
          <div className='search-box mx-auto flex max-w-4xl items-center rounded-full bg-gray-100 p-2 px-4'>
            <Search width={20} />
            <input
              type='text'
              placeholder='What are you looking for?'
              className='flex-grow border-none bg-transparent py-2 outline-none'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className='search-tabs mt-4 flex justify-center'>
            <button
              className={`tab-btn rounded-full px-8 py-2 ${
                activeTab === 'Tours' ? 'bg-black text-white' : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('Tours')}
            >
              Tours
            </button>
            <button
              className={`tab-btn rounded-full px-8 py-2 ${
                activeTab === 'Hotels'
                  ? 'bg-black text-white'
                  : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('Hotels')}
            >
              Hotels
            </button>
            <button
              className={`tab-btn rounded-full px-8 py-2 ${
                activeTab === 'Tickets'
                  ? 'bg-black text-white'
                  : 'bg-transparent'
              }`}
              onClick={() => setActiveTab('Tickets')}
            >
              Tickets
            </button>
          </div>

          <div className='filter-section mt-6 flex flex-wrap justify-between'>
            <div className='filters flex flex-wrap gap-3'>
              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Categories</span>
                <ChevronDown width={20} />
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Duration</span>
                <ChevronDown width={20} />
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Review / Rating</span>
                <ChevronDown width={20} />
              </div>

              <div className='filter-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
                <span>Price range</span>
                <ChevronDown width={20} />
              </div>
            </div>

            <div className='sort-dropdown flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Sort from High to Low</span>
              <ChevronDown width={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <Popular popularDestinations={data.popularDestinations} />

      {/* Based On Your Recent Destination Section */}
      <Recommendation recommendation={recommendation} />

      {/* Top Rated Hotels Section */}
      <TopHotel hotel={data.topRatedHotels} />

      {/* Newsletter Section */}
      <section className='newsletter bg-blue-50 py-12'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col overflow-hidden rounded-xl md:flex-row'>
            <div className='flex flex-col justify-center bg-blue-50 p-8 md:w-1/2'>
              <div className='mb-6'>
                <button className='rounded-full bg-yellow-300 px-6 py-2 font-medium text-black'>
                  Join our newsletter
                </button>
              </div>
              <h2 className='mb-4 text-3xl font-bold'>
                Subscribe to see secret deals prices drop the moment you sign
                up!
              </h2>
              <div className='mb-4 flex flex-col gap-4 sm:flex-row'>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='flex-grow rounded-full border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                />
                <button className='rounded-full bg-black px-8 py-3 font-medium text-white transition duration-300 hover:bg-gray-800'>
                  Subscribe
                </button>
              </div>
              <p className='text-sm text-gray-500'>
                No ads. No trails. No commitments
              </p>
            </div>
            <div className='md:w-1/2'>
              <img
                src='/assets/resort1.jpg'
                alt='Resort with swimming pool and water slide'
                className='h-full w-full object-cover'
              />
            </div>
          </div>

          <div className='travel-gallery mt-8 grid grid-cols-2 gap-4 md:grid-cols-5'>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='Person at beach'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='Mountain view'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='People by the sea'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='People in car'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
            <div className='gallery-item'>
              <img
                src='/api/placeholder/240/320'
                alt='People with luggage'
                className='h-full w-full rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

function Popular({
  popularDestinations
}: {
  popularDestinations: dashboardData['popularDestinations'];
}) {
  return (
    <section className='py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-6 flex items-end justify-between'>
          <div>
            <h2 className='mb-2 text-4xl font-bold'>Popular Destinations</h2>
            <p className='text-gray-500'>
              Favorite destinations based on customer reviews
            </p>
          </div>

          <div className={cn('filters hidden gap-3 md:flex')}>
            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Categories</span>
              <ChevronDown width={20} />
            </div>

            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Duration</span>
              <ChevronDown width={20} />
            </div>

            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Review / Rating</span>
              <ChevronDown width={20} />
            </div>

            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Price range</span>
              <ChevronDown width={20} />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {popularDestinations.map((destination) => (
            <div
              key={destination.id}
              className='grid grid-rows-2 overflow-hidden rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md'
            >
              <img
                src={destination.travelPictureUrl!}
                alt={destination.name}
                className='max-h-48 w-full rounded-3xl object-cover'
              />
              <div className='mt-4 grid grid-cols-[3fr_1fr]'>
                <div className='grid grid-cols-1 grid-rows-2'>
                  <h3 className='text-xl font-semibold'>{destination.name}</h3>
                  <div className='flex items-end justify-between'>
                    <span className='text-sm text-gray-500'>
                      {destination.popularity} Tours, {destination.reviewCount}{' '}
                      Activities
                    </span>
                  </div>
                </div>
                <div className='flex items-end justify-end'>
                  <ArrowRight className='size-8 rounded-full bg-black/10 p-1' />
                </div>
              </div>
            </div>
          ))}

          <div className='crafting-card flex flex-col justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-6 shadow-sm'>
            <h3 className='mb-2 text-2xl font-semibold'>
              Crafting Your Perfect Travel Experience
            </h3>
            <div className='mt-6'>
              <button className='browse-btn flex items-center justify-between gap-4 rounded-full bg-black px-6 py-3 text-white'>
                <span>Browse All destinations</span>
                <ArrowRightCircle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Recommendation({
  recommendation
}: {
  recommendation: travelDestination<{
    reviews: reviews[];
    categories: string[];
    travelTickets: travelTicket<{}>[];
  }>[];
}) {
  return (
    <section className='py-12'>
      <div className='container mx-auto px-4'>
        <div className='mb-6 flex items-end justify-between'>
          <div>
            <h2 className='mb-2 text-4xl font-bold'>
              Based On Your Recent Destination
            </h2>
            <p className='text-gray-500'>
              destinations based on your recent destination
            </p>
          </div>

          <div className={cn('hidden gap-3 md:flex')}>
            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Categories</span>
              <ChevronDown width={20} />
            </div>

            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Duration</span>
              <ChevronDown width={20} />
            </div>

            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Review / Rating</span>
              <ChevronDown width={20} />
            </div>

            <div className='flex cursor-pointer items-center rounded-full bg-gray-100 px-4 py-2'>
              <span>Price range</span>
              <ChevronDown width={20} />
            </div>
          </div>
        </div>

        {recommendation.length === 0 ? (
          <div className='flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50'>
            <p className='mb-2 text-lg font-medium text-gray-600'>
              No recommendations yet
            </p>
            <p className='text-gray-500'>
              Explore more destinations to get personalized recommendations
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {recommendation.map((destination, index) => (
              <div
                key={index}
                className='grid grid-rows-2 overflow-hidden rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md'
              >
                <img
                  src={
                    destination.travelPictureUrl ??
                    '/assets/destination_placeholder.jpg?height=800&width=1200'
                  }
                  alt={destination.name}
                  className='max-h-48 w-full rounded-3xl object-cover'
                />

                <div className='mt-4 grid grid-cols-[3fr_1fr]'>
                  <div className='grid grid-cols-1 grid-rows-2'>
                    <h3 className='text-xl font-semibold'>
                      {destination.name}
                    </h3>

                    <div className='flex items-end justify-between'>
                      <span className='text-sm text-gray-500'>
                        {destination.travelTickets?.length || 0} Tours,{' '}
                        {destination.reviews?.length || 0} Activities
                      </span>
                    </div>
                  </div>
                  <div className='flex items-end justify-end'>
                    <ArrowRight className='size-8 rounded-full bg-black/10 p-1' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TopHotel({ hotel }: { hotel: dashboardData['topRatedHotels'] }) {
  return (
    <section className='top-rated-hotels bg-pink-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='section-header mb-6 flex items-end justify-between'>
          <div>
            <h2 className='mb-2 text-4xl font-bold'>Top Rated Hotels</h2>
            <p className='text-gray-500'>
              Quality as judged by customers. Book at the ideal price!
            </p>
          </div>

          <button className='view-more-btn flex items-center rounded-full bg-black px-4 py-2 text-white'>
            <span className='mr-2'>View More</span>
            <ArrowRight width={20} />
          </button>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {hotel.map((hotel) => (
            <div
              key={hotel.id}
              className='hotel-card overflow-hidden rounded-lg bg-white shadow-sm'
            >
              <div className='hotel-image relative'>
                <img
                  src={hotel.lodgingPictureUrl!}
                  alt={hotel.name}
                  className='h-48 w-full object-cover'
                />
                <button className='absolute top-3 right-3 rounded-full bg-white p-2 shadow-md'>
                  <Heart />
                </button>
                <div className='absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 shadow-md'>
                  <Star width={15} className='stroke-yellow-500' />
                  <span className='text-sm font-medium'>
                    {hotel.avgRating} ({hotel.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='mb-2 text-xl font-semibold'>{hotel.name}</h3>
                <div className='mb-4 flex items-center text-gray-500'>
                  <MapPin width={15} />
                  <span className='text-sm'>{hotel.address}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='price'>
                    <span className='text-xl font-bold'>
                      ${hotel.pricePerNight}
                    </span>
                    <span className='text-sm text-gray-500'> / night</span>
                  </div>
                  <Link to={`/hotels/${hotel.id}`}>
                    <Button className='book-now-btn text-foreground rounded-md bg-gray-100 px-4 py-2 transition hover:bg-gray-200'>
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
