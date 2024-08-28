import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input'
import { itemDetailsValidation } from '../validation/validation';
import axios from 'axios'
import { toast } from 'react-toastify';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ItemDetails() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const submit = async (data) => {
      const id = Math.random().toString(36).substring(2, 9);
      const requestData = { ...data, id };
    
    try {
        const response = await axios.post('https://cors-anywhere.herokuapp.com/https://media-content.ccbp.in/website/react-assignment/add_resource.json', requestData, {
            headers: {
              'Content-Type': 'application/json',
            },
        });

        console.log('Resource added successfully:', response.data);
        toast.success("Item added")
      } catch (error) {
        console.error('Failed to add resource:', error.response ? error.response.data : error.message);
        toast.error(`Failed to add resource: ${error.response ? error.response.data : error.message}`);
        
        
      }
    console.log("reqestData", requestData); // Process the submitted data her
  };

  return (
    <div className='w-1/2 '>
    <Link to={"/users"} className='ml-7 mt-2 flex items-center gap-1 text-[#7E858E
]'> <FaChevronLeft/> Users</Link>
    <div className='flex justify-center '>
      <div className='my-7'>
        <h1 className='text-center text-3xl mb-6 text-[#171F46]'>Item Details</h1>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4'>
          <div>
          <Input
            label="ITEM TITLE"
            textColor="text-[#171F46]"
            {...register("title", itemDetailsValidation.title)}
          />
          {errors.title && <span className="text-red-700">* {errors.title.message}</span>}
          </div>
          
          <div>
          <Input
            label="LINK"
            textColor="text-[#0B69FF]"
            {...register("link", itemDetailsValidation.link)}
          />
          {errors.link && <span className="text-red-700">* {errors.link.message}</span>}
          </div>
          
          <div>
          <Input
            label="ICON URL"
            textColor="text-[#0B69FF]"
            {...register("icon_url", itemDetailsValidation.icon_url)}
          />
          {errors.icon_url && <span className="text-red-700">* {errors.icon_url.message}</span>}
          </div>
          
          <div className='flex flex-col gap-2'>
            <label className='text-[#7E858E] text-sm' htmlFor="exampleSelect">TAG NAME</label>
            <select 
              name="tag" 
              id="exampleSelect"
              className='w-80 h-10 px-1 border border-[#D7DFE9] focus:outline-none rounded-sm text-[#171F46]'
              {...register("tag", itemDetailsValidation.tag)}>
              <option value="">Select a tag</option>
              <option value="request">Request</option>
              <option value="user">User</option>
            </select>
            {errors.tag && <span className="text-red-700">* {errors.tag.message}</span>}
          </div>
          
         <div>
         <Input
            label="CATEGORY"
            textColor="text-[#171F46]"
            {...register("category", itemDetailsValidation.category)}
          />
          {errors.category && <span className="text-red-700">* {errors.category.message}</span>}
         </div>
          
         <div>
         <Input
            label="DESCRIPTION"
            textColor="text-[#171F46]"
            {...register("description", itemDetailsValidation.description)}
          />
          {errors.description && <span className="text-red-700">* {errors.description.message}</span>}
         </div>
          
          <div className='flex justify-center'>
            <button type="submit" className="mt-4 w-fit px-5 py-2 bg-[#0B69FF] text-white rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ItemDetails;
