import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const MyBookings = () => {
  const { axios, user, currency } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const fetchMyBookings = async () => {
    try {
      const { data } = await axios.get('/api/bookings/user');
      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) fetchMyBookings();
  }, [user]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl mx-auto">
      <Title
        title="My Bookings"
        subtitle="View and manage all your car bookings"
        align="left"
      />

      <div>
        {bookings.length === 0 && (
          <p className="text-gray-500 mt-10">No bookings found.</p>
        )}

        {bookings.map((booking, index) => (
          <div
            key={booking._id || index}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12 bg-white shadow-sm"
          >
            {/* Car Info */}
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.car?.image || assets.defaultCar}
                  alt={`${booking.car?.brand} ${booking.car?.model}`}
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <p className="text-lg font-medium mt-2 capitalize">
                {booking.car?.brand} {booking.car?.model}
              </p>
              <p className="text-gray-500 text-sm">
                {booking.car?.year} · {booking.car?.category} ·{' '}
                {booking.car?.location}
              </p>
            </div>

            {/* Booking Info */}
            <div className="md:col-span-2 flex flex-col justify-center gap-2">
              <p className="px-3 py-1.5 bg-light rounded font-medium text-gray-700">
                Booking #{index + 1}
              </p>

              <p className="text-gray-500">
                <strong>Date Range:</strong>{' '}
                {booking.pickupDate?.split('T')[0]} -{' '}
                {booking.returnDate?.split('T')[0]}
              </p>

              <p className="text-gray-500">
                <strong>Payment:</strong> Offline
              </p>

              <p className="text-gray-500">
                <strong>Total Price:</strong> {currency} {booking.price}
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center justify-center md:justify-end">
              <p
                className={`px-4 py-2 text-sm rounded-full font-semibold capitalize ${
                  booking.status === 'confirmed'
                    ? 'bg-green-400/20 text-green-600'
                    : booking.status === 'pending'
                    ? 'bg-yellow-400/20 text-yellow-600'
                    : 'bg-red-400/20 text-red-600'
                }`}
              >
                {booking.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
