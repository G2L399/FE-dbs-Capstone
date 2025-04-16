import { tickets } from '@/api/profile';

function ProfilePage({
  lodgingTickets,
  transportationTickets,
  travelTickets
}: {
  lodgingTickets: tickets['lodgingTickets'];
  transportationTickets: tickets['transportationTickets'];
  travelTickets: tickets['travelTickets'];
}) {
  console.log(travelTickets);
  console.log(lodgingTickets);
  console.log(transportationTickets);

  return (
    <div className='mx-auto max-w-4xl p-6'>
      <div className='space-y-6'>
        <div className='grid gap-4 rounded-xl'>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Travel Tickets</h2>
            <div className='space-y-4'>
              {travelTickets.map((travel) => (
                <div
                  key={travel.travelDestinationId}
                  className='flex items-center rounded-lg bg-black/5 p-3 outline-2 outline-black/50'
                >
                  <div className='flex-1'>
                    <h3 className='font-medium'>
                      {travel.travelDestination.name}
                    </h3>
                    <p className='text-sm'>
                      {new Date(travel.createdAt).toLocaleString()}
                    </p>
                    <p className='text-sm'>{travel.guestAmount} guests</p>
                    <p className='text-sm'>${travel.totalPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>Lodging Tickets</h2>
            <div className='space-y-4'>
              {lodgingTickets.map((lodging) => (
                <div
                  key={lodging.lodgingId}
                  className='flex items-center rounded-lg bg-black/5 p-3 outline-2 outline-black/50'
                >
                  <div className='flex-1'>
                    <h3 className='font-medium'>{lodging.lodging.name}</h3>
                    <p className='text-sm'>
                      Order Date: {new Date(lodging.createdAt).toLocaleString()}
                    </p>
                    <p>
                      {new Date(lodging.checkInDate).toLocaleDateString()} -{' '}
                      {new Date(lodging.checkOutDate).toLocaleDateString()}
                    </p>
                    <p className='text-sm'>${lodging.totalPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className='mb-4 text-xl font-semibold'>
              Transportation Tickets
            </h2>
            <div className='space-y-4'>
              {transportationTickets.map((transport) => (
                <div
                  key={transport.transportationId}
                  className='flex items-center rounded-lg bg-black/5 p-3 outline-2 outline-black/50'
                >
                  <div className='flex-1'>
                    <h3 className='font-medium'>
                      {transport.transportation.name} to{' '}
                      {transport.transportation.destination}
                    </h3>
                    <p className='text-sm'>
                      {new Date(transport.createdAt).toLocaleString()}
                    </p>
                    <p className='text-sm'>${transport.totalPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
