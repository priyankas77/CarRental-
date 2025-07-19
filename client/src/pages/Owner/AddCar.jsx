import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddCar = () => {

  const {axios,currency} =useAppContext()

  const [image, setImage] = useState(null)
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: '',
  })
  const[isLoading,setIsLoading]=useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log(car)
    console.log(image)
    alert('Car submitted!')
    if(isLoading) return null

    setIsLoading(true)
    try {
       const formData=new FormData()
       formData.append('image',image)
       formData.append('carData',JSON.stringify(car))


       const {data}= await axios.post('/api/owner/add-car',formData)

       if(data.success){
        toast.success(data.message)
        setImage(null)
        setCar({
           brand: '',
           model: '',
            year: 0,
            pricePerDay: 0,
            category: '',
            transmission: '',
            fuel_type: '',
            seating_capacity: 0,
            location: '',
            description: '',
        })
       }
       else{
        toast.error(data.message)
       }
    } catch (error) {
      toast.error(error.message)
      
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title
        title="Add New Car"
        subtitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
      />

      <form
        onSubmit={onSubmitHandler}
        className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'
      >
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className='h-14 rounded cursor-pointer'
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={e => setImage(e.target.files[0])}
            />
          </label>
          <p className='text-sm text-gray-500'>
            Upload a picture of your car
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label>Brand</label>
            <input
              type="text"
              placeholder="e.g BMW, Mercedes, Audi..."
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.brand}
              onChange={e => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Model</label>
            <input
              type="text"
              placeholder="e.g X5, E-Class, M4..."
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.model}
              onChange={e => setCar({ ...car, model: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Year</label>
            <input
              type="number"
              placeholder="e.g 2022"
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.year}
              onChange={e => setCar({ ...car, year: parseInt(e.target.value) })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Price Per Day</label>
            <input
              type="number"
              placeholder="e.g 150"
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.pricePerDay}
              onChange={e => setCar({ ...car, pricePerDay: parseFloat(e.target.value) })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Category</label>
            <input
              type="text"
              placeholder="e.g SUV, Sedan..."
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.category}
              onChange={e => setCar({ ...car, category: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Transmission</label>
            <input
              type="text"
              placeholder="e.g Automatic, Manual..."
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.transmission}
              onChange={e => setCar({ ...car, transmission: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Fuel Type</label>
            <input
              type="text"
              placeholder="e.g Petrol, Diesel..."
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.fuel_type}
              onChange={e => setCar({ ...car, fuel_type: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Seating Capacity</label>
            <input
              type="number"
              placeholder="e.g 5"
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.seating_capacity}
              onChange={e => setCar({ ...car, seating_capacity: parseInt(e.target.value) })}
            />
          </div>
          <div className='flex flex-col w-full'>
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g Mumbai, Delhi..."
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.location}
              onChange={e => setCar({ ...car, location: e.target.value })}
            />
          </div>
          <div className='flex flex-col w-full md:col-span-2'>
            <label>Description</label>
            <textarea
              placeholder="Describe your car..."
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.description}
              onChange={e => setCar({ ...car, description: e.target.value })}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className='px-4 py-2 bg-primary text-white rounded-md mt-4 w-max'
        >
         {isLoading ? 'Listing.. ' : ' List Your Car ✌️'}
        </button>
      </form>
    </div>
  )
}

export default AddCar
