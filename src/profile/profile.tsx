import { useState, useEffect } from 'react';

import { travelDestination, travelTicket } from '@/types/destination';
import { Button } from '@/components/ui/button';
import { deleteCookie } from '@/lib/cookie';

interface UserProfile {
  travelTypes: string[];
  budget: number;
  preferences: {
    accommodation: string;
    activities: string[];
    transportation: string;
  };
}

const defaultProfile: UserProfile = {
  travelTypes: ['adventure', 'cultural'],
  budget: 2000,
  preferences: {
    accommodation: 'hotel',
    activities: ['sightseeing', 'local cuisine'],
    transportation: 'public'
  }
};

function ProfilePage({
  history
}: {
  history: travelTicket<{ travelDestination: travelDestination<{}> }>[];
}) {
  console.log(history);

  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  return (
    <div className='mx-auto max-w-4xl p-6'>
      <div className='space-y-6'>
        <div className='rounded-xl'>
          <div className='flex items-center justify-between'>
            <h2 className='mb-4 text-xl font-semibold'>Travel History</h2>
            <Button
              onClick={() => {
                deleteCookie({ name: 'token' });
                window.location.href = '/';
              }}
              className='text-foreground mb-4 flex justify-center border-2 border-black text-xl font-semibold hover:bg-current/10'
            >
              Sign Out
            </Button>
          </div>
          <div className='space-y-4'>
            {history.map((destination, index) => (
              <div
                key={index}
                className='flex items-center rounded-lg bg-black/5 p-3 outline-2 outline-black/50'
              >
                <div className='flex-1'>
                  <h3 className='font-medium'>
                    {destination.travelDestination.name}
                  </h3>
                  <p className='text-sm'>
                    {new Date(destination.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
