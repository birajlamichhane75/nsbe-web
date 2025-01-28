import NavBar from '@/helpers/components/NavBar/Navbar'
import Calender from '@/helpers/sections/calander'
import FATSlider from '@/helpers/sections/fatslider'
import GBMSlide from '@/helpers/sections/gbmslide'
import HelpFund from '@/helpers/sections/HelpFund'
import HomeBanner from '@/helpers/sections/homeBanner'
import Video from '@/helpers/sections/Video'
import React from 'react'

export default function Home() {
  return (
      <div>
        <NavBar />
        <HomeBanner title="Welcome To HTU NSBE family!" />
        <HelpFund />
        <Video />
        <Calender />
        <GBMSlide />
        <FATSlider />
      </div>

  )
}
