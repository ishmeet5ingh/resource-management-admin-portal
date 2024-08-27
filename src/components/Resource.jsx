import React from 'react'
import { useSelector } from 'react-redux'

function Resource({key, dataItem}) {
    let loading = useSelector((state) => state.loader.loading)
    console.log(loading)

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
        <div className='text-[13px]'>
            <p className='text-[#0B69FF] mb-3'>{dataItem.link}</p>
            <p className='text-[#7E858E]'>{dataItem.description}</p>
        </div>
    </div>
        ) : <div className='h-[170px] border border-[#D7DFE9] bg-gray-400 '>

        </div> }
    </>
  )
}

export default Resource