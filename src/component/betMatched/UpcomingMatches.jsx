import React from 'react'
import { upcomingMatches } from '../../data/upcomingMatch'
import { useNavigate } from 'react-router-dom'

function UpcomingMatches() {
    const navigate = useNavigate();

  return (
    <div className='grid grid-cols-3 gap-2 my-2 '>
       {upcomingMatches?.map((item)=>{
        return (
            <div className='bg-slate-600  rounded-md p-1' 
            onClick={()=>{
                navigate(`/contest/${item?.id}`)
            }}
            >
                    <small className='text-[9px] px-2 text-slate-300'>{item?.venue}</small>
                <div  className='  flex justify-between items-center gap-2 '>
                    <div className='p-1'>
                {item?.teams?.map((item)=>(
                   <div className='flex items-center my-2 gap-2'>
                    <img
                    src={item?.flag}
                    className='h-8 w-8 rounded-full object-cover'
                    /> 
                    <small className='text-slate-300 font-bold'>{item?.name}</small>
                     </div>
                ))}
                </div>
                <small  className='text-slate-300 font-bold '>{item?.date}</small>
                </div>
            </div>
        )
       })} <div>

        </div>
    </div>
  )
}

export default UpcomingMatches