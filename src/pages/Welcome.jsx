import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col max-w-[400px] min-h-[99vh] mx-auto justify-end items-start bg-[#F7F8F9] p-5 mt-[2px] border-0 lg:border-2 '>
      <h2 className='text-black text-[28px] font-semibold'>
        Welcome to PopX
      </h2>
      <h3 className='text-[#1D2226] opacity-[60%] font-normal w-[60%] mb-6'>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </h3>
      <div className='flex flex-col gap-y-3 w-full'>
        <button
          onClick={() => navigate('/signup')}
          className='w-full  bg-[#6C25FF] font-medium text-[16px] border-none text-white rounded-md hover:bg-[#7748ea] text-center transition duration-200 p-2 '
        >Create Account</button>
      <button
        onClick={() => navigate('/signin')}
        className='w-full font-medium text-[#1D2226] bg-[#6C25FF4B] text-[16px] rounded-md text-center hover:bg-[#6e25ff68] transition duration-200 p-2'
      >Already Registered? Login</button>
      </div>
    </div>
  );
};

export default Welcome;
