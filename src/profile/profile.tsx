import { useState, useEffect } from 'react';
import { Button } from '@shadcn/button';
import { cn } from '../lib/utils';
import { travelDestination, travelTicket } from '@/types/destination';

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
  history: travelTicket<{ travelDestination: travelDestination }>[];
}) {
  console.log(history);

  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 500);
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({
      ...prev,
      budget: parseInt(e.target.value)
    }));
  };

  return (
    <div className='mx-auto max-w-4xl p-6'>
      <div className='space-y-6'>
        <div className='rounded-xlp-6'>
          <h2 className='mb-4 text-xl font-semibold'>Travel History</h2>
          <div className='space-y-4'>
            {history.map((destination, index) => (
              <div
                key={index}
                className='flex items-center rounded-lg bg-purple-700/30 p-3'
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
