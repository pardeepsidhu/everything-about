"use client"
import React, { useState } from 'react'
import  Second from './Second'
// import  WorldMapDemo  from "./WorldMap"
import TopSection from './First'
import StoryBehindUs from "./StoryBehindUs"
import OurPhilosophy from './OurValues'

export default function Page() {
  const [theme,setTheme]=useState("light")

  return (
    <div>
      <TopSection theme={theme} />
        <Second theme={theme}/>
        <StoryBehindUs theme={theme}/>
        <OurPhilosophy theme={theme}/>
        {/* <WorldMapDemo /> */}
    </div>

  )
}
