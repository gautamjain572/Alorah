import React, { useState } from 'react'

const Accordation = ( {title , answer} ) => {

    const [accOpen, setAccOpen] = useState(false)

    return (
        <div className='py-2'>
            <button onClick={() => setAccOpen(!accOpen)} className='flex justify-between w-full'>
                <span>{title}</span>
                {accOpen ? <span className='text-2xl text-[#3B5A5F]'>-</span> : <span className='text-2xl text-[#3B5A5F]'>+</span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${accOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden'>{answer}</div>
            </div>
        </div>
    )
}

export default Accordation