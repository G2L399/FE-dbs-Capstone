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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch dashboard data (this should always work)
        const result = await dashboard();
        setData(result);

        // Try to get personalized recommendations based on history
        try {
          const history = await getHistory(1);

          // Check if user has history before trying to access it
          if (history.data.history && history.data.history.length > 0) {
            const recommendationResult = await getPlaceRecommendation(
              history.data.history[0].id
            );

            const recommendations = await Promise.all(
              recommendationResult.data.predictions.map(
                async (place: any) =>
                  (await getdestinationbyid(place.place_id)).destination
              )
            );

            if (recommendations && recommendations.length > 0) {
              setRecommendation(recommendations);
            } else {
              // Fallback to popular destinations if no recommendations
              setRecommendation(result.popularDestinations?.slice(0, 4) || []);
            }
          } else {
            // No history - use popular destinations instead
            console.log('No user history found, showing popular destinations');
            setRecommendation(result.popularDestinations?.slice(0, 4) || []);
          }
        } catch (error) {
          // If anything fails in the recommendation process, fall back to popular destinations
          console.error('Error getting recommendations:', error);
          setRecommendation(result.popularDestinations?.slice(0, 4) || []);
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Always render the HomePage component, even if recommendations are empty
  return isLoading ? (
    <div className='flex h-screen items-center justify-center'>
      <div className='border-primary h-12 w-12 animate-spin rounded-full border-4 border-t-transparent'></div>
    </div>
  ) : (
    <HomePage data={data} recommendation={recommendation} />
  );
}
