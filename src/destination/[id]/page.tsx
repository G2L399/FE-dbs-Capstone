'use client';
import React, { useEffect, useState } from 'react';
import DestinationsPage from './destination';
import { getdestinationbyid } from '@/api/destination';
import { useParams } from 'react-router-dom';
import { type Destination } from '../destination-card';

function page() {
  const { id } = useParams();
  const [data, setData] = useState<Destination>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getdestinationbyid(id!);
      setData(result.destination);
    };
    fetchData();
  }, []);
  return data ? <DestinationsPage destination={data} /> : 'loading...';
}

export default page;
