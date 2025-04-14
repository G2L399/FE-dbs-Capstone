'use client';

import type React from 'react';

import { useState, useEffect } from 'react';
import { DestinationCard, type Destination } from './destination-card';
import { getdestinations, getIndonesianCities } from '@/api/destination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(9);
  const [total, setTotal] = useState<number>(0);

  // Filter state
  const [search, setSearch] = useState<string>('');
  const [searchInput, setSearchInput] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [cities, setCities] = useState<string[]>([]);

  // Calculate total pages
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    // Fetch available Indonesian cities for the filter
    const fetchCities = async () => {
      try {
        const citiesList = await getIndonesianCities();
        setCities(citiesList);
      } catch (err) {
        console.error('Error fetching cities:', err);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDestinations = async () => {
      setLoading(true);
      try {
        const data = await getdestinations(page, limit, search, city);
        setDestinations(data.destinations || []);
        setTotal(data.total);
      } catch (err) {
        console.error('Error fetching destinations:', err);
        setError('Failed to load destinations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [page, limit, search, city]);

  // For demo purposes, let's create some badge variations
  const badgeVariants = [
    { text: 'Top Rated', variant: 'top' as const },
    { text: 'Best Sale', variant: 'sale' as const },
    { text: '25% Off', variant: 'discount' as const }
  ];

  // For demo purposes, let's create some duration variations
  const durationVariants = [
    { days: 2, nights: 3 },
    { days: 3, nights: 3 },
    { days: 7, nights: 6 }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1); // Reset to first page when searching
  };

  const handleCityChange = (value: string) => {
    setCity(value === 'all' ? '' : value);
    setPage(1); // Reset to first page when changing city
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  if (loading && page === 1) {
    return (
      <div className='mx-auto max-w-7xl p-6'>
        <div className='flex h-64 items-center justify-center'>
          <div className='border-primary h-12 w-12 animate-spin rounded-full border-t-2 border-b-2'></div>
        </div>
      </div>
    );
  }

  if (error && destinations.length === 0) {
    return (
      <div className='mx-auto max-w-7xl p-6'>
        <div className='rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700'>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-7xl p-6'>
      {/* Header */}
      <div className='mb-8'>
        <h1 className='mb-2 text-3xl font-bold'>Explore Indonesia</h1>
        <p className='text-gray-500'>
          Discover the best destinations across the Indonesian archipelago
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className='mb-8 flex flex-col gap-4 md:flex-row'>
        <form onSubmit={handleSearch} className='flex flex-1 gap-2'>
          <div className='relative flex-1'>
            <Input
              type='text'
              placeholder='Search destinations in Indonesia...'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className='pl-10'
            />
            <Search className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400' />
          </div>
          <Button type='submit'>Search</Button>
        </form>

        <div className='w-full md:w-64'>
          <Select value={city} onValueChange={handleCityChange}>
            <SelectTrigger>
              <SelectValue placeholder='Filter by city' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Cities</SelectItem>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Destinations Grid */}
      <section className='mb-8'>
        <h2 className='mb-6 text-2xl font-bold'>
          {search || city
            ? 'Search Results'
            : 'Popular Indonesian Destinations'}
        </h2>

        {destinations.length === 0 ? (
          <div className='rounded-lg bg-gray-100 p-8 text-center'>
            <p className='text-gray-600'>
              No destinations found. Try adjusting your search criteria.
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                badge={badgeVariants[index % badgeVariants.length]}
                duration={durationVariants[index % durationVariants.length]}
                guestRange='4-6 guest'
              />
            ))}
          </div>
        )}
      </section>

      {/* Pagination Controls */}
      {totalPages > 0 && (
        <div className='mt-8 flex items-center justify-between border-t pt-4'>
          <div className='text-sm text-gray-500'>
            Showing {Math.min((page - 1) * limit + 1, total)} to{' '}
            {Math.min(page * limit, total)} of {total} destinations
          </div>

          <div className='flex gap-2'>
            <Button
              variant='outline'
              size='sm'
              onClick={handlePreviousPage}
              disabled={page === 1}
              className='flex items-center gap-1'
            >
              <ChevronLeft className='h-4 w-4' />
              Previous
            </Button>

            <div className='flex items-center gap-1'>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Show pages around current page
                let pageNum = page;
                if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }

                // Ensure page numbers are within range
                if (pageNum <= 0 || pageNum > totalPages) return null;

                return (
                  <Button
                    key={pageNum}
                    variant={page === pageNum ? 'default' : 'outline'}
                    size='sm'
                    onClick={() => setPage(pageNum)}
                    className='h-8 w-8 p-0'
                  >
                    {pageNum}
                  </Button>
                );
              })}

              {totalPages > 5 && page < totalPages - 2 && (
                <>
                  <span className='mx-1'>...</span>
                  <Button
                    variant='outline'
                    size='sm'
                    onClick={() => setPage(totalPages)}
                    className='h-8 w-8 p-0'
                  >
                    {totalPages}
                  </Button>
                </>
              )}
            </div>

            <Button
              variant='outline'
              size='sm'
              onClick={handleNextPage}
              disabled={page === totalPages}
              className='flex items-center gap-1'
            >
              Next
              <ChevronRight className='h-4 w-4' />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinationsPage;
