import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [formData , setFormData] = useState({
        fullName:"",
        phone:"",
        email:"",
        password:"",
        company:"",
        isAgency:"",
    });

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Form data values:");
        console.log(formData);
        navigate('/profile');
    };

    const changeHandler = (event) => {
        const {name,value} = event.target;
        setFormData( (prev) => ({...prev, [name]: value }));
    };
    
  return (
    <div className=' pl-4 pr-3 mb-1 w-[400px] relative h-[calc(100vh-62px)]'>
        <form onSubmit={submitHandler} id='signup-form' className='flex flex-col justify-between space-y-2 pb-4 w-[370px]'>
            
            <div>
                {/* Full Name */}
                <fieldset className='border border-[#CBCBCB] rounded-md pl-2 items-center pb-2 flex  '>
                    <legend className='text-[13px] text-[#6C25FF] font-semibold '>Full Name<span className='text-red-500 text-lg'>*</span></legend>
                    <input
                        name='fullName'
                        type='text'
                        value={formData.fullName}
                        onChange={changeHandler}
                        placeholder='Marry Doe'
                        required 
                        className='pl-1 text-[12px] w-full border-none outline-none focus:outline-none focus:ring-0'
                    />
                </fieldset>

                {/* Phone no. */}
                <fieldset className='border border-[#CBCBCB] rounded-md pl-2 items-center pb-2 flex'>
                    <legend className='text-[13px] text-[#6C25FF] font-semibold'>Phone number<span className='text-red-500 text-lg'>*</span></legend>
                    <input
                        name='phone'
                        type='phone'
                        value={formData.phone}
                        onChange={changeHandler}
                        placeholder='1234567890'
                        required
                        className='pl-1 w-full text-[12px] border-none outline-none focus:outline-none focus:ring-0'
                    />
                </fieldset>
            
                {/* Email */}
                <fieldset className='border border-[#CBCBCB] rounded-md pl-2 items-center pb-2 flex'>
                    <legend className='text-[13px] text-[#6C25FF] font-semibold'>Email address<span className='text-red-500 text-lg'>*</span></legend>
                    <input
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='myself@example.com'
                        required
                        className='pl-1 w-full text-[12px] border-none outline-none focus:outline-none focus:ring-0'
                    />
                </fieldset>    
            
                {/* Password */}
                <fieldset className='border border-[#CBCBCB] rounded-md pl-2 items-center pb-2 flex'>
                    <legend className='text-[13px] text-[#6C25FF] font-semibold'>Password<span className='text-red-500 text-lg'>*</span></legend>
                    <input
                        name='password'
                        type='password'
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Marry Doe'
                        required
                        className='pl-1 pr-1 w-full text-[12px] border-none outline-none focus:outline-none focus:ring-0' 
                    />
                </fieldset>

                {/* Company Name  */}
                <fieldset className='border border-[#CBCBCB] rounded-md pl-2 items-center pb-2 flex'>
                    <legend className='text-[13px] text-[#6C25FF] font-semibold'>Company name<span className='text-red-500 text-lg'>*</span></legend>
                    <input
                     type='text'
                        name='company'
                        value={formData.company}
                        onChange={changeHandler}
                        placeholder='Your Company'
                        className='pl-1 w-full text-[12px] border-none outline-none focus:outline-none focus:ring-0'
                    />
                </fieldset>    

                {/* Is Agency? */}
                <div>
                    <label htmlFor='isAgency' className='text-[13px]'>Are you an Agency?<span className='text-red-500 text-lg'>*</span></label>
                    <br/>
                    <div className='flex gap-2 items-center text-center'>
                        <input 
                            type='radio'
                            name='isAgency'
                            value='yes'
                            checked={formData.isAgency === "yes"} 
                            onChange={changeHandler}
                            className=' bg-white h-4 w-4 rounded-full border cursor-pointer border-[#CBCBCB] accent-[#6C25FF]'
                        />
                        <label className='text-[13px]'>Yes</label>
                    
                        <input 
                            type='radio'
                            name='isAgency'
                            value='no'
                            checked={formData.isAgency === "no"}
                            onChange={changeHandler}
                            className='bg-white h-4 w-4 rounded-full border cursor-pointer border-[#CBCBCB] accent-[#6C25FF]'
                            />
                            <label className='text-[13px]'>No</label>
                    </div>    
                </div>
            </div>
            <button  type='submit'
                className='w-[370px] py-3 bg-[#6C25FF] text-white  absolute bottom-4 rounded-md hover:bg-[#7748ea] transition duration-200'
            >Create Account</button>
        </form>
    </div>
  );
};

export default Form;
