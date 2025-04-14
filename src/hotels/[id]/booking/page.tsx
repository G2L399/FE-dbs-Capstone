'use client';
import { useState, useEffect } from 'react';
import Hotels from './hotels';
import { booking } from '@/api/hotels';
import { useParams } from 'react-router-dom';
import { reviews } from '@/types/review';
import { Room } from '@/types/room';

export default function page() {
  const [Hotel, setHotel] = useState<{
    Hotel: {
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
      reviews: reviews[];
    } & { Rooms: Room[] };
  }>();
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const hotel = await booking(Number(params.id));
      setHotel(hotel);
    };
    fetchData();
  }, []);

  return Hotel ? <Hotels hotel={Hotel.Hotel} /> : 'loading';
}
