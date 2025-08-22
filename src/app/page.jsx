import Calender from '@/helpers/sections/calander'
import ChapterMembership from '@/helpers/sections/chapterMembership'
import FATSlider from '@/helpers/sections/fatslider'
import GBMSlide from '@/helpers/sections/gbmslide'
import HelpFund from '@/helpers/sections/HelpFund'
import HomeBanner from '@/helpers/sections/homeBanner'
import NationalMembership from '@/helpers/sections/nationalMembership'
import OurVision from '@/helpers/sections/ourvision'
import Video from '@/helpers/sections/Video'
import React from 'react'

export default function Home() {
  return (
      <div>
        
        <HomeBanner title="Welcome To HTU NSBE family!" />
        <GBMSlide />
        <HelpFund />
        <OurVision />
        <Video />
        <Calender />
        <ChapterMembership />
        <NationalMembership />

        
      </div>

  )
}
