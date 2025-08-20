import React from 'react'

const SigninForm = () => {
  return (
    <div className='flex flex-col justify-start w-[400px] '>
      <form className='w-[370px] pb-4'>

            {/* Email */}
            <fieldset className='border border-[#CBCBCB] rounded-md pl-2 mb-2 items-center pb-2 flex'>
                <legend className='text-[13px] text-[#6C25FF] font-semibold'>Email address</legend>
                <input
                    name='email'
                    type='email'
                    placeholder='Enter email address'
                    required
                    className='pl-1 w-full text-[12px] border-none outline-none focus:outline-none focus:ring-0'
                />
            </fieldset>    
            
            {/* Password */}
            <fieldset className='border border-[#CBCBCB] rounded-md pl-2 items-center pb-2 flex'>
                <legend className='text-[13px] text-[#6C25FF]  font-semibold '>Password</legend>
                <input
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    required 
                    className='pl-1 pr-1 w-full text-[12px] border-none outline-none focus:outline-none focus:ring-0'
                />
            </fieldset>
      </form>   
    </div>
  );
};

export default SigninForm
