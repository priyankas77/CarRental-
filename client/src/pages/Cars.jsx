import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import CarCard from '../components/CarCard';
import { assets } from '../assets/assets';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { toast } from 'react-hot-toast';

const Cars = () => {
  const [searchParams] = useSearchParams();
  const pickupLocation = searchParams.get('pickupLocation');
  const pickupDate = searchParams.get('pickupDate');
  const returnDate = searchParams.get('returnDate');

  const { cars, axios } = useAppContext();
  const [input, setInput] = useState('');
  const isSearchData = pickupLocation && pickupDate && returnDate;

  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const applyFilter = () => {
    if (input.trim() === '') {
      setFilteredCars(cars);
    } else {
      const filtered = cars.filter((car) =>
        car.model?.toLowerCase().includes(input.toLowerCase()) ||
        car.features?.some((feature) =>
          feature.toLowerCase().includes(input.toLowerCase())
        )
      );
      setFilteredCars(filtered);
    }
  };

  const searchCarAvailability = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/bookings/check-availability', {
        location: pickupLocation,
        pickupDate,
        returnDate,
      });
      if (data.success) {
        setFilteredCars(data.availableCars);
        if (data.availableCars.length === 0) {
          toast('No cars Available');
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching available cars.');
    } finally {
      setLoading(false);
    }
  };

  // Run search API if search params exist
  useEffect(() => {
    if (isSearchData) {
      searchCarAvailability();
    }
  }, [pickupLocation, pickupDate, returnDate]);

  // Initialize with all cars if no search data
  useEffect(() => {
    if (!isSearchData && cars.length > 0) {
      setFilteredCars(cars);
    }
  }, [cars, isSearchData]);

  // Apply filtering when input changes
  useEffect(() => {
    if (!isSearchData) {
      applyFilter();
    }
  }, [input, cars, isSearchData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light px-4">
      <Title
        title="Available Cars"
        subtitle="Browse our selection of premium vehicles available for your next adventure"
      />

      <div className="flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-4.5 h-4.5 mr-2"
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search by model or features."
          className="w-full h-full outline-none text-gray-500"
        />
        <img
          src={assets.filter_icon}
          alt="Filter"
          className="w-4.5 h-4.5 ml-2"
        />
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10 w-full">
        {loading ? (
          <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
            Loading cars...
          </p>
        ) : (
          <>
            <p className="text-gray-500 xl:px-20 max-w-7xl mx-auto">
              Showing {filteredCars.length} Cars
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto">
              {filteredCars.map((car, index) => (
                <div key={index}>
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cars;

