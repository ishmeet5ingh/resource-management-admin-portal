import React, {useId} from 'react'

const Input = React.forwardRef(({
    type="text",
    label,
    textColor,
    ...props
}, ref)=> {
    const id = useId()

    return (
        <div className='flex flex-col gap-2'>
            <label
            htmlFor={id}
            className='text-[#7E858E] text-sm'>
            {label}
            </label>
            <input 
            type={type}
            className={`w-80 h-10 px-3 focus:outline-none border border-[#D7DFE9] rounded-sm ${textColor}`}
            ref={ref}
            id={id}
            {...props}
             />
        </div>
      )
})

export default Input