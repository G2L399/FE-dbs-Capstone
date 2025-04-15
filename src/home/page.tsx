'use client';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import { dashboard } from '@/api/dashboard';
import { getPlaceRecommendation } from '@/api/recommendation';
import { getdestinationbyid } from '@/api/destination';
import { getHistory } from '@/api/profile';

export default function page() {
  const [data, setData] = useState();
  const [recommendation, setRecommendation] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await dashboard();
      setData(result);
      const history = await getHistory(1);
      const recommendationResult = await getPlaceRecommendation(
        history.data.history[0].id
      );
      recommendationResult.data.predictions.map(async (place: any) => {
        const result = await getdestinationbyid(place.place_id);
        setRecommendation((prev) => [...prev, result.destination]);
      });
    };
    fetchData();
  }, []);

  console.log(recommendation);
  return data && recommendation.length > 0 ? (
    <HomePage data={data} recommendation={recommendation} />
  ) : (
    'loading'
  );
}
