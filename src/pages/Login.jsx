import React from 'react';
import { useForm } from 'react-hook-form';
import {Input} from '../components'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const navigate = useNavigate()
  const submit = async (data) => {
    navigate("/resources")
  };

  return (
      <div className='flex justify-center'>
        <div className='my-7'>
          <h1 className='text-center text-3xl mb-6 text-[#171F46]'>Login</h1>
          <form onSubmit={handleSubmit(submit)}  className='flex flex-col gap-4'>
            <div>
            <Input
              label="Mobile No."
              textColor="text-[#171F46]"
              type="tel"
              {...register("mobileNo", {
                required: "Mobile No. is required",
                pattern: {
                  value: /^[0-9]{10}$/, // Adjust pattern for phone number validation
                  message: "Enter a valid 10-digit mobile number",
                }
              })}
            />
              {errors.mobileNo && <span className="text-red-700">* {errors.mobileNo.message}</span>}
            </div>

            <div>
            <Input
              label="Password"
              textColor="text-[#171F46]"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                }
              })}
            />
              {errors.password && <span className="text-red-700">* {errors.password.message}</span>}
            </div>

            <div className='flex justify-center'>
              <button type="submit" className="mt-4 w-fit px-5 py-2 bg-[#0B69FF] text-white rounded">Login</button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Login;
