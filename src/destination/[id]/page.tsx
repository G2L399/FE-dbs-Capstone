import { Link, useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
export default function page() {
  const { id } = useParams();
  return (
    <div className='container mx-auto px-4 py-8 md:py-12'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <div className='relative aspect-[4/3] w-full overflow-hidden rounded-lg'>
            <img
              src='/assets/destination_placeholder.jpg?height=800&width=1200'
              alt='Azure Haven Resort overwater bungalows'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col justify-between lg:col-span-1'>
          <div className='mb-8'>
            <h1 className='mb-2 text-3xl font-bold text-gray-900'>
              Azure Haven Resort
            </h1>
            <div className='mb-4 flex items-center gap-2 text-sm text-gray-600'>
              <span>Bora Bora, French Polynesia</span>
              <div className='flex items-center'>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className='h-4 w-4 fill-amber-400 text-amber-400'
                    />
                  ))}
                </div>
                <span className='ml-1'>5</span>
              </div>
            </div>

            <p className='mb-4 text-gray-700'>
              Our spacious ocean-view suites are thoughtfully designed with
              floor-to-ceiling windows, private terraces, and premium amenities
              to ensure unparalleled comfort. Unwind in our stunning infinity
              pool that blends seamlessly with the horizon, or indulge in the
              exclusivity of our private beach, where serenity and breathtaking
              views come standard.
            </p>
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
