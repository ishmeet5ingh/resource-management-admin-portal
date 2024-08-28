import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/images/logo.png';
import admin from '/images/admin.png';

function Header() {
  const location = useLocation();
  const isAddResourceItemPage = location.pathname === '/add-resource-item';

  return (
    <div className='h-[72px] px-12 flex items-center justify-between border-b border-[#D7DFE9]'>
      <img className='w-[82px] h-[40px]' src={logo} alt="Logo" />
      <div className='flex gap-4'>
        {!isAddResourceItemPage && (
          <Link to={"/add-resource-item"} className='py-2 px-5 text-white bg-[#2DCA73] rounded-md'>
            ADD ITEM
          </Link>
        )}
        <img src={admin} alt="Admin" />
      </div>
    </div>
  );
}

export default Header;
