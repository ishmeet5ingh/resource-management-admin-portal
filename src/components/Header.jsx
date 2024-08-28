import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/images/logo.png';
import admin from '/images/admin.png';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isAddResourceItemPage = location.pathname === '/add-resource-item';
  const isAddLoginPage = location.pathname === '/login';

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='h-[72px] px-12 flex items-center justify-between border-b border-[#D7DFE9]'>
      <img className='w-[82px] h-[40px]' src={logo} alt="Logo" />
      <div className='flex gap-4 relative'>
        {!isAddResourceItemPage && (
          <Link to={"/add-resource-item"} className={`py-2 px-5 text-white bg-[#2DCA73] rounded-md ${isAddLoginPage ? "hidden" : "block"}`}>
            ADD ITEM
          </Link>
        )}
        <div className='relative'>
          <img 
            src={admin} 
            alt="Admin" 
            className='cursor-pointer' 
            onClick={handleDropdownToggle} 
          />
          {(isDropdownOpen && !isAddLoginPage) && (
            <div className='absolute top-full right-0 mt-2 w-48 bg-white border border-[#D7DFE9] rounded shadow-lg'>
              <Link 
                to="/login" 
                className='block px-4 py-2 text-[#0B69FF] hover:bg-[#F0F4F8] rounded'
                onClick={() => setIsDropdownOpen(false)}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
