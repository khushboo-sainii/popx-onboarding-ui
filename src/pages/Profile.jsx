import React from 'react';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  return (
    <div className='flex flex-col gap-2 max-w-[400px] min-h-[100vh] mt-[1px] mx-auto justify-start items-start bg-white border-0 lg:border-2 '>
      <h2 className='text-[#1D2226] text-[28px] pl-3'>Account Settings</h2>
      <ProfileCard />
    </div>
  );
};

export default Profile;
