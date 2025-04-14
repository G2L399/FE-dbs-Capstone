'use client';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import { dashboard } from '@/api/dashboard';
import { getPlaceRecommendation } from '@/api/recommendation';

export default function page() {
  const [data, setData] = useState();
  const [recommendation, setRecommendation] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await dashboard();
      setData(result);
      const recommendationResult = await getPlaceRecommendation('10');
      console.log(recommendationResult.data.predictions);

      setRecommendation(recommendationResult.data.predictions);
    };
    fetchData();
  }, []);

  console.log(recommendation);
  return data && recommendation ? (
    <HomePage data={data} recommendation={recommendation}></HomePage>
  ) : (
    'loading'
  );
}
