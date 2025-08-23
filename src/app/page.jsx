
import ChapterMembership from '@/helpers/sections/chapterMembership'
import FATSlider from '@/helpers/sections/fatslider'
import GBMSlide from '@/helpers/sections/gbmslide'
import HelpFund from '@/helpers/sections/HelpFund'
import HomeBanner from '@/helpers/sections/homeBanner'
import NationalMembership from '@/helpers/sections/nationalMembership'
import Calendar from '@/helpers/sections/nsbecalender'
import OurVision from '@/helpers/sections/ourvision'
import Video from '@/helpers/sections/Video'
import React from 'react'

export default function Home() {
  return (
      <div>
        
        <HomeBanner title="Welcome To HTU NSBE family!" />
        <GBMSlide />
        <OurVision />
        <HelpFund />
        {/* <Video /> */}
        {/* <Calender /> */}
        <Calendar />
        <ChapterMembership />
        <NationalMembership />

        
      </div>

  )
}
