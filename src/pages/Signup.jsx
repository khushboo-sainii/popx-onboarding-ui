import React from 'react';
import Form from '../components/Form';

const Signup = () => {
  return (
    <div className='flex flex-col max-w-[400px] h-screen justify-start mx-auto items-start bg-white mt-[2px] border-0 lg:border-2 '>
    <h2 className='text-[28px] font-semibold pl-4 pt-4 pb-3 text-[#1D2226] leading-8'>Create your<br /> PopX account</h2>
      <Form />
    </div>
  );
};

export default Signup;
