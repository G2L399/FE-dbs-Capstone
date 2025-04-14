import { useState, useEffect } from 'react';
import { Button } from '@shadcn/button';
import { cn } from '../lib/utils';

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

function ProfilePage() {
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
      <h1 className='mb-6 text-2xl font-bold'>Profile Settings</h1>

      <div className='space-y-6'>
        <div className='rounded-xl bg-purple-800/30 p-6'>
          <h2 className='mb-4 text-xl font-semibold'>Travel Preferences</h2>

          <div className='space-y-4'>
            <div>
              <label className='mb-2 block text-sm font-medium'>
                Budget Range
              </label>
              <input
                type='range'
                min='500'
                max='10000'
                step='100'
                value={profile.budget}
                onChange={handleBudgetChange}
                className='w-full'
              />
              <div className='text-right text-sm text-gray-300'>
                ${profile.budget}
              </div>
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium'>
                Preferred Accommodation
              </label>
              <select
                value={profile.preferences.accommodation}
                onChange={(e) =>
                  setProfile((prev) => ({
                    ...prev,
                    preferences: {
                      ...prev.preferences,
                      accommodation: e.target.value
                    }
                  }))
                }
                className='w-full rounded-lg border border-purple-700 bg-purple-800/30 p-2'
              >
                <option value='hotel'>Hotel</option>
                <option value='hostel'>Hostel</option>
                <option value='apartment'>Apartment</option>
                <option value='resort'>Resort</option>
              </select>
            </div>
          </div>
        </div>

        <div className='rounded-xlp-6'>
          <h2 className='mb-4 text-xl font-semibold'>Travel History</h2>
          <div className='space-y-4'>
            <div className='flex items-center rounded-lg bg-purple-700/30 p-3'>
              <div className='flex-1'>
                <h3 className='font-medium'>Paris, France</h3>
                <p className='text-sm'>December 2023</p>
              </div>
            </div>
            <div className='flex items-center rounded-lg bg-purple-700/30 p-3'>
              <div className='flex-1'>
                <h3 className='font-medium'>Tokyo, Japan</h3>
                <p className='text-sm'>October 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className={cn(
              'bg-gradient-to-r from-pink-600 to-purple-600',
              'hover:from-pink-700 hover:to-purple-700',
              'rounded-lg px-6 py-2 transition-all'
            )}
          >
            {isSaving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {showToast && (
        <div className='fixed right-4 bottom-4 rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg'>
          Profile saved successfully!
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
