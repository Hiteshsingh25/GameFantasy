import React from 'react'

function DefaultView({children}) {
  return (
    <div className='bg-gradient-to-t from-slate-900 p-1 to-slate-700 h-lvh'>
        <div className='items-center w-[80%] mx-auto max-w-[1152]'>
       {children}
        </div>
    </div>
  )
}

export default DefaultView
