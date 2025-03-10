import React from 'react'
import logo from '../../assets/Screenshot_2025-02-04_170624-removebg-preview.png'

function Login() {
    return (
        <div>
            <div className='bg-gradient-to-t from-slate-900 to-slate-700 h-lvh  pt-[5%]'>
                <div className='bg-slate-900 rounded-sm shadow  w-[30%] m-auto p-5'>
                    <div className='p-1'>
                        <img src={logo}/>
                    </div>
                    <div className='p-2 flex flex-col justify-center items-center'>
                        <div className='w-[90%] my-2'>
                            <input
                            className='bg-slate-800 text-white w-full p-3 border border-slate-600 rounded-sm'
                            placeholder='Email'
                            />
                        </div>
                        <div className='w-[90%] my-4'>
                            <input
                            className='bg-slate-800 border text-white p-3 w-full border-slate-600 rounded-sm'
                            placeholder='Password'
                            />
                        </div>
                        <div className='items-center w-full flex flex-row justify-center'>
                            <button className='w-[50%] text-white p-3 bg-gradient-to-t from-yellow-700 to-yellow-500 rounded-md'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
