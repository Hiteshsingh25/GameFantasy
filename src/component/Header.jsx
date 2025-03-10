import React from 'react'
import logo from '../assets/Screenshot_2025-02-04_170624-removebg-preview.png'
import avatar from '../assets/avatar.png'
import { CiWallet } from 'react-icons/ci';

function Header() {
    return (
        <div className='bg-slate-900 flex justify-between items-center  px-12'>
            <div>
                <img
                    src={logo}
                    className='h-16 w-16 object-cover'
                />
            </div>
            <div className='flex justify-around items-center gap-5'>
            <div className='flex items-center gap-3 text-yellow-500 font-bold'>
                    <CiWallet size={20} className='text-yellow-500'/>
                    5000
                </div>
                <div className='text-white font-bold'>
                    Hitesh  Singh
                </div>
                <img
                    src={avatar}
                    className='h-8 w-8 '
                />
            </div>
        </div>
    )
}

export default Header
