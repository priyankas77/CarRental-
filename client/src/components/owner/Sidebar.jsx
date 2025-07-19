import React, { useState } from 'react';
import { assets,  ownerMenuLinks } from '../../assets/assets';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const {user,axios,fetchUser}=useAppContext();
  const location = useLocation();
  const [image, setImage] = useState('');

  const updateImage = async() => {
   try {
    const formData=new FormData()
    formData.append('image',image)
    const { data } = await axios.post
    ('/api/owner/update-image',formData)
    if(data.success){
      fetchUser()
      toast.success(data.message);
      setImage('')
    }
    else{
      toast.error(data.message)
    }
   } catch (error) {
       toast.error(error.message)
   }
  };

  return (
    <div className='min-h-screen w-full md:w-60 bg-white border-r border-borderColor flex flex-col items-center pt-8 px-4 text-sm'>
      {/* Profile Image Upload */}
      <div className='group relative'>
        <label htmlFor='image'>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  './assets.userpic.jpg'
            }
            alt='User profile'
            className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto'
          />
          <input
            type='file'
            id='image'
            accept='image/*'
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div
            className='absolute hidden top-0 left-0 right-0 bottom-0 bg-black/20 rounded-full group-hover:flex items-center justify-center cursor-pointer'
          >
            <img src={assets.edit_icon} alt='Edit icon' className='w-6 h-6' />
          </div>
        </label>
      </div>

      {image && (
        <button
          onClick={updateImage}
          className='mt-2 px-4 py-1.5 text-xs bg-primary/10 text-primary rounded shadow hover:bg-primary/20'
        >
          Save <img src={assets.check_icon} width={13} alt='Check icon' className='inline ml-1' />
        </button>
      )}

      <p className='mt-4 text-base font-medium max-md:hidden'>{user?.name}</p>

      {/* Navigation Links */}
      <div className='mt-8 w-full'>
        {ownerMenuLinks.map((link, index) => {
          const isActive = link.path === location.pathname;

          return (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-2 w-full py-3 pl-4 transition-colors duration-200 
                ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600 hover:bg-gray-100'}
              `}
            >
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt={`${link.name} icon`}
                className='w-5 h-5'
              />
              <span className='max-md:hidden'>{link.name}</span>

              {isActive && (
                <div className='bg-primary w-1.5 h-8 rounded absolute right-0'></div>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
