import React from 'react'
import logo from '/images/logo.png'
import admin from '/images/admin.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='h-[72px] px-12 flex items-center justify-between border-b border-[#D7DFE9]'>
    <img className='w-[82px] h-[40px]' src={logo} alt="" />
    <div className='flex gap-4'>
        <Link className='py-2 px-5 text-white bg-[#2DCA73] rounded-md'>
            ADD ITEM
        </Link>
        <img src={admin} alt="" />
    </div>
    </div>
  )
}

export default Header