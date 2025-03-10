import React from 'react'
import DefaultView from '../layout/DefaultView'
import { Swiper,SwiperSlide } from 'swiper/react'
import img1 from '../assets/img1.jfif'
import img2 from '../assets/img2.jfif'
import img3 from '../assets/img3.jfif'
import img4 from '../assets/img4.jpg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import LiveCard from '../component/LiveCard'
import UpcomingMatches from '../component/betMatched/upcomingMatches'

function Home() {
  return (
    <DefaultView>
      <div className='bg-slate-900 text-white'>
     <img
     src={img4}
     className='h-52 w-full object-cover aspect-square rounded-sm '
     />
      </div>
      <div>
        <small className='text-yellow-500 font-bold text-[15px] px-2'>Live Score</small>
        <LiveCard/>
      </div>
      <div> 
        <small className='text-yellow-500 font-bold text-[15px] px-2'>Upcoming Score<span className='text-[11px] mx-2'>( Join contest to win more )</span></small>
        <UpcomingMatches/>
      </div>
    </DefaultView>
  )
}

export default Home
