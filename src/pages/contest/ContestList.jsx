import React from 'react'
import DefaultView from '../../layout/DefaultView'
import img4 from '../../assets/img4.jpg'
import { contests } from '../../data/contest'
import CreateTeamModal from '../../component/Modals/CreateTeamModal.jsx'

function ContestList() {
    return (
        <DefaultView>
            <div className='bg-slate-900 text-white'>
                <img
                    src={img4}
                    className='h-52 w-full object-cover aspect-square rounded-sm '
                />
            </div>
            <div>
                <span className='text-yellow-500 font-bold'>
                    Contest <span className='text-[10px]'>( Join the contest )</span>
                </span>
                <div className='grid grid-cols-2 gap-2'>
                    {contests?.map((item) => (
                        <div className='flex px-3 items-center justify-between gap-3 bg-slate-600 p-1 rounded-md' 
                        key={item?.contest_name}
                        // onClick={}
                        >
                            <img
                                src={item?.image}
                            />
                            <div className='w-64'>
                                <div className='text-[13px] text-slate-300 font-bold'>
                                    {item?.contest_name}
                                </div>
                                <div className='text-[13px] text-yellow-500 font-bold'>
                                    {item?.members_participated} joined
                                </div>
                            </div>
                            <div className='w-full flex justify-end'>
                            <div className='bg-slate-800 rounded-full text-sm font-bold text-yellow-500 w-16 text-center'>
                                {item?.join_amount}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mx-auto w-full'>
            <CreateTeamModal />
                </div>
            </div>
        </DefaultView>
    )
}

export default ContestList