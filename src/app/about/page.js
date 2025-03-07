"use client"
import React, { useState } from 'react'
import  Second from './Second'
// import  WorldMapDemo  from "./WorldMap"
import TopSection from './First'
import StoryBehindUs from "./StoryBehindUs"
import OurValues from './OurValues'
import HowWeThrive from './HowWeThrive'
import JoinMission from './JoinMission'
import OurJourney from './OurJourney'
import { useTheme } from '@/context/theme-context'
import Footer from './Footer'

export default function Page() {
  // const [theme,setTheme]=useState("dark")
  let {theme,setTheme}=useTheme()
console.log("this is theme"+theme)
  return (
    <div>
      <TopSection theme={theme} />
        <Second theme={theme}/>
        <StoryBehindUs theme={theme}/>
        <OurValues theme={theme}/>
        <HowWeThrive  theme={theme}/>
         <OurJourney theme={theme}/>
        <JoinMission theme={theme} />
       <Footer theme={theme}/>
    </div>

  )
}
