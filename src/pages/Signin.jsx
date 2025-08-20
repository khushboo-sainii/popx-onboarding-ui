import React from 'react';
import SigninForm from '../components/SigninForm';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col max-w-[400px] min-h-[99vh] mx-auto overflow-hidden my-1 pt-4 px-4 justify-start items-start bg-white border-0 lg:border-2 '>
      <h2 className='text-[#1D2226] text-[28px] font-semibold leading-8 w-[60%] '>Sign in to your PopX account</h2>
      <p className='text-[#1D2226] font-normal opacity-[60%] leading-6 py-2 w-[70%]'>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
      <SigninForm />
      <button
            onClick={() => navigate('/profile')}
            className='w-[370px] py-3 bg-[#CBCBCB] text-white rounded-md hover:bg-[#6C25FF] transition-all duration-200'>Login</button>
    </div>
  );
};

export default Signin;
