import React from 'react'
import createItemImage from '/images/createItemImage.png'
import {ItemDetails} from '../components'



function AddResourceItem() {
  return (
    <div className=' w-full flex h-[120vh]'>
        <ItemDetails/>
    <div className='w-1/2 border'>
        <img src={createItemImage} className='w-full h-full' alt="" />
    </div>
    </div>

  )
}

export default AddResourceItem