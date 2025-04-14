'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export interface Destination {
  id: number;
  name: string;
  description: string;
  travelPictureUrl: string;
  price: number;
  address: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
  openingHours: string;
  avgRating: number;
  reviewCount: number;
  categories: string[];
}

interface DestinationCardProps {
  destination: Destination;
  badge?: {
    text: string;
    variant: 'default' | 'top' | 'sale' | 'discount';
  };
  duration?: {
    days: number;
    nights: number;
  };
  guestRange?: string;
}

export function DestinationCard({
  destination,
  badge,
  duration = { days: 2, nights: 3 },
  guestRange = '4-6 guest'
}: DestinationCardProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    // Check if this destination is saved in localStorage
    const savedDestinations = JSON.parse(
      localStorage.getItem('savedDestinations') || '[]'
    );
    setIsSaved(savedDestinations.includes(destination.id));
  }, [destination.id]);

  const handleSaveDestination = () => {
    const savedDestinations = JSON.parse(
      localStorage.getItem('savedDestinations') || '[]'
    );

    if (isSaved) {
      const newSaved = savedDestinations.filter(
        (id: number) => id !== destination.id
      );
      localStorage.setItem('savedDestinations', JSON.stringify(newSaved));
    } else {
      savedDestinations.push(destination.id);
      localStorage.setItem(
        'savedDestinations',
        JSON.stringify(savedDestinations)
      );
    }

    setIsSaved(!isSaved);

    // Track analytics
    console.log(
      `Destination ${destination.id} ${!isSaved ? 'saved' : 'unsaved'}`
    );
  };

  const getBadgeStyles = (variant: string) => {
    switch (variant) {
      case 'top':
        return 'bg-amber-500 hover:bg-amber-600';
      case 'sale':
        return 'bg-green-500 hover:bg-green-600';
      case 'discount':
        return 'bg-orange-500 hover:bg-orange-600';
      default:
        return 'bg-primary hover:bg-primary/90';
    }
  };

  // Format price to IDR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className='overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg'>
      <div className='relative'>
        <img
          src={
            destination.travelPictureUrl ||
            `/placeholder.svg?height=200&width=400`
          }
          alt={destination.name}
          className='h-48 w-full object-cover'
        />

        {badge && (
          <Badge
            className={cn(
              'absolute top-3 left-3 font-medium',
              getBadgeStyles(badge.variant)
            )}
          >
            {badge.text}
          </Badge>
        )}

        <Button
          variant='ghost'
          size='icon'
          className={cn(
            'absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white',
            isSaved ? 'text-red-500' : 'text-gray-500'
          )}
          onClick={handleSaveDestination}
        >
          <Heart className={cn('h-5 w-5', isSaved && 'fill-current')} />
        </Button>
      </div>

      <div className='p-4'>
        <div className='mb-2 flex items-center'>
          <span className='mr-1 text-yellow-400'>★</span>
          <span className='font-medium'>
            {destination.avgRating.toFixed(1)}
          </span>
          <span className='ml-1 text-sm text-gray-500'>
            ({destination.reviewCount} reviews)
          </span>
        </div>

        <h3 className='mb-1 line-clamp-1 text-lg font-bold'>
          {destination.name}
        </h3>

        <div className='mb-2 text-sm text-gray-500'>
          {destination.city}, Indonesia
        </div>

        <div className='mb-3 flex items-center gap-4 text-sm text-gray-500'>
          <div className='flex items-center'>
            <span>
              {duration.days} days {duration.nights} nights
            </span>
          </div>
          <div className='flex items-center'>
            <span>{guestRange}</span>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <div>
            <span className='text-xl font-bold'>
              {formatPrice(destination.price)}
            </span>
            <span className='text-sm text-gray-500'> / person</span>
          </div>
          <Link to={`/destination/${destination.id}`}>
            <Button variant='outline' className='rounded-full px-4'>
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
