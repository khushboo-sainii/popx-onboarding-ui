import React from 'react'
import { FaCamera } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className='bg-[#F7F8F9] flex-col justify-between flex h-[calc(100vh-53px)] px-3 pt-3'>
      <div className='flex flex-col justify-start'>

        {/* image-div */}
        <div className='flex flex-row justify-start'>
            <div className='relative w-[76px] h-[76px]'>
               <img src='/Ellipse 114.jpg' alt='profile-pic'
                  className='aspect-square rounded-full object-cover'
                />
               <div className='absolute bottom-0 right-0 p-[4px] rounded-full cursor-pointer bg-[#6C25FF]'>
                  <FaCamera className='text-white'/>
               </div>
            </div>

          <div className='flex flex-col pl-4'>
            <p className='text-[#1D2226] text-[15px] font-medium'>Marry Doe</p>
            <p className='text-[#1D2226] text-[13px] font-normal'>Marry@Gmail.Com</p>
          </div>
        </div>

        <p className='text-[#1D2226] text-[14px] pt-5 capitalize leading-4 opacity-[60%]'>Lorem Ipsum Dolor Sit Amet, Consectetur Sadipiscing Elit,
          Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. 
        </p>

        {/* Dashed Line 1 */}
       <div className='w-full h-[1px] mt-3 border-2 border-dashed border-[#CBCBCB]'></div>
      </div>

        {/* Dashed Line 2 */}
      <div className='w-full h-[1px]  border-2  border-dashed mb-8 border-[#CBCBCB]'></div>
    </div>
  );
};

export default ProfileCard
