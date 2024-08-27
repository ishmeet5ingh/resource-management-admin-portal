import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Resource({key, dataItem}) {
    let loading = useSelector((state) => state.loader.loading)

    let dataItemLink = dataItem.link.slice(0, 5)  === "https" ? "www." + dataItem.link.slice(8, dataItem.link.length) : "www."+dataItem.link.slice(7, dataItem.link.length)
  return (

    <>
        {!loading ? (
            <div key={key} className='bg-white h-[170px] border border-[#D7DFE9] p-6'>
        <div className='flex gap-4 mb-3'>
            <div className='w-[44px] h-[44px] border border-[#D7DFE9] flex justify-center items-center rounded-[4px]'>
            <img className='w-[24px] h-[24px]' src={dataItem.icon_url} alt="" />
            </div>
            <div>
                <p className='text-sm text-[#171F46]'>{dataItem.title}</p>
                <p className='text-[12px] text-[#7E858E]'>{dataItem.category}</p>
            </div>
        </div>
        <div className='text-[13px] flex flex-col gap-3'>
            <Link to={dataItem.link} className='text-[#0B69FF] '>{dataItemLink}</Link>
            <p className='text-[#7E858E]'>{dataItem.description}</p>
        </div>
    </div>
        ) : <div className='h-[170px] border border-[#D7DFE9] bg-gray-400 '>
        </div> }
    </>
  )
}

export default Resource