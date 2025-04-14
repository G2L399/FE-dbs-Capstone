'use client';
import { useState, useEffect } from 'react';
import Hotels from './hotels';
import { topHotels, bestDeal as best } from '@/api/hotels';

export default function page() {
  const [toprate, settoprate] = useState<{
    topRatedHotels: {
      id: number;
      name: string;
      description: string;
      lodgingPictureUrl: string;
      pricePerNight: number;
      address: string;
      city: string;
      country: string;
      propertyType: string;
      avgRating: number;
      reviewCount: number;
    }[];
  }>();
  const [bestdeal, setbestdeal] = useState<{
    bestDeal: {
      address: string;
      city: string;
      country: string;
      createdAt: string;
      description: string;
      id: number;
      latitude: number;
      lodgingPictureUrl: string;
      longitude: number;
      name: string;
      pricePerNight: number;
      propertyType: string;
      updatedAt: string;
    }[];
  }>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await topHotels();
      const bestDeal = await best();
      settoprate(() => {
        return result;
      });
      setbestdeal(bestDeal);
    };
    fetchData();
  }, []);

  return toprate && bestdeal ? (
    <Hotels
      topRatedHotels={toprate.topRatedHotels}
      bestDeal={bestdeal.bestDeal}
    />
  ) : (
    'loading'
  );
}
