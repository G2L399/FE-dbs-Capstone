import { BaseSyntheticEvent, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type Destination } from '../destination-card';
import { cn } from '@/lib/utils';
import { destinationPay } from '@/api/destination';

export default function Page({ destination }: { destination: Destination }) {
  const [formData, setFormData] = useState({
    amount: destination.price,
    bank: 'OTHER',
    vaNumber: null,
    paymentType: 'virtual_account',
    guestAmount: 0,
    visitDate: new Date().toISOString()
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;
    if (name == 'guestAmount') {
      if (Number(value) < 1) {
        alert('Guest amount must be at least 1');
        return;
      }
    }
    console.log(name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  // const handleChangeDate = (e) => {
  //   let date = new Date(e);
  //   let Year = date.getFullYear();
  //   let Month = String(date.getMonth() + 1).padStart(2, '0');
  //   let Day = String(date.getDate()).padStart(2, '0');
  //   let Hours = String(date.getHours()).padStart(2, '0');
  //   let Minutes = String(date.getMinutes()).padStart(2, '0');

  //   // Step 3: Format the output as YYYY-MM-DDTHH:mm
  //   let formattedDate = `${Year}-${Month}-${Day}T${Hours}:${Minutes}`;
  //   console.log(formattedDate); // Output: 2025-04-16T11:00
  //   setFormData((prev) => ({
  //     ...prev,
  //     visitDate: formattedDate
  //   }));
  // };

  const handlePay = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (formData.guestAmount < 1) {
      alert('Guest amount must be at least 1');
      return;
    }
    const data = {
      ...formData,
      travelDestinationId: destination.id
    };
    const result = await destinationPay(data);
    console.log(result);
    if (result.success) {
      alert(result.message);
      window.location.href = '/home';
    } else {
      alert(result.message);
    }
  };

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
        <div className='grid h-[700px] grid-rows-[1fr_auto]'>
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
          <Card className='p-6 shadow-sm'>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Guest Amount
                </label>
                <input
                  type='number'
                  name='guestAmount'
                  value={formData.guestAmount}
                  onChange={handleChange}
                  min={1}
                  required
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <div className='[&>div]:w-full'>
                <label className='block text-sm font-medium text-gray-700'>
                  Visit Date
                </label>
                {/* <DatePicker
                  name='visitDate'
                  selected={new Date(formData.visitDate)}
                  onChange={handleChangeDate}
                  minDate={new Date()}
                  dateFormat='dd MMMM yyyy h:mm aa'
                  showTimeSelect // Enable time selection in the DatePicker
                  timeFormat='h:mm aa'
                  timeIntervals={1}
                  locale={id}
                  className='focus:ring-2 focus:ring-teal-300 focus:outline-none w-full p-3 text-gray-700 border rounded-md'
                  placeholderText='Check In'
                /> */}
                <input
                  type='datetime-local'
                  name='visitDate'
                  value={formData.visitDate}
                  onChange={handleChange}
                  required
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
              <Button
                type='submit'
                onClick={handlePay}
                className='text-foreground bg-background border-2 hover:bg-current/10'
              >
                Pay Now
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
