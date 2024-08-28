import React from 'react'
import { NavLink, Navigate, Routes, Route } from 'react-router-dom'

function Group32() {
    const tabs = [
        {
            id: 1,
            tab: "Resources",
            route: "resources"
        },
        {
            id: 2,
            tab: "Requests",
            route: "requests"
        },
        {
            id: 3,
            tab: "Users",
            route: "users"
        },
    ]
  
    return (
      <div>

        <div className='h-[82px] flex justify-center items-end'>
            <div className='h-10 border md:w-[600px] sm:w-[400px] w-80 border-[#D7DFE9] flex rounded-[4px]'>
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.id}
                        to={tab.route}
                        className={({ isActive }) =>
                            `w-[200px] flex justify-center items-center border-r border-[#D7DFE9] ${isActive ? "bg-[#0B69FF] text-white" : "bg-[#D7DFE93D]"} ${tab.id === 1 && "rounded-l-[4px]"} ${tab.id === 3 && "rounded-r-[4px]"}`
                        }
                    >
                        <p>{tab.tab}</p>
                    </NavLink>
                ))}
            </div>
        </div>
      </div>
    )
}

export default Group32
