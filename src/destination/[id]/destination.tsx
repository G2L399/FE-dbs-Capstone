import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type Destination } from '../destination-card';
import { cn } from '@/lib/utils';
export default function page({ destination }: { destination: Destination }) {
  console.log(destination);

  return (
    <div className='container mx-auto px-4 py-8 md:py-12'>
      <div className='grid h-[700px] grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]'>
        <div>
          <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg'>
            <img
              src={destination.travelPictureUrl!}
              alt={destination.name}
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        </div>
        <div className='grid h-[700px] grid-rows-[1fr_1fr]'>
          <div className='mb-8 overflow-auto'>
            <h1 className='mb-2 text-3xl font-bold text-gray-900'>
              {destination.name}
            </h1>
            <div className='mb-4 flex items-center gap-2 text-sm text-gray-600'>
              <span>
                {destination.city}, {destination.country}
              </span>
              <div className='flex items-center'>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < Math.floor(destination.avgRating) &&
                          'fill-amber-400 text-amber-400'
                      )}
                    />
                  ))}
                </div>
                <span className='ml-1'>{destination.avgRating}</span>
              </div>
            </div>
            <p className='mb-4 text-gray-700'>{destination.description}</p>
          </div>
          <Card className='flex flex-col justify-between gap-4 p-6 shadow-sm'>
            <h2 className='text-lg font-semibold'>Plan Saat Ini</h2>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Travel</h3>
              <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold'>Angkot</span>
              </div>
            </div>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Penginapan</h3>
              <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold'>Rumah Bordil</span>
              </div>
            </div>
            <div>
              <h3 className='mb-2 text-sm font-medium'>Destinasi</h3>
              <div className='flex items-center justify-between'>
                <span className='text-2xl font-bold'>Raja Ampat</span>
              </div>
            </div>
            <Link to={`/destination`}>
              <Button className='mt-4 w-full bg-gray-900 hover:bg-gray-800'>
                Change Destination
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
