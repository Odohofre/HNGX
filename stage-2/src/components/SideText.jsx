import React from 'react'

export default function SideText() {
  return (
    <div className=' flex flex-col items-center w-[170px] mt-10 rounded-[20px] border border-rose-700 pb-4 mx-auto px-[15px] font-poppins space-y-2 bg-[#f8e7eb66]'>
      <h3 className='mt-[42px] text-[15px] font-semibold leading-normal'>Play movie quizes and earn free tickets</h3>
      <p className='text-xs font-medium mb-1'>50k people are playing now</p>
      <button type="button" className='rounded-[30px] text-rose-700 text-xs bg-rose-700/20 py-1.5 px-4 font-medium w-28 mx-auto'>Start playing</button>
    </div>
  )
}
