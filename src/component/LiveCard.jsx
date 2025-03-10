import { LiveMatches } from '../data/LiveMatch'

const LiveCard = () => {
    return (
        <div className='grid grid-cols-3 gap-2 p-1'>
            {LiveMatches?.map((item) => {
                return (
                    <div className='bg-slate-600 px-2 pb-2 rounded-md' key={item?._id}>
                        <div className='flex justify-between my-2'>
                            <small className='text-[9px] mt-0 text-slate-300 '>{item?.matchDetails?.format} {item?.matchDetails?.matchType}</small><small className='text-[9px] mt-0 text-slate-300'>{item?.matchDetails?.date}</small>
                        </div>
                        <div className=''>
                            <div className='flex items-center '>
                                <img
                                    src={item?.teams?.team1?.flag}
                                    className='h-8 w-8 rounded-full object-cover'
                                />
                                <small className='w-42 text-center text-slate-300 font-bold'>
                                    {item?.teams?.team1?.name}
                                </small>
                                <small className='w-full text-end font-bold text-slate-300'>
                                    {' '}{item?.teams?.team1?.score?.runs} - {item?.teams?.team1?.score?.wickets}
                                </small>
                            </div>
                            <div className='flex items-center '>
                                <img
                                    src={item?.teams?.team2?.flag}
                                    className='h-8 w-8 rounded-full object-cover'
                                />
                                 <small className='w-42 font-bold text-slate-300 text-center'>
                                    {item?.teams?.team2?.name}
                                </small>
                                <small className='w-full text-end font-bold text-slate-300'>
                                    {' '}{item?.teams?.team2?.score?.runs} - {item?.teams?.team2?.score?.wickets}
                                </small>
                            </div>
                        </div>
                       <div className='text-[12px] text-yellow-500 font-bold text-center'>
                        {item?.result}
                        </div>
                    </div>
                )
            })}
            <div>

            </div>
        </div>
    )
}

export default LiveCard